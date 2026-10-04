
const TOTAL_ICONOS = 5;

const LISTA_TITULOS = [
  "3.1415926535",
  "ʕ·͡ᴥ·ʔ",
  "	◕_◕",
  "¯\\_(ツ)_/¯",
  "₍^. .^₎Ⳋ",
  "⡞⠳⣄⣀⣠⠞⢷ ֹ۪",
  "▶︎·၊၊||၊|။|||| |",
  "▄︻芫═───💥",
  "⁶–(· ⌣ ˙)_7",
  "¯\\_(ᐛ )_/¯",
  "( -_•) 🔫",
  "ཐི ₍^.ˬˬ.^₎ ཋྀ",
  "(-(-_(-_-)_-)-)",
  "【ツ】",
  "(/.__.)/   \\(.__.\\)",
  "┏(-_-)┛┗(-_- )┓┗(-_-)┛┏(-_-)┓",
  "♞▀▄▀▄♝▀▄",
  "(⌐■_■)--︻╦╤─ - - -",
  "♚ ♛ ♜ ♝ ♞ ♟ ♔ ♕ ♖ ♗ ♘ ♙"

];

const LISTA_FONDOS = [
  "at_background.gif",
  "barça_1_background.jpg",
  "barça_2_background.jpg",
  "barça_3_background.jpg",
  "barça_4_background.jpg",
  "cp_background.gif",
  "jinx_background.gif",
  "lapis_background.gif",
  "pedri_background.jpg",
  "su_background.gif",
  "van_bojack_background.jpg",
  "zelda_background.gif",
  "zelda_2_background.gif"
];


// --- LÓGICA DE ICONOS Y TÍTULOS ---
let favicon = document.getElementById('mi-favicon');
let iconoAleatorio = Math.floor(Math.random() * TOTAL_ICONOS) + 1;
favicon.href = 'images/icons/icono_' + iconoAleatorio + '.png';

let indiceTitulo = Math.floor(Math.random() * LISTA_TITULOS.length);
document.title = LISTA_TITULOS[indiceTitulo];

// --- LÓGICA DE FONDOS (CON PRECARGA) ---
let indiceFondo = Math.floor(Math.random() * LISTA_FONDOS.length);
let rutaFondo = "images/backgrounds/" + LISTA_FONDOS[indiceFondo];

let imagenPrecarga = new Image();
imagenPrecarga.src = rutaFondo;

imagenPrecarga.onload = function () {
  document.body.style.backgroundImage = "url('" + rutaFondo + "')";
};

imagenPrecarga.onerror = function () {
  console.error("¡Ups! No se pudo cargar el fondo:", rutaFondo);
  document.body.style.backgroundImage = "url('images/backgrounds/at_background.gif')";
};


