/* 내부 모듈 */
const home_admin = require('../../lib/home_admin');

/* express 생성하기 */
const express = require('express');
const router = express.Router();

/* navbar 변수 */
const title = '캠핑장 소개';
const menus = [
  {
    name: '내안의 숲 소개',
    href: '/campinginfo',
  },
  {
    name: '주변 관광지',
    href: '/campinginfo/near',
  },
  {
    name: '찾아오시는 길',
    href: '/campinginfo/map',
  },
];

/* 라우터 설정 */
// 캠핑장 소개 - 내안의 숲 소개 페이지
router.get('/', function (req, res, next) {
  res.locals.session = req.session;
  res.locals.adarr = home_admin.get_adlist();
  res.locals.title = title;
  res.locals.menu = '내안의 숲 소개';
  res.locals.content = '충남 부여군에 위치한 내안의 숲 캠핑장을 소개합니다.';
  res.locals.menus = menus;
  res.locals.file = './camping/index.html';

  res.render('info');
});

// 캠핑장 소개 - 주변 관광지 페이지
router.get('/near', function (req, res, next) {
  res.locals.session = req.session;
  res.locals.adarr = home_admin.get_adlist();
  res.locals.title = title;
  res.locals.menu = '주변 관광지';
  res.locals.content = '내안의 숲 주변관광지를 소개합니다.';
  res.locals.menus = menus;
  res.locals.file = './camping/near.html';

  res.render('info');
});

// 캠핑장 소개 - 찾아오시는 길 페이지
router.get('/map', function (req, res, next) {
  res.locals.session = req.session;
  res.locals.adarr = home_admin.get_adlist();
  res.locals.title = title;
  res.locals.menu = '찾아오시는 길';
  res.locals.content = '내안의 숲 찾아오시는 길입니다.';
  res.locals.menus = menus;
  res.locals.file = './camping/map.html';

  res.render('info');
});

module.exports = router;
