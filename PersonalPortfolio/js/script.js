const hamMenu = document.querySelector('.menu');

const offScreenMenu = document.querySelector('.offscreen');

const body = document.querySelector('body');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    body.classList.toggle('menu-active');
});