// --- EFECTO INTERACTIVO: BOLITAS QUE SIGUEN EL RATÓN ---
function activarEfectoChispas(contenedor) {
  if (!contenedor) return;
  let ultimaChispa = 0;

  contenedor.addEventListener('mousemove', (e) => {
    const ahora = Date.now();
    if (ahora - ultimaChispa < 30) return;
    ultimaChispa = ahora;

    const chispa = document.createElement('div');
    chispa.className = 'chispa';

    const rect = contenedor.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    chispa.style.left = `${x}px`;
    chispa.style.top = `${y}px`;

    const direccionX = (Math.random() - 0.5) * 80;
    const direccionY = (Math.random() - 0.5) * 80;
    chispa.style.setProperty('--destino-x', `${direccionX}px`);
    chispa.style.setProperty('--destino-y', `${direccionY}px`);

    const item = e.target.closest('.acceso-item');
    if (item) {
      if (item.classList.contains('acceso-youtube')) {
        chispa.style.setProperty('--efecto-color-2', '#ff0000');
        chispa.style.setProperty('--efecto-color-1', '#ff5555');
      } else if (item.classList.contains('acceso-github')) {
        chispa.style.setProperty('--efecto-color-2', '#ffffff');
        chispa.style.setProperty('--efecto-color-1', '#24292e');
      } else if (item.classList.contains('acceso-gmail')) {
        chispa.style.setProperty('--efecto-color-2', '#ea4335');
        chispa.style.setProperty('--efecto-color-1', '#ff8577');
      } else if (item.classList.contains('acceso-outlook')) {
        chispa.style.setProperty('--efecto-color-2', '#0078d4');
        chispa.style.setProperty('--efecto-color-1', '#50a8eb');
      } else if (item.classList.contains('acceso-gemini')) {
        chispa.style.setProperty('--efecto-color-2', '#4e88d4');
        chispa.style.setProperty('--efecto-color-1', '#9b72cf');
      } else if (item.classList.contains('acceso-copilot')) {
        chispa.style.setProperty('--efecto-color-2', '#00a4ef');
        chispa.style.setProperty('--efecto-color-1', '#8040b0');
      } else if (item.classList.contains('acceso-whatsapp')) {
        chispa.style.setProperty('--efecto-color-2', '#25d366');
        chispa.style.setProperty('--efecto-color-1', '#4ade80');
      } else if (item.classList.contains('acceso-horario')) {
        chispa.style.setProperty('--efecto-color-2', '#f59e0b');
        chispa.style.setProperty('--efecto-color-1', '#fbbf24');
      } else if (item.classList.contains('acceso-ad')) {
        chispa.style.setProperty('--efecto-color-2', '#0284c7');
        chispa.style.setProperty('--efecto-color-1', '#38bdf8');
      } else if (item.classList.contains('acceso-di')) {
        chispa.style.setProperty('--efecto-color-2', '#ec4899');
        chispa.style.setProperty('--efecto-color-1', '#f472b6');
      } else if (item.classList.contains('acceso-psp')) {
        chispa.style.setProperty('--efecto-color-2', '#8b5cf6');
        chispa.style.setProperty('--efecto-color-1', '#a78bfa');
      } else if (item.classList.contains('acceso-pm')) {
        chispa.style.setProperty('--efecto-color-2', '#f97316');
        chispa.style.setProperty('--efecto-color-1', '#fb923c');
      } else if (item.classList.contains('acceso-sge')) {
        chispa.style.setProperty('--efecto-color-2', '#3b82f6');
        chispa.style.setProperty('--efecto-color-1', '#60a5fa');
      } else if (item.classList.contains('acceso-ingles')) {
        chispa.style.setProperty('--efecto-color-2', '#e11d48');
        chispa.style.setProperty('--efecto-color-1', '#fb7185');
      } else if (item.classList.contains('acceso-ipe')) {
        chispa.style.setProperty('--efecto-color-2', '#eab308');
        chispa.style.setProperty('--efecto-color-1', '#fde047');
      } else if (item.classList.contains('acceso-digitalizacion')) {
        chispa.style.setProperty('--efecto-color-2', '#06b6d4');
        chispa.style.setProperty('--efecto-color-1', '#22d3ee');
      } else if (item.classList.contains('acceso-sostenibilidad')) {
        chispa.style.setProperty('--efecto-color-2', '#22c55e');
        chispa.style.setProperty('--efecto-color-1', '#4ade80');
      } else if (item.classList.contains('acceso-python')) {
        chispa.style.setProperty('--efecto-color-2', '#3776ab');
        chispa.style.setProperty('--efecto-color-1', '#ffd43b');
      }
    }

    contenedor.appendChild(chispa);

    setTimeout(() => {
      chispa.remove();
    }, 600);
  });
}

activarEfectoChispas(document.querySelector('.contenedor-interactivo'));
activarEfectoChispas(document.querySelector('.accesos-directos'));

// --- LÓGICA DE BOTÓN PARA OCULTAR / MOSTRAR CONTENIDO ---
const btnToggleContenido = document.getElementById('btn-toggle-contenido');
if (btnToggleContenido) {
  const contenidoOculto = localStorage.getItem('contenido_oculto') === 'true';
  if (contenidoOculto) {
    document.body.classList.add('contenido-oculto');
    btnToggleContenido.setAttribute('title', 'Mostrar contenido');
  }

  btnToggleContenido.addEventListener('click', () => {
    const estaOculto = document.body.classList.toggle('contenido-oculto');
    btnToggleContenido.setAttribute('title', estaOculto ? 'Mostrar contenido' : 'Ocultar contenido');
    localStorage.setItem('contenido_oculto', estaOculto);
  });
}

// --- LÓGICA DE PAGINACIÓN DE ACCESOS DIRECTOS ---
const paginasAccesos = document.querySelectorAll('.pagina-accesos');
const pillsPagina = document.querySelectorAll('.pill-pagina');
const btnPrev = document.getElementById('btn-pagina-prev');
const btnNext = document.getElementById('btn-pagina-next');
let paginaActual = parseInt(localStorage.getItem('pagina_accesos_actual') || '0', 10);

if (paginasAccesos.length > 0) {
  function mostrarPagina(indice) {
    if (indice < 0) indice = paginasAccesos.length - 1;
    if (indice >= paginasAccesos.length) indice = 0;
    paginaActual = indice;

    paginasAccesos.forEach((pag, idx) => {
      pag.classList.toggle('activa', idx === paginaActual);
    });

    pillsPagina.forEach((pill, idx) => {
      pill.classList.toggle('activa', idx === paginaActual);
    });

    localStorage.setItem('pagina_accesos_actual', paginaActual);
  }

  mostrarPagina(paginaActual);

  pillsPagina.forEach((pill) => {
    pill.addEventListener('click', () => {
      const idx = parseInt(pill.getAttribute('data-ir-pagina'), 10);
      mostrarPagina(idx);
    });
  });

  if (btnPrev) {
    btnPrev.addEventListener('click', () => mostrarPagina(paginaActual - 1));
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => mostrarPagina(paginaActual + 1));
  }
}