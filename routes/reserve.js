/* 예약 관리 페이지 */

/* 내부 모듈 */
var reservation = require("../lib/reserve");

/* express 생성하기 */
var express = require("express");
var router = express.Router();

/* 라우터 설정 */
/* booking 기간 선택 후 예약 가능 좌석 조회 */
router.post("/query_room", function (req, res, next) {
  reservation.room_inquiry(req, res);
});

/* 메인페이지 예약 가능 좌석 조회 */
router.get("/day_query", function (req, res, next) {
  reservation.day_query(req, res);
});

/* 예약 신청*/
router.post("/room_reserve", function (req, res, next) {
  console.log(req.body.user_name);
  console.log(req.session.name);

  if (req.session.name == "annoymous") {
    reservation.reserve(req, res);
    //}
    //else if (req.body.user_name != req.session.name ){
    //        res.send("<script>alert(\"예약자 성함이 잘못입력되었습니다.\");</script><script>history.back();</script>");
  } else {
    reservation.reserve(req, res);
  }
});

/* 각 방별 예약 가능한 index query */
router.post("/rev_roomindex", function (req, res, next) {
  reservation.roomindex(req, res);
});

router.post("/rev_roomname", function (req, res, next) {
  reservation.getroomname(req, res);
});

router.post("/set_roomname", function (req, res, next) {
  reservation.setroomname(req, res);
});

router.post("/add_price", function (req, res, next) {
  reservation.add_price(req, res);
});
router.post("/set_price", function (req, res, next) {
  reservation.set_price(req, res);
});

/* 예약 확인 Timer 제작*/
router.post("/rev_timer", function (req, res, next) {
  reservation.timer(req, res);
});

//이전 예약 확인
router.post("/last_reservation", function (req, res, next) {
  reservation.last_reservation(req, res);
});

module.exports = router;
