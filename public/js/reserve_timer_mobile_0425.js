var pid=[];

function call_reservation() {

$.ajax({
    type: "POST"
    ,url: "/reserve/rev_timer"
    ,data:{limit:0}
    ,cache: false
    ,success:function(data) {
	    create_table(data.timer);
	    set_timer(data.timer);
	    rev_pagenavi(data.max_rev, data.cnt);

    }
    ,error:function(data){
	    alert("err");
    }
});

}

function set_timer(data) {
    var time;
    var S_time;
    var E_time;

    var date_time=[];

//	time = new Date((data[0].timer).replace(/-/g,"/"));


    for (var i=0; i < data.length; i++) {
	data[i].timer = (data[i].timer).replace(/-/g,"/");
        time = new Date(data[i].timer);
        S_time = new Date();
        E_time = new Date(time.setHours(time.getHours()+24));

        date_time.push(E_time - S_time);
    }

    start_timer(data, date_time);
}


function start_timer(data, date_time) {
    $(document).ready(function(){
        for(var i=0;i<data.length;i++) {
          (function(i) {
            pid[i] = setInterval(function() {
            rev_timer(date_time, i, pid)
            },1000);
          })(i);
        }
    });

    $('input[type="checkbox"][name="rev_index"]').click(function(){
        if ($(this).prop('checked')) {
		$('input[type="checkbox"][name="rev_index"]').prop('checked', false);
		$(this).prop('checked', true);
        }
    });

	$("#cancel").click(function() {
		if($('input[name=rev_index]:checkbox:checked').length < 1){
			alert("하나 이상 선택해 주세요");
		}
		else {
			$('input[name=rev_index]:checkbox:checked').each(function(index){
				var row = $(this).parent().parent();
				var row_c = row.children();
				 	rev_frm.args.value = row_c.eq(2).text();
					rev_frm.action='/reser/reservation_cancel';
					rev_frm.submit();

			});
		}
	});

	$("#refund").click(function() {
		if($('input[name=rev_index]:checkbox:checked').length < 1){
			alert("하나 이상 선택해 주세요.");
		} else {
			$('#table_body input:checkbox:checked').each(function(index) {
				var row = $(this).parent().parent();
				var row_c = row.children();
				rev_frm.args.value=row_c.eq(2).text();
				rev_frm.action='/reser/reservation_refund';
				rev_frm.submit();
			});
		}
	});



}

function rev_timer(date_time, index, pid) {
    var hours = Math.floor((date_time[index] % (1000 * 60 * 60 * 24)) / (1000*60*60));
    var min = Math.floor((date_time[index]  % (1000 * 60 * 60)) / (1000*60));
    var sec = Math.floor((date_time[index]  % (1000 * 60)) / 1000);

    hours= hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    timer = hours + ":" +  min + ":" + sec ;


    $('#timer'+index).text(timer);

    if (date_time[index] <= 0) {
        clearInterval(pid[index]);
        $('#timer'+index).text("00:00:00");
    } else {
       date_time[index] = date_time[index] - 1000;
    }
}
function etcname_render(td,name,number){
	if(name=="firstetc"||name=="secondetc"){
		$.ajax({
            type: "POST"
            ,url: "/reserve/rev_roomname"
            ,data: {room_type:name}
            ,success:function(response){
                td.html(response.result[0].name+"_"+number);
            }
            ,error:function(data){
                alert("error");
            }
    	});
	}
}

function reserve_room(name){
  var room_typea
  switch (name) {
    case "nightingale" :
      room_type="꾀꼬리";
      break;
    case "bluebird" :
      room_type="파랑새";
      break;
    case "owl":
      room_type="부엉이";
      break;
    case "cuckoo":
      room_type="뻐꾸기";
      break;
    case "raccoon":
      room_type="너구리";
      break;
    case "scops_owl":
      room_type="소쩍새";
      break;
    case "site_cypress":
      room_type="편백구역";
      break;
    case "site_zelkova":
      room_type="느티나무구역";
      break;
    case "pension":
      room_type="펜션";
      break;
    case "site_grass":
    	room_type="편백잔디구역";
    	break;
    case "firstetc":
    	room_type="기타1";
    	break;
    case "secondetc":
    	room_type="기타2";
    	break;
    default:
      room_type="";
      break;
  }

  return room_type;

}

// create rev_table //

