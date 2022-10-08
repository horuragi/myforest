function terms() {
  var terms_1 = $("input:checkbox[id='terms_1']").is(':checked');
  var terms_2 = $("input:checkbox[id='terms_2']").is(':checked');
  var terms_3 = $("input:checkbox[id='terms_3']").is(':checked');
  var room_index = $("input:checkbox[name='room_index']").is(':checked');
  var patten = /^01([0|1|6|7|8|9][-]?)-?([0-9]{3,4}[-])-?([0-9]{4})$/;

  if (sec_room.user_phone.value == '') {
    alert('연락처를 입력해주세요.');
    sec_room.user_phone.focus();
  } else if (sec_room.user_name.value == '') {
    alert('예약자 성함을 입력해주세요.');
    sec_room.user_name.focus();
  } else if (!patten.test(sec_room.user_phone.value)) {
    alert('잘못된 연락처 형식입니다. -(하이픈)을 포함한 숫자만 입력해주세요.');
    sec_room.user_phone.value = '';
    sec_room.user_phone.focus();
  } else if (room_index == false) {
    alert('방 번호를 선택해주세요.');
  } else if (terms_1 == false || terms_2 == false || terms_3 == false) {
    alert('이용 약관을 동의해주세요.');
  } else {
    var arr = sec_room.room_name.value.split(',');
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      //sec_room.submit();
      $.ajax({
        type: 'POST',
        url: '/reserve/room_reserve',
        data: {
          room_type: sec_room.room_type.value,
          f_day: sec_room.f_day.value,
          l_day: sec_room.l_day.value,
          s_day: sec_room.s_day.value,
          room_name: arr[i],
          last_field: sec_room.last_field.value,
          user_name: sec_room.user_name.value,
          user_id: sec_room.user_id.value,
          user_phone: sec_room.user_phone.value,
        },
        success: function (response) {
          if (response.indexOf('완료되었습니다') !== -1) {
            var data = this.data.split('&');
            var data2 = data[4].split('=');
            console.log('성공');
            if (data2[1] == sec_room.last_field.value) {
              alert('예약신청이 완료되었습니다.');
              location.href = '/booking_reservation';
            }
          } else {
            alert('예약신청 중 일부분이 실패하였습니다.');
            location.href = '/booking';
          }
        },
        error: function (data) {
          alert('예약실패');
          history.back();
        },
      });
    }
    //sec_room.submit();
  }
}

function inputPhoneNumber(obj) {
  var number = obj.value.replace(/[^0-9]/g, '');
  var phone = '';

  if (number.length < 4) {
    return number;
  } else if (number.length <= 7) {
    phone += number.substr(0, 3);
    phone += '-';
    phone += number.substr(3);
  } else {
    phone += number.substr(0, 3);
    phone += '-';
    phone += number.substr(3, 4);
    phone += '-';
    phone += number.substr(7);
  }
  obj.value = phone;
}

function anno_terms() {
  var terms_1 = $("input:checkbox[id='terms_1']").is(':checked');
  var terms_2 = $("input:checkbox[id='terms_2']").is(':checked');
  var terms_3 = $("input:checkbox[id='terms_3']").is(':checked');
  var room_index = $("input:checkbox[name='room_index']").is(':checked');
  var patten = /^01([0|1|6|7|8|9][-]?)-?([0-9]{3,4}[-])-?([0-9]{4})$/;

  if (sec_room.user_phone.value == '' || sec_room.user_name.value == '') {
    alert('예약정보를 입력해주세요.');
    if (sec_room.user_name.value == '') {
      sec_room.user_name.focus();
    } else {
      sec_room.user_phone.focus();
    }
  } else if (!patten.test(sec_room.user_phone.value)) {
    alert('잘못된 연락처 형식입니다. -(하이픈)을 포함한 숫자만 입력해주세요.');
    sec_room.user_phone.value = '';
    sec_room.user_phone.focus();
  } else if (room_index == false) {
    alert('방 번호를 선택해주세요.');
  } else if (terms_1 == false || terms_2 == false || terms_3 == false) {
    alert('이용 약관을 동의해주세요.');
  } else {
    var arr = sec_room.room_name.value.split(',');
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      //sec_room.submit();
      $.ajax({
        type: 'POST',
        url: '/reserve/room_reserve',
        data: {
          room_type: sec_room.room_type.value,
          f_day: sec_room.f_day.value,
          l_day: sec_room.l_day.value,
          s_day: sec_room.s_day.value,
          room_name: arr[i],
          last_field: sec_room.last_field.value,
          user_name: sec_room.user_name.value,
          user_id: sec_room.user_id.value,
          user_phone: sec_room.user_phone.value,
        },
        success: function (response) {
          if (response.indexOf('완료되었습니다') !== -1) {
            var data = this.data.split('&');
            var data2 = data[4].split('=');
            console.log('성공');
            if (data2[1] == sec_room.last_field.value) {
              alert('예약신청이 완료되었습니다.');
              location.href = '/booking_reservation';
            }
          } else {
            alert('예약신청 중 일부분이 실패하였습니다.');
            location.href = '/booking';
          }
        },
        error: function (data) {
          alert('예약실패');
          history.back();
        },
      });
    }
    //sec_room.submit();
  }
}

