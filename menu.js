$(document).ready(function() {

  $("#element1").hide();
  $("#element2").hide();
  $(".card-body1").hide();
  $(".card-body2").hide();

  /* btn1 */

  $(".btn1").click(function() {
    /* card */
    if ($("#element2").is(":hidden")) {
      $("#element1").slideToggle();
    } else if (($("#element1").is(':visible')) & ($("#element2").is(":visible"))) {
      $("#element2").css('margin-left', '50%');
      $("#element1").slideToggle();
    } else {
      $("#element1").slideToggle();
      $("#element2").css('margin-left', '0');
    }

  });

  /* btn2 */
  $(".btn2").click(function() {

    /* card */
    if ($("#element1").is(":hidden")) {
      $("#element2").css('margin-left', '50%');
      $("#element2").slideToggle();
    } else {
      $("#element2").css('margin-left', '0');
      $("#element2").slideToggle();
    }
  });

  /* btn3 */
  $(".btn3").click(function() {
    /* card */
    if (($("#element1").is(':hidden')) & ($("#element2").is(":visible"))) {
      $("#element1").slideToggle();
      $("#element2").css('margin-left', '50%');
      $("#element2").slideToggle();
    } else if (($("#element1").is(':visible')) & ($("#element2").is(":hidden"))) {
      $("#element1").slideToggle();
      $("#element2").css('margin-left', '50%');
      $("#element2").slideToggle();
    } else {
      $("#element1").slideToggle();
      $("#element2").css('margin-left', '0');
      $("#element2").slideToggle();
    }
  });


  /* handel resize window for button*/
  $(window).on('resize', function() {
    var win = $(this);
    if ($(window).width() <= 767) {
      $(".button-group").css('flex-direction', 'column');
      $(".btn-primary").css('margin-top', '2vh');
      $(".heading").css('font-size', '1.5rem');
    } else {
      $(".button-group").css('flex-direction', 'row');
    }
  });


  /* example 2 */

  /* btn4 */
  $(".btn4").click(function() {
    $(".card-body1").slideToggle();
  });

  /* btn5 */
  $(".btn5").click(function() {
    $(".card-body2").slideToggle();
  });

});
