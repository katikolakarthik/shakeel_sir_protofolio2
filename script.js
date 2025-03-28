// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you can add your form submission logic
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Add 3D Tilt Effect to Expertise Cards
const expertiseCards = document.querySelectorAll('.expertise-card');
expertiseCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});

// Typing Animation for Hero Section
const heroTitle = document.querySelector('.hero h1');
const text = heroTitle.textContent;
heroTitle.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', typeWriter);

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const video = document.querySelector('#myVideo');
    video.style.transform = `translate3d(-50%, -${50 + (scrolled * 0.1)}%, 0)`;
});

// Enhanced 3D Tilt Effect for Profile Image
const profileImg = document.querySelector('.profile-img');
profileImg.addEventListener('mousemove', (e) => {
    const rect = profileImg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    profileImg.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

profileImg.addEventListener('mouseleave', () => {
    profileImg.style.transform = 'none';
});

// Particle Effect for Hero Section
const createParticle = () => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = Math.random() * 3 + 2 + 's';
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    document.querySelector('.hero').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 5000);
};

setInterval(createParticle, 200); 