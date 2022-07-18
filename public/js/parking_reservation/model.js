/**
 * 선택된 예약 정보 관리
 */
class SelectedReservationInfoModel {
  /**
   * @constructor 선택된 예약 정보 초기화
   */

  constructor() {
    const routeTokens = location.pathname.replace(/^\/+/g, "").split("/");

    this.selectedInfo = {
      areaName: decodeURI(routeTokens[3]),
      startDate: decodeURI(routeTokens[5]),
      endDate: decodeURI(routeTokens[7]),
      parkingFee: decodeURI(routeTokens[9]),
    };
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
  }
}

const model = new Model();
