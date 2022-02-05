const menu = document.querySelector('.menu');
const menuContent = document.querySelector('.menu-content');
const text = document.querySelector('.text');
const arrow = document.querySelector('.arrow');
// display menu function
const hamburger = document.querySelector('.hamburger').addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menuContent.classList.toggle('hidden');
    text.classList.toggle('hidden');
    arrow.classList.toggle('hidden');
});
// document.getElementById('icon-hamburger').addEventListener('click', toggleMenu)
