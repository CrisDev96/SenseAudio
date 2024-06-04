document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo en breve.');
        contactForm.reset();
    });
});
