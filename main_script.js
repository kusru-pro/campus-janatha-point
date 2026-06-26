// Smooth Scroll Function (Accessible globally for inline onclick attributes)
window.scrollToSection = function(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        const iconMenu = document.getElementById('icon-menu');
        const iconClose = document.getElementById('icon-close');
        
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            if (iconMenu) iconMenu.classList.replace('hidden', 'block');
            if (iconClose) iconClose.classList.replace('block', 'hidden');
        }
    }
}

// Wait for the HTML structure to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    
    // Set dynamic year in the footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            iconMenu.classList.toggle('hidden');
            iconMenu.classList.toggle('block');
            iconClose.classList.toggle('hidden');
            iconClose.classList.toggle('block');
        });
    }

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        const logoText = document.getElementById('logo-text');
        const menuBtnIcon = document.getElementById('mobile-menu-btn');
        const navLinks = document.querySelectorAll('.nav-link');

        if (window.scrollY > 50) {
            // Scrolled state
            if (navbar) {
                navbar.classList.replace('bg-transparent', 'bg-white');
                navbar.classList.add('shadow-lg');
                navbar.classList.replace('py-5', 'py-3');
            }
            
            if (logoText) logoText.classList.replace('text-white', 'text-slate-900');
            if (menuBtnIcon) menuBtnIcon.classList.replace('text-white', 'text-slate-900');

            navLinks.forEach(link => {
                link.classList.replace('text-slate-200', 'text-slate-700');
            });
        } else {
            // Top state
            if (navbar) {
                navbar.classList.replace('bg-white', 'bg-transparent');
                navbar.classList.remove('shadow-lg');
                navbar.classList.replace('py-3', 'py-5');
            }
            
            if (logoText) logoText.classList.replace('text-slate-900', 'text-white');
            if (menuBtnIcon) menuBtnIcon.classList.replace('text-slate-900', 'text-white');

            navLinks.forEach(link => {
                link.classList.replace('text-slate-700', 'text-slate-200');
            });
        }
    });
});
