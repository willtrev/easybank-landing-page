const buttonMobileMenu = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuContent = document.querySelector('.mobile-menu-content');
const backgroundHeroImage = document.querySelector('.background-image');
const htmlElement = document.getElementsByTagName('html')[0];

const MOBILE_SCREEN_BREAKPOINT = 1280;

let isMobileMenuOpen = false;

if (window.screen.width < MOBILE_SCREEN_BREAKPOINT) {
  backgroundHeroImage.src = 'assets/images/bg-intro-mobile.svg';
}
if (window.screen.width >= MOBILE_SCREEN_BREAKPOINT) {
  backgroundHeroImage.src = 'assets/images/bg-intro-desktop.svg';
}

function changeBackgroundImageMobile() {
  if (window.screen.width < MOBILE_SCREEN_BREAKPOINT) {
    backgroundHeroImage.src = 'assets/images/bg-intro-mobile.svg';
  }
  if (window.screen.width >= MOBILE_SCREEN_BREAKPOINT) {
    backgroundHeroImage.src = 'assets/images/bg-intro-desktop.svg';
  }
}

function openMobileNavMenu() {
  if (isMobileMenuOpen) {
    buttonMobileMenu.src = 'assets/icons/hamburger.svg';
    isMobileMenuOpen = false;
    mobileMenu.classList.remove('active-menu');
    htmlElement.classList.remove('remove-scroll');
  } else {
    buttonMobileMenu.src = 'assets/icons/close.svg';
    isMobileMenuOpen = true;
    mobileMenu.classList.toggle('active-menu', isMobileMenuOpen);
    htmlElement.classList.toggle('remove-scroll', isMobileMenuOpen);
  }
}

window.addEventListener('resize', changeBackgroundImageMobile);

buttonMobileMenu.addEventListener('click', openMobileNavMenu);
