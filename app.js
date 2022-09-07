/* 외부 모듈 */
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("./winston");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var session = require("./lib/session");
require("dotenv").config({ path: path.join(__dirname, "server.env") });

var combined =
  ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';
var morganFormat = process.env.NODE_ENV !== "production" ? "dev" : combined;
console.log(morganFormat);

/* express 생성 */
var app = express();

/* 템플릿 엔진 설정 */
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

/* 공통 미들웨어 */
// app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "upload")));
app.use(express.static(path.join(__dirname, "adminupload")));
app.use(session);
app.use(morgan(morganFormat, { stream: logger.stream }));

/* 라우트 모듈 */
// 메인 라우터
var indexRouter = require("./routes/index");
// 메뉴 라우터
var campingRouter = require("./routes/nav/camping"); // 캠핑장 소개
var facilityRouter = require("./routes/nav/facility"); // 시설 소개
// var reservationRouter = require("./routes/nav/reservation");  실시간 예약
var commnunityRouter = require("./routes/nav/community"); // 커뮤니티
// 나머지 라우터
var usersRouter = require("./routes/users");
var adminRouter = require("./routes/admin");
var reserRouter = require("./routes/reservation.js");
var bookingRouter = require("./routes/reserve.js");
var mobileRouter = require("./routes/mobile.js");

/* 라우터 설정 */
// 메인 페이지
app.use("/", indexRouter);
// 메뉴 페이지
app.use("/campinginfo", campingRouter); // 캠핑장 소개
app.use("/facilityinfo", facilityRouter); // 시설 소개
app.use("/community", commnunityRouter); // 커뮤니티
// app.use("/reservation", reservationRouter); // 실시간 예약
// 나머지 페이지
app.use("/users", usersRouter);
app.use("/admin", adminRouter);
app.use("/reser", reserRouter);
app.use("/reserve", bookingRouter);
app.use("/mobile", mobileRouter);

/* 404 처리 미들웨어 */
app.use(function (req, res, next) {
  next(createError(404));
});

/* 오류 처리 미들웨어 */
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
