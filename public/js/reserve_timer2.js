var pid = [];

$.ajax({
  type: 'POST',
  url: '/reserve/rev_timer',
  data: { limit: 0 },
  success: function (data) {
    create_table(data.timer);
    set_timer(data.timer);
    rev_pagenavi(data.max_rev, data.cnt);
  },
  error: function (data) {
    alert('err');
  },
});

function set_timer(data) {
  var time;
  var S_time;
  var E_time;

  var date_time = [];

  for (var i = 0; i < data.length; i++) {
    time = new Date(data[i].timer);
    S_time = new Date();
    E_time = new Date(time.setHours(time.getHours() + 12));

    date_time.push(E_time - S_time);
  }

  start_timer(data, date_time);
}

function start_timer(data, date_time) {
  $(document).ready(function () {
    for (var i = 0; i < data.length; i++) {
      (function (i) {
        pid[i] = setInterval(function () {
          rev_timer(date_time, i, pid);
        }, 1000);
      })(i);
    }
  });

  $('input[type="checkbox"][name="rev_index"]').click(function () {
    if ($(this).prop('checked')) {
      $('input[type="checkbox"][name="rev_index"]').prop('checked', false);
      $(this).prop('checked', true);
    }
  });

  $('#cancel').click(function () {
    if ($('table input:checkbox').length < 1) {
      alert('하나 이상 선택해 주세요');
    } else {
      $('tbody input:checkbox:checked').each(function (index) {
        var tr = $(this).parent().parent();
        var td = tr.children();
        const argsInput = document.createElement("input");
        argsInput.type = "hidden";
        argsInput.name = "args";
        rev_frm.appendChild(argsInput);
        rev_frm.args.value = td.eq(2).text();
        rev_frm.action = '/reser/reservation_cancel';
        rev_frm.submit();
      });
    }
  });

  $('#refund').click(function () {
    if ($('table input:checkbox').length < 1) {
      alert('하나 이상 선택해 주세요.');
    } else {
      $('tbody input:checkbox:checked').each(function (index) {
        var tr = $(this).parent().parent();
        var td = tr.children();
        rev_frm.args.value = td.eq(2).text();
        rev_frm.action = '/reser/reservation_refund';
        rev_frm.submit();
      });
    }
  });
}

