// script.js
const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.querySelector('.side-menu');
const closeMenuButton = document.querySelector('.close-menu');

// Function to open the side menu
menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
});

// Function to close the side menu
closeMenuButton.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (sideMenu.classList.contains('open') && !sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        sideMenu.classList.remove('open');
    }
});
