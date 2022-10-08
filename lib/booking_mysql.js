var mysql = require('mysql');
var moment = require('moment');
var config = require('./config/db_config');

var connection_pool = mysql.createPool(config.getConfig('myforest'));

module.exports = (function () {
  var connection = {};

  connection.put = function (sql, data, req, res, handler, errhandler) {
    connection_pool.getConnection(function (err, connection) {
      if (err) {
        console.log('error:' + err);
        errhandler(res, err);
      } else {
        connection.query(sql, data, function (err, rows) {
          if (err) {
            console.log('error:' + err);
            errhandler(res, err);
            connection.release();
          } else {
            handler(req, res);
            connection.release();
          }
        });
      }
    });
  };

  connection.reserveput = function (sql, data, req, res, handler) {
    connection_pool.getConnection(function (err, connection) {
      if (err) {
        console.log('error:' + err);
        errhandler(res, err);
      } else {
        connection.query(sql, data, function (err, rows) {
          if (err) {
            console.log('error:' + err);
            data = data[0];
            sql = 'update room_cnt set room_cnt=room_cnt+1 where rev_id=?';
            connection.query(sql, data, function (err, rows) {
              if (err) {
                console.log('error:' + err);
              } else {
                console.log('Mysql Success !');
                handler(req, res);
                connection.release();
              }
            });
          } else {
            console.log('Mysql Success !');
            handler(req, res);
            connection.release();
          }
        });
      }
    });
  };

  // 각 방별 최대 count 및 성수기 비수기 가격 조회 #room_count
  connection.reserveget = function (res, sql, errhandler, result) {
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
            console.log('Mysql room_count Success !');
            result(rows);
            connection.release();
          }
        });
      }
    });
  };

  // mysql query # query
  connection.query_get = function (res, sql, errhandler, result) {
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
            console.log('Mysql query Success !');
            result(rows);
            connection.release();
          }
        });
      }
    });
  };

  // mysql query # query_put
  connection.data_put = function (res, sql, data, rev_handler, result) {
    connection_pool.getConnection(function (err, connection) {
      if (err) {
        console.log('error:' + err);
        rev_handler(res, err);
      } else {
        connection.query(sql, data, function (err, rows) {
          if (err) {
            console.log('error:' + err);
            rev_handler(res, err);
            result('false');
            connection.release();
          } else {
            console.log('Mysql query_put Success !');
            result('true');
            connection.release();
          }
        });
      }
    });
  };

  // mysql query get
  connection.reservegetdata = function (res, sql, data, errhandler, result) {
    connection_pool.getConnection(function (err, connection) {
      if (err) {
        console.log('error:' + err);
        errhandler(res, err);
      } else {
        connection.query(sql, data, function (err, rows) {
          if (err) {
            console.log('error:' + err);
            errhandler(res, err);
            connection.release();
          } else {
            console.log('Mysql max_count Success !');
            result(rows);
            connection.release();
          }
        });
      }
    });
  };

  // 각 방별 최대 count 및 성수기 비수기 가격 조회 #room_price
  connection.room_info = function (res, sql, errhandler, result) {
    //var room_info;
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
            console.log('Mysql room_price Success !');
            var room_info = {
              bluebird: rows[0].room_cnt,
              bluebird_price: 0,
              cuckoo: rows[1].room_cnt,
              cuckoo_price: 0,
              nightingale: rows[3].room_cnt,
              nightingale_price: 0,
              owl: rows[4].room_cnt,
              owl_price: 0,
              pension: rows[5].room_cnt,
              pension_price: 0,
              raccoon: rows[6].room_cnt,
              raccoon_price: 0,
              scops_owl: rows[7].room_cnt,
              scops_owl_price: 0,
              site_cypress: rows[9].room_cnt,
              site_cypress_price: 0,
              site_zelkova: rows[11].room_cnt,
              site_zelkova_price: 0,
              firstetc: rows[2].room_cnt,
              firstetc_price: 0,
              secondetc: rows[8].room_cnt,
              secondetc_price: 0,
              site_grass: rows[10].room_cnt,
              site_grass_price: 0,
            };

            result(room_info);
            connection.release();
          }
        });
      }
    });
  };

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
              bluebird: rows[0].room_cnt,
              cuckoo: rows[1].room_cnt,
              nightingale: rows[2].room_cnt,
              owl: rows[3].room_cnt,
              pension: rows[4].room_cnt,
              raccoon: rows[5].room_cnt,
              scops_owl: rows[6].room_cnt,
              site_cypress: rows[7].room_cnt,
              site_zelkova: rows[8].room_cnt,
            };
            result(room_info);
            connection.release();
          }
        });
      }
    });
  };

  // main_index, rom_cnt 조회 #index_cnt
  connection.day_cal = function (res, sql, rooms, errhandler, result) {
    var resultdata = new Array();
    var tmp;
    connection_pool.getConnection(function (err, connection) {
      if (err) {
        console.log('error:' + err);
        errhandler(res, err);
      } else {
        for (var i = 0; i < 10; i++) {
          (function (i) {
            connection.query(sql, moment().add('days', i).format('YYYY[-]MM[-]DD'), function (err, rows) {
              if (err) {
                console.log('error:' + err);
                errhandler(res, err);
                connection.release();
              } else {
                tmp = Object.assign({}, rooms);
                //console.log(moment().add('days',i).format('YYYY[-]MM[-]DD'));
                //console.log(moment().add('days',i).format('YYYY[-]MM[-]DD'))
                for (const i in rows) {
                  switch (rows[i].room_type) {
                    case 'nightingale':
                      tmp.nightingale = tmp.nightingale - rows[i].room_cnt;
                      break;
                    case 'bluebird':
                      tmp.bluebird = tmp.bluebird - rows[i].room_cnt;
                      break;
                    case 'owl':
                      tmp.owl = tmp.owl - rows[i].room_cnt;
                      break;
                    case 'cuckoo':
                      tmp.cuckoo = tmp.cuckoo - rows[i].room_cnt;
                      break;
                    case 'scops_owl':
                      tmp.scops_owl = tmp.scops_owl - rows[i].room_cnt;
                      break;
                    case 'site_cypress':
                      tmp.site_cypress = tmp.site_cypress - rows[i].room_cnt;
                      break;
                    case 'site_zelkova':
                      tmp.site_zelkova = tmp.site_zelkova - rows[i].room_cnt;
                      break;
                    case 'raccoon':
                      tmp.raccoon = tmp.raccoon - rows[i].room_cnt;
                      break;
                    case 'pension':
                      tmp.pension = tmp.pension - rows[i].room_cnt;
                      break;
                    default:
                      var err = 'room_inquiry Mysql Result Value Error';
                      errhandler(res, err);
                      break;
                  }
                }
                resultdata.push(JSON.stringify(tmp));
                //console.log("Mysql Success !");

                if (i == 9) {
                  result(resultdata);
                }
              }
            });
          })(i);
        }
      }
    });
  };

  return connection;
})();
