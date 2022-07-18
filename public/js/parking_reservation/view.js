/**
 * View 초기화
 */
function init() {
  //Controller로 부터 초기데이터를 받아와 예약 정보 및 예약자 정보 초기화
  controller.getInitData(
    ({ areaName, startDate, endDate, parkingFee, dayLength }) => {
      renderSelectedReservationInfo({
        areaName,
        startDate,
        endDate,
        parkingFee,
        dayLength,
      });
    }
  );
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
  dayLength,
}) {
  const selectedStartDateHTML = document.getElementById("selectedStartDate");
  const selectedEndDateHTML = document.getElementById("selectedEndDate");
  const selectedAreaHTML = document.getElementById("selectedArea");
  const parkingFeeHTML = document.getElementById("parkingFee");
  const selectedDayLengthHTML = document.getElementById("dayLength");

  selectedAreaHTML.innerHTML = areaName;
  selectedStartDateHTML.innerHTML = startDate;
  selectedEndDateHTML.innerHTML = endDate;
  parkingFeeHTML.innerHTML = parkingFee;
  selectedDayLengthHTML.innerHTML = `${dayLength}박 ${dayLength + 1}일`;
}

function goToReservationButtonClick() {
  controller.getFormData(
    ({
      reservationPersonName,
      reservationPersonPhoneNum,
      reservationFormCampingCarNum,
    }) => {
      validTest({
        reservationPersonName,
        reservationPersonPhoneNum,
        reservationFormCampingCarNum,
      });
    }
  );
}

function inputPhoneNumber(obj) {
  var number = obj.value.replace(/[^0-9]/g, "");
  var phone = "";

  if (number.length < 4) {
    return number;
  } else if (number.length <= 7) {
    phone += number.substr(0, 3);
    phone += "-";
    phone += number.substr(3);
  } else {
    phone += number.substr(0, 3);
    phone += "-";
    phone += number.substr(3, 4);
    phone += "-";
    phone += number.substr(7);
  }
  obj.value = phone;
}

function validTest({
  reservationPersonName,
  reservationPersonPhoneNum,
  reservationFormCampingCarNum,
}) {
  console.log(reservationPersonName);
  console.log(reservationPersonPhoneNum);
  console.log(reservationFormCampingCarNum);
}

init();
