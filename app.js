$(document).ready(function() {
  $('.tooltipped').tooltip({delay: 50});
  $(".button-collapse").sideNav();
  $('#bod').animate({opacity: 0}, 0).css({'background-image': 'url("vape.jpg") no-repeat center center fixed'}).animate({opacity: 1}, 2500);
});
