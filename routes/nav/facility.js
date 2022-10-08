/* 내부 모듈 */
const camping_info = require('../../lib/camping_info');
const home_admin = require('../../lib/home_admin');

/* express 생성하기 */
const express = require('express');
const router = express.Router();

const title = '시설 소개';
const menus = [
  {
    name: '캠핑장 안내도',
    href: '/facilityinfo',
  },
  {
    name: '방갈로 소개',
    href: '/facilityinfo/bungalow',
  },
  {
    name: '데크사이트 소개',
    href: '/facilityinfo/decksite',
  },
  {
    name: '펜션 소개',
    href: '/facilityinfo/pension',
  },
];

// 시설 소개 - 캠핑장 안내도 페이지
router.get('/', function (req, res, next) {
  const adarr = home_admin.get_adlist();
  const handler = function (req, res, result) {
    replaceField(result);
    const idxv = generateidx(req.params.roomtype);

    res.locals.session = req.session;
    res.locals.adarr = adarr;
    res.locals.data = result;
    res.locals.params = req.params;
    res.locals.idx = idxv;

    res.locals.title = title;
    res.locals.menu = '캠핑장 안내도';
    res.locals.content = '캠핑장 안내입니다.';
    res.locals.menus = menus;
    res.locals.file = './facility/index.html';
    res.render('info');
  };

  const errhandler = function (res, err) {
    console.log(err);
    res.end(err);
  };
  camping_info.get(req, res, handler, errhandler);
});

// 시설 소개 - 방갈로 소개 페이지
router.get('/bungalow', function (req, res, next) {
  const adarr = home_admin.get_adlist();
  const handler = function (req, res, result) {
    replaceField(result);
    const idxv = generateidx(req.params.roomtype);

    res.locals.session = req.session;
    res.locals.adarr = adarr;
    res.locals.data = result;
    res.locals.params = req.params;
    res.locals.idx = idxv;

    res.locals.title = title;
    res.locals.menu = '방갈로 소개';
    res.locals.content = '방갈로 소개입니다.';
    res.locals.menus = menus;
    res.locals.file = './facility/bungalow.html';
    res.render('info');
  };

  const errhandler = function (res, err) {
    console.log(err);
    res.end(err);
  };
  camping_info.get(req, res, handler, errhandler);
});

// 시설 소개 - 데스크 사이트 소개 페이지
router.get('/decksite', function (req, res, next) {
  const adarr = home_admin.get_adlist();
  const handler = function (req, res, result) {
    replaceField(result);
    const idxv = generateidx(req.params.roomtype);

    res.locals.session = req.session;
    res.locals.adarr = adarr;
    res.locals.data = result;
    res.locals.params = req.params;
    res.locals.idx = idxv;

    res.locals.title = title;
    res.locals.menu = '데크사이트 소개';
    res.locals.content = '데크사이트 소개입니다.';
    res.locals.menus = menus;
    res.locals.file = './facility/decksite.html';
    res.render('info');
  };

  const errhandler = function (res, err) {
    console.log(err);
    res.end(err);
  };
  camping_info.get(req, res, handler, errhandler);
});

// 시설 소개 - 펜션 소개 페이지
router.get('/pension', function (req, res, next) {
  const adarr = home_admin.get_adlist();
  const handler = function (req, res, result) {
    replaceField(result);
    const idxv = generateidx(req.params.roomtype);

    res.locals.session = req.session;
    res.locals.adarr = adarr;
    res.locals.data = result;
    res.locals.params = req.params;
    res.locals.idx = idxv;

    res.locals.title = title;
    res.locals.menu = '펜션 소개';
    res.locals.content = '펜션 소개입니다.';
    res.locals.menus = menus;
    res.locals.file = './facility/pension.html';
    res.render('info');
  };

  const errhandler = function (res, err) {
    console.log(err);
    res.end(err);
  };
  camping_info.get(req, res, handler, errhandler);
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
