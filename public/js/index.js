$(document).ready(function () {
  //상단 메뉴 드롭다운 활성화
  $('.ui.dropdown').dropdown({
    on: 'hover',
    action: 'nothing',
  });

  getNotice();
  getQna();
  getReserveStatus();
  count_visitor();
});

//공지사항 가져오기
function getNotice() {
  $.get(
    '/particle_list/notice',
    function (data) {
      for (var i = 0; i < 5; i++) {
        if (data.rows[i] == undefined || data.rows[i] == null) {
        } else {
          var subject = data.rows[i].subject;
          if (subject.length > 20) {
            subject = subject.substring(0, 19);
          }
          $('.notice_list').append(
            '<tr><td style="width: 80%;padding:2px">ㆍ <a href=\'/community/notice/detail/' +
              data.rows[i].id +
              "' style='color:green'>" +
              subject +
              '</a></td><td style="width: 20%;padding:2px">' +
              data.rows[i].reg_date +
              '</td></tr>',
          );
        }
      }
    },
    'json',
  ).fail(function (data) {
    console.log(JSON.stringify(data));
  });
}

//QNA 가져오기
function getQna() {
  $.get(
    '/particle_list/qna',
    function (data) {
      for (var i = 0; i < 5; i++) {
        if (data.rows[i] == undefined || data.rows[i] == null) {
        } else {
          var subject = data.rows[i].subject;
          if (subject.length > 20) {
            subject = subject.substring(0, 19);
          }
          $('.qna_list').append(
            '<tr><td style="width: 80%;padding:2px">ㆍ <a href=\'/community/qna/detail/' +
              data.rows[i].id +
              "' style='color:green'>" +
              subject +
              '</a></td><td style="width: 20%;padding:2px">' +
              data.rows[i].reg_date +
              '</td></tr>',
          );
        }
      }
    },
    'json',
  )
    .fail(function (data) {
      console.log(JSON.stringify(data));
    })
    .always(function () {});
}

//예약현황 가져오기
function getReserveStatus() {
  $.ajax({
    type: 'get',
    url: '/reserve/day_query',
    success: function (data) {
      count_ready(data);
    },
    error: function (data) {
      //alert("error");
      //history.back();
    },
  });
}

//방문자 체크 (방문자수 ++)
function count_visitor() {
  $.ajax({
    type: 'get',
    url: '/visit',
    success: function (result) {
      console.log(result);
    },
    error: function (result) {
      console.log(result);
    },
  });
}