function view_index(data) {
  var target = $('.select_room_index');
  var room_index = $('').appendTo(target);
  var index;
  var name;

  //handler start
  let handler = function (name) {
    for (var i = 0; i < data.result.length; i++) {
      index = data.result[i].room_name.split('_');

      if (index.length == 3) {
        room_index = $(
          '<div class="check_info"><div class="ui checkbox"><input type="checkbox" name="room_index" value="' +
            data.result[i].room_name +
            '">' +
            '<label>' +
            name +
            '_' +
            index[2] +
            '</label>',
        ).appendTo(target);
      } else {
        room_index = $(
          '<div class="check_info"><div class="ui checkbox"><input type="checkbox" name="room_index" value="' +
            data.result[i].room_name +
            '">' +
            '<label>' +
            name +
            '_' +
            index[1] +
            '</label>',
        ).appendTo(target);
      }
    }

    $('input[type="checkbox"][name="room_index"]').click(function () {
      var chkbox = $('input[type="checkbox"][name="room_index"]');
      if (!$(this).is(':checked')) {
        $(this).prop('checked', false);
      } else {
        $(this).prop('checked', true);
      }

      var arr = new Array();
      var sum = 0;

      for (i = 0; i < chkbox.length; i++) {
        if (chkbox[i].checked == true) {
          arr.push(chkbox[i].value);
        }
      }
      var price = document.getElementsByClassName('price_data')[0].innerHTML * 1;
      var default_price = document.getElementsByClassName('default_price')[0];
      var sum_price = document.getElementsByClassName('sum_price')[0];

      var real_price = price * arr.length;

      if (real_price == 0) {
        real_price = price;
      }

      default_price.innerHTML = real_price;
      sum_price.innerHTML = real_price;

      sec_room.room_name.value = arr;
      sec_room.last_field.value = arr[arr.length - 1];

      /*
            if ($(this).prop('checked')) {
	            $('input[type="checkbox"][name="room_index"]').prop('checked', false);
	            $(this).prop('checked', true);
	            sec_room.room_name.value=$(this).val();
            }
            */
    });

    $('#collection').click(function () {
      $('#collection_detail').modal('show');
    });

    $('#provision').click(function () {
      $('#provision_detail').modal('show');
    });
  };
  //handler end

  name = data.result[0].room_name.split('_');

  if (name[0] == 'site' || name[0] == 'scops') {
    room_name(name[0] + '_' + name[1], handler);
  } else {
    room_name(name[0], handler);
  }
}

function room_name(name, handler) {
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
    case 'pension':
      room_type = '펜션';
      break;
    default:
      room_type = '';
      break;
  }
  if (room_type == '') {
    console.log(name);

    $.ajax({
      type: 'POST',
      url: '/reserve/rev_roomname',
      data: { room_type: name },
      success: function (response) {
        console.log(response.result);
        document.getElementsByClassName('getroomname')[0].innerHTML = response.result[0].name;

        handler(response.result[0].name);
      },
      error: function (data) {
        alert('error');
        history.back();
      },
    });
  } else {
    handler(room_type);
  }
}

//jQuery.noConflict();
//(function($){
(function () {
  $(document).ready(function () {
    room_query();
    $('#checkboxcontroll').click(function () {
      if ($('#checkboxcontroll').prop('checked')) {
        $('input[name=booking_terms]').prop('checked', true);
      } else {
        $('input[name=booking_terms]').prop('checked', false);
      }
    });
  });
  //})(jQuery);
})();

function room_query() {
  $.ajax({
    type: 'POST',
    url: '/reserve/rev_roomindex',
    data: { room_type: sec_room.room_type.value, f_day: sec_room.f_day.value, l_day: sec_room.l_day.value },
    success: function (response) {
      view_index(response);
    },
    error: function (data) {
      alert('error');
      history.back();
    },
  });
}
