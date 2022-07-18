class Controller {
  /**
   * @constructor
   * @param {Model} model 모델
   * selectedReservationInfoModel 설정
   */
  constructor(model) {
    this.selectedReservationInfoModel = model.selectedReservationInfoModel;
    this.reservationPersonInfoModel = model.reservationPersonInfoModel;
  }

  /**
   * @public 초기화 시 필요한 데이터 얻기
   * @param {function} callback 콜백함수
   */
  getInitData(callback) {
    callback({
      areaName: this.selectedReservationInfoModel.selectedInfo.areaName,
      startDate: this.selectedReservationInfoModel.selectedInfo.startDate,
      endDate: this.selectedReservationInfoModel.selectedInfo.endDate,
      parkingFee: this.selectedReservationInfoModel.selectedInfo.parkingFee,
      dayLength: this.selectedReservationInfoModel.selectedInfo.dayLength,
    });
  }

  /**
   * @public form 에 입력된 데이터 얻기
   * @param {function} callback 콜백함수
   */
  getFormData(callback) {
    callback({
      reservationPersonName:
        this.reservationPersonInfoModel.reservationFormName,
      reservationPersonPhoneNum:
        this.reservationPersonInfoModel.reservationFormPhoneNum,
      reservationPersonCampingCarNum:
        this.reservationPersonInfoModel.reservationFormCampingCarNum,
    });
  }
}

const controller = new Controller(model);
