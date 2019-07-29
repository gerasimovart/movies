$(document).ready(function(){
    $('.slider-of-movies').slick({
        
infinite: false,
speed: 300,
slidesToShow: 6,
responsive: [
{
  breakpoint: 1200,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>'
  }
},
{
  breakpoint: 768,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>'
  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true
  }
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
    });
  });