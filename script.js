// navList.addEventListener('mouseover',() => {
//     menuOpen = true;
//     console.log(menuOpen);
// });

// navList.addEventListener('mouseout',() => {
//     menuOpen = false;
//     console.log(menuOpen);
// });

const header = document.querySelector('header');
const toggelMenu = document.querySelector('.toggelMenu');
const navList = document.querySelector('.navList');

toggelMenu.addEventListener('click',() => {
    if (navList.classList.contains('hideMenu')) {
        navList.classList.add('showMenu');
        navList.classList.remove('hideMenu');
    }
    else {
        navList.classList.remove('showMenu');
        navList.classList.add('hideMenu');
    }
});


let prevScroll = window.scrollY;

const headarEvent = window.addEventListener('scroll',() => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScroll) {
        header.classList.add('hideHeader');
    }
    else {
        header.classList.remove('hideHeader');
    }
});