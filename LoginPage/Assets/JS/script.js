// Ensure the submenu is closed when the page loads
document.querySelector('.sub-menu').classList.remove('open');

document.querySelector('#hamburger-icon').addEventListener('click', function() {
    var submenu = document.querySelector('.sub-menu');
    var hamburgerIcon = document.querySelector('#hamburger-icon');
    var overlay = document.querySelector('.overlay');
    submenu.classList.toggle('open');
    overlay.style.display = submenu.classList.contains('open') ? 'block' : 'none';
    if (submenu.classList.contains('open')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times');
    } else {
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
    }
});