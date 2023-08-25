const menuToggle = document.querySelector('.menuToggle');
const header = document.querySelector('header');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click',() => {
    header.classList.toggle('active');
    nav.classList.toggle('showNav');
});