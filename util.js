/**
 * 문자열 치환
 * @param {string} str 대상 문자열
 * @param {string} org 원본 문자열
 * @param {string} dest 치환 문자열
 * @returns {string} 치환된 대상 문자열
 */
const replaceAll = (str, org, dest) => {
  return str.split(org).join(dest);
};

/**
 * 하이픈 제거
 * @param {string} str 문자열
 * @returns {string} 하이픈 제거된 문자열
 */
const removeHyphen = str => {
  return replaceAll(str, '-', '');
};

/**
 * 방 번호 제거
 * @param {string} roomName 방이름
 * @returns {string} 번호가 제거된 방이름
 */
const removeRoomNumber = roomName => {
  return roomName.replace(/_[0-9]+/gi, '');
};

/**
 * 방이름을 이름과 번호로 쪼개기
 * @param {string} roomInfo 방이름
 * @returns {{ roomName: string, roomNum: string }} 이름과 번호
 */
const splitRoomName = roomInfo => {
  const roomNum = roomInfo.match(/[0-9]+/gi).toString();
  roomName = removeRoomNumber(roomInfo);

  return { roomName, roomNum };
};

/**
 * 현재시간 타임스탬프 얻기
 * @returns {string} 현재시간 타임스탬프
 */
const getCurrentTimeStamp = () => {
  return new Date().getTime() + '';
};

module.exports = {
  replaceAll,
  removeHyphen,
  removeRoomNumber,
  splitRoomName,
  getCurrentTimeStamp,
};
