/*global $*/
$(function(){
        var a = $(window).height()/2 - $('.carousel-caption').height()/2;
        a = a + 100;
        a = a + "px";
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


        $('.viewport-height').css('height', a);

        $(window).scroll(function() {
          var topHeight = $(window).height();
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

        $('.carousel').carousel({
          pause: null,
        });
      })