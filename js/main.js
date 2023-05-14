const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const navLinks = navMobile.querySelectorAll('.nav__link');
const footerYear = document.querySelector('.footer_year');
const footer = document.querySelector('.footer');

const navMobileHandler = () => {
  navBtn.classList.toggle('is-active');
  navMobile.classList.toggle('nav-mobile--active');
  footer.classList.toggle('hide-element');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('nav-mobile--active');
      navBtn.classList.remove('is-active');
      footer.style.display = 'block';
    });
  });
};

navBtn.addEventListener('click', navMobileHandler);
const handlerCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};

handlerCurrentYear();
