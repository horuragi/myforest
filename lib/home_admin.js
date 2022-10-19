Date.prototype.format = function (f) {
  if (!this.valueOf()) return ' ';

  var weekName = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  var d = this;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case 'yyyy':
        return d.getFullYear();
      case 'yy':
        return (d.getFullYear() % 1000).zf(2);
      case 'MM':
        return (d.getMonth() + 1).zf(2);
      case 'dd':
        return d.getDate().zf(2);
      case 'E':
        return weekName[d.getDay()];
      case 'HH':
        return d.getHours().zf(2);
      case 'hh':
        return ((h = d.getHours() % 12) ? h : 12).zf(2);
      case 'mm':
        return d.getMinutes().zf(2);
      case 'ss':
        return d.getSeconds().zf(2);
      case 'a/p':
        return d.getHours() < 12 ? '오전' : '오후';
      default:
        return $1;
    }
  });
};

String.prototype.string = function (len) {
  var s = '',
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};
String.prototype.zf = function (len) {
  return '0'.string(len - this.length) + this;
};
Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};

var fs = require('fs');
var multer = require('multer');
var path = require('path');
var mysql = require('./mysql');
var ejs = require('ejs');
var admin_storage = multer.diskStorage({
  destination: 'adminupload/adverimages',
  filename: function (req, file, cb) {
    var exist = fs.existsSync('adminupload/advertise.txt');
    var adurl = decodeURIComponent(req.params.adurl);

    if (exist) {
      var d = new Date();
      var date = d.format('yyyy_MM_dd_HH_mm_ss');
      var data = fs.readFileSync('adminupload/advertise.txt', 'utf8');
      var arr = JSON.parse(data);
      var fname = 'advertise';
      var obj = new Object();
      obj.filename = fname + date + path.extname(file.originalname);
      obj.adurl = adurl;
      arr.push(obj);
      var str = JSON.stringify(arr);
      fs.writeFile('adminupload/advertise.txt', str, function (err) {
        if (err) {
          console.log(err);
          throw err;
        }
        cb(null, fname + date + path.extname(file.originalname));
      });
    } else {
      var d = new Date();
      var date = d.format('yyyy_MM_dd_HH_mm_ss');
      var arr = new Array();
      var obj = new Object();
      var fname = 'advertise';
      obj.filename = fname + date + path.extname(file.originalname);
      obj.adurl = adurl;
      arr.push(obj);
      var str = JSON.stringify(arr);
      fs.writeFile('adminupload/advertise.txt', str, function (err) {
        if (err) {
          console.log(err);
          throw err;
        }
        cb(null, fname + date + path.extname(file.originalname));
      });
    }
  },
});

var admin_upload = multer({
  storage: admin_storage,
  onError: function (err, next) {
    console.log('error', err);
    next(err);
  },
});

