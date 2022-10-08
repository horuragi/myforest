function room_query(fday, lday, sec_day) {
  $.ajax({
    type: 'POST',
    url: '/reserve/query_room',
    data: { f_day: fday, l_day: lday, day: sec_day },
    success: function (response) {
      room(response);
    },
    error: function (data) {
      alert('error');
      history.back();
    },
  });
}

function room(res) {
  res = JSON.stringify(res);
  res = res.replace('{"result":', '');
  res = res.replace('}', '');
  res = JSON.parse(res);

  $('.search_rooms').empty();
  var target = $('.search_rooms');

  if (res.nightingale > 0) {
    var room = $(
      '<div id="link"><div class="room"><div class="room_img"><img src="/images/bungalow/nightingale/1.png"></div><div class="room_details"><p class="room_title" >[방갈로] 꾀꼬리</p><br><span>전기온돌/냉장고/선풍기/에어컨/야외 테라스</span><br><br><span>예약 가능 좌석  <span >' +
        res.nightingale +
        '</span><p class="room_price">' +
        res.nightingale_price +
        '</p></div></div></div>',
    ).appendTo(target);
  }

  if (res.bluebird > 0) {
    room = $(
      '<div id="link2"><div class="room"><div class="room_img"><img src="/images/bungalow/bluebird/1.jpg"></div><div class="room_details"><p class="room_title" >[방갈로] 파랑새</p><br><span>전기온돌/냉장고/선풍기/에>어컨/야외 테라스</span><br><br><span>예약 가능 좌석  <span>' +
        res.bluebird +
        '</span>  <p class="room_price">' +
        res.bluebird_price +
        '</p></div></div></div>',
    ).appendTo(target);
  }

  if (res.owl > 0) {
    room = $(
      '<div id="link3"><div class="room"><div class="room_img"><img src="/images/bungalow/owl/1.jpg"></div><div class="room_details"><p class="room_title" >[방갈로] 부엉이</p><br><span>전기온돌/냉장고/야외 테라스/야>외 파라솔</span><br><br><span>예약 가능 좌석  <span>' +
        res.owl +
        '</span> <p class="room_price">' +
        res.owl_price +
        '</p></div></div></div>',
    ).appendTo(target);
  }

  if (res.cuckoo > 0) {
    room = $(
      '<div id="link4"><div class="room"><div class="room_img"><img src="/images/bungalow/cuckoo/1.jpg"></div><div class="room_details"><p class="room_title" >[방갈로] 뻐꾸기</p><br><span>냉장고/에어컨/선풍기/야외 테라스/야외 파라솔</span><br><br><span>예약 가능 좌석  <span >' +
        res.cuckoo +
        '</span> <p class="room_price">' +
        res.cuckoo_price +
        '</p></div></div></div>',
    ).appendTo(target);
  }

  if (res.scops_owl > 0) {
    room = $(
      '<div id="link5"><div class="room"><div class="room_img"><img src="/images/bungalow/scops_owl/1.jpg"></div><div class="room_details"><p class="room_title" >[방갈로] 소쩍새</p><br><span>냉장고/에어컨/선풍기/개수대/화장실/내부 세면 및 샤워시설/야외 테라스</span><br><br><span>예약 가능 좌석  <span>' +
        res.scops_owl +
        '</span> <p class="room_price">' +
        res.scops_owl_price +
        '</p></div></div></div>',
    ).appendTo(target);
  }

  if (res.raccoon > 0) {
    room = $(
      '<div id="link6"><div class="room"><div class="room_img"><img src="/images/decksite/3.jpg"></div><div class="room_details"><p class="room_title" >데크 사이트</p><br><span>전기사용가능</span><br><br><span>예약 가능 좌석  <span>' +
        res.raccoon +
        '</span> <p class="room_price">' +
        res.raccoon_price +
        '</p></div></div></div>',
    ).appendTo(target);
  }

  if (res.site_cypress > 0) {
    room = $(
      '<div id="link7"><div class="room"><div class="room_img"><img src="/images/site/cypress/3.jpg"></div><div class="room_details"><p class="room_title" >[사이트] 편백 구역</p><br><span>전기사용가능</span><br><br><span>예약 가능 좌석  <span>' +
        res.site_cypress +
        '</span> <p class="room_price">' +
        res.site_cypress_price +
        '</p></div></div></div>',
    ).appendTo(target);
  }

  if (res.site_zelkova > 0) {
    room = $(
      '<div id="link8"><div class="room"><div class="room_img"><img src="/images/site/zelkova/3.jpg"></div><div class="room_details"><p class="room_title" >[사이트] 느티나무 구역</p><br><span>전기사용가능</span><br><br><span>예약 가능 좌석  <span>' +
        res.site_zelkova +
        '</span> <p class="room_price">' +
        res.site_zelkova_price +
        '</p></div></div></div>',
    ).appendTo(target);
  }

  if (res.pension > 0) {
    room = $(
      '<div id="link9"><div class="room" ><div class="room_img"><img src="/images/pension/2.jpg"></div><div class="room_details"><p class="room_title" >펜션</p><br><span>화장실, 개수대, 인터넷 TV, 와이파이, 샤워시설</span><br><br><span>예약 가능 좌석  <span>' +
        res.pension +
        '</span> <p class="room_price">' +
        res.pension_price +
        '</p></div></div></div>',
    ).appendTo(target);
  }

  var e = document.getElementById('search_rooms');
  e.style.border = '1px solid silver';
  e.style.borderBottom = '0px';

  e = document.getElementById('icon');
  e.style.borderTop = '0px';

  style(res);
}

