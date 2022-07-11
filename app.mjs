import createError from "http-errors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import cookieParser from "cookie-parser";
import logger from "morgan";
import bodyParser from "body-parser";
import session from "./lib/session.js";

/* 메인, 사용자 */
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

/* 모바일, 커뮤니티, 예약 */
import noticeRouter from "./routes/notice.js";
import reviewRouter from "./routes/review.js";
import qnaRouter from "./routes/qna.js";
import adminRouter from "./routes/admin.js";
import reserRouter from "./routes/reservation.js";
import bookingRouter from "./routes/reserve.js";
import mobileRouter from "./routes/mobile.js";
import parkingRouter from "./routes/parking.mjs";
import ejs from "ejs";

const app = express();

// view engine setup
app.engine("html", ejs.renderFile);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.use(logger("dev"));
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
app.use("/parking", parkingRouter);
app.use("/parking_reservation", parkingRouter);

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

export default app;
