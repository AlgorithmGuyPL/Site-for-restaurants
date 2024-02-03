'use strict';


const AddEventOnElements = function (elements, eventType, callback){
    for (let i = 0 , len=elements.length; i<len ;i++){
        elements[i].addEventListener(eventType,callback);
    }
}

const navbar = document.querySelector("[data-navbar]");
const navbarTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const togglerNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

AddEventOnElements(navbarTogglers,"click", togglerNav);

const closeNav = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

AddEventOnElements(navbarLinks,"click",closeNav)


const header = document.querySelector("[data-header]")


window.addEventListener('scroll', function() {
    header.classList[window.scrollY > 10 ? "add" : "remove"]('active');
});