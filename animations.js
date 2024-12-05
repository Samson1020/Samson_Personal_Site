// Add Particles Effect
const particlesConfig = {
    particles: {
        number: { value: 120 },
        color: { value: ["#00509E", "#FFFFFF"] },
        shape: { type: "circle" },
        opacity: { value: 0.7 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            bounce: false
        }
    }
};

particlesJS("particles-container", particlesConfig);

// Scroll-triggered Animations
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach(el => observer.observe(el));
