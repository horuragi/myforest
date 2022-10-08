var mysql = require('mysql');
var config = require('./config/db_config');
var connection = mysql.createPool(config.getConfig('myforest'));
var sms = require('./sms');

module.exports = (function () {
  var reservationmgt = {};

  var errHandler = function (res, err) {
    console.log(err);
    res.json({
      message: 'Error:' + err,
    });
  };

  //예약 확인
  reservationmgt.reservation_confirm = function (req, res) {
    var data;
    var sql =
      "select *, date_format(rev_lday, '%Y-%m-%d') AS l_day from (select *,SUBSTRING_INDEX(room_reservation.rev_id, '&', -1) rev_id_split, date_format(rev_sday, '%Y-%m-%d') AS s_day from room_reservation)day where rev_name=?";

    connection.query(sql, req.body.args, function (err, rows, fields) {
      if (err) {
        console.log(err);
        // 추후 에러 핸들러 작성 진행
      } else {
        res.json({
          message: rows,
        });
      }
    });
  };

  //관리자 예약 확인
  reservationmgt.reservation_admin_query = function (req, res) {
    var sql =
      "select *, SUBSTRING_INDEX(rev_id, '&', -1) AS rev_id_split, date_format(rev_sday, '%Y-%m-%d') AS s_day, date_format(rev_lday, '%Y-%m-%d') AS l_day from room_reservation";

    connection.query(sql, function (err, rows, fields) {
      if (err) {
        console.log(err);
        // 추후 에러 핸들러 작성 진행
      } else {
        res.json({
          message: rows,
        });
      }
    });
  };

  //관리자 예약 확인 상태 세부 쿼리
  reservationmgt.reservation_admin_state_query = function (req, res) {
    console.log('reservation_admin_state_query');
    var sql =
      "select *, SUBSTRING_INDEX(rev_id, '&', -1) AS rev_id_split, date_format(rev_sday, '%Y-%m-%d') AS s_day, date_format(rev_lday, '%Y-%m-%d') AS l_day from room_reservation where rev_state=? and rev_name like ?";
    const rev_state = req.body.args || '0';
    const rev_name = req.body.rev_name ? `%${req.body.rev_name}%` : '%%';
    let args = [rev_state, rev_name];

    if (rev_state === '0') {
      sql =
        "select *, SUBSTRING_INDEX(rev_id, '&', -1) AS rev_id_split, date_format(rev_sday, '%Y-%m-%d') AS s_day, date_format(rev_lday, '%Y-%m-%d') AS l_day from room_reservation where rev_name like ?";
      args = [rev_name];
    }

    connection.query(sql, args, function (err, rows, fields) {
      if (err) {
        console.log(err);
        // 추후 에러 핸들러 작성 진행
      } else {
        res.json({
          message: rows,
        });
      }
    });
  };

  //관리자 예약 확인 상태 중 환불 완료를 위한 세부 쿼리
  reservationmgt.reservation_admin_refund_query = function (req, res) {
    var sql =
      "select *, date_format(rev_lday, '%Y-%m-%d') AS l_day from (select *,SUBSTRING_INDEX(last_reservation.rev_id, '&', -1) rev_id_split, date_format(rev_sday, '%Y-%m-%d') AS s_day from last_reservation)day where rev_state=? and rev_name like ?";
    const rev_state = req.body.args || '';
    const rev_name = req.body.rev_name ? `%${req.body.rev_name}%` : '%%';

    connection.query(sql, [rev_state, rev_name], function (err, rows, fields) {
      if (err) {
        console.log(err);
        // 추후 에러 핸들러 작성 진행
      } else {
        res.json({
          message: rows,
        });
      }
    });
  };

  // 예약 취소
  reservationmgt.reservation_cancel = function (req, res) {
    var sql =
      "select *, date_format(DATE_sub(rev_lday, INTERVAL 1 DAY), '%Y-%m-%d') AS l_day from (select *, date_format(rev_sday, '%Y-%m-%d') AS s_day from room_reservation)day where rev_id=?";

    connection.query(sql, req.body.args, function (err, rows, fields) {
      if (err) {
        console.log(err);
        // 추후 에러 핸들러 작성 진행
      } else {
        //예약 신청 상태일 경우에만 실행

        var rev_id_split = rows[0].rev_id.split('&');
        var rev_sday = rows[0].s_day;
        var rev_lday = rows[0].l_day;

        if (rows[0].rev_state == '1') {
          var data;
          var sql = 'delete from room_reservation where rev_id=?';
          data = [req.body.args];
          connection.query(sql, data, function (err, rows, fields) {
            if (err) {
              console.log(err);
              // 추후 에러 핸들러 작성 진행
            } else {
              // 매칭되는 rev_info 테이블의 예약내역 삭제
              var data;
              var sql = 'delete from rev_info where room_name=? and (rev_day between ? and ?)';
              data = [rev_id_split[1], rev_sday, rev_lday];
              connection.query(sql, data, function (err, rows, fields) {
                if (err) {
                  console.log(err);
                  // 추후 에러 핸들러 작성 진행
                } else {
                }
              });

              res.send(
                '<script>alert("예약 취소 완료")</script> <script>location.href="/booking_reservation"</script>',
              );
            }
          });
        } else {
          res.send(
            '<script>alert("예약 신청 상태일 경우에만 취소가 가능 합니다.")</script> <script>history.back()</script>',
          );
        }
      }
    });
  };

  // 환불 신청
  reservationmgt.reservation_refund = function (req, res) {
    var sql = 'select * from room_reservation where rev_id=?';

    connection.query(sql, req.body.args, function (err, rows, fields) {
      if (err) {
        console.log(err);
        // 추후 에러 핸들러 작성 진행
      } else {
        //예약 승인 상태일 경우에만 실행
        if (rows[0].rev_state == '2') {
          var data;
          var sql = 'UPDATE room_reservation SET rev_state="3" WHERE rev_id=?';
          data = [req.body.args];
          connection.query(sql, data, function (err, rows, fields) {
            if (err) {
              console.log(err);
              // 추후 에러 핸들러 작성 진행
            } else {
              res.send(
                '<script>alert("환불 신청 완료")</script> <script>location.href="/booking_reservation"</script>',
              );
            }
          });
        } else {
          res.send(
            '<script>alert("예약 승인 상태일 경우에만 환불 신청이 가능 합니다.")</script> <script>history.back()</script>',
          );
        }
      }
    });
  };

  //예약 승인
  reservationmgt.reservation_auth = function (req, res) {
    var sql = 'select * from room_reservation where rev_id=?';

    connection.query(sql, req.body.args, function (err, rows, fields) {
      var send_rows = rows;
      if (err) {
        console.log(err);
        // 추후 에러 핸들러 작성 진행
      } else {
        //예약 신청 상태일 경우에만 승인
        if (rows[0].rev_state == '1') {
          var data;
          var sql = 'UPDATE room_reservation SET rev_state="2" WHERE rev_id=?';
          data = [req.body.args];
          connection.query(sql, data, function (err, rows, fields) {
            if (err) {
              console.log(err);
              // 추후 에러 핸들러 작성 진행
            } else {
              sms.auth(send_rows, res);
            }
          });
        } else {
          res.send('예약 신청 상태일 경우에만 승인이 가능 합니다.');
        }
      }
    });
  };

  //환불 승인
  reservationmgt.reservation_refund_auth = function (req, res) {
    var sql =
      "select *, date_format(DATE_sub(rev_lday, INTERVAL 1 DAY), '%Y-%m-%d') AS l_day from (select *, date_format(rev_sday, '%Y-%m-%d') AS s_day from room_reservation)day where rev_id=?";

    connection.query(sql, req.body.args, function (err, rows, fields) {
      if (err) {
        console.log(err);
        // 추후 에러 핸들러 작성 진행
      } else {
        //환불 신청 상태일 경우에만 승인
        var rev_id_split = rows[0].rev_id.split('&');
        var randum_num = Math.floor(Math.random() * 9000) + 1000;
        var rev_sday = rows[0].s_day;
        var rev_lday = rows[0].l_day;

        if (rows[0].rev_state == '3') {
          // 매칭되는 room_reservation 테이블의 예약내역을 last_reservation 테이블로 복사
          var data;
          var sql =
            'INSERT INTO last_reservation(rev_id, rev_roomtype, room_name, user_id, rev_name, rev_phone, rev_sday, rev_lday, rev_charge, rev_cancel, rev_state) VALUES(?,?,?,?,?,?,?,?,?,?,?)';

          data = [
            rows[0].rev_id,
            rows[0].rev_roomtype,
            rows[0].room_name,
            rows[0].user_id,
            rows[0].rev_name,
            rows[0].rev_phone,
            rows[0].rev_sday,
            rows[0].rev_lday,
            rows[0].rev_charge,
            rows[0].rev_cancel,
            5,
          ];

          connection.query(sql, data, function (err, rows, fields) {
            if (err) {
              console.log(err);
              // 추후 에러 핸들러 작성 진행
            } else {
              // 매칭되는 room_reservation 테이블의 예약내역 삭제
              var sql = 'delete from room_reservation where rev_id=?';
              data = [req.body.args];
              connection.query(sql, data, function (err, rows, fields) {
                if (err) {
                  console.log(err);
                  // 추후 에러 핸들러 작성 진행
                } else {
                  // 매칭되는 rev_info 테이블의 예약내역 삭제
                  var data;
                  var sql = 'delete from rev_info where room_name=? and (rev_day between ? and ?)';
                  data = [rev_id_split[1], rev_sday, rev_lday];
                  connection.query(sql, data, function (err, rows, fields) {
                    if (err) {
                      console.log(err);
                      // 추후 에러 핸들러 작성 진행
                    }
                  });
                  res.send('환불 완료로 상태 변경');
                }
              });
            }
          });
        } else {
          res.send('환불 신청 상태일 경우에만 완료처리가 가능 합니다.');
        }
      }
    });
  };

  //방확인
  reservationmgt.room = function (req, res) {
    var sql =
      'select room_management.room_type,room_management.room_name,room_detail.room_lowcharge,room_detail.room_peakcharge,room_management.room_type type_args,room_management.room_name name_args from room_management, room_detail where room_management.room_type=room_detail.room_type;';

    connection.query(sql, function (err, rows, fields) {
      if (err) {
        console.log(err);
        // 추후 에러 핸들러 작성 진행
      } else {
        res.json({
          message: rows,
        });
      }
    });
  };

  //방추가
  reservationmgt.room_insert = function (req, res) {
    var data;
    var sql = 'INSERT INTO room_management(room_type, room_name) VALUES(?,?)';

    data = [req.body.room_type, req.body.room_name];
    connection.query(sql, data, function (err, rows, fields) {
      if (err) {
        console.log(err);
        // 추후 에러 핸들러 작성 진행
        res.send('<script>alert("방 추가 실패")</script> <script>history.back()</script>');
      } else {
        var sql = 'select room_cnt from room_detail where room_type=?';

        connection.query(sql, req.body.room_type, function (err, rows, fields) {
          if (err) {
            console.log(err);
            // 추후 에러 핸들러 작성 진행
          } else {
            var data;
            data = [rows[0].room_cnt + 1, req.body.room_type];
            var sql = 'UPDATE room_detail SET room_cnt=? where room_type=?';

            connection.query(sql, data, function (err, rows, fields) {
              if (err) {
                console.log(err);
                // 추후 에러 핸들러 작성 진행
              } else {
                res.send('<script>alert("방 추가 완료")</script> <script>location.href="/admin/admin_room"</script>');
              }
            });
          }
        });
      }
    });
  };
  //방삭제
  reservationmgt.room_del = function (req, res) {
    var sql = 'delete from room_management where room_name=?';

    connection.query(sql, req.body.args, function (err, rows, fields) {
      if (err) {
        console.log(err);
        res.send('방 삭제 실패');
      } else {
        var sql = 'select room_cnt from room_detail where room_type=?';
        connection.query(sql, req.body.args2, function (err, rows, fields) {
          if (err) {
            console.log(err);
            // 추후 에러 핸들러 작성 진행
          } else {
            var data;
            data = [rows[0].room_cnt - 1, req.body.args2];
            var sql = 'UPDATE room_detail SET room_cnt=? where room_type=?';

            connection.query(sql, data, function (err, rows, fields) {
              if (err) {
                console.log(err);
                // 추후 에러 핸들러 작성 진행
              } else {
                res.send('방 삭제 완료');
              }
            });
          }
        });
      }
    });
  };

  return reservationmgt;
})();
