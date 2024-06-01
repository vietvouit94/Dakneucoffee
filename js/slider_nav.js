document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function () {
        if (navLinks.classList.toggle('show')) {
            document.querySelector('.container').style.marginTop = '-279px';
            document.querySelector('.coffee').style.marginTop = '275px';
        } else {
            document.querySelector('.container').style.marginTop = '-140px';
            document.querySelector('.coffee').style.marginTop = '165px';
        }
    });
});