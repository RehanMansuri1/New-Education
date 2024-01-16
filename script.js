const burger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list'); // Use the correct selector for class or element name
const rightnav = document.querySelector('.rightNav'); // Use the correct selector for class or element name

burger.addEventListener('click', () => {
    rightnav.classList.toggle('visi-res');
    navList.classList.toggle('visi-res');
    navbar.classList.toggle('nav-height-rsp');
});
