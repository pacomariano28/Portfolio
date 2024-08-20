export const fadeUp = () => {
    const sections = document.querySelectorAll('.card-gradient');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible'); // Remove the class when element is out of view
            }
        });
    }, {
        threshold: 0.1 // Trigger the effect when 10% of the element is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });
};
