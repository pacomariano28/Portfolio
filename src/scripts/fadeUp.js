export const FadeUp = () => {
    const sections = document.querySelectorAll('.card-gradient');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Ajusta la clase basada en la visibilidad del elemento
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeup');
            } else {
                entry.target.classList.remove('fadeup');
            }
        });
    }, {
        rootMargin: '0px 0px -10% 0px' // Margen para activar la animación antes de que el elemento esté completamente visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });
};
