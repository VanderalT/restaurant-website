//Display Mobile Menu
const mobileMenu = document.querySelector('#mobileNavHamburger');
const mobileMenuLinks = document.querySelector('#mobileMenuLinks');

const mobileMenuShow = () => {
    mobileMenuLinks.classList.toggle('active');
}

mobileMenu.addEventListener('click',mobileMenuShow);