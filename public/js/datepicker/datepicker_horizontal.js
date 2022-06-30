const date = new Date();

buildCalender();

function buildCalender() {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();

  let numbersOfCurrentMonthDates = new Date(year, month + 1, 0).getDate();

  let dates = "";
  for (let i = 1; i <= numbersOfCurrentMonthDates; i++) {
    if (new Date(year, month, i).getDay() == 0) {
      dates += `<div class="dateSun">${i}</div>`;
    } else if (new Date(year, month, i).getDay() == 6) {
      dates += `<div class="dateSat">${i}</div>`;
    } else {
      dates += `<div class="date">${i}</div>`;
    }
  }

  document.querySelector(".dates").innerHTML = dates;
  document.querySelector(".selectedYear").innerHTML = `${date.getFullYear()}년`;
  document.querySelector(".selectedMonth").innerHTML = `${
    date.getMonth() + 1
  }월`;
}

function prevMonth() {
  date.setMonth(date.getMonth() - 1);
  buildCalender();
}

function nextMonth() {
  date.setMonth(date.getMonth() + 1);
  buildCalender();
}
