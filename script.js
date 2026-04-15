// Micro-animations and interactions for The Houston Comedy Club

document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '1rem 0';
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            nav.style.padding = '2rem 0';
            nav.style.background = 'linear-gradient(to bottom, rgba(10,10,10,0.8), transparent)';
        }
    });

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.show-card, .weekly-item, .text-reveal, .image-box');
    
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        revealOnScroll.observe(el);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Form submission simulation
    const signupForm = document.querySelector('.form-group');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = signupForm.querySelector('input').value;
            const button = signupForm.querySelector('button');
            
            button.textContent = 'Welcome aboard';
            button.style.backgroundColor = '#2ecc71';
            button.style.color = '#fff';
            button.style.borderColor = '#2ecc71';
            signupForm.querySelector('input').value = '';
            signupForm.querySelector('input').disabled = true;
            
            console.log(`Signed up: ${email}`);
        });
    }
});
