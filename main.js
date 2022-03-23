const hamburger=document.getElementById('menu-btn-id');
const navwrap=document.getElementById('nav-links-id');
hamburger.addEventListener('click',()=>{
  console.log("hello");
  navwrap.classList.toggle('show');
});
