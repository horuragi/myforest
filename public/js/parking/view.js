/**
 * View : 사용자에게 보여지는 유저 인터페이스를 제어
 */

/**
 * View에서 자주 사용되는 엘리먼트 참조 변수 선언
 */
const parkingAreaSelectInnerContainer = document.getElementsByClassName("parkingAreaSelectInnerContainer")[0];
const horizontalCalenderContainer = document.getElementsByClassName("horizontalCalenderContainer")[0];

/**
 * View 초기화
 */
function init() {
    //Controller로 부터 초기데이터를 받아와서 주차 영역, 달력 영역, 선택 결과 영역을 렌더링한다.
    controller.getInitData(({ parkingAreas, year, month, dayLength}) => {
        renderParkingArea(parkingAreas);
        renderCalender({ year, month, dayLength });
        renderSelectedInfo({});
    });

    //이벤트를 등록한다.
    registerEvents();
}

/**
 * 이벤트 등록 함수: 이벤트 위임 기법 사용
 */
function registerEvents() {
    /**
     * 주차 영역에서 클릭 이벤트가 발생 시 호출
     */
    parkingAreaSelectInnerContainer.addEventListener('click', (e) => {
        const areaId = e.target.dataset.id;
        if(!areaId) return;
        
        controller.selectParkingArea(parseInt(areaId), ({ year, month, dayLength, parkingAreas, selectParkingArea, selectDate }) => {
            renderParkingArea(parkingAreas);
            renderCalender({ year, month, dayLength });
            renderSelectedInfo({ selectParkingArea, selectDate });
        });
    });

    /**
     * 달력 영역에서 클릭이벤트가 발생 시 호출
     */
    horizontalCalenderContainer.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        const classList = e.target.classList;
        if(!action || classList.contains('exdate')) return;

        switch(action){
            case "setPrevMonth":
                controller.setPrevMonth(({ year, month, dayLength, selectDate }) => {
                    renderCalender({ year, month, dayLength, 'selectedStartDate': selectDate.start, 'selectedEndDate': selectDate.end });
                });
                break;
            case "setNextMonth":
                controller.setNextMonth(({ year, month, dayLength, selectDate }) => {
                    renderCalender({ year, month, dayLength, 'selectedStartDate': selectDate.start, 'selectedEndDate': selectDate.end });
                });
                break;
            case "selectDate":
                const clickDate = new Date(e.target.dataset.date);
                if(!controller.isSelectParkingArea()){
                    alert('주차구역이 선택되지 않았습니다.');
                    return;
                }
                controller.selectDate(clickDate, ({ year, month, dayLength, selectParkingArea, selectDate, selectDateLength }) => {
                    renderCalender({ year, month, dayLength, 'selectedStartDate': selectDate.start, 'selectedEndDate': selectDate.end });
                    renderSelectedInfo({ selectParkingArea, selectDate, selectDateLength });
                });
                break;
        }
    });
}

/**
 * 주차 영역 렌더링 함수
 * @param {array} parkingAreas 주차 구역 정보 리스트
 */
function renderParkingArea(parkingAreas) {
    const pakingAreaSelectBoxs = parkingAreas.map((area) => 
    `<div class="pakingAreaSelectBox${area.selected ? ' areaClicked' : ''}" data-id="${area.id}">
        <div class="areaNameText">${area.name}</div>
        <div class="ParkingFeeText">${area.price.toLocaleString()}원</div>
    </div>`).join('');
    parkingAreaSelectInnerContainer.innerHTML = pakingAreaSelectBoxs;
}

/**
 * 달력 영역 렌더링 함수
 * @param {{ year: number, month: number, dayLength: number,
 * selectedStartDate: Date | null, selectedEndDate: Date || null}} 
 * year(연), month(월), dayLength(월의 일수), selectedStartDate(선택한 입실날짜), selectedEndDate(선택한 퇴실날짜)
 */
function renderCalender({ year, month, dayLength, selectedStartDate, selectedEndDate }) {
    const selectedYear = document.getElementsByClassName('selectedYear')[0];
    const selectedMonth = document.getElementsByClassName('selectedMonth')[0];
    const dates = document.getElementsByClassName('dates')[0];

    selectedYear.innerHTML = `${year}년`;
    selectedMonth.innerHTML = `${month + 1}월`;
    dates.innerHTML = Array.from({ length: dayLength }).map((_, i) => { 
        const day = i + 1;
        return `<div class="${_getDateClassName(year, month, day)}" data-date="${year}-${month + 1}-${day}" data-action="selectDate">${day}</div>`
    }).join('');

    /**
     * 날짜 css 클래스명 반환
     * @param{{ year: number, month: number, day: number }}
     */
    function _getDateClassName(year, month, day) {
        const classes = { 'SUN': 'dateSun','SAT': 'dateSat','EXP': 'exdate' }
        const dayOfWeek = controller.getDayOfWeek(year, month, day);
        const today = new Date(new Date().setHours(0, 0, 0, 0));
        
        let className = today > new Date(year, month, day) ? 'exdate' : 'date';
        if(className === 'date') className = classes[dayOfWeek] || 'date';

        return className + _getSelectedClassName(year, month, day);
    }

    /**
     * 선택 css 클래스명 반환
     * @param{{ year: number, month: number, day: number }}
     */
    function _getSelectedClassName(year, month, day) {
        if(!selectedStartDate && !selectedEndDate) return '';
        
        const date = new Date(year, month, day);
        if(!selectedEndDate) {
            return date.getTime() === selectedStartDate.getTime() ? ' dateClicked' : '';
        }
        return (date >= selectedStartDate && date <= selectedEndDate) ? ' dateClicked' : '';
    }
}

/**
 * 선택결과 영역 렌더링 함수
 * @param {{ 
 * selectParkingArea: { id: number, name: string, price: number, selected: boolean },
 * selectDate: { start: Date | null, end: Date | null },
 * selectDateLength: number 
 * }}
 * selectParkingArea (선택된 주차 구역), selectDate (선택된 날짜), selectDateLength (선택된 입퇴실이 몇박인지)
 */
function renderSelectedInfo({ selectParkingArea, selectDate, selectDateLength }) {
    const selectedArea = document.getElementById("selectedArea");
    const selectedStartDate = document.getElementById("selectedStartDate");
    const selectedEndDate = document.getElementById("selectedEndDate");
    const sumOfParkingFee = document.getElementById("sumOfParkingFee");
    
    selectedArea.innerHTML = selectParkingArea?.name || '-';
    selectedStartDate.innerHTML = selectDate?.start ? _dateFormat(selectDate.start) : '-';
    selectedEndDate.innerHTML = selectDate?.end ? _dateFormat(selectDate.end) : '-';
    sumOfParkingFee.innerHTML = (selectDateLength && selectParkingArea?.price) ? selectDateLength * selectParkingArea.price : '-';
    
    /**
     * 날짜 문자열 포맷팅
     * @param {Date} date 날짜
     * @returns {string}
     */
    function _dateFormat(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();
        
        month = month >= 10 ? month : '0' + month;
        day = day >= 10 ? day : '0' + day;

        return `${date.getFullYear()}년 ${month}월 ${day}일`;
    }
}

init();
