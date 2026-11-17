# Portafolio — Daniel Miranda Ayala

Portafolio profesional de **Daniel Miranda Ayala**, desarrollador Java Full Stack Junior e ingeniero en computación por la UNAM.

Es un sitio de una sola página (_single page_) con estética **arcana / fantasía nocturna**:
cielo estrellado, círculo de runas animado, brillos azul‑violeta y tipografía serif.
Está construido solo con **HTML, CSS y JavaScript**, sin frameworks ni proceso de compilación.

- **LinkedIn:** [linkedin.com/in/danielmirandaayala](https://www.linkedin.com/in/danielmirandaayala)
- **GitHub:** [github.com/DanielMirandaAyalaDev](https://github.com/DanielMirandaAyalaDev)

---

## Índice

1. [Características](#características)
2. [Tecnologías](#tecnologías)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Cómo ejecutarlo](#cómo-ejecutarlo)
5. [Secciones del sitio](#secciones-del-sitio)
6. [Arquitectura del código](#arquitectura-del-código)
7. [Animaciones y efectos](#animaciones-y-efectos)
8. [Personalización](#personalización)
9. [Responsive](#responsive)
10. [Accesibilidad](#accesibilidad)
11. [Compatibilidad](#compatibilidad)
12. [Dependencias externas y créditos](#dependencias-externas-y-créditos)

---

## Características

- **Menú flotante inferior** con una "burbuja" que marca la sección activa.
- **Portada** con el nombre en degradado luminoso y un círculo de runas en SVG cuyos anillos giran en sentidos opuestos.
- **Cielo estrellado** hecho solo con CSS, sin imágenes.
- **Tarjetas** de experiencia en proyectos y de metas de aprendizaje, con brillo y elevación al pasar el ratón.
- **CV en línea de tiempo** (formación y experiencia), con botón para descargarlo en PDF.
- **Aparición suave** de los elementos al hacer scroll.
- **Responsive**: escritorio, tablet y móvil (incluye el área segura de iOS).
- **Accesible**: enlace para saltar al contenido, foco visible, landmarks semánticos y respeto a `prefers-reduced-motion`.

---

## Tecnologías

| Capa             | Uso                                                                                                |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| **HTML5**        | Estructura semántica (`nav`, `main`, `article`, `footer`) y SVG en línea                           |
| **CSS3**         | Variables, Grid, Flexbox, `clamp()`, `@keyframes`, transiciones, pseudoelementos y _media queries_ |
| **JavaScript**   | Menú activo y aparición al hacer scroll con `IntersectionObserver`                                 |
| **Google Fonts** | Cormorant Garamond, EB Garamond, Inter y Noto Sans Runic                                           |
| **Tabler Icons** | Iconos (webfont por CDN y SVG en línea en el menú)                                                 |

---

## Estructura del proyecto

```
.
├── index.html          Estructura y contenido del sitio
├── styles.css          Estilos, animaciones y responsive
├── AnimacionMenu.js    Menú activo y aparición al hacer scroll
├── CV_DMA.pdf          CV descargable (lo enlaza el botón "Descargar CV")
└── README.md           Documentación
```

---

## Cómo ejecutarlo

<!--COlocar al momento de desplegar-->

---

## Secciones del sitio

Cada sección es un `div` dentro de `<main id="contenido-principal">`. Su `id` coincide con un enlace del menú.

| `id`             | Menú       | Contenido                                                                                                                                                                                                                                                                 |
| ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `#home_nav`      | Inicio     | Saludo, nombre, rol, presentación, botones **Ver mis proyectos** y **Contáctame**, círculo de runas, **Tecnologías** (HTML, CSS, JS, Git/GitHub, Java, Python, SQL) y **Sígueme** (LinkedIn, GitHub).                                                                     |
| `#portfolio_nav` | Portafolio | Tres proyectos: _Landing Page JaguarX Store_ (hackathon, Desarrollador Web / SCRUM Master), _Data Engineer_ (proyecto independiente con Pandas) y _Automatización y monitoreo de procesos ERP_ (NetSuite). Cada tarjeta incluye logros, etiquetas de tecnología y estado. |
| `#aboutme_nav`   | Sobre mí   | Presentación personal, cualidades (capacidad analítica, aprendizaje rápido, adaptabilidad y resolución de problemas) e ilustración de una laptop.                                                                                                                         |
| `#cv_nav`        | CV         | **Formación:** Generation México (Java Full Stack) y UNAM (Ingeniería en Computación). **Experiencia:** Bip Bip Papel, Oracle y Netsoft. Incluye el botón **Descargar CV**.                                                                                               |
| `#blog_nav`      | Blog       | Próximas entradas: animaciones con CSS, certificación Java y manejo de datos.                                                                                                                                                                                             |
| `#contacto`      | —          | Pie de página con "Hablemos", LinkedIn, GitHub, correo y fecha de última actualización.                                                                                                                                                                                   |

---

## Arquitectura del código

### `index.html`

```
body
├── a.skip-link                         Enlace "Saltar al contenido"
└── #page.site
    └── .nav_container
        ├── nav[aria-label] > ul.navigation > li > a      Menú (5 opciones)
        ├── main#contenido-principal
        │   ├── #home_nav
        │   ├── #portfolio_nav   > .proyectos > article.tarjeta
        │   ├── #aboutme_nav     > .sobre-mi
        │   ├── #cv_nav          > .cv > .cv-columna > ol.linea-tiempo
        │   └── #blog_nav        > .entradas > article.entrada
        └── footer#contacto
```

En el `<head>` se declaran `lang="es"`, `meta description` y `theme-color` (`#080D20`), que da color a la barra del navegador en móvil.

### `styles.css`

Organizado en bloques con comentarios de encabezado:

| Bloque                     | Contenido                                                                      |
| -------------------------- | ------------------------------------------------------------------------------ |
| `@import`                  | Una sola petición a Google Fonts con las cuatro familias                       |
| **Variables**              | Colores, tipografías, medidas y ornamentos (`--rombo`, `--estrellas`)          |
| **Base**                   | _Reset_, tipografía general, `::selection`, `:focus-visible` y `.skip-link`    |
| **Barra de navegación**    | Menú fijo centrado y animación de la burbuja activa                            |
| **Secciones: base común**  | Altura mínima, espaciado, fondo estrellado y títulos con líneas y rombos       |
| **Botones**                | `.btn`, `.btn-principal`, `.btn-secundario` y `.btn-centro`                    |
| **Inicio**                 | Rejilla de la portada, saludo, nombre, círculo de runas, tecnologías y redes   |
| **Portafolio y blog**      | Rejillas de tarjetas, `.tarjeta`, `.etiquetas`, `.tarjeta-estado` y `.entrada` |
| **Sobre mí**               | `.sobre-mi`, `.cualidades` y `.laptop`                                         |
| **CV**                     | `.cv`, `.cv-columna`, `.linea-tiempo` y `.fecha`                               |
| **Contacto / pie**         | `#contacto` y `.copy`                                                          |
| **Animación de aparición** | `.js .revelar` y `.visible`                                                    |
| **Responsive**             | Puntos de corte en 900, 600, 500 y 380 px, y `prefers-reduced-motion`          |

#### Variables

| Variable                     | Valor                 | Uso                                                 |
| ---------------------------- | --------------------- | --------------------------------------------------- |
| `--font-color-fondo`         | `#080D20`             | Fondo general                                       |
| `--noche-color`              | `#15234A`             | Fondo del menú                                      |
| `--violeta-color`            | `#3A5BFF`             | Acento principal, burbuja activa y _hover_ del menú |
| `--cyan-color`               | `#55BFFF`             | Detalles, fechas y foco                             |
| `--azul-runa`                | `#7A9BFF`             | Líneas, iconos y runas                              |
| `--lila`                     | `#9C8CFF`             | Subtítulo e iconos de tarjeta                       |
| `--texto-color`              | `#D9E5FF`             | Texto principal                                     |
| `--pale-silver`              | `#C7D5EE`             | Texto secundario                                    |
| `--titulo-color`             | `#B9CBFF`             | Títulos de sección                                  |
| `--linea`                    | `#6E8CFF`             | Bordes de tarjetas y línea de tiempo                |
| `--panel`                    | `#15234A`             | Fondo de paneles (CV, cualidades)                   |
| `--brillo` / `--brillo-cyan` | `#3A5BFF` / `#55BFFF` | Color de los resplandores                           |
| `--serif-titulos`            | Cormorant Garamond    | Títulos                                             |
| `--serif-texto`              | EB Garamond           | Texto                                               |
| `--runas`                    | Noto Sans Runic       | Runas del círculo                                   |
| `--ancho`                    | `1120px`              | Ancho máximo del contenido                          |
| `--rombo`                    | SVG en `data:` URI    | Ornamento de títulos, línea de tiempo y cualidades  |
| `--estrellas`                | 12 `radial-gradient`  | Cielo estrellado reutilizable                       |

### `AnimacionMenu.js`

Se carga con `defer`, es decir, cuando el HTML ya está listo. Se encarga de:

1. **Añadir la clase `js` a `<html>`.** Así, los elementos `.revelar` solo se ocultan si JavaScript funciona; sin JS, todo el contenido es visible.
2. **Marcar la opción activa del menú:**
   - al hacer clic en una opción;
   - al hacer scroll, con un `IntersectionObserver` (`rootMargin: '-50% 0px -50% 0px'`) que detecta la sección que cruza el centro de la pantalla. Al llegar al pie (`#contacto`), se mantiene activo "Blog".
3. **Mostrar los elementos `.revelar`** cuando entran en pantalla (`threshold: 0.15`), con un retraso escalonado de 0, 80, 160 y 240 ms.

> Las secciones están dentro de `<main>`, así que el script debe seleccionarlas con `main > div`.

---

## Animaciones y efectos

| Efecto                      | Técnica                                                          | Dónde                                                        |
| --------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------ |
| Giro de anillos             | `@keyframes girar` + `transform-origin: 200px 200px`             | `.anillo-lento` (80 s) y `.anillo-inverso` (50 s, `reverse`) |
| Pulso del emblema           | `@keyframes pulso` (opacidad + `drop-shadow`)                    | `.nucleo`                                                    |
| Laptop flotando             | `@keyframes flotar` (`translateY`)                               | `.laptop-cuerpo`                                             |
| Elevación al pasar el ratón | `transition` de `transform` y `box-shadow`                       | Tarjetas, botones, tecnologías y redes                       |
| Burbuja del menú            | Pseudoelementos `::before` / `::after` en `li.active` y su `a`   | `nav`                                                        |
| Subrayado que se expande    | `transition` de `left` / `right` en `::after`                    | `.btn-secundario`                                            |
| Aparición al hacer scroll   | `transition` de `opacity` y `transform` + `IntersectionObserver` | `.revelar`                                                   |
| Brillo                      | `box-shadow`, `filter: drop-shadow()` y `text-shadow`            | Todo el sitio                                                |
| Nombre degradado            | `background-clip: text`                                          | `#nombre_completo`                                           |

El círculo de runas es un SVG de `viewBox` 400×400. Las runas se dibujan sobre una circunferencia con `<textPath>`.

---

## Personalización

| Para cambiar…         | Edita                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| Colores y fuentes     | Bloque **Variables** de `styles.css`                                                                   |
| Presentación          | `#home_nav` en `index.html`                                                                            |
| Tecnologías           | `ul.tecnologias`. Iconos de [Tabler Icons](https://tabler.io/icons) con `<i class="ti ti-NOMBRE"></i>` |
| Redes sociales        | Las dos listas `.redes`: la de Inicio y la del pie                                                     |
| Proyectos             | `article.tarjeta` dentro de `#portfolio_nav`                                                           |
| CV                    | `ol.linea-tiempo` dentro de `#cv_nav`, y el archivo `CV_DMA.pdf`                                       |
| Blog                  | `article.entrada` dentro de `#blog_nav`                                                                |
| Velocidad del círculo | Duración de `.anillo-lento` y `.anillo-inverso`                                                        |

**Plantilla de proyecto:**

```html
<article class="tarjeta revelar">
  <i class="ti ti-code tarjeta-icono" aria-hidden="true"></i>
  <div>
    <h3>Rol — Nombre del proyecto</h3>
    <ul>
      <li>Logro o responsabilidad.</li>
      <li>Otro logro.</li>
    </ul>
    <ul class="etiquetas">
      <li>Java</li>
      <li>SQL</li>
    </ul>
  </div>
  <span class="tarjeta-estado">Terminado</span>
</article>
```

Para que toda la tarjeta sea un enlace, añade antes de cerrar el `article` un `<a class="tarjeta-enlace" href="URL" aria-label="Ver proyecto"><i class="ti ti-arrow-right" aria-hidden="true"></i></a>`. Su `::after` cubre la tarjeta completa.

---

## Responsive

| Ancho     | Cambios                                                                                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `≤ 900px` | La portada pasa a una columna, con el círculo de runas arriba y el texto centrado. "Sobre mí" se apila.                                                           |
| `≤ 600px` | Proyectos, blog y CV pasan a una sola columna.                                                                                                                    |
| `≤ 500px` | El menú ocupa casi todo el ancho, se acerca al borde inferior (respetando `safe-area-inset-bottom`) y reparte las opciones. Los iconos de tecnologías se reducen. |
| `≤ 380px` | Textos e iconos del menú más pequeños.                                                                                                                            |

El ancho del menú se adapta con `width: min(456px, calc(100% - 24px))` y se centra con `transform: translateX(-50%)`.

---

## Accesibilidad

- **Saltar al contenido:** `.skip-link` aparece al recibir el foco con el teclado y lleva a `#contenido-principal`.
- **Landmarks:** `nav` (con `aria-label="Navegación principal"`), `main` y `footer`.
- **Foco visible:** contorno cyan con `:focus-visible`.
- **Decoración oculta a lectores de pantalla:** el círculo de runas, la laptop y los iconos llevan `aria-hidden="true"`.
- **Movimiento reducido:** con `prefers-reduced-motion: reduce` se desactivan las animaciones, las transiciones y el scroll suave.
- **Sin JavaScript:** el contenido se muestra completo.
- **Idioma:** `lang="es"`.

---

## Compatibilidad

Versiones actuales de Chrome, Edge, Firefox y Safari (escritorio y móvil).
Usa CSS Grid, variables CSS, `clamp()`, `min()`, `aspect-ratio`, `clip-path`, `background-clip: text`, `env(safe-area-inset-bottom)` e `IntersectionObserver`.

---

## Dependencias externas y créditos

| Recurso                                                                                             | Uso                | Licencia                  |
| --------------------------------------------------------------------------------------------------- | ------------------ | ------------------------- |
| [Google Fonts](https://fonts.google.com/): Cormorant Garamond, EB Garamond, Inter y Noto Sans Runic | Tipografía y runas | SIL Open Font License 1.1 |
| [Tabler Icons](https://tabler.io/icons) (webfont 3.19.0 vía jsDelivr y SVG del menú)                | Iconos             | MIT                       |

El círculo de runas, la ilustración de la laptop y el cielo estrellado son SVG y CSS propios del proyecto.

---

Última actualización: noviembre de 2026 · Daniel Miranda Ayala
