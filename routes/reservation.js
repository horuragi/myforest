/* 예약 post 요청 */

/* 내부 모듈 */
var reservationmgt = require("../lib/reservationmgt.js");

/* express 생성하기 */
var express = require("express");
var router = express.Router();

/* 라우터 설정 */
//예약확인
router.post("/reservation_confirm", function (req, res) {
  reservationmgt.reservation_confirm(req, res);
});

//관리자 예약 확인
router.post("/reservation_admin_query", function (req, res) {
  reservationmgt.reservation_admin_query(req, res);
});

//관리자 예약 확인 상태 세부 쿼리
router.post("/reservation_admin_state_query", function (req, res) {
  reservationmgt.reservation_admin_state_query(req, res);
});

//관리자 예약 확인 상태 중 환불 완료를 위한 세부 쿼리
router.post("/reservation_admin_refund_query", function (req, res) {
  reservationmgt.reservation_admin_refund_query(req, res);
});

//예약취소
router.post("/reservation_cancel", function (req, res) {
  console.log("123");
  reservationmgt.reservation_cancel(req, res);
});

//환불신청
router.post("/reservation_refund", function (req, res) {
  reservationmgt.reservation_refund(req, res);
});

//환불완료
router.post("/reservation_refund_auth", function (req, res) {
  reservationmgt.reservation_refund_auth(req, res);
});

//예약승인
router.post("/reservation_auth", function (req, res) {
  reservationmgt.reservation_auth(req, res);
});

//방확인
router.post("/room", function (req, res) {
  reservationmgt.room(req, res);
});

//방추가
router.post("/room_insert", function (req, res) {
  reservationmgt.room_insert(req, res);
});

//방삭제
router.post("/room_del", function (req, res) {
  reservationmgt.room_del(req, res);
});

module.exports = router;
