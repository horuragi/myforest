/**
 * Controller : 뷰와 모델을 연결해주는 역할
 */
class Controller {
  /**
   * @constructor
   * @param {Model} model 모델
   * parkingModel과 calenderModel 설정
   */
  constructor(model) {
    this.parkingModel = model.parkingModel;
    this.calenderModel = model.calenderModel;
  }

  /**
   * @public 초기화 시 필요한 데이터 얻기
   * @param {function} callback 콜백함수
   */
  getInitData(callback) {
    callback({
      parkingAreas: this.parkingModel.areas,
      year: this.calenderModel.year,
      month: this.calenderModel.month,
      dayLength: this.calenderModel.dayLength,
    });
  }

  /**
   * @public 주차 구역 선택
   * @param {number} areaId 주차 구역 Id 값
   * @param {function} callback 콜백 함수
   */
  selectParkingArea(areaId, callback) {
    this.calenderModel.clearSelectDate();
    this.parkingModel.selectArea = areaId;

    callback({
      year: this.calenderModel.year,
      month: this.calenderModel.month,
      dayLength: this.calenderModel.dayLength,
      parkingAreas: this.parkingModel.areas,
      selectParkingArea: this.parkingModel.selectArea,
      selectDate: this.calenderModel.selectDate,
    });
  }

  /**
   * @public 이전 달로 설정
   * @param {function} callback 콜백 함수
   */
  setPrevMonth(callback) {
    this.calenderModel.setPrevMonth();

    callback({
      year: this.calenderModel.year,
      month: this.calenderModel.month,
      dayLength: this.calenderModel.dayLength,
      selectDate: this.calenderModel.selectDate,
    });
  }

  /**
   * @public 다음 달로 설정
   * @param {function} callback 콜백 함수
   */
  setNextMonth(callback) {
    this.calenderModel.setNextMonth();

    callback({
      year: this.calenderModel.year,
      month: this.calenderModel.month,
      dayLength: this.calenderModel.dayLength,
      selectDate: this.calenderModel.selectDate,
    });
  }

  /**
   * @public 날짜 선택
   * @param {Date} clickDate 선택 날짜
   * @param {function} callback 콜백 함수
   */
  selectDate(clickDate, callback) {
    this.calenderModel.selectDate = clickDate;

    callback({
      year: this.calenderModel.year,
      month: this.calenderModel.month,
      dayLength: this.calenderModel.dayLength,
      selectParkingArea: this.parkingModel.selectArea,
      selectDate: this.calenderModel.selectDate,
      selectDateLength: this.calenderModel.selectDateLength,
    });
  }

  /**
   * @public 주차 구역 선택 여부
   * @returns {boolean} 선택 여부
   */
  isSelectParkingArea() {
    return this.parkingModel.selectArea !== null;
  }

  /**
   * @public 주차 예약 기간 선택 여부
   * @returns {boolean} 선택 여부
   */
  isSelectParkingDate() {
    return (
      Object.values(this.calenderModel.selectDate).filter((v) => v !== null)
        .length == 2
    );
  }

  /**
   * @public 요일 구하기
   * @param {number} year
   * @param {number} month
   * @param {number} day
   * @returns {string} 요일 (ex: SUN, MON ...)
   */
  getDayOfWeek(year, month, day) {
    return CalenderModel.getDayOfWeek(year, month, day);
  }
}

const controller = new Controller(model);
