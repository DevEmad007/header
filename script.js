const toggleMenu = document.querySelector('.toggleMenu');
const header = document.querySelector('header');
const navList = document.querySelector('.navList');

toggleMenu.addEventListener('click',() => {
    const classList = navList.classList;
    if (!classList.contains('showMenu')) {
        classList.add('showMenu');
    }
    else {
        classList.remove('showMenu');
    }
});