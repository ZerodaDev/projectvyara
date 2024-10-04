const sideMenu = document.querySelector('.side-menu');  
const closeMenuButton = document.querySelector('.close-menu');  
const menuToggle = document.querySelector('.menu-toggle'); // Assuming you have a menu toggle button with this class  
  
// Ensure the side menu is initially closed  
sideMenu.classList.remove('open');  
  
// Function to open the side menu  
menuToggle.addEventListener('click', () => {  
   if (!sideMenu.classList.contains('open')) {  
      sideMenu.classList.add('open');  
   } else {  
      sideMenu.classList.remove('open');  
   }  
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
