const hamburger=document.getElementById('menu-btn-id');
const navwrap=document.getElementById('nav-links-id');
hamburger.addEventListener('click',()=>{
  console.log("hello");
  navwrap.classList.toggle('show');
});


$('.popular-cards').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplaySpeed: 2000,
  infinite: true,
  autoplay: true, 
   
  speed: 400,
  arrows: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
      }
    },
  ]
  // prevArrow:"<button type='button' class='slick-prev pull-left '><</button>",
  // nextArrow:"<button type='button' class='slick-next pull-right'>></button>"
      
});