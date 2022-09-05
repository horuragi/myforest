// 01 script
$(document).ready(function () {
  $(".ui.dropdown").dropdown({
    on: "hover",
    action: "nothing",
  });
});

// 02 script
function loading_show() {
  $("#load").show();
}
function loading_hide() {
  //$('#load').hide();
  $("#load").transition({ animation: "fade", duration: "600ms" });
}
function page_move(renderpage) {
  location.href = renderpage;
}

function mouse_on(obj) {
  obj.style.background = "#cecece";
  obj.style.fontWeight = "bold";
  var tag = obj.getElementsByTagName("i");
  tag[0].style.display = "inline";
}

function mouse_off(obj) {
  obj.style.background = "white";
  obj.style.fontWeight = "lighter";
  var tag = obj.getElementsByTagName("i");
  tag[0].style.display = "none";
}
