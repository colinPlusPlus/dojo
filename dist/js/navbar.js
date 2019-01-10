/* global $ */
$(function(){
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  var showing = false;

  //Initiate navbar animation on large screen
  if($(window).width() >= 992){
    $(window).scroll(function() {
      var topHeight = $('.jumbo-about').height();
      var scroll = $(window).scrollTop();

      if (scroll >= topHeight) {
        $(".navbar").removeClass("hidden-lg-up");
        $(".navbar").removeClass("fadeOutUp");
        $(".navbar").addClass("fadeInDown");
      }
      if (scroll < topHeight) {
        $(".navbar").addClass("fadeOutUp");
        $(".navbar").removeClass("fadeInDown");
      }
    });
  }

  //Nav Dropdown button animation
  $("#nav-button").click(function(){
    if (showing === false){
      $("#nav-button").removeClass("hidden-md-down");
      $(".navbar").removeClass("fadeOutUp");
      $(".navbar").addClass("fadeInDown");

      showing = true;
    }

    else{
      $(".navbar").addClass("fadeOutUp");
      $(".navbar").removeClass("fadeInDown");
      showing = false;
    }
  });

})