function rev_timer(date_time, index, pid) {
  var hours = Math.floor((date_time[index] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((date_time[index] % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((date_time[index] % (1000 * 60)) / 1000);

  hours = hours < 10 ? '0' + hours : hours;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  timer = hours + ':' + min + ':' + sec;

  $('#timer' + index).text(timer);

  if (date_time[index] <= 0) {
    clearInterval(pid[index]);
    $('#timer' + index).text('00:00:00');
  } else {
    date_time[index] = date_time[index] - 1000;
  }
}

// create rev_table //

function create_table(data) {
  $('#table_body').empty();
  var target = $('#table_body');
  var check = false;
  var room_name2;
  var room_index;
  var tmp;
  var list = [
    { field: 'rev_id' },
    { field: 'rev_roomtype' },
    { field: 'rev_cancel' },
    { field: 'rev_state' },
    { field: 'rev_charge' },
    { field: 'f_day' },
    { field: 'l_day' },
    { field: 'timer' },
  ];

  $.each(data, function (index, row) {
    var tr = $('<tr>').appendTo(target);
    var td = $('<td><input type="checkbox" name="rev_index"></td>').appendTo(tr);
    $.each(list, function (i, fieldInfo) {
      if (fieldInfo.field == 'rev_id') {
        $('<td id="hide">' + row[fieldInfo.field] + '</td>').appendTo(tr);
        room_name2 = row[fieldInfo.field].split('&');
        room_name2 = room_name2[1].split('_');
        room_index = row[fieldInfo.field].split('_');
        tmp = room_index[0].split('&');
      } else if (fieldInfo.field == 'rev_state') {
        switch (row[fieldInfo.field]) {
          case 1:
            $('<td>예약 신청</td>').appendTo(tr);
            check = true;
            break;
          case 2:
            $('<td>예약 승인</td>').appendTo(tr);
            break;
          case 3:
            $('<td>환불 신청</td>').appendTo(tr);
            break;
          case 4:
            $('<td>예약 취소</td>').appendTo(tr);
            break;

          default:
            $('<td>예약 신청</td>').appendTo(tr);
            break;
        }
      } else if (fieldInfo.field == 'timer') {
        if (check == true) {
          $('<td><a class="ui hyeon label"><span id="timer' + index + '"></span></a></td>').appendTo(tr);
          check = false;
        } else {
          $('<td><a class="ui olive label"><span id="deposit_check">00:00:00</a></td>').appendTo(tr);
        }
      } else if (fieldInfo.field == 'rev_roomtype') {
        room_name = reserve_room(row[fieldInfo.field]);
        $('<td>' + room_name + '</td>').appendTo(tr);
      } else if (fieldInfo.field == 'rev_cancel' /*i==2*/) {
        if (tmp[1] == 'site' || tmp[1] == 'scops') {
          room_name2 = reserve_room(room_name2[0] + '_' + room_name2[1]);
        } else {
          room_name2 = reserve_room(room_name2[0]);
        }

        if (room_name2 == '[사이트]편백' || room_name2 == '[사이트]느티나무' || room_name2 == '소쩍새') {
          $('<td>' + room_name2 + '_' + room_index[2] + '</td>').appendTo(tr);
        } else {
          $('<td>' + room_name2 + '_' + room_index[1] + '</td>').appendTo(tr);
        }
      } else {
        td = $('<td>').appendTo(tr);
        td.html(row[fieldInfo.field]);
      }
    });
  });
}

function reserve_room(name) {
  var room_typea;
  switch (name) {
    case 'nightingale':
      room_type = '꾀꼬리';
      break;
    case 'bluebird':
      room_type = '파랑새';
      break;
    case 'owl':
      room_type = '부엉이';
      break;
    case 'cuckoo':
      room_type = '뻐꾸기';
      break;
    case 'raccoon':
      room_type = '너구리';
      break;
    case 'scops_owl':
      room_type = '소쩍새';
      break;
    case 'site_cypress':
      room_type = '[사이트]편백';
      break;
    case 'site_zelkova':
      room_type = '[사이트]느티나무';
      break;
    case 'pension':
      room_type = '펜션';
      break;
    default:
      room_type = '';
      break;
  }

  return room_type;
}

// 예약 테이블 쪽수
function rev_pagenavi(data, index) {
  var navi;
  var target = $('#rev_page');
  var start = 0;
  var tmp;

  $('#rev_page').empty();

  if (data.length % 10 != 0) {
    navi = Math.floor(data.length / 10) + 1;
  } else {
    navi = Math.floor(data.length / 10);
  }

  if (index != 0) {
    index = Math.floor(index / 10);
  }

  if (navi == 0) {
    navi = 1;
  }

  if (index < 11) {
    start = 0;
  } else if (index < Math.floor(navi / 10) * 10) {
    tmp = Math.floor(index / 10) - 1;
    start = 9 * Math.floor(index / 10) + tmp;
    navi = start + 12;
  } else {
    tmp = Math.floor(navi / 9) - 1;
    start = 9 * Math.floor(navi / 9) + tmp;
    navi = start + (navi % (Math.floor(navi / 10) * 10)) + 1;
  }

  for (i = start; i < navi; i++) {
    if (i == index) {
      $('<a class="active item">' + (i + 1) + '</a>').appendTo(target);
    } else {
      $('<a class="item" onclick="navi_move(' + i * 10 + ')">' + (i + 1) + '</a>').appendTo(target);
    }
  }
}

function clear() {
  for (var i = 0; i < pid.length; i++) {
    clearInterval(pid[i]);
  }
}

function navi_move(cnt) {
  clear();

  $.ajax({
    type: 'post',
    url: '/reserve/rev_timer',
    data: { limit: cnt },
    success: function (data) {
      rev_pagenavi(data.max_rev, data.cnt);
      create_table(data.timer);
      set_timer(data.timer);
    },
    error: function (data) {
      alert('err');
    },
  });
}
