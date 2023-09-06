$(document).ready(function(){
    $(".customer-logos").slick({
        dots: false,
        infinite: false,
        autoplay:true,
        autoplaySpeed:1500,
        arrows:false,
        slidesToShow: 6,
        slidesToScroll: 1,
        pauseOnHover:false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 3,
            }
          },
          
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});