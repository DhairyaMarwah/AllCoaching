const hamburger=document.getElementById('menu-btn-id');
const navwrap=document.getElementById('nav-links-id');
hamburger.addEventListener('click',()=>{
  console.log("hello");
  navwrap.classList.toggle('show');
});


$('.popular-cards').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true, 
  // arrows: true,
  prevArrow:"<button type='button' class='slick-prev pull-left '><</button>",
  nextArrow:"<button type='button' class='slick-next pull-right'>></button>"
      
});