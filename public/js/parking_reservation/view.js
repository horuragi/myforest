/**
 * View에서 자주 사용되는 엘리먼트 참조 변수 선언
 */
const selectedStartDateHTML = document.getElementById("selectedStartDate");
const selectedEndDateHTML = document.getElementById("selectedEndDate");

/**
 * View 초기화
 */
function init() {
  //Controller로 부터 초기데이터를 받아와 예약 정보 및 예약자 정보 초기화
  controller.getInitData(({ areaName, startDate, endDate, parkingFee }) => {
    renderSelectedReservationInfo({
      areaName,
      startDate,
      endDate,
      parkingFee,
    });
  });

  renderDayLength();
}

/**
 * '/parking' 에서 선택한 주차구역, 기간, 금액을 랜더링하는 함수
 * @param {{areaName : string, startDate: string, endDate: string, parkingFee: string}}
 */
function renderSelectedReservationInfo({
  areaName,
  startDate,
  endDate,
  parkingFee,
}) {
  const selectedAreaHTML = document.getElementById("selectedArea");
  const parkingFeeHTML = document.getElementById("parkingFee");

  selectedAreaHTML.innerHTML = areaName;
  selectedStartDateHTML.innerHTML = startDate;
  selectedEndDateHTML.innerHTML = endDate;
  parkingFeeHTML.innerHTML = parkingFee;
}

/**
 * 선택한 날짜의 박/일 수를 랜더링 하는 함수
 */
function renderDayLength() {
  const selectedDayLengthHTML = document.getElementById("dayLength");

  selectedDayLengthHTML.innerHTML = `${getDayLength()}박 ${
    getDayLength() + 1
  }일`;
}

/**
 * 선택한 날짜의 일수(n박)를 계산하는 함수
 * @returns {number}
 */
function getDayLength() {
  const selectedStartDateText = selectedStartDateHTML.innerText;
  const selectedEndDateText = selectedEndDateHTML.innerText;

  const formattedStartDate = new Date(
    selectedStartDateText.substring(0, 4) +
      "-" +
      selectedStartDateText.substring(6, 8) +
      "-" +
      selectedStartDateText.substring(10, 12)
  );

  const formattedEndDate = new Date(
    selectedEndDateText.substring(0, 4) +
      "-" +
      selectedEndDateText.substring(6, 8) +
      "-" +
      selectedEndDateText.substring(10, 12)
  );

  const diff = formattedEndDate.getTime() - formattedStartDate.getTime();
  return Math.ceil(diff / (1000 * 3600 * 24));
}

init();
