const burger = document.querySelector('.burger');
const navbarItems = document.querySelector('.navbar-items');

burger.addEventListener('click', () => {
  navbarItems.classList.toggle('active');
});