/* express 생성하기 */
const express = require("express");
const router = express.Router();

/* 라우트 모듈 */
const noticeRoute = require("./community/notice"); // 공지사항
const photoRoute = require("./community/photo"); // 포토 갤러리
const reviewRoute = require("./community/review"); // 내안의 숲 후기
const qnaRoute = require("./community/qna"); // 문의 게시판

/* 라우터 설정 */
router.use("/notice", noticeRoute);
router.use("/photo", photoRoute);
router.use("/review", reviewRoute);
router.use("/qna", qnaRoute);

module.exports = router;
