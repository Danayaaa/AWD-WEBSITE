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

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleResize);

function handleScroll() {
  var scrollPosition = window.scrollY;
  var brownElement = document.querySelector('.brown');

  if (scrollPosition > getTriggerPoint()) {
    brownElement.style.position = 'absolute';
    brownElement.style.top = getTriggerPoint() + 'px';
    brownElement.style.left = calculateLeftPosition() + 'px';
  } else {
    // Let CSS handle fixed positioning and sticky behavior
    brownElement.style.position = '';
    brownElement.style.top = '';
    brownElement.style.left = '';
  }
}

function handleResize() {
  // Recalculate trigger point and left position on resize
  handleScroll();
}

function getTriggerPoint() {
  if (window.matchMedia('(max-width: 430px)').matches) {
    return 2780;
} else if (window.matchMedia('(min-width: 431px) and (max-width: 800px)').matches) {
    return 2780;
} else if (window.matchMedia('(min-width: 801px) and (max-width: 940px)').matches) {
    return 1846;
} else if (window.matchMedia('(min-width: 941px) and (max-width: 1060px)').matches) {
    return 1846;
} else if (window.matchMedia('(min-width: 1061px) and (max-width: 1800px)').matches) {
    return 1846;
} else {
    return 1945;
}
}

function calculateLeftPosition() {
  // Consider using percentages or viewport width for responsive positioning
  const brownWidth = document.querySelector('.brown').offsetWidth;
  const availableSpace = document.documentElement.clientWidth - brownWidth;
  const offset = availableSpace / 2; // Center the container horizontally
  return offset + 'px';
}