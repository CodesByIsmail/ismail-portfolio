const openToggle = document.getElementById('menu-open');
const closeToggle = document.getElementById('menu-close');
const navMenu = document.querySelector('.nav__list');

openToggle.addEventListener('click', function () {
    navMenu.style.display = 'block';
    openToggle.style.display = 'none'
});
closeToggle.addEventListener('click', function () {
    navMenu.style.display = 'none';
        openToggle.style.display = 'block';

});
