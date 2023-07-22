const buttonMobileMenu = document.getElementById('buttonMobileMenu');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuContent = document.getElementById('mobileMenuContent')
const htmlElement = document.getElementsByTagName('html')
const backgroundHeroImage = document.getElementById('backgroundHeroImage');

const SCREEN_BREAKPOINT = 1280

let isMobileMenuOpen = false;

if (window.screen.width < SCREEN_BREAKPOINT) {
  backgroundHeroImage.src = 'assets/images/bg-intro-mobile.svg'
}
if (window.screen.width >= SCREEN_BREAKPOINT) {
  backgroundHeroImage.src = 'assets/images/bg-intro-desktop.svg'
}

function changeBackgroundImageMobile() {
  if (window.screen.width < SCREEN_BREAKPOINT) {
    backgroundHeroImage.src = 'assets/images/bg-intro-mobile.svg'
  }
  if (window.screen.width >= SCREEN_BREAKPOINT) {
    backgroundHeroImage.src = 'assets/images/bg-intro-desktop.svg'
  }
}

function openMobileNavMenu() {
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
}

window.addEventListener('resize', changeBackgroundImageMobile);

buttonMobileMenu.addEventListener('click', openMobileNavMenu);

