// Efeito de revelação ao rolar
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observar elementos com animação
    const fadeElements = document.querySelectorAll('.timeline-item, .number-card, .metric-item, .comparison-item, .comparison-description, .closing-content');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
    
    // Criar partículas adicionais
    const particlesContainer = document.body;
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'decoration gold-particle';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        particlesContainer.appendChild(particle);
    }
});
