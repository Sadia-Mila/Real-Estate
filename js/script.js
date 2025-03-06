

// Banner Part Slider Js Start

  $('.bannerSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:4000,
    arrows:false,
    dots:true,
    prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right next"></i>',
  });


  // Service Part Js start
  
$('.serviceSlider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:1000,
  arrows:true,
  dots:true,
  prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
  nextArrow:'<i class="fa-solid fa-angle-right next"></i>',
  responsive: [
    {
      breakpoint: 578,
      settings: {
        slidesToShow:1,
        slidesToScroll:1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint:769,
      settings: {
        slidesToShow:2,
        slidesToScroll:1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint:992,
      settings: {
        slidesToShow:3,
        slidesToScroll:1,
        infinite: true,
        dots: true,
      }
    },
  ]
});

// Back to top Js start
//==== Back-to-top button
$(window).on('scroll', function(event) {
  if($(this).scrollTop() > 600){
      $('.back-to-top').fadeIn(200)
  } else{
      $('.back-to-top').fadeOut(200)
  }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: 0,
  }, 1000);
});


// Sticky-Header Part Start
  //  Sticky Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky_header');
    }
    else {
         $('.navbar').removeClass('sticky_header');
    }
    });  
// Sticky-Header Part End