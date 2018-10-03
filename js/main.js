$('.nav-toggler').on('click', toggleNav);

function toggleNav() {
  $('.navbar-nav').toggleClass('navbar-open');
  if ($('.backdrop').length === 0) {
    const backdrop = $('<div />').addClass('backdrop');
    backdrop.on('click', toggleNav);
    backdrop.appendTo(this.closest('nav'));
  } else {
    $('nav .backdrop').remove();
  }
}

const scroll = new SmoothScroll('a[href*="#"]');

$('.Card-Carousel').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  dots: true,
  autoplay: true,
  focusOnSelect: true,
  initialSlide: 2,
  arrows: false,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});

$('.destinations-carousel').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  dots: false,
  autoplay: true,
  focusOnSelect: true,
  initialSlide: 2,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        dots: true
      }
    },
    {
      breakpoint: 950,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 2,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});

$('.testimonials-carousel').slick({
  dots: true,
  arrows: false
});