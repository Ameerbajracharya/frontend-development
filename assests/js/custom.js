$(document).ready(function() {
  $('.services-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  $('.banner-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    dots:false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 641,
      settings: {
       arrows:false,
       dots:true,
     }
   }
   ]
  });


  $('.test-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots:false,
    autoplay: true,
    autoplaySpeed: 2000, 
    asNavFor: '.test-logo',
  
 });
  $('.test-logo').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.test-content',
    dots: false,
    arrows:false,
    focusOnSelect: true,
    centerMode: false,
    responsive: [
    {
      breakpoint: 1002,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      }
    }
    ]
  });
  $('.profile-main').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    dots:false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
      }
    },
    {
      breakpoint: 851,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:true,
      }
    },
    {
      breakpoint: 550,
      settings: {
        arrows:false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  }); 
  $('.commerce-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    dots:false,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
      }
    },
    {
      breakpoint: 851,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
      }
    }
    ]
  });
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
      ) {
      // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
