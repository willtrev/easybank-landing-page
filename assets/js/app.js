const buttonMobileMenu = document.getElementById('buttonMobileMenu');
const mobileMenu = document.getElementById('mobileMenu');

buttonMobileMenu.addEventListener('click', () => {
  let isMobileMenuOpen = false;
  if (isMobileMenuOpen) {
    buttonMobileMenu.src = 'assets/icons/hamburger.svg';
    isMobileMenuOpen = false;
    mobileMenu.classList.remove('activeMenu');
  } else {
    buttonMobileMenu.src = 'assets/icons/close.svg';
    isMobileMenuOpen = true;
    mobileMenu.classList.toggle('activeMenu', isMobileMenuOpen);
  }
});
