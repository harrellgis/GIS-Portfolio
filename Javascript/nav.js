//Navbar functionality for mobile//
const navSlide = () => {
  const burger = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a');

  burger.addEventListener('click', () => {
    //Toggle nav//
    nav.classList.toggle('nav-active');

    //Animate links//
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation =
          `navLinkFade 1s ease forwards ${index / 7 + 0.5}s`;
      }
    });
  });
};

navSlide();