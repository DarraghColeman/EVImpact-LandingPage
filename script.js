// Extracted and cleaned script from the original inline JavaScript
// Functionality for animations, interactions, or additional logic

// Example of an initialization script
window.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded and script initialized.');

    // Add animations or effects initialization here
    initializeAnimations();
});

function initializeAnimations() {
    // Placeholder for animation logic
    console.log('Animations initialized.');

    // Example animation logic (to replace inline script):
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.addEventListener('load', () => {
            heroImage.classList.add('fade-in');
        });
    }
}

// Additional modular functions for specific sections or interactions
function handleNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

handleNavigation();
