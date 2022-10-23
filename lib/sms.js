const CryptoJS = require('crypto-js');
const request = require('request');
const config = require('./config/sms_config');
const campingArea = require('../model/domain/camping_area');
const { removeHyphen, splitRoomName, getCurrentTimeStamp } = require('../util');

/**
 * SMS 발송에 사용되는 시그니처 생성
 * https://api.ncloud-docs.com/docs/ai-application-service-sens-smsv2
 * @param {string} timeStamp
 * @returns {string} 시그니처 문자열
 */
const makeSignature = timeStamp => {
  const space = ' '; // one space
  const newLine = '\n'; // new line
  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, config.secret_key);

  hmac.update('POST');
  hmac.update(space);
  hmac.update(config.message_api_url);
  hmac.update(newLine);
  hmac.update(timeStamp);
  hmac.update(newLine);
  hmac.update(config.access_key);

  const hash = hmac.finalize();

  return hash.toString(CryptoJS.enc.Base64);
};

/**
 * SMS 메시지 발송
 * @param {{ timeStamp: string, from: string, to: Array<string>, content: string }} args
 * @param {() => void} successHandler
 */
const postMessage = ({ timeStamp, from, to, content }, successHandler) => {
  request(
    {
      method: 'POST',
      json: true,
      uri: config.domain + config.message_api_url,
      headers: {
        'Content-Type': 'application/json',
        'x-ncp-apigw-timestamp': timeStamp,
        'x-ncp-iam-access-key': config.access_key,
        'x-ncp-apigw-signature-v2': makeSignature(timeStamp),
      },
      body: {
        type: 'sms',
        from,
        messages: to.map(phoneNumber => {
          return {
            to: phoneNumber,
          };
        }),
        content,
      },
    },
    successHandler,
  );
};

/**
 * 에러 핸들러
 */
const errhandler = function (_, err) {
  console.log(err);
};

module.exports = (function () {
  const sms = {};

  /**
   * 예약 신청 문자 발송
   * @param {{ clientPhoneNumber: string, roomInfo: string, fDay: string, lDay: string, addPrice: number}} args
   * @param {() => void} successHandler 성공 핸들러
   */
  sms.push = function ({ clientPhoneNumber, roomInfo, fDay, lDay, addPrice }, successHandler) {
    const timeStamp = getCurrentTimeStamp();
    const { roomName, roomNum } = splitRoomName(roomInfo);
    const startDay = fDay.join('.');
    const endDay = lDay.join('.');
    let solo = '';
    clientPhoneNumber = removeHyphen(clientPhoneNumber);

    campingArea.getName(roomName).then(({ isSuccess, data }) => {
      if (!isSuccess) {
        errhandler(isSuccess, data);
        return;
      }

      const roomNameKR = data.name;

      if (roomName == 'site_grass' && addPrice > 0) {
        solo = '(두팀)';
      }

      const from = config.owner_phone_number;
      let content = `${startDay}~${endDay} ${roomNameKR}_${roomNum}${solo} 예약신청완료 입금계좌:농협은행(463131-52-138136)`;

      postMessage({ timeStamp, from, to: [clientPhoneNumber], content }, () => {
        content = `${startDay}~${endDay} ${roomNameKR}_${roomNum}${solo} 신청자번호:${clientPhoneNumber}`;
        postMessage({ timeStamp, from, to: [from, config.developer_phone_number], content }, () => {});
      });

      successHandler();
    });
  };

  /**
   * 예약 승인 문자 발송
   * @param {{clientPhoneNumber: string, roonInfo: string, }} args {고객 폰 번호, 방 이름}
   * @param {() => void} successHandler 성공 핸들러
   */
  sms.auth = function ({ clientPhoneNumber, roomInfo }, successHandler) {
    const { roomName, roomNum } = splitRoomName(roomInfo);
    const timeStamp = getCurrentTimeStamp();
    clientPhoneNumber = removeHyphen(clientPhoneNumber);

    campingArea.getName(roomName).then(({ isSuccess, data }) => {
      if (!isSuccess) {
        errhandler(isSuccess, data);
        return;
      }

      const roomNameKR = data.name;
      const from = config.owner_phone_number;
      const content = roomNameKR + '_' + roomNum + ' 예약승인되었습니다. 내안의 숲에 오신 것을 진심으로 환영합니다.^_^';

      postMessage({ timeStamp, from, to: [clientPhoneNumber], content }, () => {});
      successHandler();
    });
  };

  return sms;
})();