function style(res) {
  $('#link').mouseover(function () {
    var e = document.getElementById('link');
    e.style.background = 'silver';
    e.style.cursor = 'pointer';
  });

  $('#link').mouseout(function () {
    var e = document.getElementById('link');
    e.style.background = 'white';
  });

  $('#link').click(function () {
    sendPost('/mobile/nightingale', res.nightingale_price);
  });

  $('#link2').mouseover(function () {
    var e = document.getElementById('link2');
    e.style.background = 'silver';
    e.style.cursor = 'pointer';
  });

  $('#link2').mouseout(function () {
    var e = document.getElementById('link2');
    e.style.background = 'white';
  });

  $('#link2').click(function () {
    sendPost('/mobile/bluebird', res.bluebird_price);
  });

  $('#link3').mouseover(function () {
    var e = document.getElementById('link3');
    e.style.background = 'silver';
    e.style.cursor = 'pointer';
  });

  $('#link3').mouseout(function () {
    var e = document.getElementById('link3');
    e.style.background = 'white';
  });

  $('#link3').click(function () {
    sendPost('/mobile/owl', res.owl_price);
  });

  $('#link4').mouseover(function () {
    var e = document.getElementById('link4');
    e.style.background = 'silver';
    e.style.cursor = 'pointer';
  });

  $('#link4').mouseover(function () {
    var e = document.getElementById('link4');
    e.style.background = 'silver';
    e.style.cursor = 'pointer';
  });

  $('#link4').mouseout(function () {
    var e = document.getElementById('link4');
    e.style.background = 'white';
  });

  $('#link4').click(function () {
    sendPost('/mobile/cuckoo', res.cuckoo_price);
  });

  $('#link5').mouseover(function () {
    var e = document.getElementById('link5');
    e.style.background = 'silver';
    e.style.cursor = 'pointer';
  });

  $('#link5').mouseout(function () {
    var e = document.getElementById('link5');
    e.style.background = 'white';
  });

  $('#link5').click(function () {
    sendPost('/mobile/scops_owl', res.scops_owl_price);
  });

  $('#link6').mouseover(function () {
    var e = document.getElementById('link6');
    e.style.background = 'silver';
    e.style.cursor = 'pointer';
  });

  $('#link6').mouseout(function () {
    var e = document.getElementById('link6');
    e.style.background = 'white';
  });

  $('#link6').click(function () {
    sendPost('/mobile/raccoon', res.raccoon_price);
  });

  $('#link7').mouseover(function () {
    var e = document.getElementById('link7');
    e.style.background = 'silver';
    e.style.cursor = 'pointer';
  });

  $('#link7').mouseout(function () {
    var e = document.getElementById('link7');
    e.style.background = 'white';
  });

  $('#link7').click(function () {
    sendPost('/mobile/site_cypress', res.site_cypress_price);
  });

  $('#link8').mouseover(function () {
    var e = document.getElementById('link8');
    e.style.background = 'silver';
    e.style.cursor = 'pointer';
  });

  $('#link8').mouseout(function () {
    var e = document.getElementById('link8');
    e.style.background = 'white';
  });

  $('#link8').click(function () {
    sendPost('/mobile/site_zelkova', res.site_zelkova_price);
  });

  $('#link9').mouseover(function () {
    var e = document.getElementById('link9');
    e.style.background = 'silver';
    e.style.cursor = 'pointer';
  });

  $('#link9').mouseout(function () {
    var e = document.getElementById('link9');
    e.style.background = 'white';
  });

  $('#link9').click(function () {
    sendPost('/mobile/pension', res.pension_price);
  });
}

function sendPost(url, price) {
  room_frm.action = url;
  day = $('#custom_calendar').val();
  day = day.split('&');
  if (day[0] == undefined || day[1] == undefined) {
    alert('입실일 또는 퇴실일이 선택되지않았습니다.');
  } else {
    room_frm.f_day.value = day[0];
    room_frm.l_day.value = day[1];
    room_frm.room_price.value = price;
    room_frm.submit();
  }
}
