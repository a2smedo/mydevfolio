$(document).ready(function () {

  // for changed background nav bar & ul->link
  var nav = $('nav');
  var navHeight = nav.outerHeight();

  window.onscroll = function (){
    var top = window.scrollY;
    if(top > 3) {
      $("nav").addClass('navbar-reduce');
    
    }else{
      $('nav').removeClass('navbar-reduce');
    }
  }

  // for Changed paragraph animation used Type Js
  var typed = new Typed('#show', {
    strings: [
      'CEO DevFolio',
      'Frontend Developer',
      'Web Developer',
      'Web Designer',
      'Frontend Developer',
      'Graphic Designer'
      ],
    typeSpeed: 100, 
    loop: true,
    backDelay: 1100,
    backSpeed: 60,
    smartBackspace: true 
  });


  // Back to top 
  $(window).scroll(function() {

    var offset = 130;
    var duration = 1000;

      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(duration);
      } else {
        $('.back-to-top').fadeOut(duration);
      }
    });

    $('.back-to-top').click(function() {
      $('html , body').animate({
        scrollTop:0
      },2500);
      return false;
    });


  /* Star Counter */
  $('.counter').counterUp({
    delay: 15,
    time: 1000
  });
});

