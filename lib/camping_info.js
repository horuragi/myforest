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

//Start
var mysql = require('./mysql2');
var multer = require('multer');
var path = require('path');
var picture_storage = multer.diskStorage({
  destination: 'public/camp_image',
  filename: function (req, file, cb) {
    var d = new Date();
    var date = d.format('yyyy_MM_dd_HH_mm_ss');
    var picturename = decodeURIComponent(req.params.picname);
    var filename = picturename + date + path.extname(file.originalname);
    var sql = "select * from camping_info where Field = '" + picturename + "'";

    var handler = function (req, res, result) {
      var sql2 = 'update camping_info set picture=? where Field = ?';
      var data;
      if (result[0].picture == '') {
        var arr = new Array();
        var obj = new Object();
        obj.filename = filename;
        arr.push(obj);
        var str = JSON.stringify(arr);
        data = [str, picturename];
      } else {
        var arr = JSON.parse(result[0].picture);
        var obj = new Object();
        obj.filename = filename;
        arr.push(obj);
        var str = JSON.stringify(arr);
        data = [str, picturename];
      }
      mysql.put(sql2, data, req, '', handler2, errhandler);
    };
    var errhandler = function (res, err) {
      console.log(err);
      throw err;
    };
    var handler2 = function (req, res) {
      console.log('Picture Logic Success');
      cb(null, filename);
    };
    mysql.zero_get(sql, req, '', handler, errhandler);
  },
});

var picture_upload = multer({
  storage: picture_storage,
  onError: function (err, next) {
    console.log('error', err);
    next(err);
  },
});

module.exports = (function () {
  var camping_info = {};

  camping_info.get = function (req, res, handler, errhandler) {
    var sql =
      'select * from camping_info inner join room_detail on camping_info.Field = room_detail.room_type inner join page_info on camping_info.Field = page_info.pagename order by camping_info.id;';

    mysql.zero_get(sql, req, res, handler, errhandler);
  };

  camping_info.update = function (req, res, handler, errhandler) {
    var sql =
      'update camping_info a inner join room_detail b on a.Field = b.room_type set a.standnum=?,a.maxnum=?,b.room_peakcharge=?,b.room_lowcharge=?,a.coption=? where a.id=?';
    var data = [
      req.body.standnum,
      req.body.maxnum,
      req.body.peakcharge,
      req.body.lowcharge,
      req.body.coption,
      req.body.id,
    ];

    mysql.put(sql, data, req, res, handler, errhandler);
  };

  camping_info.pic_insert = function () {
    return picture_upload;
  };

  camping_info.pic_delete = function (req, res) {
    console.log(req.params.number);
    console.log(req.params.roomtype);
    var sql = "select * from camping_info where Field = '" + req.params.roomtype + "'";
    var sql2 = 'update camping_info set picture=? where Field = ?';
    var handler = function (req, res, result) {
      console.log(result.length);
      var arr = JSON.parse(result[0].picture);
      if (arr.length < 2) {
        var data = ['', req.params.roomtype];
      } else {
        arr.splice(req.params.number - 1, 1);
        var str = JSON.stringify(arr);
        var data = [str, req.params.roomtype];
      }
      mysql.put(sql2, data, req, res, handler2, errhandler);
    };
    var handler2 = function (req, res) {
      console.log('pic_delete success');
      res.send({ result: 'Success' });
    };
    var errhandler = function (res, err) {
      res.send({ result: err });
    };

    mysql.zero_get(sql, req, res, handler, errhandler);
  };

  camping_info.explan_update = function (req, res) {
    console.log('[explan_update edit]');

    var queryString = 'update page_info set pagetext = ? where pagename = ?';

    var edithandler = function (req, res) {
      res.redirect('/admin/camping_info/' + req.params.roomtype);
    };

    var errhandler = function (res, err) {
      console.log(err);
      res.end(err);
    };

    var body = req.body;
    mysql.put(queryString, [body.ir1, req.params.roomtype], req, res, edithandler, errhandler);
  };

  camping_info.refund_update = function (req, res, handler, errhandler) {};

  return camping_info;
})();