module.exports = (function () {
  var home_admin = {};

  home_admin.userlist = function (req, res) {
    var page_size = 10;

    var page_list_size = 10;

    var no = '';

    var totalPageCount = 0;

    var queryString = 'select count(*) as cnt from user';

    var listhandler = function (req, res, data) {
      totalPageCount = data[0].cnt;

      var curPage = req.params.cur;

      if (totalPageCount < 0) {
        totalPageCount = 0;
      }

      var totalPage = Math.ceil(totalPageCount / page_size); // 전체 페이지수
      var totalSet = Math.ceil(totalPage / page_list_size); //전체 세트수
      var curSet = Math.ceil(curPage / page_list_size); // 현재 셋트 번호
      var startPage = (curSet - 1) * 10 + 1; //현재 세트내 출력될 시작 페이지
      var endPage = startPage + page_list_size - 1; //현재 세트내 출력될 마지막 페이지

      if (curPage < 0) {
        no = 0;
      } else {
        no = (curPage - 1) * 10;
      }

      var result2 = {
        curPage: curPage,
        page_list_size: page_list_size,
        page_size: page_size,
        totalPage: totalPage,
        totalSet: totalSet,
        curSet: curSet,
        startPage: startPage,
        endPage: endPage,
      };

      fs.readFile('./views/admin_users.html', 'utf-8', function (error, data) {
        if (error) {
          console.log('ejs오류' + error);
          res.send(error);
          return;
        }

        var queryString =
          "select idx,id,nickname,name,date_format(regdate, '%Y-%m-%d') as regdate from user order by idx desc limit " +
          no +
          ',' +
          page_size;

        var errhandler = function (res, err) {
          console.log(err);
          res.end(err);
        };

        var handler = function (req, res, result) {
          res.send(
            ejs.render(data, {
              data: result,
              pasing: result2,
              filename: 'views/admin_users.html',
              session: req.session,
            }),
          );
        };

        mysql.zero_get(queryString, req, res, handler, errhandler);
      });
    };

    var errhandler = function (res, err) {
      console.log(err);
      res.end(err);
    };

    mysql.zero_get(queryString, req, res, listhandler, errhandler);
  };

  home_admin.userdel = function (req, res) {
    var idx = req.params.idx;
    var queryString = 'delete from user where idx=?';
    var deletehandler = function (req, res) {
      res.redirect('/admin/admin_users/passing/1');
    };
    var errhandler = function (req, res) {
      console.log(err);
      res.end(err);
    };

    mysql.put(queryString, [idx], req, res, deletehandler, errhandler);
  };

  home_admin.adadd = function () {
    return admin_upload;
  };

  home_admin.addel = function (req, res) {
    //var num = 3;
    console.log('test : ' + req.params.id);
    var str = '';
    var num = req.params.id;
    var data = fs.readFileSync('adminupload/advertise.txt', 'utf8');
    var arr = JSON.parse(data);
    if (arr.length == 1) {
      fs.unlinkSync('adminupload/advertise.txt');
      res.send('<script>location.href="/admin/admin_advertise"</script>"');
    } else {
      arr.splice(num - 1, 1);
      str = JSON.stringify(arr);
      fs.writeFile('adminupload/advertise.txt', str, function (err) {
        if (err) {
          console.log('addel fail');
          res.send('<script>location.href="/admin/admin_advertise"</script>"');
        } else {
          console.log('addel success');
          res.send('<script>location.href="/admin/admin_advertise"</script>"');
        }
      });
    }
  };

  home_admin.adlist = function (req, res) {
    var exist = fs.existsSync('adminupload/advertise.txt');
    var arr = new Array();
    if (exist) {
      var data = fs.readFileSync('adminupload/advertise.txt', 'utf8');
      arr = JSON.parse(data);
    }
    res.json({ result: arr });
  };

  home_admin.get_adlist = function () {
    var exist = fs.existsSync('adminupload/advertise.txt');
    var arr = new Array();
    if (exist) {
      var data = fs.readFileSync('adminupload/advertise.txt', 'utf8');
      arr = JSON.parse(data);
    }
    return arr;
  };

  home_admin.visit = function (req, res) {
    var ipaddr = getClientIp(req);
    console.log(ipaddr);
    var d = new Date();
    var date = d.format('yyyy-MM-dd');
    var errhandler = function (res, err) {
      console.log(err);
      res.json({ result: err });
    };
    var handler = function (req, res, rows) {
      if (!rows.length) {
        var putsql = 'insert into visit(ip_address,referer) values(?,?)';
        var data = [ipaddr, req.headers.referer];
        var puthandler = function (req, res) {
          console.log('visit');
          res.json({ result: 'success' });
        };
        mysql.put(putsql, data, req, res, puthandler, errhandler);
      } else {
        res.json({ result: 'already' });
      }
    };
    var sql = 'select * from visit where ip_address="' + ipaddr + '" and regdate like "' + date + '%"';
    mysql.zero_get(sql, req, res, handler, errhandler);
  };

  home_admin.get_visit_list = function (req, res) {
    console.log('[home_admin get_list]');
    var page_size = 10;
    var page_list_size = 10;

    var no = '';
    var today = req.params.date;
    if (today == 'today') {
      var d = new Date();
      var date = d.format('yyyy-MM-dd');
      today = date;
    }
    var totalPageCount = 0;
    var queryString = 'select count(*) as cnt from visit where regdate like "' + today + '%"';
    var listhandler = function (req, res, data) {
      totalPageCount = data[0].cnt;

      var curPage = req.params.cur;

      if (totalPageCount < 0) {
        totalPageCount = 0;
      }

      var totalPage = Math.ceil(totalPageCount / page_size); // 전체 페이지수
      var totalSet = Math.ceil(totalPage / page_list_size); //전체 세트수
      var curSet = Math.ceil(curPage / page_list_size); // 현재 셋트 번호
      var startPage = (curSet - 1) * 10 + 1; //현재 세트내 출력될 시작 페이지
      var endPage = startPage + page_list_size - 1; //현재 세트내 출력될 마지막 페이지

      if (curPage < 0) {
        no = 0;
      } else {
        no = (curPage - 1) * 10;
      }

      var result2 = {
        curPage: curPage,
        page_list_size: page_list_size,
        page_size: page_size,
        totalPage: totalPage,
        totalSet: totalSet,
        curSet: curSet,
        startPage: startPage,
        endPage: endPage,
        totalPageCount: totalPageCount,
      };

      fs.readFile('./views/admin_visit.html', 'utf-8', function (error, data) {
        if (error) {
          console.log('ejs오류' + error);
          res.send(error);
          return;
        }

        var queryString =
          "select id,ip_address,referer,date_format(regdate, '%Y-%m-%d') as regdate from visit where regdate like \"" +
          today +
          '%" order by id desc limit ' +
          no +
          ',' +
          page_size;

        var errhandler = function (res, err) {
          console.log(err);
          res.end(err);
        };

        var handler = function (req, res, result) {
          res.send(
            ejs.render(data, {
              data: result,
              pasing: result2,
              filename: 'views/admin_visit.html',
              session: req.session,
              today: today,
            }),
          );
        };

        mysql.zero_get(queryString, req, res, handler, errhandler);
      });
    };

    var errhandler = function (res, err) {
      console.log(err);
      res.end(err);
    };

    mysql.zero_get(queryString, req, res, listhandler, errhandler);
  };

  var getClientIp = function (req) {
    var ip = (req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
    ip = ip.split(':').slice(-1);
    return ip;
  };
  function getClientIp(req) {
    var ip = req.headers['x-forwarded-for'];
    ip = ip.split(',')[0];
    ip = ip.split(':').slice(-1); //in case the ip returned in a format: "::ffff:146.xxx.xxx.xxx"
    return ip;
  }

  return home_admin;
})();
