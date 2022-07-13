/**
 * 주차 구역 상태 관리
 */
class ParkingModel {
  /**
   * @constructor
   * 주차 구역 상태 초기화
   */
  constructor() {
    this._areas = Array.from({ length: 7 }).map((_, i) => {
      return {
        id: i,
        name: `주차구역 ${String.fromCharCode("A".charCodeAt(0) + i)}`,
        price: 10000 * (i + 1),
        selected: false,
      };
    });
  }

  /**
   * @public 주차 구역 리스트 얻기
   * @returns {array} 주차 구역 리스트
   */
  get areas() {
    return this._areas.map((area) => ({ ...area }));
  }

  /**
   * @public 선택된 주차 구역 정보 얻기
   * @returns {{ id: number, name: string, price: number, selected: boolean } | null}
   */
  get selectArea() {
    const selectAreas = this._areas.filter((area) => area["selected"] === true);
    return selectAreas.length > 0 ? selectAreas[0] : null;
  }

  /**
   * @public 주차 구역 선택
   * @params {number} id 주차 구역 id
   */
  set selectArea(id) {
    this._areas = this._areas.map((area) => {
      if (area["id"] === id) return { ...area, selected: true };
      return { ...area, selected: false };
    });
  }
}

/**
 * 달력 상태 관리
 */
class CalenderModel {
  /**
   * @constructor 달력 상태 초기화
   * @param {Date} date
   */
  constructor(date) {
    this._date = date;
    this._selectDate = {
      start: null,
      end: null,
    };
  }

  /**
   * @public 포커싱된 날짜의 연도 얻기
   * @returns {number} 연도
   */
  get year() {
    return this._date.getFullYear();
  }

  /**
   * @public 포커싱된 날짜의 월 얻기
   * @returns {number} 월
   */
  get month() {
    return this._date.getMonth();
  }

  /**
   * @public 포커싱된 날짜의 월 일수 얻기
   * @returns {number} 월 일수
   */
  get dayLength() {
    return new Date(this.year, this.month + 1, 0).getDate();
  }

  /**
   * @public 선택한 날짜 정보 얻기
   * @returns { start: Date | null, end: Date | null} 날짜 정보
   */
  get selectDate() {
    return { ...this._selectDate };
  }

  /**
   * @public 날짜 선택
   * @params {Date} date
   */
  set selectDate(date) {
    let selectDates = Object.values(this._selectDate).filter((v) => v !== null);
    if (selectDates.length <= 1) {
      selectDates.push(date);
      selectDates.sort((a, b) => Number(a) - Number(b));
    } else {
      selectDates = [];
      selectDates.push(date);
    }
    this._selectDate = {
      start: selectDates[0] || null,
      end: selectDates[1] || null,
    };
  }

  /**
   * @public 선택한 날짜의 박 수 (몇박 인지)
   * @returns {number} 박 수
   */
  get selectDateLength() {
    if (!this.selectDate.start || !this.selectDate.end) {
      return null;
    }
    const diff =
      this.selectDate.end.getTime() - this.selectDate.start.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

  /**
   * @public 요일 얻기
   * @param {number} year
   * @param {number} month
   * @param {number} day
   * @returns {number} 요일
   */
  static getDayOfWeek(year, month, day) {
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const today = new Date(year, month, day);
    const dayOfWeek = today.getDay();
    return daysOfWeek[dayOfWeek];
  }

  /**
   * @public 선택한 날짜 초기화
   */
  clearSelectDate() {
    this._selectDate = {
      start: null,
      end: null,
    };
  }

  /**
   * @public 이전 달로 설정
   */
  setPrevMonth() {
    this._date.setMonth(this.month - 1);
  }

  /**
   * @public 다음 달로 설정
   */
  setNextMonth() {
    this._date.setMonth(this.month + 1);
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
    this.parkingModel = new ParkingModel();
    this.calenderModel = new CalenderModel(new Date());
  }
}

const model = new Model();
