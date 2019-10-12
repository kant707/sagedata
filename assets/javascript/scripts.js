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

});
