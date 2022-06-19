$(document).ready(function() {

	// 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
	var floatPosition = parseInt($("#testbanner").css('bottom'));
	// 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );

	$(window).scroll(function() {
		// 현재 스크롤 위치를 가져온다.
		var scrollTop = $(window).scrollTop();
		var newPosition = floatPosition-scrollTop+ "px";

		/* 애니메이션 없이 바로 따라감
		 $("#floatMenu").css('top', newPosition);
		 */

		$("#testbanner").stop().animate({
			"bottom" : newPosition
		}, 500);

    }).scroll();
    
    var cook = getCookie("banner");
    if(!cook){
        var banner = document.getElementById('testbanner');
        banner.style.display="block";
    }
});

   
 function getCookie( name ) {  
    var nameOfCookie = name + "=";  
    var x = 0;  
    while ( x <= document.cookie.length )  
    {  
        var y = (x+nameOfCookie.length);  
        if ( document.cookie.substring( x, y ) == nameOfCookie ) {  
            if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )  
                endOfCookie = document.cookie.length;  
            return unescape( document.cookie.substring( y, endOfCookie ) );  
        }  
        x = document.cookie.indexOf( " ", x ) + 1;  
        if ( x == 0 )  
            break;  
    }  
    return "";  
 }  

 function setCookie( name, value, expiredays ) {   
    var todayDate = new Date();   
    todayDate.setDate( todayDate.getDate() + expiredays );   
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"   
 }  

function close_1day(){
    var banner = document.getElementById('testbanner');
    banner.style.display="none";
    setCookie( "banner", "done" ,1);

}

function close_banner(){
var banner = document.getElementById('testbanner');
banner.style.display="none";
}
