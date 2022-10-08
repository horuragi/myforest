var request = require('request');
var mysql = require('./booking_mysql');
var config = require('./config/sms_config');

module.exports = (function () {
  var sms = {};

  String.prototype.replaceAll = function (org, dest) {
    return this.split(org).join(dest);
  };

  function replaceField(str) {
    str = str.replaceAll('bluebird', '파랑새');
    str = str.replaceAll('scops_owl', '소쩍새');
    str = str.replaceAll('owl', '부엉이');
    str = str.replaceAll('pension', '펜션');
    str = str.replaceAll('raccoon', '데크[너구리]');
    str = str.replaceAll('cuckoo', '뻐꾸기');
    str = str.replaceAll('nightingale', '꾀꼬리');
    str = str.replaceAll('2019,', '');
    str = str.replaceAll(',', '.');
    return str;
  }

  sms.push = function (req, res) {
    console.log('sms push !!!!');
    console.log(config);

    var tonumber = req.body.user_phone.replaceAll('-', '');
    var roomname = replaceField(req.body.room_name);
    var startday = replaceField('' + req.body.f_day);
    var endday = replaceField('' + req.body.l_day);
    var checkname = req.body.room_name.split('_');
    var errhandler = function (res, err) {
      console.log('sms error');
    };
    console.log(checkname);
    if (checkname[0] == 'firstetc' || checkname[0] == 'secondetc' || checkname[0] == 'site') {
      let temp = checkname[0];
      let num = checkname[1];
      if (checkname[0] === 'site') {
        temp = checkname[0] + '_' + checkname[1];
        num = checkname[2];
      }
      var sql = 'select * from room_name where idx=?';
      var data = [temp];

      var solo = '';
      if (req.body.room_type == 'site_grass') {
        if (req.body.addprice > 0) {
          solo = '(두팀)';
        }
      }
      mysql.reservegetdata(res, sql, data, errhandler, function (result) {
        console.log(config.service_id);
        console.log(config.access_key);

        request(
          {
            method: 'POST',
            json: true,
            uri: 'https://api-sens.ncloud.com/v1/sms/services/' + config.service_id + '/messages',
            headers: {
              'Content-Type': 'application/json',
              'X-NCP-auth-key': config.access_key,
              'X-NCP-service-secret': config.secret_key,
            },
            body: {
              type: 'sms',
              from: config.owner_phone_number,
              to: [tonumber],
              content:
                startday +
                '~' +
                endday +
                ' ' +
                result[0].name +
                '_' +
                num +
                solo +
                ' 예약신청완료 입금계좌:농협은행(463131-52-138136)',
            },
          },
          function (error, response, body) {
            console.log(response);
            request(
              {
                method: 'POST',
                json: true,
                uri: 'https://api-sens.ncloud.com/v1/sms/services/' + config.service_id + '/messages',
                headers: {
                  'Content-Type': 'application/json',
                  'X-NCP-auth-key': config.access_key,
                  'X-NCP-service-secret': config.secret_key,
                },
                body: {
                  type: 'sms',
                  from: config.owner_phone_number,
                  to: [config.owner_phone_number, config.developer_phone_number],
                  //to: [tonumber],
                  content:
                    startday + '~' + endday + ' ' + result[0].name + '_' + num + solo + ' 신청자번호:' + tonumber,
                },
              },
              function (error, response, body) {},
            );
          },
        );
      });

      res.send(
        '<script>alert("예약 신청이 완료되었습니다.");</script><script>location.href="/booking_reservation"</script>',
      );
    } else {
      var solo = '';
      if (req.body.room_type == 'site_grass') {
        if (req.body.addprice > 0) {
          solo = '(두팀)';
        }
      }
      request(
        {
          method: 'POST',
          json: true,
          uri: 'https://api-sens.ncloud.com/v1/sms/services/' + config.service_id + '/messages',
          headers: {
            'Content-Type': 'application/json',
            'X-NCP-auth-key': config.access_key,
            'X-NCP-service-secret': config.secret_key,
          },
          body: {
            type: 'sms',
            from: config.owner_phone_number,
            to: [tonumber],
            content:
              startday + '~' + endday + ' ' + roomname + solo + ' 예약신청완료 입금계좌:농협은행(463131-52-138136)',
          },
        },
        function (error, response, body) {
          if (error) {
            console.log(error);
          }
          if (response) {
            console.log(response.body);
          }
          request(
            {
              method: 'POST',
              json: true,
              uri: 'https://api-sens.ncloud.com/v1/sms/services/' + config.service_id + '/messages',
              headers: {
                'Content-Type': 'application/json',
                'X-NCP-auth-key': config.access_key,
                'X-NCP-service-secret': config.secret_key,
              },
              body: {
                type: 'sms',
                from: config.owner_phone_number,
                to: [config.owner_phone_number, config.developer_phone_number],
                content: startday + '~' + endday + ' ' + roomname + solo + ' 신청자번호:' + tonumber,
              },
            },
            function (error, response, body) {},
          );
        },
      );

      res.send(
        '<script>alert("예약 신청이 완료되었습니다.");</script><script>location.href="/booking_reservation"</script>',
      );
    }
  };

  sms.auth = function (rows, res) {
    var tonumber2 = '' + rows[0].rev_phone.replaceAll('-', '');
    var roomname2 = '' + replaceField(rows[0].room_name);
    var checkname = rows[0].room_name.split('_');
    var errhandler = function (res, err) {
      console.log('sms error');
    };

    if (checkname[0] == 'firstetc' || checkname[0] == 'secondetc' || checkname[0] == 'site') {
      let temp = checkname[0];
      let num = checkname[1];
      if (checkname[0] === 'site') {
        temp = checkname[0] + '_' + checkname[1];
        num = checkname[2];
      }
      var sql = 'select * from room_name where idx=?';
      var data = [temp];

      mysql.reservegetdata(res, sql, data, errhandler, function (result) {
        request(
          {
            method: 'POST',
            json: true,
            uri: 'https://api-sens.ncloud.com/v1/sms/services/' + config.service_id + '/messages',
            headers: {
              'Content-Type': 'application/json',
              'X-NCP-auth-key': config.access_key,
              'X-NCP-service-secret': config.secret_key,
            },
            body: {
              type: 'sms',
              from: config.owner_phone_number,
              to: [tonumber2],
              content:
                result[0].name + '_' + num + ' 예약승인되었습니다.. 내안의 숲에 오신 것을 진심으로 환영합니다.^_^',
            },
          },
          function (error, response, body) {},
        );
      });
      res.send('예약 승인 완료');
    } else {
      console.log('승인');
      console.log(checkname[0]);

      request(
        {
          method: 'POST',
          json: true,
          uri: 'https://api-sens.ncloud.com/v1/sms/services/' + config.service_id + '/messages',
          headers: {
            'Content-Type': 'application/json',
            'X-NCP-auth-key': config.access_key,
            'X-NCP-service-secret': config.secret_key,
          },
          body: {
            type: 'sms',
            from: config.owner_phone_number,
            to: [tonumber2],
            content: roomname2 + ' 예약승인되었습니다. 내안의 숲에 오신 것을 진심으로 환영합니다.^_^',
          },
        },
        function (error, response, body) {},
      );
      res.send('예약 승인 완료');
    }
  };

  return sms;
})();
