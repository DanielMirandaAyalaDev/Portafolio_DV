// Animación del menú: marca como "active" la opción pulsada
// y también la sección que se está viendo al hacer scroll.
document.documentElement.classList.add('js');

const opciones = document.querySelectorAll('.navigation li');
const secciones = document.querySelectorAll('section > div');

function activar(id) {
    opciones.forEach((li) => {
        const enlace = li.querySelector('a');
        li.classList.toggle('active', enlace.getAttribute('href') === '#' + id);
    });
}

// Al hacer clic en el menú
opciones.forEach((li) => {
    li.addEventListener('click', () => {
        activar(li.querySelector('a').getAttribute('href').slice(1));
    });
});

// Al hacer scroll: la sección que ocupa el centro de la pantalla
const observadorSecciones = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        // El pie de página (contacto) mantiene activo "Blog", el último del menú
        activar(entrada.target.id === 'contacto' ? 'blog_nav' : entrada.target.id);
    });
}, { rootMargin: '-50% 0px -50% 0px' });

secciones.forEach((seccion) => observadorSecciones.observe(seccion));
const pie = document.getElementById('contacto');
if (pie) observadorSecciones.observe(pie);

// Aparición suave de los elementos con la clase "revelar"
const observadorRevelar = new IntersectionObserver((entradas, obs) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            obs.unobserve(entrada.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.revelar').forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 80 + 'ms';
    observadorRevelar.observe(el);
});
