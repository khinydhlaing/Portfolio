const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.navlinks');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

