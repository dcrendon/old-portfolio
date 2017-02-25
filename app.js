$(document).ready(function() {

  // for work cards
  if($(window).width()<992){
   $('.work-left, .work-right').removeClass('col s6');
 }else {
   return;
 }
  // preloader
  $(window).load(function(){
    $('#preloader').animate({opacity: 1}, 0).animate({opacity: 0}, 2500, function () {
      $(this).remove();
    });
  });


  // initialize some elements
  $('.tooltipped').tooltip({delay: 50});
  $(".button-collapse").sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });
  $('#bod').animate({opacity: 0}, 0).css({'background-image': 'url("vape2.jpeg") no-repeat center center fixed'}).animate({opacity: 1}, 2500);

  // changes size of work cards
  $(window).resize(function(){
   if($(window).width()<992){
    $('.work-left, .work-right').removeClass('col s6');
  }else if ($(window).width()>992) {
    $('.work-left, .work-right').addClass('col s6');
  }
  });



  $(".nav-contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".page-footer").offset().top
    }, 2000);
    // add neon
    $(".foot-icon").addClass("play");
    // remove neon
    setTimeout(function() {
      $(".foot-icon").removeClass("play");
    }, 2000);
  });

  var cards = false;
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
      $('html, body').animate({
          scrollTop: $(".work").offset().top
      }, 1000);
    };
  });


  //
  // $(window).load(function(){
  //   $('#preloader').animate({opacity: 1}, 0).animate({opacity: 0}, 2500);
  //   // $('#preloader').fadeOut('slow',function(){
  //   //   $('#preloader').animate({opacity: 1}, 0).animate({opacity: 0}, 2500);
  //   //   // $(this).remove();
  //   // });
  // });
});
