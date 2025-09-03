const navbar = document.getElementById("navbar");
const nav_a = document.getElementsByClassName("nav-a");

window.addEventListener("scroll",()=>{
    if(window.scrollY > (0.999)*window.innerHeight){
        navbar.classList.add("scrolled");
        nav_a.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
        nav_a.classList.remove("scrolled");
    }
});