//매개변수로 전달된 데이터를 예약현황 렌더링하는 함수
function count_ready(data) {
  Date.prototype.format = function (f) {
    if (!this.valueOf()) return ' ';

    var weekName = ['일', '월', '화', '수', '목', '금', '토'];
    var d = this;

    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
      switch ($1) {
        case 'yyyy':
          return d.getFullYear();
        case 'yy':
          return (d.getFullYear() % 1000).zf(2);
        case 'MM':
          return (d.getMonth() + 1).zf(2);
        case 'dd':
          return d.getDate().zf(2);
        case 'E':
          return weekName[d.getDay()];
        case 'HH':
          return d.getHours().zf(2);
        case 'hh':
          return ((h = d.getHours() % 12) ? h : 12).zf(2);
        case 'mm':
          return d.getMinutes().zf(2);
        case 'ss':
          return d.getSeconds().zf(2);
        case 'a/p':
          return d.getHours() < 12 ? '오전' : '오후';
        default:
          return $1;
      }
    });
  };

  String.prototype.string = function (len) {
    var s = '',
      i = 0;
    while (i++ < len) {
      s += this;
    }
    return s;
  };
  String.prototype.zf = function (len) {
    return '0'.string(len - this.length) + this;
  };
  Number.prototype.zf = function (len) {
    return this.toString().zf(len);
  };

  var date = new Date();
  for (var i = 0; i < 10; i++) {
    if (i > 0) {
      date.setDate(date.getDate() + 1);
    }
    if (i < 5) {
      $('.reserve_date1').before('<td>' + date.format('MM/dd(E)') + '</td>');
    } else {
      $('.reserve_date2').append('<td>' + date.format('MM/dd(E)') + '</td>');
    }
  }
  var room = data.days_room;
  var max_room = data.max_room;
  for (var i = 0; i < 10; i++) {
    if (i < 5) {
      $('.reserve_count1').append(
        '<td><div class="ui blue horizontal label" style="font-size:10px">펜션</div>' +
          (max_room.pension - room[i].pension) +
          '/' +
          max_room.pension +
          '<br><div class="ui orange horizontal label" style="font-size:10px">방갈로</div>' +
          (max_room.bungalow - room[i].bungalow) +
          '/' +
          max_room.bungalow +
          '<br><div class="ui teal horizontal label" style="font-size:10px">데크사이트</div>' +
          (max_room.decksite + max_room.site - (room[i].decksite + room[i].site)) +
          '/' +
          (max_room.decksite + max_room.site) +
          '</td>',
      );
    } else {
      $('.reserve_count2').append(
        '<td><div class="ui blue horizontal label" style="font-size:10px">펜션</div>' +
          (max_room.pension - room[i].pension) +
          '/' +
          max_room.pension +
          '<br><div class="ui orange horizontal label" style="font-size:10px">방갈로</div>' +
          (max_room.bungalow - room[i].bungalow) +
          '/' +
          max_room.bungalow +
          '<br><div class="ui teal horizontal label" style="font-size:10px">데크사이트</div>' +
          (max_room.decksite + max_room.site - (room[i].decksite + room[i].site)) +
          '/' +
          (max_room.decksite + max_room.site) +
          '</td>',
      );
    }
  }
}

var container = document.getElementById('map');
var options = {
  center: new daum.maps.LatLng(36.184961, 126.746456),
  level: 5,
};

var map = new daum.maps.Map(container, options);
map.setMapTypeId(daum.maps.MapTypeId.HYBRID);
//var markerPosition  = new daum.maps.LatLng(36.184678, 126.746136);
//var markerPosition2  = new daum.maps.LatLng(36.192441, 126.733804);

var positions = [
  new daum.maps.LatLng(36.192441, 126.733804),
  new daum.maps.LatLng(36.191538, 126.73529),
  new daum.maps.LatLng(36.190118, 126.73735),
  new daum.maps.LatLng(36.188646, 126.742371),
  new daum.maps.LatLng(36.18849, 126.743337),
  new daum.maps.LatLng(36.189408, 126.74486),
  new daum.maps.LatLng(36.189685, 126.747114),
  new daum.maps.LatLng(36.190638, 126.749195),
  new daum.maps.LatLng(36.188455, 126.750053),
  new daum.maps.LatLng(36.187327, 126.749862),
  new daum.maps.LatLng(36.186297, 126.750653),
  new daum.maps.LatLng(36.185968, 126.750449),
  new daum.maps.LatLng(36.185247, 126.746902),
];
for (var i = 0; i < positions.length; i++) {
  var marker = new daum.maps.Marker({
    map: map,
    position: positions[i],
    opacity: 0.0000001,
  });
}

var linep;
var line = new daum.maps.Polyline();

for (var i = 0; i < positions.length; i++) {
  if (i != 0) {
    linep = [positions[i - 1], positions[i]];
  }
  line.setPath(linep);
  var drawline = new daum.maps.Polyline({
    map: map,
    path: linep,
    strokeWeight: 3,
    strokeColor: '#db4040',
    strokeOpacity: 1,
    strokeStyle: 'solid',
  });
}
var imagesrc = '/images/marker.png';
var imsize = new daum.maps.Size(80, 80);
var markerImage = new daum.maps.MarkerImage(imagesrc, imsize);

var destmarker = new daum.maps.Marker({
  map: map,
  position: new daum.maps.LatLng(36.184678, 126.746136),
  opacity: 1,
  image: markerImage,
});
