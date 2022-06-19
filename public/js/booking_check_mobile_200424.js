function terms(){
    var terms_1 = $("input:checkbox[id='terms_1']").is(":checked");
    var terms_2 = $("input:checkbox[id='terms_2']").is(":checked");
    var terms_3 = $("input:checkbox[id='terms_3']").is(":checked");
    var room_index = $("input:checkbox[name='room_index']").is(":checked");
    var patten =  /^01([0|1|6|7|8|9][-]?)-?([0-9]{3,4}[-])-?([0-9]{4})$/;
	
    if (sec_room.user_phone.value =="") {
	    alert("연락처를 입력해주세요.");
	    sec_room.user_phone.focus();
    }  else if (sec_room.user_name.value==""){
	    alert("예약자 성함을 입력해주세요.");
	    sec_room.user_name.focus();
    } else if (!patten.test(sec_room.user_phone.value)) {
	    alert("잘못된 연락처 형식입니다. -(하이픈)을 포함한 숫자만 입력해주세요.");
	    sec_room.user_phone.value=""
	    sec_room.user_phone.focus();
    } else if (room_index == false) {
        alert("방 번호를 선택해주세요.")
    } else if (terms_1==false || terms_2 ==false || terms_3==false){
                alert("이용 약관을 동의해주세요.");
        } else {
        sec_room.submit();
    }
}

function inputPhoneNumber(obj) {
  
    
    var number = obj.value.replace(/[^0-9]/g, "");
    var phone = "";



    if(number.length < 4) {
        return number;
    } else if(number.length <= 7) {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3);
    } else {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3, 4);
        phone += "-";
        phone += number.substr(7);
    }
    obj.value = phone;
}

function anno_terms(){
    var terms_1 = $("input:checkbox[id='terms_1']").is(":checked");
    var terms_2 = $("input:checkbox[id='terms_2']").is(":checked");
    var terms_3 = $("input:checkbox[id='terms_3']").is(":checked");
    var room_index = $("input:checkbox[name='room_index']").is(":checked");
    var patten =  /^01([0|1|6|7|8|9][-]?)-?([0-9]{3,4}[-])-?([0-9]{4})$/;
	
    if(sec_room.user_phone.value=="" || sec_room.user_name.value=="") {
	    alert("예약정보를 입력해주세요.");
	    if (sec_room.user_name.value=="") {
		    sec_room.user_name.focus();
	    } else {
		    sec_room.user_phone.focus();
	    }
    }  else if (!patten.test(sec_room.user_phone.value)) {
             alert("잘못된 연락처 형식입니다. -(하이픈)을 포함한 숫자만 입력해주세요.");
	      sec_room.user_phone.value=""
              sec_room.user_phone.focus();
     }
     else if (room_index == false) {
        alert("방 번호를 선택해주세요.")
    } else if (terms_1==false || terms_2 ==false || terms_3==false){
                alert("이용 약관을 동의해주세요.");
        } else {
        sec_room.submit();
    }
}




function view_index(data) {
    var target = $(".select_room_index");
    var room_index=$("").appendTo(target);
    var index;
    var name;
	
    name = (data.result[0].room_name.split("_"));

    if (name[0] == "site" || name[0] == "scops") 
    {
	name = room_name(name[0]+"_"+name[1]);
    } else {
	    name = room_name(name[0]);
    }

    for (var i=0; i<data.result.length; i++) {
            index=(data.result[i].room_name).split("_");

	    if ( index.length == 3) {
		    room_index=$("<div style=\"text-align:center;border:1px solid #dcdcdc\"><input type=\"checkbox\" name=\"room_index\" class=\"form-check-input\"  value=\""+data.result[i].room_name+"\">"+"<label>"+name+"_"+index[2]+"</label></div>").appendTo(target);
	    } else {
		    room_index=$("<div style=\"text-align:center;border:1px solid #dcdcdc\"><input type=\"checkbox\" name=\"room_index\" class=\"form-check-input\" value=\""+data.result[i].room_name+"\">"+"<label>"+name+"_"+index[1]+"</label></div>").appendTo(target);
	    }
    }

    $('input[type="checkbox"][name="room_index"]').click(function(){
        if ($(this).prop('checked')) {
	        $('input[type="checkbox"][name="room_index"]').prop('checked', false);
	        $(this).prop('checked', true);
	        sec_room.room_name.value=$(this).val();
        }
    });
 

    $("#collection").click(function(){
        $("#collection_detail").modal('show');
        
    });

    $("#provision").click(function(){
        $("#provision_detail").modal('show');
    });


}


function room_name(name) {
	switch(name){ 
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
                        room_type="[사이트]편백";
                        break;
                case "site_zelkova":
                        room_type="[사이트]느티나무";
                        break;
                case "pension":
                        room_type="펜션";
                        break;
                default:
                        room_type="";
                        break;
        }

	return room_type
}

//jQuery.noConflict();
//(function($){ 
(function(){
$(document).ready(function(){
    room_query();
    $("#checkboxcontroll").click(function(){
        if($("#checkboxcontroll").prop("checked")){
            $("input[name=booking_terms]").prop("checked",true);
        }else{
            $("input[name=booking_terms]").prop("checked",false);
        }
    });


    })
//})(jQuery);
})();

function room_query(){
    $.ajax({
        type: "POST"
        ,url: "/reserve/rev_roomindex"
        ,data: {room_type:sec_room.room_type.value,f_day:sec_room.f_day.value,l_day:sec_room.l_day.value}
        ,success:function(response){
            view_index(response)
        }
        ,error:function(data){
            alert("error");
            history.back();
        }
    });


}

