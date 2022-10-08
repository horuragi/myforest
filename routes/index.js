/* 외부 모듈 */
var multer = require('multer');
var storage2 = multer.diskStorage({
  destination: 'upload/image/',
  filename: function (req, file, cb) {
    var date = getdate.get();
    cb(null, date + file.originalname);
  },
});
var upload = multer({
  storage: storage2,
  onError: function (err, next) {
    console.log('error', err);
    next(err);
  },
});

/* 내부 모듈 */
var jsboard = require('../lib/jsboard');
var getdate = require('../lib/getdate');
var camping_info = require('../lib/camping_info');
var naver_credential = require('../lib/config/naver_log_config');
var naverlogin = require('../lib/naverlogin');
var home_admin = require('../lib/home_admin');

/* express 생성하기 */
var express = require('express');
var router = express.Router();

/* 라우터 설정 */
// 메인 페이지
router.get('/', function (req, res, next) {
  const adarr = home_admin.get_adlist(); // 광고 목록
  const renderPage = 'index';

  naverlogin.login(req, res, renderPage, adarr);
});
router.get('/main', function (req, res, next) {
  res.redirect('/');
});

// 내 안의 숲 회원가입 동의서 페이지
router.get('/register', function (req, res, next) {
  renderPage = 'register';
  res.render(renderPage, { session: req.session });
});

// 무슨 페이지 인지 잘 모르겠음
router.get('/register_ok', function (req, res, next) {
  naverlogin.register(req, res);
});

router.post('/file_uploader', upload.array('file', 10), function (req, res, next) {
  console.log(req.files[0].filename);
  res.end('&bNewLine=true&sFileName=' + req.files[0].filename + '&sFileURL=' + '/image/' + req.files[0].filename);
});

// [Bug] naver_callback 을 호출하는 부분이 없는데, 왜 있는지 의문
router.get('/naver_callback', function (req, res, next) {
  naverlogin.registerCheck(req, res);
});

// [Bug] timer 를 호출하는 부분이 없는데, 왜 있는지 의문
router.get('/timer', function (req, res, next) {
  var adarr = home_admin.get_adlist();
  renderPage = 'timer';
  if (req.session.logined == 'yes') {
    res.render(renderPage, { session: req.session, adarr: adarr });
  } else {
    res.send(
      `<script>alert(\"로그인 하셔야 이용가능합니다.\");</script><script>location.href=\"https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naver_credential.client_id}&redirect_uri=${naver_credential.callback_uri}&state=66467&svctype=0\";</script>`,
    );
  }
});

// 실시간 예약 - 현재 예약 정보 페이지
router.get('/booking_reservation', function (req, res, next) {
  var adarr = home_admin.get_adlist();
  renderPage = 'booking_reservation';
  res.render(renderPage, { session: req.session, adarr: adarr });
});

router.post('/booking_reservation', function (req, res, next) {
  var adarr = home_admin.get_adlist();
  renderPage = 'booking_reservation_nologin';
  var username = req.body.username;
  var userphone = req.body.userphone;
  if (username == '' || username == undefined || userphone == '' || userphone == undefined) {
    res.send(
      '<script>alert("이름과 휴대폰번호를 입력해주세요.");</script><script>location.href="/booking_reservation";</script>',
    );
  } else {
    res.render(renderPage, {
      session: req.session,
      adarr: adarr,
      username: username,
      userphone: userphone,
    });
  }
});

// 실시간 예약 - 이전 예약 정보 페이지
router.get('/last_reservation', function (req, res, next) {
  var adarr = home_admin.get_adlist();
  renderPage = 'last_reservation';
  res.render(renderPage, { session: req.session, adarr: adarr });
});

// 무슨 페이지인지 잘 모르겠음
router.get('/particle_list/:btype', function (req, res, next) {
  var board_type = req.params.btype;
  console.log(board_type);
  jsboard.particle_list(req, res, board_type);
});

function logincheck(req, res, renderPage) {
  var adarr = home_admin.get_adlist();

  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    console.log(req.body.room_twoprice);
    if (req.body.room_twoprice != '0') {
      console.log('twoprice');
      res.render(renderPage, {
        f_day: req.body.f_day,
        l_day: req.body.l_day,
        price: req.body.room_price,
        twoprice: req.body.room_twoprice,
        days: req.body.days,
        sec_day: req.body.sec_day,
        session: req.session,
        adarr: adarr,
        data: result,
        params: req.params,
        idx: idxv,
      });
    } else {
      res.render(renderPage, {
        f_day: req.body.f_day,
        l_day: req.body.l_day,
        price: req.body.room_price,
        days: req.body.days,
        sec_day: req.body.sec_day,
        session: req.session,
        adarr: adarr,
        data: result,
        params: req.params,
        idx: idxv,
      });
    }
  };

  var errhandler = function (res, err) {
    console.log(err);
    res.end(err);
  };
  camping_info.get(req, res, handler, errhandler);
}

