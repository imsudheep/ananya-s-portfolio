document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-icon');
    const closeMenu = document.getElementById('close-menu');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    // Open Menu
    menuToggle.addEventListener('click', () => {
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close Menu
    closeMenu.addEventListener('click', () => {
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close when clicking a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});
