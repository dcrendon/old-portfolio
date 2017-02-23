$(document).ready(function() {
  $('.tooltipped').tooltip({delay: 50});
  $(".button-collapse").sideNav();
  $('#bod').animate({opacity: 0}, 0).css({'background-image': 'url("vape.jpg") no-repeat center center fixed'}).animate({opacity: 1}, 2500);


  $(".nav-contact").click(function() {
    // add neon for first time
    $(".foot-icon").addClass("play");
    // remove neon
    setTimeout(function() {
      $(".foot-icon").removeClass("play");
    }, 2000);
    // readd neon
    // setTimeout(function() {
    //   $(".foot-icon").addClass("neon");
    // }, 2100);
    // remove neon for last time
    // setTimeout(function() {
    //   $(".foot-icon").addClass("neon");
    // }, 4100);
  });
});
