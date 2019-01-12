/* global $ */
$(function(){
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  var showing = false;

  //Initiate navbar animation on large screen
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

  //Nav Dropdown button animation
  $("#nav-button").click(function(){
    if (showing === false){
      $("#exCollapsingNavbar2").removeClass("hidden-md-down");
      $("#exCollapsingNavbar2").removeClass("fadeOutUp");
      $("#exCollapsingNavbar2").addClass("fadeInDown");

      showing = true;
    }

    else{
      $("#exCollapsingNavbar2").addClass("fadeOutUp");
      $("#exCollapsingNavbar2").removeClass("fadeInDown");
      $("#exCollapsingNavbar2").addClass("hidden-md-down");
      showing = false;
    }
  });

})