$(function(){
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $(window).scroll(function() {
    var topHeight = $('.jumbo-about').height();
    var scroll = $(window).scrollTop();

    if (scroll >= topHeight) {
      $(".navbar").removeClass("hidden-xs-up");
      $(".navbar").removeClass("fadeOutUp");
      $(".navbar").addClass("fadeInDown")
    }
    if (scroll < topHeight) {
      $(".navbar").addClass("fadeOutUp");
      $(".navbar").removeClass("fadeInDown");
    }
  });
})