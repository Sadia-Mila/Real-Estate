

// Banner Part Slider Js Start

  $('.bannerSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:4000,
    arrows:false,
    dots:false,
    prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right next"></i>',
     asNavFor: '.slider-item'
  });

  $('.slider-item').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    asNavFor: '.bannerSlider',
    arrows:false,
    dots:false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '20px',
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

//wow js Start
	
new WOW().init();

// Wow Js End

// AOS js Start

  AOS.init();
// AOS js End


//	typed js
	
$(".typed").typed({
    strings: [" Find Your Dream House Search By Area."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
});
