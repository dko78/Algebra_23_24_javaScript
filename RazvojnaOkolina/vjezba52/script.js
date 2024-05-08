/* $(function () {
  $("#btn1").hide(2000).show(2000);
  $("#btn2").slideUp(1000).slideDown(500);
}); */

/* Još neke JQuery metode:
delay, fadeIn, fadeOut, toggle, fadeToggle
*/

/* $(function () {
  $("#btn3").css({ fontWeight: "bold" });
});

$(function () {
  $("#btn1").html("Gumbić 1");
}); */

// idemo složiti neke onClick funkcije

/* $("#btn1").on("click", function () {
  $(".col-sm-3:last-child").slideToggle(300);
}); */

/* $(document).ready(function () {
  $("#btn1").click(function () {
    $(".row").first().toggle();
  });
});

$(document).ready(function () {
  $("#btn2").click(function () {
    $(".row").eq(1).toggle();
  });
});

$(document).ready(function () {
  $("#btn3").click(function () {
    $(".row").eq(2).toggle();
  });
}); */

/* Možemo upotrijebiti ovaj data-panel-class
atribut kako bi definirali putem njega, koji
gumb je stisnut, da mu uzme vrijednost i 
kontaketnacijom spoji njegov atribut i klasu
kako bi togglao taj ciljani element... */

$(document).ready(function () {
  $(".btn-info").click(function () {
    const panelClass = $(this).data("panel-class");
    $("." + panelClass).toggle();
  });
});
