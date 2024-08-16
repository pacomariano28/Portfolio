const triggerMargin = 100; // Ajusta este valor para definir cuánto antes se debe activar la animación
let lastScrollTop = 0; // Variable para almacenar la última posición del scroll

const handleScroll = () => {
  const elements = document.querySelectorAll('.card-gradient');
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Determina si el usuario está desplazándose hacia abajo
  const scrollingDown = currentScrollTop > lastScrollTop;

  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementBottom = rect.bottom + window.scrollY;

    // Verifica si el elemento está en la vista con un margen adicional
    if (elementTop + triggerMargin < (window.innerHeight + window.scrollY) && elementBottom >= window.scrollY) {
      if (scrollingDown) {
        // Solo añadir la clase si el elemento aún no tiene la clase 'fade-in'
        if (!element.classList.contains('fade-in')) {
          element.classList.add('fade-in');
        }
      }
    } else {
      // Elimina la clase 'fade-in' si el elemento sale de la vista
      if (element.classList.contains('fade-in')) {
        element.classList.remove('fade-in');
      }
    }
  });

  // Actualiza la última posición del scroll
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
};

export const fadeUp = () => {
  // Añadir el listener para el evento scroll
  window.addEventListener('scroll', handleScroll);

  // Ejecutar una vez al cargar la página para verificar si algún elemento ya está visible
  handleScroll();
};
