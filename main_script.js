document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. NAVBAR SCROLL EFFECT ---
    // This changes the navbar styling when you scroll down the page
    const navbar = document.querySelector('nav'); 
    const logoText = document.querySelector('.logo-text');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Scrolled state
            navbar?.classList.add('bg-white', 'shadow-lg', 'py-3');
            navbar?.classList.remove('bg-transparent', 'py-5');
            
            logoText?.classList.add('text-slate-900');
            logoText?.classList.remove('text-white');

            navLinks.forEach(link => {
                link.classList.add('text-slate-700');
                link.classList.remove('text-slate-200');
            });
        } else {
            // Top of page state
            navbar?.classList.add('bg-transparent', 'py-5');
            navbar?.classList.remove('bg-white', 'shadow-lg', 'py-3');
            
            logoText?.classList.add('text-white');
            logoText?.classList.remove('text-slate-900');

            navLinks.forEach(link => {
                link.classList.add('text-slate-200');
                link.classList.remove('text-slate-700');
            });
        }
    });

    // --- 2. MOBILE MENU TOGGLE ---
    // Opens and closes the dropdown menu on mobile devices
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Change icon between Menu and X (Requires swapping SVGs in HTML)
        });
    }

    // --- 3. SMOOTH SCROLLING ---
    // Handles clicking on links to smoothly scroll to sections (e.g., Mission, Manifesto)
    const scrollButtons = document.querySelectorAll('[data-scroll-to]');
    
    scrollButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const targetId = button.getAttribute('data-scroll-to');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Scroll to the section
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu if it's currently open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
});