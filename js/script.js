// Menu Mobile
const menuMobile = document.querySelector('.menu-mobile');
const mobileMenu = document.querySelector('.mobile-menu');

menuMobile.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Animações ao Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Header Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});