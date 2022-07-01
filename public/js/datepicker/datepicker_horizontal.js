const date = new Date();
const today = new Date();

buildCalender();

function buildCalender() {
  const year = date.getFullYear();
  const month = date.getMonth();

  const todayMidnight = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    0,
    0,
    0
  );
  const numbersOfCurrentMonthDates = new Date(year, month + 1, 0).getDate();

  let dates = "";
  for (let i = 1; i <= numbersOfCurrentMonthDates; i++) {
    if (todayMidnight > new Date(year, month, i)) {
      dates += `<div class="exdate">${i}</div>`;
    } else if (new Date(year, month, i).getDay() == 0) {
      dates += `<div class="dateSun">${i}</div>`;
    } else if (new Date(year, month, i).getDay() == 6) {
      dates += `<div class="dateSat">${i}</div>`;
    } else {
      dates += `<div class="date">${i}</div>`;
    }
  }

  const prevBtn = document.getElementById("prevBtn");
  if (today >= date) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  document.querySelector(".dates").innerHTML = dates;
  document.querySelector(".selectedYear").innerHTML = `${year}년`;
  document.querySelector(".selectedMonth").innerHTML = `${month + 1}월`;

  const dateHtmls = document.querySelectorAll(".dates > div");
  for (let i = 0; i < dateHtmls.length; i++) {
    dateHtmls[i].addEventListener("click", (e) => datesSelected(e));
  }

  function datesSelected(e) {
    const convertedDate =
      year + "." + (month + 1) + "." + e.target.innerText.split("\n")[0];
    if (selectedDates.includes(convertedDate)) {
      selectedDates = selectedDates.filter((item) => {
        return item !== convertedDate;
      });
    } else {
      if (selectedDates.length >= 2) {
        clearSelectedDates();
        clearSelectedDatesColor(dateHtmls);
      }
      selectedDates.push(convertedDate);
      e.target.classList.add("dateClicked");
    }

    if (Date.parse(selectedDates[0]) > Date.parse(selectedDates[1])) {
      validateAlert();
      clearSelectedDates();
      clearSelectedDatesColor(dateHtmls);
    }

    writeSelectedDates();
    writeSumOfParkingFee();
    colorDates();
  }
}

function prevMonth() {
  date.setMonth(date.getMonth() - 1);
  buildCalender();
}

function nextMonth() {
  date.setMonth(date.getMonth() + 1);
  buildCalender();
}

function clearSelectedDates() {
  selectedDates = [];
}

function clearSelectedDatesColor(dateHtmls) {
  for (let i = 0; i < dateHtmls.length; i++) {
    dateHtmls[i].classList.remove("dateClicked");
  }
}

function colorDates() {
  const dateHtmls = document.querySelectorAll(".dates > div");
  const currentYear = document
    .querySelector(".selectedYear")
    .innerText.replace("년", "");
  const currentMonth = document
    .querySelector(".selectedMonth")
    .innerText.replace("월", "");

  const startYear = new Date(selectedDates[0]).getFullYear();
  const startMonth = new Date(selectedDates[0]).getMonth();
  const startDate = new Date(selectedDates[0]).getDate();
  const endYear = new Date(selectedDates[1]).getFullYear();
  const endMonth = new Date(selectedDates[1]).getMonth();
  const endDate = new Date(selectedDates[1]).getDate();

  if (
    Date(currentYear, currentMonth) === Date(startYear, startMonth) &&
    Date(currentYear, currentMonth) === Date(endYear, endMonth)
  ) {
    for (let i = 0; i < dateHtmls.length; i++) {
      if (i >= startDate && i <= endDate) {
        dateHtmls[i - 1].classList.add("dateClicked");
      }
    }
  } else if (Date(currentYear, currentMonth) < Date(endYear, endMonth)) {
    for (let i = 0; i < dateHtmls.length; i++) {
      if (i >= startDate) {
        dateHtmls[i - 1].classList.add("dateClicked");
      }
    }
  }
}
