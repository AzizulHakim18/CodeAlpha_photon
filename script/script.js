// Toggle Navbar
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.navbar ul li a');



navToggle.addEventListener('click', () => {
    navbar.style.right = '0';
    navbar.style.animation = 'slideIn 0.5s forwards';
    navbar.style.display = "inline"
});

navClose.addEventListener('click', () => {
    navbar.style.display = "none"
    navbar.style.animation = 'slideOut 0.5s forwards';
    navbar.style.right = '-250px';
});

// Set active link color
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active')); // Remove active class from all
        link.classList.add('active'); // Add to clicked link
    });
});