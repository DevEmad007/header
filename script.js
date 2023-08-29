const header = document.querySelector('header');
const headerNotice = document.querySelector('.headerNotice');
let prevScrollPos = window.scrollY;

const scrollEvent = window.addEventListener('scroll',() => {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        // Scroll Up: Show the header
        header.classList.remove('hidden');
        headerNotice.classList.remove('hidden');
    } else {
        // Scroll Down: Hide the header
        header.classList.add('hidden');
        headerNotice.classList.add('hidden');
    }

    prevScrollPos = currentScrollPos;
});