$(document).ready(function() {


  $('.tooltipped').tooltip({delay: 50});
  $(".button-collapse").sideNav();
  $('#bod').animate({opacity: 0}, 0).css({'background-image': 'url("vape.jpg") no-repeat center center fixed'}).animate({opacity: 1}, 2500);


  $(".nav-contact").click(function() {
    // add neon
    $(".foot-icon").addClass("play");
    // remove neon
    setTimeout(function() {
      $(".foot-icon").removeClass("play");
    }, 2000);
  });

  var cards = false;
  console.log(cards);
  $(".nav-work").click(function () {
    console.log(cards);
    if (cards) {
      cards = false;
      // remove existing classes
      $(".work-left").removeClass("animated bounceInLeft");
      $(".work-right").removeClass("animated bounceInRight");
      // make cards leave
      $(".work-left").addClass("animated bounceOutLeft");
      $(".work-right").addClass("animated bounceOutRight");
      $('.work-right, .work-left').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(".work-right, .work-left").addClass("hidden");
      });
      console.log(cards);
    }else {
      // remove existing classes
      $(".work-right, .work-left").removeClass("hidden");
      $(".work-left").removeClass("animated bounceOutLeft");
      $(".work-right").removeClass("animated bounceOutRight");
      // make cards enter
      $(".work-left").addClass("animated bounceInLeft");
      $(".work-right").addClass("animated bounceInRight");
      $('.work-right, .work-left').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(".work-right, .work-left").removeClass("hidden");
      });
      $(".work-right, .work-left").removeClass("hidden");
      cards = true;
      console.log(cards);
    };



  });


});
