const menuPokeball = document.querySelector(".menu-poke")
    const navLinks = document.querySelector(".nav-links")

    menuPokeball.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
    })



   window.addEventListener("scroll", function(){
    navbar = document.querySelector("navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
   })
   


  