const buttonMobileMenu = document.getElementById('buttonMobileMenu');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuContent = document.getElementById('mobileMenuContent')
const htmlElement = document.getElementsByTagName('html')


let isMobileMenuOpen = false;

buttonMobileMenu.addEventListener('click', () => {

  if (isMobileMenuOpen) {
    buttonMobileMenu.src = 'assets/icons/hamburger.svg';
    isMobileMenuOpen = false;
    mobileMenu.classList.remove('active-menu');
    htmlElement[0].classList.remove('remove-scroll');

  } else {
    buttonMobileMenu.src = 'assets/icons/close.svg';
    isMobileMenuOpen = true;
    mobileMenu.classList.toggle('active-menu', isMobileMenuOpen);
    htmlElement[0].classList.toggle('remove-scroll', isMobileMenuOpen)
  }
});

const backgroundHeroImage = document.getElementById('backgroundHeroImage');

if (window.screen.width <= 376) {
  backgroundHeroImage.src = 'assets/images/bg-intro-mobile.svg'
}
if (window.screen.width > 1024) {
  backgroundHeroImage.src = 'assets/images/bg-intro-desktop.svg'
}

window.addEventListener('resize', () => {
  if (window.screen.width <= 376) {
    backgroundHeroImage.src = 'assets/images/bg-intro-mobile.svg'
  }
  if (window.screen.width > 1024) {
    backgroundHeroImage.src = 'assets/images/bg-intro-desktop.svg'
  }
});



