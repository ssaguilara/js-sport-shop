const menuIcon = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click', togglesMobileMenu);

function togglesMobileMenu() { 
  mobileMenu.classList.toggle('inactive');
}


