$(document).ready(function(){

  // Top banner/jumbotron carousel
  $('.top-carousel').slick({
    arrows: false,
    dots: true,
  });


  // Top deals/books carousel
  $('.top-books-carousel').slick({
    // arrows: false,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 385,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });


  // Editor's pick and Customer's choice books carousel
  $('.editors-pick-carousel, .customer-choice-carousel').slick({
    // arrows: false,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });



  //  pdp sliders
  $('.products-slider').slick({
    arrows: true,
    dots: false,
    asNavFor: '.products-slider',
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1139,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

//  bottom sheet\
  if ($(window).width() < 768) {

    $('#filterBy').on('click', function(){
      $('#filterSheet').slideToggle(200);
      $("body").toggleClass('fixed-scroll');
      // if (  $('#sortBy + #sortSheet').slideUp()){
      //   $(this).slideDown();
      // }



    });

    $('#sortBy').on('click', function(){
      $('#sortSheet').slideToggle(200);
      $("body").toggleClass('fixed-scroll');
      // if (  $('#filterBy + #filterSheet').slideUp()){
      //   $(this).slideDown();
      // }

    });


  }





});
