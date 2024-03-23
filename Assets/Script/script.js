
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

document.addEventListener("DOMContentLoaded", function() {
    const promotion1 = document.querySelector(".Promotion1");
    const images = promotion1.querySelectorAll("img");
    const imageCount = images.length;
    let currentIndex = 0;
    const intervalTime = 4000; 
    let interval = null;

    // Hide all images initially
    for (let i = 0; i < imageCount; i++) {
        images[i].style.display = "none";
    }

    // Show the first image
    images[currentIndex].style.display = "block";

    function switchToNextImage() {
        // Hide current image
        images[currentIndex].style.display = "none";

        // Move to next image
        currentIndex = (currentIndex + 1) % imageCount;

        // Show next image
        images[currentIndex].style.display = "block";
    }

    function startInterval() {
        if (!interval) {
            interval = setInterval(switchToNextImage, intervalTime);
        }
    }

    function stopInterval() {
        clearInterval(interval);
        interval = null;
    }

    startInterval(); 

    // Pause interval when mouse enters the promotion area
    promotion1.addEventListener('mouseenter', function() {
        stopInterval();
    });

    // Resume interval when mouse leaves the promotion area
    promotion1.addEventListener('mouseleave', function() {
        startInterval();
    });
 // Pause interval when page visibility changes
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden') {
            stopInterval();
        } else {
            startInterval();
        }
    });

    // Toggle navigation menu when hamburger icon is clicked
    document.querySelector('#hamburger-icon').addEventListener('click', function() {
        var submenu = document.querySelector('.sub-menu');
        var hamburgerIcon = document.querySelector('#hamburger-icon');
        submenu.classList.toggle('open');
        if (submenu.classList.contains('open')) {
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-times');
        } else {
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const now = new Date().getTime();
    const twoDaysInMillis = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds
    const targetDate = now + twoDaysInMillis;

    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        const countdownElement = document.querySelector(".Product-count p");
        countdownElement.textContent = `NEW PRODUCT IN: ${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "NEW PRODUCT ARRIVED!";
        }
    }, 1000);
});

// Ensure the submenu is closed when the page loads
document.querySelector('.sub-menu').classList.remove('open');

document.querySelector('#hamburger-icon').addEventListener('click', function() {
    var submenu = document.querySelector('.sub-menu');
    var hamburgerIcon = document.querySelector('#hamburger-icon');
    submenu.classList.toggle('open');
    if (submenu.classList.contains('open')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times');
    } else {
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
    }
});


