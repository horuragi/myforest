/* 외부 모듈 */
const fs = require('fs');
const ejs = require('ejs');

/* 내부 모듈 */
const jsboard = require('../../../lib/jsboard');
const mysql = require('../../../lib/mysql');
const home_admin = require('../../../lib/home_admin');

/* express 생성하기 */
const express = require('express');
const router = express.Router();

/* 라우터 설정 */
// 커뮤니티 - 공지사항 페이지
router.get('/pasing/:cur', function (req, res) {
  jsboard.list(req, res, 'notice');
});
router.get('/', function (req, res) {
  res.redirect('/community/notice/pasing/' + 1);
});

// 삭제
router.get('/delete/:id', function (req, res) {
  jsboard.delete(req, res, 'notice');
});

// 커뮤니티 - 공지사항 등록 페이지
router.get('/insert', function (req, res) {
  const adarr = home_admin.get_adlist();

  fs.readFile('./views/notice_insert.html', 'utf-8', function (error, data) {
    res.send(
      ejs.render(data, {
        boardtype: 'notice',
        filename: 'views/board_insert.html',
        session: req.session,
        adarr: adarr,
      }),
    );
  });
});

router.post('/insert', function (req, res) {
  jsboard.insert(req, res, 'notice');
});

router.get('/edit/:id', function (req, res) {
  const adarr = home_admin.get_adlist();

  const errhandler = function (res, err) {
    res.end(err);
  };

  const queryString = 'select * from notice where id = ' + req.params.id;

  fs.readFile('./views/notice_edit.html', 'utf-8', function (err, data) {
    if (err) {
      res.send(err);
    } else {
      const handler = function (req, res, result) {
        String.prototype.replaceAll = function (org, dest) {
          return this.split(org).join(dest);
        };
        const v = result[0].contents.toString();
        const v2 = v.replaceAll('"', '\\"');
        const v3 = v2.replaceAll("'", "\\'");
        res.send(
          ejs.render(data, {
            data: result[0],
            contents: v3,
            boardtype: 'notice',
            filename: 'views/board_edit.html',
            session: req.session,
            adarr: adarr,
          }),
        );
      };
      mysql.get(queryString, req, res, handler, errhandler);
    }
  });
});

router.post('/edit/:id', function (req, res) {
  jsboard.edit(req, res, 'notice');
});

//글상세보기
router.get('/detail/:id', function (req, res) {
  const adarr = home_admin.get_adlist();

  const errhandler = function (res, err) {
    console.log(err);
    res.end(err);
  };

  var queryString =
    "select id,subject,contents,user_id,user_name,hits,date_format(reg_date, '%Y-%m-%d') as reg_date from notice where id = " +
    req.params.id;
  var queryString2 =
    "select id,board_id,comment,user_id,user_name,date_format(reg_date, '%Y-%m-%d') as reg_date from notice_comment where board_id = " +
    req.params.id;
  fs.readFile('./views/notice_detail.html', 'utf-8', function (err, data) {
    if (err) {
      res.send(err);
    } else {
      const middle_handler = function (req, res, result) {
        const comment_handler = function (req, res, result2) {
          res.send(
            ejs.render(data, {
              data: result[0],
              data2: result2,
              boardtype: 'notice',
              filename: 'views/board_edit.html',
              session: req.session,
              adarr: adarr,
            }),
          );
        };
        mysql.zero_get(queryString2, req, res, comment_handler, errhandler);
      }; //middle handler

      const handler = function (req, res, result) {
        middle_handler(req, res, result);
      }; // handler

      mysql.get(queryString, req, res, handler, errhandler);
    }
  });
});

router.post('/comment/insert', function (req, res, next) {
  jsboard.comment_insert(req, res, 'notice');
});

router.get('/comment/delete/:id/:board_id', function (req, res, next) {
  jsboard.comment_delete(req, res, 'notice');
});

module.exports = router;
