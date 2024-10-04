// script.js
const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.querySelector('.side-menu');
const closeMenuButton = document.querySelector('.close-menu');
const loadingOverlay = document.querySelector('.loading-overlay');

// Show loading animation when the page loads
window.addEventListener('load', () => {
    loadingOverlay.style.display = 'none'; // Hide loading overlay
});

// Function to open/close the side menu
menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('open'); // Toggle open class
});

// Function to close the side menu with the close button
closeMenuButton.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (sideMenu.classList.contains('open') && !sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        sideMenu.classList.remove('open');
    }
});
