/* 모바일 페이지 */

/* 내부 모듈 */
var camping_info = require("../lib/camping_info");

/* express 생성하기 */
var express = require("express");
var router = express.Router();

/* 라우터 설정 */
router.get("/", function (req, res, next) {
  renderPage = "index_mobile";
  res.render(renderPage, { session: req.session });
});

router.get("/admin", function (req, res, next) {
  renderPage = "mobile_admin_login";
  res.render(renderPage, { session: req.session });
});

router.get("/booking", function (req, res, next) {
  renderPage = "Booking_mobile";
  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    res.render(renderPage, { session: req.session, data: result, params: req.params, idx: idxv });
  };

  var errhandler = function (res, err) {
    console.log(err);
    res.end(err);
  };
  camping_info.get(req, res, handler, errhandler);
  //res.send("<script>alert(\"예약기능 점검중입니다.\");location.href=\"http://xn--220bt54ayhcmwc.com\"</script>");
});

//꾀꼬리
router.post("/nightingale", function (req, res, next) {
  renderPage = "booking_nightingale_mobile";
  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    res.render(renderPage, {
      f_day: req.body.f_day,
      l_day: req.body.l_day,
      price: req.body.room_price,
      days: req.body.days,
      sec_day: req.body.sec_day,
      session: req.session,
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

router.post("/bluebird", function (req, res, next) {
  renderPage = "booking_bluebird_mobile";
  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    res.render(renderPage, {
      f_day: req.body.f_day,
      l_day: req.body.l_day,
      price: req.body.room_price,
      days: req.body.days,
      sec_day: req.body.sec_day,
      session: req.session,
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

router.post("/owl", function (req, res, next) {
  renderPage = "booking_owl_mobile";
  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    res.render(renderPage, {
      f_day: req.body.f_day,
      l_day: req.body.l_day,
      price: req.body.room_price,
      days: req.body.days,
      sec_day: req.body.sec_day,
      session: req.session,
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

router.post("/cuckoo", function (req, res, next) {
  renderPage = "booking_cuckoo_mobile";
  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    res.render(renderPage, {
      f_day: req.body.f_day,
      l_day: req.body.l_day,
      price: req.body.room_price,
      days: req.body.days,
      sec_day: req.body.sec_day,
      session: req.session,
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

router.post("/scops_owl", function (req, res, next) {
  renderPage = "booking_scops_owl_mobile";
  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    res.render(renderPage, {
      f_day: req.body.f_day,
      l_day: req.body.l_day,
      price: req.body.room_price,
      days: req.body.days,
      sec_day: req.body.sec_day,
      session: req.session,
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

router.post("/raccoon", function (req, res, next) {
  renderPage = "booking_decksite_mobile";
  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    res.render(renderPage, {
      f_day: req.body.f_day,
      l_day: req.body.l_day,
      price: req.body.room_price,
      days: req.body.days,
      sec_day: req.body.sec_day,
      session: req.session,
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

router.post("/site_cypress", function (req, res, next) {
  renderPage = "booking_site_cypress_mobile";
  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    res.render(renderPage, {
      f_day: req.body.f_day,
      l_day: req.body.l_day,
      price: req.body.room_price,
      days: req.body.days,
      sec_day: req.body.sec_day,
      session: req.session,
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

router.post("/site_zelkova", function (req, res, next) {
  renderPage = "booking_site_zelkova_mobile";
  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    res.render(renderPage, {
      f_day: req.body.f_day,
      l_day: req.body.l_day,
      price: req.body.room_price,
      days: req.body.days,
      sec_day: req.body.sec_day,
      session: req.session,
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

router.post("/pension", function (req, res, next) {
  renderPage = "booking_pension_mobile";
  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    res.render(renderPage, {
      f_day: req.body.f_day,
      l_day: req.body.l_day,
      price: req.body.room_price,
      days: req.body.days,
      sec_day: req.body.sec_day,
      session: req.session,
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

router.post("/site_grass", function (req, res, next) {
  renderPage = "booking_site_grass_mobile";
  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    res.render(renderPage, {
      f_day: req.body.f_day,
      l_day: req.body.l_day,
      price: req.body.room_price,
      twoprice: req.body.room_twoprice,
      days: req.body.days,
      sec_day: req.body.sec_day,
      session: req.session,
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

router.post("/firstetc", function (req, res, next) {
  renderPage = "booking_firstetc_mobile";
  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    res.render(renderPage, {
      f_day: req.body.f_day,
      l_day: req.body.l_day,
      price: req.body.room_price,
      days: req.body.days,
      sec_day: req.body.sec_day,
      session: req.session,
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

router.post("/secondetc", function (req, res, next) {
  renderPage = "booking_secondetc_mobile";
  var handler = function (req, res, result) {
    replaceField(result);
    var idxv = generateidx(req.params.roomtype);
    res.render(renderPage, {
      f_day: req.body.f_day,
      l_day: req.body.l_day,
      price: req.body.room_price,
      days: req.body.days,
      sec_day: req.body.sec_day,
      session: req.session,
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

router.get("/booking_reservation", function (req, res, next) {
  renderPage = "booking_reservation_mobile";
  res.render(renderPage, { session: req.session });
});
router.post("/booking_reservation", function (req, res, next) {
  renderPage = "booking_reservation_nologin_mobile";
  var username = req.body.username;
  var userphone = req.body.userphone;
  if (username == "" || username == undefined || userphone == "" || userphone == undefined) {
    res.send(
      '<script>alert("이름과 휴대폰번호를 입력해주세요.");</script><script>location.href="/mobile/booking_reservation";</script>'
    );
  } else {
    res.render(renderPage, { session: req.session, username: username, userphone: userphone });
  }
});

function replaceField(result) {
  for (var i = 0; i < result.length; i++) {
    switch (result[i].Field) {
      case "bluebird":
        result[i].Field = "파랑새";
        break;
      case "owl":
        result[i].Field = "부엉이";
        break;
      case "pension":
        result[i].Field = "펜션";
        break;
      case "raccoon":
        result[i].Field = "너구리";
        break;
      case "scops_owl":
        result[i].Field = "소쩍새";
        break;
      case "site_cypress":
        result[i].Field = "사이트[편백]";
        break;
      case "site_zelkova":
        result[i].Field = "사이트[느티]";
        break;
      case "cuckoo":
        result[i].Field = "뻐꾸기";
        break;
      case "nightingale":
        result[i].Field = "꾀꼬리";
        break;
      default:
        break;
    }
  }
}
function generateidx(roomtype) {
  switch (roomtype) {
    case "bluebird":
      return 0;
      break;
    case "owl":
      return 1;
      break;
    case "pension":
      return 2;
      break;
    case "raccoon":
      return 3;
      break;
    case "scops_owl":
      return 4;
      break;
    case "site_cypress":
      return 5;
      break;
    case "site_zelkova":
      return 6;
      break;
    case "cuckoo":
      return 7;
      break;
    case "nightingale":
      return 8;
      break;
    default:
      return 0;
      break;
  }
}

module.exports = router;
