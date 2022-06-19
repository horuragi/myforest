function call_query() {

$.ajax({
    type: "POST"
    ,url: "/reserve/last_reservation"
    ,data:{limit:0}
    ,success:function(data) {
	create_table(data.result, data.cnt);
	rev_pagenavi(data.result, data.cnt);

    }
    ,error:function(data){
	    alert("err");
    }
});
}

// create rev_table //

function create_table(data, count) {
	$("#table_body").empty();
	var target = $("#table_body");
	var check=false;
	var room_name2;
	var room_index;
	var tmp;
	var list = [
		{field:"rev_id"},
		{field:"rev_roomtype"},
		{field:"rev_cancel"},
		{field:"rev_state"},
		{field:"rev_charge"},
		{field:"f_day"},
		{field:"l_day"},
	];

	if (count != 0 ) {
		count  = Math.floor(index / 10);
	}
	

	$.each(data, function(index, row) {
			count++
			var tr = $("<tr>").appendTo(target);
			var td = $("<td>"+count+"</td>").appendTo(tr);
			$.each(list, function( i, fieldInfo ) {
					if ((fieldInfo.field) == "rev_id"){
						$("<td id=\"hide\">"+row[fieldInfo.field]+"</td>").appendTo(tr);
						room_name2=(row[fieldInfo.field]).split("&");
						room_name2=room_name2[1].split("_");
						room_index=(row[fieldInfo.field]).split("_");
						tmp=room_index[0].split("&");
					} else if((fieldInfo.field) == "rev_state") {
						switch(row[fieldInfo.field]) {
							case 1:
								$("<td>예약 신청</td>").appendTo(tr);
								check=true;
								break;
							case 2:
								$("<td>예약 승인</td>").appendTo(tr);
								break;
							case 3:
								$("<td>환불 신청</td>").appendTo(tr);
								break;
							case 5:
								$("<td>환불 완료</td>").appendTo(tr);
								break;

							default:
								$("<td>예약 신청</td>").appendTo(tr);
								break;

							}
					} else if((fieldInfo.field) == "rev_roomtype") {
						room_name=reserve_room(row[fieldInfo.field]);
							$("<td>"+room_name+"</td>").appendTo(tr);
					} else if ((fieldInfo.field == "rev_cancel")/*i==2*/){
						if (tmp[1]=="site" || tmp[1]=="scops") { 
							room_name2=reserve_room(room_name2[0]+"_"+room_name2[1]);
						} else {
							room_name2=reserve_room(room_name2[0]);
						}


						if (room_name2=="[사이트]편백" || room_name2=="[사이트]느티나무" || room_name2=="[방갈로] 소쩍새"){
                                                        $("<td>"+room_name2+"_"+room_index[2]+"</td>").appendTo(tr);
                                                } else {
							$("<td>"+room_name2+"_"+room_index[1]+"</td>").appendTo(tr);
						}
					}else {
						td = $("<td>").appendTo(tr);
						td.html(row[fieldInfo.field]);
						
					}
			});
	});
}

function reserve_room(name){
	var room_typea
	switch (name) {
		case "nightingale" :
			room_type="[방갈로] 꾀꼬리";
			break;
		case "bluebird" :
			room_type="[방갈로] 파랑새";
			break;
		case "owl":
			room_type="[방갈로] 부엉이";
			break;
		case "cuckoo":
			room_type="[방갈로] 뻐꾸기";
			break;
		case "raccoon":
			room_type="[사이트] 너구리";
			break;
		case "scops_owl":
			room_type="[방갈로] 소쩍새";
			break;
		case "site_cypress":
			room_type="[사이트] 편백";
			break;
		case "site_zelkova":
			room_type="[사이트] 느티나무";
			break;
		case "pension":
			room_type="펜션";
			break;
		default:
			room_type="";
			break;
	}

	return room_type;

}


// 예약 테이블 쪽수 
function rev_pagenavi(data,index) {
	var navi;
	var target = $("#rev_page");
	var start = 0;
	var tmp;

	$("#rev_page").empty();

	if ( (data.length) % 10 != 0) {
		navi = Math.floor(data.length/10)+1;
	} else {
		navi = Math.floor(data.length/10);
	}


	if (index != 0){
		index = Math.floor(index / 10);

	}

	if (navi==0) {
		navi=1;
	}

        if ( index <11) {
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
			$("<a class=\"active item\">"+(i+1)+"</a>").appendTo(target);
		} else {
			$("<a class=\"item\" onclick=\"navi_move("+(i*10)+")\">"+(i+1)+"</a>").appendTo(target);
		}
	}

}

function navi_move(cnt) {
$.ajax({
    type: "post"
    ,url: "/reserve/last_reservation"
    ,data: {limit:cnt}
    ,success:function(data) {
	rev_pagenavi(data.result, data.cnt);
        create_table(data.result, data.cnt);
    }
    ,error:function(data){
            alert("err");
    }
});

}

