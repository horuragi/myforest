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
// 기존 combined 포멧에서 timestamp만 제거
var morganFormat = process.env.NODE_ENV !== "production" ? "dev" : combined; // NOTE: morgan 출력 형태 server.env에서 NODE_ENV 설정 production : 배포 dev : 개발
console.log(morganFormat);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

/* 커뮤니티 */
var noticeRouter = require("./routes/notice");
var reviewRouter = require("./routes/review");
var qnaRouter = require("./routes/qna");
var adminRouter = require("./routes/admin");
var reserRouter = require("./routes/reservation.js");
var bookingRouter = require("./routes/reserve.js");
var mobileRouter = require("./routes/mobile.js");

var app = express();

// view engine setup
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

// app.use(logger("dev"));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "upload")));
app.use(express.static(path.join(__dirname, "adminupload")));
app.use(session);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/notice", noticeRouter);
app.use("/review", reviewRouter);
app.use("/qna", qnaRouter);
app.use("/admin", adminRouter);
app.use("/reser", reserRouter);
app.use("/reserve", bookingRouter);
app.use("/mobile", mobileRouter);

app.use(morgan(morganFormat, { stream: logger.stream }));

app.get("/test/info", (req, res, next) => {
  logger.info("info test");
  res.status(200).send({
    message: "info test!",
  });
});

app.get("/test/warn", (req, res, next) => {
  logger.warn("warning test");
  res.status(400).send({
    message: "warning test!",
  });
});

app.get("/test/error", (req, res, next) => {
  logger.error("error test");
  res.status(500).send({
    message: "error test!",
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
