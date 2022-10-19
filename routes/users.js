/* 내부 모듈 */
var naver_credential = require('../lib/config/naver_log_config');

/* express 생성하기 */
var express = require('express');
var router = express.Router();

/* 라우터 설정 */
// 무슨 페이지인지 잘 모르겠음
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// 로그인
router.get('/login', function (req, res, next) {
  function getRandom() {
    return Math.floor(Math.random() * 99999) + 1;
  }
  var client_id = naver_credential.client_id;
  var callback_uri = naver_credential.callback_uri;
  var redirectURI = encodeURI(callback_uri);
  var state = String(getRandom());
  var api_url =
    'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +
    client_id +
    '&redirect_uri=' +
    redirectURI +
    '&state=' +
    state +
    '&svctype=0';
  res.redirect(api_url);
});

// 로그아웃
router.get('/logout', function (req, res, next) {
  req.session.destroy(function (err) {
    res.redirect('/');
  });
});

module.exports = router;
