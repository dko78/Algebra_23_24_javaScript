"use strict";
//što će se događati kad je document ready
/*
$(function () {
  $("#btn1").hide(2000).show(2000); //podržava chainanje
  $("#btn2").slideUp(1000);
});
*/
/* još neke jquery metode
delay
fadeIn
fadeOut
toggle
fadeToggle
*/
//css
/*
$(function () {
  $("#btn3").css({ fontWeight: "bold" });
});

//mijenajti html
$(function () {
  $("#btn1").html("Gumbić 1");
});
*/
//on click funckije
//btn 1 toogle zdanja kolona
/*
$("#btn1").on("click", function () {
  $(".col-sm-3:last-child").slideToggle(300);
});
*/
//sakri redove
/*
$(document).ready(function () {
  $("#btn1").click(function () {
    $(".row").first().toggle();
  });
});

$(document).ready(function () {
  $("#btn2").click(function () {
    $(".row").eq(1).toggle(); //prvi je 0,1 je drugi redak
  });
});

$(document).ready(function () {
  $("#btn3").click(function () {
    $(".row").eq(2).toggle(); //prvi je 0,1 je drugi redak
  });
});
*/
//ovo isto kao gore ali sa data panel class
$(document).ready(function () {
  $(".btn-info").click(function () {
    const panelClass = $(this).data("panel-class");
    $("." + panelClass).toggle();
  });
});
