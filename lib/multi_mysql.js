var mysql = require('mysql');
var config = require('./config/db_config');
var connection_pool = mysql.createPool(config.getConfig('myforest'));

module.exports = (function () {
  var connection = {};

  // 각 방별 최대 count 조회 #rooms_count
  connection.day_info = function (res, sql, errhandler, result) {
    connection_pool.getConnection(function (err, connection) {
      if (err) {
        console.log('error:' + err);
        errhandler(res, err);
      } else {
        connection.query(sql, function (err, rows) {
          if (err) {
            console.log('error:' + err);
            errhandler(res, err);
            connection.release();
          } else {
            console.log('Mysql rooms_count Success !');
            var room_info = {
              bungalow: rows[0].room_cnt + rows[1].room_cnt + rows[3].room_cnt + rows[4].room_cnt + rows[7].room_cnt,
              site: rows[9].room_cnt + rows[11].room_cnt + rows[10].room_cnt,
              decksite: rows[6].room_cnt,
              pension: rows[5].room_cnt,
            };
            result(room_info);
            connection.release();
          }
        });
      }
    });
  };

  // 10일 이내 예약 조회
  connection.day_cal = function (res, sql, errhandler, result) {
    connection_pool.getConnection(function (err, connection) {
      if (err) {
        console.log('error:' + err);
        errhandler(res, err);
      } else {
        connection.query(sql, function (err, rows) {
          if (err) {
            console.log('error:' + err);
            errhandler(res, err);
            connection.release();
          } else {
            result(rows);
            connection.release();
          }
        });
      }
    });
  };

  return connection;
})();
