var mysql = require('./booking_mysql');
var m_mysql = require('./multi_mysql');
var sms = require('./sms');
var moment = require('moment');

module.exports = (function () {
  var reserve = {};

  // 예약 페이지 남은 방 갯수 확인
  reserve.room_inquiry = function (req, res) {
    var data = [req.body.f_day, req.body.l_day];
    var sql =
      'select room_type, count(*) AS roomcount from (select distinct room_type, room_name from (select * from rev_info where rev_day >= date(?) and rev_day < date(?))datequery )duplication group by room_type';
    var status = 0; // 1 = 비수기, 2 = 성수기, 3 = (6) 비수기 + (7)성수기, (8) 성수기+ (9) 비수기
    var overday = 0;

    req.body.f_day = req.body.f_day.split('-');
    req.body.l_day = req.body.l_day.split('-');

    if (parseInt(req.body.f_day[1]) == 6 && parseInt(req.body.l_day[1]) == 7) {
      status = 3;
      overday = parseInt(req.body.l_day[2]) - 1;
    } else if (parseInt(req.body.f_day[1]) == 8 && parseInt(req.body.l_day[1]) == 9) {
      overday = parseInt(req.body.l_day[2]) - 1;
      status = 4;
    } else if (
      (parseInt(req.body.f_day[1]) == 7 && parseInt(req.body.l_day[1]) == 7) ||
      (parseInt(req.body.f_day[1]) == 7 && parseInt(req.body.l_day[1]) == 8) ||
      (parseInt(req.body.f_day[1]) == 8 && parseInt(req.body.l_day[1]) == 8)
    ) {
      status = 2;
    } else {
      status = 1;
    }

    mysql.room_info(
      res,
      'select a.room_type, a.room_peakcharge, a.room_lowcharge, count(b.room_type) as room_cnt from room_detail as a left outer join room_management as b on a.room_type = b.room_type group by a.room_type',
      errhandler,
      function (result) {
        mysql.reservegetdata(res, sql, data, errhandler, function (rev_result) {
          for (const i in rev_result) {
            //switch 사용
            console.log(rev_result[i].room_type);
            switch (rev_result[i].room_type) {
              case 'nightingale':
                result.nightingale = result.nightingale - rev_result[i].roomcount;
                break;
              case 'bluebird':
                result.bluebird = result.bluebird - rev_result[i].roomcount;
                break;
              case 'owl':
                result.owl = result.owl - rev_result[i].roomcount;
                break;
              case 'cuckoo':
                result.cuckoo = result.cuckoo - rev_result[i].roomcount;
                break;
              case 'scops_owl':
                result.scops_owl = result.scops_owl - rev_result[i].roomcount;
                break;
              case 'site_cypress':
                result.site_cypress = result.site_cypress - rev_result[i].roomcount;
                break;
              case 'site_zelkova':
                result.site_zelkova = result.site_zelkova - rev_result[i].roomcount;
                break;
              case 'raccoon':
                result.raccoon = result.raccoon - rev_result[i].roomcount;
                break;
              case 'pension':
                result.pension = result.pension - rev_result[i].roomcount;
                break;
              case 'site_grass':
                result.site_grass = result.site_grass - rev_result[i].roomcount;
                break;
              case 'firstetc':
                result.firstetc = result.firstetc - rev_result[i].roomcount;
                break;
              case 'secondetc':
                result.secondetc = result.secondetc - rev_result[i].roomcount;
                break;
              default:
                var err = 'room_inquiry Mysql Result Value Error';
                errhandler(res, err);
                break;
            }

            /* 삼항 조건식 사용
      (rev_result[i].room_type=="nightingale") ? result.nightingale=result.nightingale - rev_result[i].roomcount : result;
      (rev_result[i].room_type=="bluebird") ? result.bluebird=result.bluebird - rev_result[i].roomcount : result;
      (rev_result[i].room_type=="owl") ? result.owl=result.owl - rev_result[i].roomcount : result;
      (rev_result[i].room_type=="cuckoo") ? result.cuckoo=result.cuckoo - rev_result[i].roomcount : result;
      (rev_result[i].room_type=="scops_owl") ? result.scops_owl= result.scops_owl - rev_result[i].roomcount : result;
      (rev_result[i].room_type=="site_cypress") ? result.site_cypress=result.site_cypress - rev_result[i].roomcount : result;
      (rev_result[i].room_type=="site_zelkova") ? result.site_zelkova=result.site_zelkova - rev_result[i].roomcount : result;
      (rev_result[i].room_type=="raccoon") ? result.raccoon=result.raccoon - rev_result[i].roomcount : result;
      (rev_result[i].room_type=="pension") ? result.pension=result.pension - rev_result[i].roomcount : result;
      */
          }

          room_price(res, status, result, req.body.day, overday, function (result) {
            //console.log(result)
            res.json({ result: result });
          });
        });
      },
    );
  };

  //방 가격 계산
  function room_price(res, status, room_result, day, overday, ret) {
    mysql.query_get(res, 'select * from room_detail', errhandler, function (result) {
      if (status == 1) {
        /*if ( day >= 2) {
        room_result.bluebird_price = (result[0].room_lowcharge * day);
        room_result.cuckoo_price = (result[1].room_lowcharge * day);
        room_result.nightingale_price = (result[3].room_lowcharge * day);
        room_result.owl_price = (result[4].room_lowcharge * day);
        room_result.pension_price = (result[5].room_lowcharge * day);
        room_result.raccoon_price = result[6].room_lowcharge+((result[6].room_lowcharge - 10000) * (day-1));
        room_result.scops_owl_price = (result[7].room_lowcharge * day);
        room_result.site_cypress_price = result[9].room_lowcharge+((result[9].room_lowcharge - 10000) * (day-1));
        room_result.site_zelkova_price = result[11].room_lowcharge+((result[11].room_lowcharge - 10000) * (day-1));
        room_result.site_grass_price = (result[10].room_lowcharge * day);
        room_result.firstetc_price = result[2].room_lowcharge+((result[2].room_lowcharge - 10000) * (day-1));
        room_result.secondetc_price = (result[8].room_lowcharge * day);
        room_result.site_grasstwo_price = result[10].room_lowcharge+((result[10].room_lowcharge - 20000) * (day-1));

      } else {*/
        room_result.bluebird_price = result[0].room_lowcharge * day;
        room_result.cuckoo_price = result[1].room_lowcharge * day;
        room_result.nightingale_price = result[3].room_lowcharge * day;
        room_result.owl_price = result[4].room_lowcharge * day;
        room_result.pension_price = result[5].room_lowcharge * day;
        room_result.raccoon_price = result[6].room_lowcharge * day;
        room_result.scops_owl_price = result[7].room_lowcharge * day;
        room_result.site_cypress_price = result[9].room_lowcharge * day;
        room_result.site_zelkova_price = result[11].room_lowcharge * day;
        room_result.site_grass_price = result[10].room_lowcharge * day;
        room_result.firstetc_price = result[2].room_lowcharge * day;
        room_result.secondetc_price = result[8].room_lowcharge * day;
        room_result.site_grasstwo_price = result[10].room_lowcharge * day;

        //}
      } else if (status == 2) {
        room_result.bluebird_price = result[0].room_peakcharge * day;
        room_result.cuckoo_price = result[1].room_peakcharge * day;
        room_result.nightingale_price = result[3].room_peakcharge * day;
        room_result.owl_price = result[4].room_peakcharge * day;
        room_result.pension_price = result[5].room_peakcharge * day;
        room_result.raccoon_price = result[6].room_peakcharge * day;
        room_result.scops_owl_price = result[7].room_peakcharge * day;
        room_result.site_cypress_price = result[9].room_peakcharge * day;
        room_result.site_zelkova_price = result[11].room_peakcharge * day;
        room_result.site_grass_price = result[10].room_peakcharge * day;
        room_result.firstetc_price = result[2].room_peakcharge * day;
        room_result.secondetc_price = result[8].room_peakcharge * day;
        room_result.site_grasstwo_price = result[10].room_peakcharge * day;
      } else if (status == 3) {
        /*
      if ( day-overday >= 2) {
        room_result.bluebird_price = (result[0].room_lowcharge * (day-overday)) + (result[0].room_peakcharge * overday);
        room_result.cuckoo_price = (result[1].room_lowcharge * (day-overday)) + (result[1].room_peakcharge * overday);
        room_result.nightingale_price = (result[3].room_lowcharge * (day-overday)) + (result[3].room_peakcharge * overday);
        room_result.owl_price = (result[4].room_lowcharge * (day-overday)) + (result[4].room_peakcharge * overday);
        room_result.pension_price = (result[5].room_lowcharge * (day-overday)) + (result[5].room_peakcharge * overday);
        room_result.raccoon_price = result[6].room_lowcharge+((result[6].room_lowcharge - 10000) * (day-overday-1)) + (result[6].room_peakcharge * overday);
        room_result.scops_owl_price = (result[7].room_lowcharge * (day-overday)) + (result[7].room_peakcharge * overday);
        room_result.site_cypress_price = result[9].room_lowcharge+((result[9].room_lowcharge - 10000) * (day-overday-1)) + (result[9].room_peakcharge * overday);
        room_result.site_zelkova_price = result[11].room_lowcharge+((result[11].room_lowcharge - 10000) * (day-overday-1)) + (result[11].room_peakcharge * overday);
        room_result.site_grass_price = (result[10].room_lowcharge * (day-overday)) + (result[10].room_peakcharge * overday);
        room_result.firstetc_price = result[2].room_lowcharge+((result[2].room_lowcharge - 10000) * (day-overday-1)) + (result[2].room_peakcharge * overday);
        room_result.secondetc_price = (result[8].room_lowcharge * (day-overday)) + (result[8].room_peakcharge * overday);
        room_result.site_grasstwo_price = result[10].room_lowcharge+((result[10].room_lowcharge - 20000) * (day-overday-1)) + (result[10].room_peakcharge * overday);
      } else {*/
        room_result.bluebird_price = result[0].room_lowcharge * (day - overday) + result[0].room_peakcharge * overday;
        room_result.cuckoo_price = result[1].room_lowcharge * (day - overday) + result[1].room_peakcharge * overday;
        room_result.nightingale_price =
          result[3].room_lowcharge * (day - overday) + result[3].room_peakcharge * overday;
        room_result.owl_price = result[4].room_lowcharge * (day - overday) + result[4].room_peakcharge * overday;
        room_result.pension_price = result[5].room_lowcharge * (day - overday) + result[5].room_peakcharge * overday;
        room_result.raccoon_price = result[6].room_lowcharge * (day - overday) + result[6].room_peakcharge * overday;
        room_result.scops_owl_price = result[7].room_lowcharge * (day - overday) + result[7].room_peakcharge * overday;
        room_result.site_cypress_price =
          result[9].room_lowcharge * (day - overday) + result[9].room_peakcharge * overday;
        room_result.site_zelkova_price =
          result[11].room_lowcharge * (day - overday) + result[11].room_peakcharge * overday;
        room_result.site_grass_price =
          result[10].room_lowcharge * (day - overday) + result[10].room_peakcharge * overday;
        room_result.firstetc_price = result[2].room_lowcharge * (day - overday) + result[2].room_peakcharge * overday;
        room_result.secondetc_price = result[8].room_lowcharge * (day - overday) + result[8].room_peakcharge * overday;
        room_result.site_grasstwo_price =
          result[10].room_lowcharge * (day - overday) + result[10].room_peakcharge * overday;
        //}
      } else if (status == 4) {
        /*
      if ( overday >= 2) {
        room_result.bluebird_price = (result[0].room_lowcharge * overday) + (result[0].room_peakcharge * (day-overday));
        room_result.cuckoo_price = (result[1].room_lowcharge * overday) + (result[1].room_peakcharge * (day-overday));
        room_result.nightingale_price = (result[3].room_lowcharge * overday) + (result[3].room_peakcharge * (day-overday));
        room_result.owl_price = (result[4].room_lowcharge * overday) + (result[4].room_peakcharge * (day-overday));
        room_result.pension_price = (result[5].room_lowcharge * overday) + (result[5].room_peakcharge * (day-overday));
        room_result.raccoon_price = result[6].room_lowcharge+((result[6].room_lowcharge - 10000) * (overday-1)) + (result[6].room_peakcharge * (day-overday));
        room_result.scops_owl_price = (result[7].room_lowcharge * overday) + (result[7].room_peakcharge * (day-overday));
        room_result.site_cypress_price = result[9].room_lowcharge+((result[9].room_lowcharge - 10000) * (overday-1)) + (result[9].room_peakcharge * (day-overday));
        room_result.site_zelkova_price = result[11].room_lowcharge+((result[11].room_lowcharge - 10000) * (overday-1)) + (result[11].room_peakcharge * (day-overday));
        room_result.site_grass_price = (result[10].room_lowcharge * overday) + (result[10].room_peakcharge * (day-overday));
        room_result.firstetc_price = result[2].room_lowcharge+((result[2].room_lowcharge - 10000) * (overday-1)) + (result[2].room_peakcharge * (day-overday));
        room_result.secondetc_price = (result[8].room_lowcharge * overday) + (result[8].room_peakcharge * (day-overday));
        room_result.site_grasstwo_price = result[10].room_lowcharge+((result[10].room_lowcharge - 20000) * (overday-1)) + (result[10].room_peakcharge * (day-overday));
      } else {*/
        room_result.bluebird_price = result[0].room_lowcharge * overday + result[0].room_peakcharge * (day - overday);
        room_result.cuckoo_price = result[1].room_lowcharge * overday + result[1].room_peakcharge * (day - overday);
        room_result.nightingale_price =
          result[3].room_lowcharge * overday + result[3].room_peakcharge * (day - overday);
        room_result.owl_price = result[4].room_lowcharge * overday + result[4].room_peakcharge * (day - overday);
        room_result.pension_price = result[5].room_lowcharge * overday + result[5].room_peakcharge * (day - overday);
        room_result.raccoon_price = result[6].room_lowcharge * overday + result[6].room_peakcharge * (day - overday);
        room_result.scops_owl_price = result[7].room_lowcharge * overday + result[7].room_peakcharge * (day - overday);
        room_result.site_cypress_price =
          result[9].room_lowcharge * overday + result[9].room_peakcharge * (day - overday);
        room_result.site_zelkova_price =
          result[11].room_lowcharge * overday + result[11].room_peakcharge * (day - overday);
        room_result.site_grass_price =
          result[10].room_lowcharge * overday + result[10].room_peakcharge * (day - overday);
        room_result.firstetc_price = result[2].room_lowcharge * overday + result[2].room_peakcharge * (day - overday);
        room_result.secondetc_price = result[8].room_lowcharge * overday + result[8].room_peakcharge * (day - overday);
        room_result.site_grasstwo_price =
          result[10].room_lowcharge * overday + result[10].room_peakcharge * (day - overday);
        //}
      } else {
        //errhandler 작성
      }
      ret(room_result);
    });
  }

  //예약 신청
  reserve.reserve = function (req, res) {
    console.log('reserve!!');
    //res, "select * from room_detail", errhandler, function(result)
    //var sql = 'insert into room_reservation (rev_id, rev_roomtype, rev_name, rev_phone, rev_sday, rev_lday, rev_charge) values (?, ?, ?, ?, ?, ?, ?)'
    var sql = 'insert into rev_info (rev_id, room_type, room_name, rev_day) values ?';
    var userid = req.body.user_id;
    if (userid == 'nologin') {
      userid = req.body.user_name + '&' + req.body.user_phone;
    }
    var data = [
      req.body.f_day + '&' + req.body.room_name,
      req.body.room_type,
      req.body.user_name,
      req.body.user_phone,
      req.body.f_day,
      req.body.l_day,
      userid,
      req.body.room_name,
    ];
    console.log(req.body.user_id);
    var data2 = [];
    var prcie = 0; // 1 = 비수기, 2 = 성수기, 3 = (6) 비수기 + (7)성수기, (8) 성수기+ (9) 비수기
    var overday = 0;

    req.body.f_day = req.body.f_day.split('-');
    req.body.l_day = req.body.l_day.split('-');

    mysql.query_get(
      res,
      "select * from room_detail where room_type='" + req.body.room_type + "'",
      errhandler,
      function (result) {
        //console.log(result);
        if (parseInt(req.body.f_day[1]) == 6 && parseInt(req.body.l_day[1]) == 7) {
          overday = parseInt(req.body.l_day[2]) - 1;
          if (parseInt(req.body.s_day) - overday >= 2) {
            if (
              req.body.room_type == 'site_cypress' ||
              req.body.room_type == 'site_zelkova' ||
              req.body.room_type == 'site_grass' ||
              req.body.room_type == 'raccoon' ||
              req.body.room_type == 'firstetc'
            ) {
              if (req.body.room_type == 'site_grass' && req.body.addprice > 0) {
                //price = result[0].room_lowcharge+((result[0].room_lowcharge - 20000) * (parseInt(req.body.s_day)-overday-1)) + ((result[0].room_peakcharge) * overday);
                price =
                  result[0].room_lowcharge +
                  (result[0].room_lowcharge - 0) * (parseInt(req.body.s_day) - overday - 1) +
                  result[0].room_peakcharge * overday;
              } else {
                if (req.body.room_type == 'site_grass') {
                  price =
                    result[0].room_lowcharge +
                    (result[0].room_lowcharge - 0) * (parseInt(req.body.s_day) - overday - 1) +
                    result[0].room_peakcharge * overday;
                } else {
                  //price = result[0].room_lowcharge+((result[0].room_lowcharge - 10000) * (parseInt(req.body.s_day)-overday-1)) + ((result[0].room_peakcharge) * overday);
                  price =
                    result[0].room_lowcharge +
                    (result[0].room_lowcharge - 0) * (parseInt(req.body.s_day) - overday - 1) +
                    result[0].room_peakcharge * overday;
                }
              }

              if (req.body.room_type == 'site_grass') {
                price = price * 1 + req.body.addprice * 1;
              }
            } else {
              price =
                result[0].room_lowcharge * (parseInt(req.body.s_day) - overday) + result[0].room_peakcharge * overday;
            }
            data.push(price);
            //data = [req.body.f_day+"&"+req.body.room_name, req.body.room_name, req.body.user_name, req.body.user_phone, req.body.s_day, req.body.l_day, price]
          } else {
            price =
              result[0].room_lowcharge * (parseInt(req.body.s_day) - overday) + result[0].room_peakcharge * overday;
            if (req.body.room_type == 'site_grass') {
              price = price * 1 + req.body.addprice * 1;
            }
            data.push(price);
          }
        } else if (parseInt(req.body.f_day[1]) == 8 && parseInt(req.body.l_day[1]) == 9) {
          overday = parseInt(req.body.l_day[2]) - 1;
          if (overday >= 2) {
            if (
              req.body.room_type == 'site_cypress' ||
              req.body.room_type == 'site_zelkova' ||
              req.body.room_type == 'site_grass' ||
              req.body.room_type == 'raccoon' ||
              req.body.room_type == 'firstetc'
            ) {
              if (req.body.room_type == 'site_grass' && req.body.addprice > 0) {
                //price = result[0].room_lowcharge+((result[0].room_lowcharge - 20000) * (overday - 1)) + ((result[0].room_peakcharge) * (parseInt(req.body.s_day) - overday));
                price =
                  result[0].room_lowcharge +
                  (result[0].room_lowcharge - 0) * (overday - 1) +
                  result[0].room_peakcharge * (parseInt(req.body.s_day) - overday);
              } else {
                if (req.body.room_type == 'site_grass') {
                  price =
                    result[0].room_lowcharge +
                    (result[0].room_lowcharge - 0) * (overday - 1) +
                    result[0].room_peakcharge * (parseInt(req.body.s_day) - overday);
                } else {
                  //price = result[0].room_lowcharge+((result[0].room_lowcharge - 10000) * (overday - 1)) + ((result[0].room_peakcharge) * (parseInt(req.body.s_day) - overday));
                  price =
                    result[0].room_lowcharge +
                    (result[0].room_lowcharge - 0) * (overday - 1) +
                    result[0].room_peakcharge * (parseInt(req.body.s_day) - overday);
                }
              }
              if (req.body.room_type == 'site_grass') {
                price = price * 1 + req.body.addprice * 1;
              }
            } else {
              price =
                result[0].room_lowcharge * overday + result[0].room_peakcharge * (parseInt(req.body.s_day) - overday);
            }
            data.push(price);
          } else {
            price =
              result[0].room_lowcharge * overday + result[0].room_peakcharge * (parseInt(req.body.s_day) - overday);
            if (req.body.room_type == 'site_grass') {
              price = price * 1 + req.body.addprice * 1;
            }
            data.push(price);
          }
        } else if (
          (parseInt(req.body.f_day[1]) == 7 && parseInt(req.body.l_day[1]) == 7) ||
          (parseInt(req.body.f_day[1]) == 7 && parseInt(req.body.l_day[1]) == 8) ||
          (parseInt(req.body.f_day[1]) == 8 && parseInt(req.body.l_day[1]) == 8)
        ) {
          price = result[0].room_peakcharge * parseInt(req.body.s_day);
          if (req.body.room_type == 'site_grass') {
            price = price * 1 + req.body.addprice * 1;
          }
          data.push(price);
        } else {
          if (parseInt(req.body.s_day) >= 2) {
            if (
              req.body.room_type == 'site_cypress' ||
              req.body.room_type == 'site_zelkova' ||
              req.body.room_type == 'site_grass' ||
              req.body.room_type == 'raccoon' ||
              req.body.room_type == 'firstetc'
            ) {
              if (req.body.room_type == 'site_grass' && req.body.addprice > 0) {
                //price = result[0].room_lowcharge+((result[0].room_lowcharge - 20000) * (parseInt(req.body.s_day)-1));
                price = result[0].room_lowcharge + (result[0].room_lowcharge - 0) * (parseInt(req.body.s_day) - 1);
              } else {
                if (req.body.room_type == 'site_grass') {
                  price = result[0].room_lowcharge + (result[0].room_lowcharge - 0) * (parseInt(req.body.s_day) - 1);
                } else {
                  //price = result[0].room_lowcharge+((result[0].room_lowcharge - 10000) * (parseInt(req.body.s_day)-1));
                  price = result[0].room_lowcharge + (result[0].room_lowcharge - 0) * (parseInt(req.body.s_day) - 1);
                }
              }
              if (req.body.room_type == 'site_grass') {
                price = price * 1 + req.body.addprice * 1;
              }
            } else {
              price = result[0].room_lowcharge * parseInt(req.body.s_day);
            }
            data.push(price);
          } else {
            price = result[0].room_lowcharge * parseInt(req.body.s_day);
            if (req.body.room_type == 'site_grass') {
              price = price * 1 + req.body.addprice * 1;
            }
            data.push(price);
          }
        }

        // 차후  예약  신청 페이지에서 room_name(ex => raccon_1 전송시 내용  변경
        for (var i = 0; i < req.body.s_day; i++) {
          data2.push([
            moment(new Date(req.body.f_day[0], req.body.f_day[1] - 1, req.body.f_day[2]))
              .add('days', i)
              .format('YYYY[-]MM[-]DD') +
              '&' +
              req.body.room_name,
            req.body.room_type,
            req.body.room_name,
            moment(new Date(req.body.f_day[0], req.body.f_day[1] - 1, req.body.f_day[2]))
              .add('days', i)
              .format('YYYY[-]MM[-]DD'),
          ]);
        }

        mysql.data_put(res, sql, [data2], rev_handler, function (result) {
          //console.log(result);
          if (result == 'false') {
            //추후 errhandler 작성
          } else {
            sql =
              'insert into room_reservation (rev_id, rev_roomtype, rev_name, rev_phone, rev_sday, rev_lday, user_id, room_name, rev_charge) values (?, ?, ?, ?, ?, ?, ?, ?, ?)';

            mysql.data_put(res, sql, data, rev_handler, function (result) {
              if (result == 'false') {
              } else {
                sms.push(req, res);
              }
            });
          }
        });
      },
    );
  };

  reserve.timer = function (req, res) {
    if (req.session.logined != 'yes') {
      mysql.reservegetdata(
        res,
        'select * from room_reservation where user_id=?',
        req.body.username + '&' + req.body.userphone,
        errhandler,
        function (rev_max) {
          mysql.reservegetdata(
            res,
            "select *, date_format(rev_cancel, '%Y-%m-%d %k:%i:%s') as timer, date_format(rev_sday, '%Y-%m-%d') as f_day,SUBSTRING_INDEX(room_reservation.rev_id, '&', -1) rev_id_split, date_format(rev_lday, '%Y-%m-%d') as l_day  from room_reservation where user_id=? limit ?, 10",
            [req.body.username + '&' + req.body.userphone, parseInt(req.body.limit)],
            errhandler,
            function (result) {
              res.json({ timer: result, max_rev: rev_max, cnt: req.body.limit });
            },
          );
        },
      );
    } else {
      mysql.reservegetdata(
        res,
        'select * from room_reservation where user_id=?',
        req.session.userid,
        errhandler,
        function (rev_max) {
          mysql.reservegetdata(
            res,
            "select *, date_format(rev_cancel, '%Y-%m-%d %k:%i:%s') as timer, date_format(rev_sday, '%Y-%m-%d') as f_day,SUBSTRING_INDEX(room_reservation.rev_id, '&', -1) rev_id_split, date_format(rev_lday, '%Y-%m-%d') as l_day  from room_reservation where user_id=? limit ?, 10",
            [req.session.userid, parseInt(req.body.limit)],
            errhandler,
            function (result) {
              res.json({ timer: result, max_rev: rev_max, cnt: req.body.limit });
            },
          );
        },
      );
    }
  };

  reserve.last_reservation = function (req, res) {
    mysql.reservegetdata(
      res,
      "select *, date_format(rev_sday, '%Y-%m-%d') as f_day, date_format(rev_lday, '%Y-%m-%d') as l_day from last_reservation where user_id=? limit ?, 10",
      [req.session.userid, parseInt(req.body.limit)],
      errhandler,
      function (result) {
        res.json({ result: result, cnt: req.body.limit });
      },
    );
  };

  /* timer back
reserve.timer=function(req,res){
  mysql.reservegetdata(res, "select date_format(rev_cancel, '%Y-%m-%d %k:%i:%s') as timer from room_reservation where rev_name=?", req.session.name, errhandler, function(result) {
    res.json({"timer":result});
  });
}
*/

  reserve.day_query = function (req, res) {
    var sql =
      "select room_type, count(*) AS room_cnt from (select * from rev_info  where rev_day='" +
      moment().add('days', 0).format('YYYY[-]MM[-]DD') +
      "')day group by room_type;" +
      "select room_type, count(*) AS room_cnt from (select * from rev_info  where rev_day='" +
      moment().add('days', 1).format('YYYY[-]MM[-]DD') +
      "')day group by room_type;" +
      "select room_type, count(*) AS room_cnt from (select * from rev_info  where rev_day='" +
      moment().add('days', 2).format('YYYY[-]MM[-]DD') +
      "')day group by room_type;" +
      "select room_type, count(*) AS room_cnt from (select * from rev_info  where rev_day='" +
      moment().add('days', 3).format('YYYY[-]MM[-]DD') +
      "')day group by room_type;" +
      "select room_type, count(*) AS room_cnt from (select * from rev_info  where rev_day='" +
      moment().add('days', 4).format('YYYY[-]MM[-]DD') +
      "')day group by room_type;" +
      "select room_type, count(*) AS room_cnt from (select * from rev_info  where rev_day='" +
      moment().add('days', 5).format('YYYY[-]MM[-]DD') +
      "')day group by room_type;" +
      "select room_type, count(*) AS room_cnt from (select * from rev_info  where rev_day='" +
      moment().add('days', 6).format('YYYY[-]MM[-]DD') +
      "')day group by room_type;" +
      "select room_type, count(*) AS room_cnt from (select * from rev_info  where rev_day='" +
      moment().add('days', 7).format('YYYY[-]MM[-]DD') +
      "')day group by room_type;" +
      "select room_type, count(*) AS room_cnt from (select * from rev_info  where rev_day='" +
      moment().add('days', 8).format('YYYY[-]MM[-]DD') +
      "')day group by room_type;" +
      "select room_type, count(*) AS room_cnt from (select * from rev_info  where rev_day='" +
      moment().add('days', 9).format('YYYY[-]MM[-]DD') +
      "')day group by room_type;";

    /*
   for (var i=0;i<10;i++);
   sql += "select room_type, count(*) AS room_cnt from (select * from rev_info  where rev_day='"+moment().add('days',0).format('YYYY[-]MM[-]DD')+"')day group by room_type;"
   */
    var room_cnt = new Array();
    var days_room;
    m_mysql.day_info(res, 'select * from room_detail', errhandler, function (max_room) {
      m_mysql.day_cal(res, sql, errhandler, function (result) {
        for (i = 0; i < 10; i++) {
          days_room = Object.assign({}, max_room);
          if (result[i].length < 0) {
            break;
          } else {
            for (const j in result[i]) {
              switch (result[i][j].room_type) {
                case 'nightingale':
                case 'bluebird':
                case 'owl':
                case 'cuckoo':
                case 'scops_owl':
                  days_room.bungalow = days_room.bungalow - result[i][j].room_cnt;
                  break;
                case 'site_cypress':
                case 'site_zelkova':
                case 'site_grass':
                  days_room.site = days_room.site - result[i][j].room_cnt;
                  break;
                case 'raccoon':
                  days_room.decksite = days_room.decksite - result[i][j].room_cnt;
                  break;
                case 'pension':
                  days_room.pension = days_room.pension - result[i][j].room_cnt;
                  break;
                case 'firstetc':
                  break;
                case 'secondetc':
                  break;
                default:
                  var err = 'room_inquiry Mysql Result Value Error';
                  errhandler(res, err);
                  break;
              }
            }
            room_cnt.push(days_room);
          }
        }
        console.log(max_room);
        console.log(room_cnt);
        res.json({ max_room: max_room, days_room: room_cnt });
      });
    });
  };

  reserve.roomindex = function (req, res, test) {
    //console.log(req.body.room_type)
    var sql =
      'select room_name from room_management where room_type=? and room_name NOT IN (select room_name from (select * from rev_info where rev_day >= date(?) and rev_day < date(?))date_query where room_type=?);';
    var data = [req.body.room_type, req.body.f_day, req.body.l_day, req.body.room_type];
    mysql.reservegetdata(res, sql, data, errhandler, function (result) {
      //console.log(result);
      res.json({ result: result });
    });
  };

  reserve.getroomname = function (req, res) {
    var sql = 'select * from room_name where idx=?';
    var data = [req.body.room_type];
    mysql.reservegetdata(res, sql, data, errhandler, function (result) {
      res.json({ result: result });
    });
  };

  reserve.setroomname = function (req, res) {
    console.log('Setroomname');
    console.log(req.body.name, req.body.room_type);
    var sql = 'UPDATE room_name SET name=? where idx=?';
    var data = [req.body.name, req.body.room_type];
    function setnamehandler(req, res) {
      console.log('success');
      res.json({ result: 'Success' });
    }
    mysql.put(sql, data, req, res, setnamehandler, errhandler);
  };

  reserve.add_price = function (req, res) {
    console.log('add_price ');
    var sql = 'select * from add_price where idx=?';
    var data = [req.body.room_type];
    mysql.reservegetdata(res, sql, data, errhandler, function (result) {
      res.json({ result: result });
    });
  };
  reserve.set_price = function (req, res) {
    console.log('set_price');
    var sql = 'UPDATE add_price SET lowcharge=? where idx=?';
    var data = [req.body.setprice, 'site_grass'];
    function setpricehandler(req, res) {
      console.log('success');
      res.json({ result: 'Success' });
    }
    mysql.put(sql, data, req, res, setpricehandler, errhandler);
  };

  function gethandler(req, res, result) {
    //console.log(result);
    if (result.length > 0) {
      res.json({ result: result });
    } else {
      //errhandler 추후 작성
    }
  }

  function puthandler(req, res) {
    req.session.logined = 'yes';
    res.redirect('/');
  }

  function rev_handler(res, err) {
    res.send('<script>alert("이미 예약 신청된 방입니다.")</script><script>history.back();</script>');
  }

  function errhandler(res, err) {
    res.json({ error: err });
  }

  return reserve;
})();
