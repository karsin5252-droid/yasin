jQuery(document).ready(function($){
  "use strict";
  $("#preloader").animate({opacity:0},600,function(){
    setTimeout(function(){$("#preloader").css("visibility","hidden").fadeOut();},300);
  });
  $(window).scroll(function(){
    var s=$(window).scrollTop(),box=$('.header-text').height(),h=$('header').height();
    $("header").toggleClass("background-header",s>=box-h);
  });
  if($(".Modern-Slider").length){
    $(".Modern-Slider").slick({autoplay:true,autoplaySpeed:8000,speed:600,slidesToShow:1,slidesToScroll:1,
      pauseOnHover:false,dots:true,pauseOnDotsHover:true,cssEase:'linear',draggable:false,
      prevArrow:'<button class="PrevArrow"></button>',nextArrow:'<button class="NextArrow"></button>'});
  }
  function visible(t){var vt=$(window).scrollTop(),vb=vt+$(window).height(),top=t.offset().top;
    return top+t.height()<=vb&&top>=vt&&t.is(':visible');}
  function count(){
    var d=$('.count-digit');
    if(!d.length||d.hasClass('counter-loaded')||!visible(d.first()))return;
    d.addClass('counter-loaded').each(function(){
      var $t=$(this);
      jQuery({Counter:0}).animate({Counter:$t.text()},{duration:2000,easing:'swing',step:function(){$t.text(Math.ceil(this.Counter));}});
    });
  }
  $(window).scroll(count);count();
});
