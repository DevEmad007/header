const menuToggle = document.querySelector('.menuToggle');
const header = document.querySelector('header');
const navList = document.querySelector('nav');

menuToggle.addEventListener('click',() => {
    console.log(99);
    const classList = navList.classList;
    if (!classList.contains('showMenu')) {
        classList.add('showMenu');
    }
    else {
        classList.remove('showMenu');
    }
});