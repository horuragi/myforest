/**
 * model에서 자주 사용되는 변수 선언
 */
const routeTokens = location.pathname.replace(/^\/+/g, "").split("/");

/**
 * 선택된 예약 정보 관리
 */
class SelectedReservationInfoModel {
  /**
   * @constructor 선택된 예약 정보 초기화
   */

  constructor() {
    this.selectedInfo = {
      areaName: decodeURI(routeTokens[3]),
      startDate: decodeURI(routeTokens[5]),
      endDate: decodeURI(routeTokens[7]),
      parkingFee: decodeURI(routeTokens[9]),
      dayLength: this.getDayLength(),
    };
  }

  /**
   * 선택한 날짜의 일수(n박)를 계산하는 함수
   * @returns {number}
   */
  getDayLength() {
    const startDateText = decodeURI(routeTokens[5]);
    const endDateText = decodeURI(routeTokens[7]);

    const formattedStartDate = new Date(
      startDateText.substring(0, 4) +
        "-" +
        startDateText.substring(6, 8) +
        "-" +
        startDateText.substring(10, 12)
    );

    const formattedEndDate = new Date(
      endDateText.substring(0, 4) +
        "-" +
        endDateText.substring(6, 8) +
        "-" +
        endDateText.substring(10, 12)
    );
    const diff = formattedEndDate.getTime() - formattedStartDate.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }
}
/**
 * 예약자 정보 관리
 */

class ReservationPersonInfoModel {
  get reservationFormName() {
    return document.getElementById("reservationPersonName").value;
  }

  get reservationFormPhoneNum() {
    return document.getElementById("reservationPersonPhoneNum").value;
  }

  get reservationFormCampingCarNum() {
    return document.getElementById("reservationPersonCampingCarNum").value;
  }
}
/**
 * Model : 상태를 저장, 가공
 */
class Model {
  /**
   * @constructor
   * 모델 초기화
   */
  constructor() {
    this.selectedReservationInfoModel = new SelectedReservationInfoModel();
    this.reservationPersonInfoModel = new ReservationPersonInfoModel();
  }
}

const model = new Model();