function create_table(data) {
	var target = $("#table_body");
	var check=false;
	var list = [
		{field:"rev_id"},
		{field:"rev_id_split"},
		{field:"rev_state"},
		{field:"rev_charge"},
		{field:"f_day"},
		{field:"l_day"},
		{field:"timer"}
	];

	$.each(data, function(index, row) {
			var drow = $("<ul class=\"list-group\">").appendTo(target);
			var dcol = $("<li class=\"list-group-item list-group-item-info\">선택 : <input type=\"checkbox\" name=\"rev_index\"></li>").appendTo(drow);
			dcol = $("<li class=\"list-group-item\">순서 : "+(index+1)+"</li>").appendTo(drow);
			$.each(list, function( i, fieldInfo ) {
					if ((fieldInfo.field) == "rev_id"){
						$("<li class=\"list-group-item\" style=\"display:none;\">"+row[fieldInfo.field]+"</li>").appendTo(drow);
					} else if((fieldInfo.field) == "rev_state") {
						switch(row[fieldInfo.field]) {
							case 1:
								$("<li class=\"list-group-item\">예약상태 : 예약 신청</li>").appendTo(drow);
								check=true;
								break;
							case 2:
								$("<li class=\"list-group-item\">예약상태 : 예약 승인</li>").appendTo(drow);
								break;
							case 3:
								$("<li class=\"list-group-item\">예약상태 : 환불 신청</li>").appendTo(drow);
								break;
							case 5:
								$("<li class=\"list-group-item\">예약상태 : 환불 완료</li>").appendTo(drow);
								break;

							default:
								$("<li class=\"list-group-item\">예약상태:예약 신청</li>").appendTo(drow);
								break;

							}
					} else if((fieldInfo.field) == "rev_id_split") {
						room_name_index=(row[fieldInfo.field]).split("_");
						if ( room_name_index.length == 2 ) {
							room_typea=reserve_room(room_name_index[0]);
							room_name=room_typea+"_"+room_name_index[1];
							chil = $("<li class=\"list-group-item\">").appendTo(drow);
							chil.html("방이름 : "+room_name);
							etcname_render(chil,room_name_index[0],room_name_index[1]);
							//$(room_name).appendTo(tr);
						} else if (room_name_index.length == 3) {
							room_typea=reserve_room(room_name_index[0]+"_"+room_name_index[1]);
							room_name=room_typea+"_"+room_name_index[2];
							chil = $("<li class=\"list-group-item\">").appendTo(drow);
							chil.html("방이름 : "+room_name);
							etcname_render(chil,room_name_index[0]+"_"+room_name_index[1],room_name_index[2]);
						} else {
							chil = $("<li class=\"list-group-item\">").appendTo(drow);
							chil.html("방이름 : "+row[fieldInfo.field]);
						}

					} else if((fieldInfo.field) == "timer") {
						if (check==true) {
							$("<li class=\"list-group-item\">잔여시간 : <a class=\"ui hyeon label\" ><span class=\"badge badge-danger\" id=\"timer"+index+"\"></span></a></li>").appendTo(drow);
							check=false;
						} else {
							$("<li class=\"list-group-item\">잔여시간 : <a class=\"ui olive label\" ><span class=\"badge badge-success\" id=\"deposit_check\">00:00:00</a></li>").appendTo(drow);
						}
					} else if((fieldInfo.field) == "f_day"){
						chil = $("<li class=\"list-group-item\">").appendTo(drow);
						chil.html("입실일 : "+row[fieldInfo.field]);
					} else if((fieldInfo.field) == "l_day"){
						chil = $("<li class=\"list-group-item\">").appendTo(drow);
						chil.html("퇴실일 : "+row[fieldInfo.field]);
                                        } else {
						chil = $("<li class=\"list-group-item\">").appendTo(drow);
						chil.html("금액 : "+row[fieldInfo.field]);
					}
			});
	});
}

// 예약 테이블 쪽수
function rev_pagenavi(data,index) {
	var navi;
	var target = $("#rev_page");
	var start = 0;
	var tmp;

	if ( (data.length) % 10 != 0) {
		navi = Math.floor(data.length/10)+1;
	} else {
		navi = Math.floor(data.length/10);
	}

	if (index != 0){
		index = Math.floor(index / 10);

	}

	if (navi == 0) {
		navi=1;
	}

	if (  index <11) {
		start=0;

	} else if ( index  < (Math.floor(navi/10) *10)  ) {
			tmp = Math.floor((index)/10) -1;
			start = (9*Math.floor((index)/10))+tmp;
			navi = start + 12;
	} else {
			tmp = Math.floor(navi/9) -1;
			start = (9*Math.floor(navi/9))+tmp;
			navi = start + (navi% (Math.floor(navi/10) *10))+1;

	}


	for (i=start; i<navi; i++) {
		if( i == index) {
			$("<a href=\"#\" class=\"btn btn-primary btn-lg disabled\" role=\"button\" aria-disabled=\"true\">"+(i+1)+"</a>").appendTo(target);
		} else {
			$("<a href=\"#\" class=\"btn btn-primary btn-lg\" onclick=\"navi_move("+(i*10)+")\">"+(i+1)+"</a>").appendTo(target);
		}
	}


}

function clear(){
        for (var i=0; i < pid.length; i++) {
                clearInterval(pid[i])
        }

}
/*

function navi_move(cnt) {
	clear();

$.ajax({
    type: "post"
    ,url: "/reserve/rev_timer"
    ,data: {limit:cnt}
    ,success:function(data) {
	    $("#rev_page").empty();
	    rev_pagenavi(data.max_rev, data.cnt);
	    $("#table_body").empty();
	    create_table(data.timer);
	    set_timer(data.timer);

    }
    ,error:function(data){
            alert("err");
    }
});

}*/