// 실시간 예약 - 요금 안내 페이지
router.get('/booking_price', function (req, res, next) {
  var adarr = home_admin.get_adlist();
  renderPage = 'booking_price';
  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    res.render(renderPage, {
      session: req.session,
      adarr: adarr,
      data: result,
      params: req.params,
      idx: idxv,
    });
  };

  var errhandler = function (res, err) {
    console.log(err);
    res.end(err);
  };
  camping_info.get(req, res, handler, errhandler);
});

// 실시간 예약 - 예약 하기 페이지
router.get('/booking', function (req, res, next) {
  var adarr = home_admin.get_adlist();
  renderPage = 'Booking';
  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    res.render(renderPage, {
      session: req.session,
      adarr: adarr,
      data: result,
      params: req.params,
      idx: idxv,
    });
  };

  var errhandler = function (res, err) {
    console.log(err);
    res.end(err);
  };
  camping_info.get(req, res, handler, errhandler);
});

// 방갈로 꾀꼬리
router.post('/nightingale', function (req, res, next) {
  renderPage = 'booking_nightingale';
  logincheck(req, res, renderPage);
});

// 파랑새
router.post('/bluebird', function (req, res, next) {
  renderPage = 'booking_bluebird';
  logincheck(req, res, renderPage);
});

// 부엉이
router.post('/owl', function (req, res, next) {
  renderPage = 'booking_owl';
  logincheck(req, res, renderPage);
});

// 뻐꾸기
router.post('/cuckoo', function (req, res, next) {
  renderPage = 'booking_cuckoo';
  logincheck(req, res, renderPage);
});

// 소쩍새
router.post('/scops_owl', function (req, res, next) {
  renderPage = 'booking_scops_owl';
  logincheck(req, res, renderPage);
});

// 데크 사이트 너구리
router.post('/raccoon', function (req, res, next) {
  renderPage = 'booking_decksite';
  logincheck(req, res, renderPage);
});

// 사이트 편백 구역
router.post('/site_cypress', function (req, res, next) {
  renderPage = 'booking_site_cypress';
  logincheck(req, res, renderPage);
});

// 사이트 느티나무 구역
router.post('/site_zelkova', function (req, res, next) {
  renderPage = 'booking_site_zelkova';
  logincheck(req, res, renderPage);
});

// 펜션
router.post('/pension', function (req, res, next) {
  renderPage = 'booking_pension';
  logincheck(req, res, renderPage);
});

router.post('/site_grass', function (req, res, next) {
  renderPage = 'booking_site_grass';
  logincheck(req, res, renderPage);
});

router.post('/firstetc', function (req, res, next) {
  renderPage = 'booking_firstetc';
  logincheck(req, res, renderPage);
});

router.post('/secondetc', function (req, res, next) {
  renderPage = 'booking_secondetc';
  logincheck(req, res, renderPage);
});

// 실시간 예약 - 예약 확인 페이지
router.get('/reservation_confirm', function (req, res, next) {
  renderPage = 'reservation_confirm';
  logincheck(req, res, renderPage);
});

// 무슨 페이지인지 잘 모르겠음
router.get('/board_visit/:id/:boardtype', function (req, res) {
  var board_type = req.params.boardtype;
  jsboard.visit(req, res, board_type);
});

router.get('/visit', function (req, res) {
  home_admin.visit(req, res);
});

function replaceField(result) {
  for (var i = 0; i < result.length; i++) {
    switch (result[i].Field) {
      case 'bluebird':
        result[i].Field = '파랑새';
        break;
      case 'owl':
        result[i].Field = '부엉이';
        break;
      case 'pension':
        result[i].Field = '펜션';
        break;
      case 'raccoon':
        result[i].Field = '너구리';
        break;
      case 'scops_owl':
        result[i].Field = '소쩍새';
        break;
      case 'site_cypress':
        result[i].Field = '사이트[편백]';
        break;
      case 'site_zelkova':
        result[i].Field = '사이트[느티]';
        break;
      case 'cuckoo':
        result[i].Field = '뻐꾸기';
        break;
      case 'nightingale':
        result[i].Field = '꾀꼬리';
        break;
      default:
        break;
    }
  }
}
function generateidx(roomtype) {
  switch (roomtype) {
    case 'bluebird':
      return 0;
      break;
    case 'owl':
      return 1;
      break;
    case 'pension':
      return 2;
      break;
    case 'raccoon':
      return 3;
      break;
    case 'scops_owl':
      return 4;
      break;
    case 'site_cypress':
      return 5;
      break;
    case 'site_zelkova':
      return 6;
      break;
    case 'cuckoo':
      return 7;
      break;
    case 'nightingale':
      return 8;
      break;
    case 'site_grass':
      return 9;
      break;
    case 'firstetc':
      return 10;
      break;
    case 'secondetc':
      return 11;
      break;
    default:
      return 0;
      break;
  }
}

module.exports = router;
