hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navbar = document.querySelector(".nav-bar");
    line = document.querySelector(".hamburger");
    navbar.classList.toggle("active");
    line.classList.toggle("active");
}