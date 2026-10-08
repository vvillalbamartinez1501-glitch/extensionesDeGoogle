
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
  "barça_3_background.jpg",
  "barça_4_background.jpg",
  "cp_background.gif",
  "jinx_background.gif",
  "lapis_background.gif",
  "pedri_background.jpg",
  "su_background.gif",
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
        chispa.style.setProperty('--efecto-color-2', '#1e3a8a');
        chispa.style.setProperty('--efecto-color-1', '#3b82f6');
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

// --- LÓGICA DE BOTÓN PARA MOSTRAR / OCULTAR ÚNICAMENTE ACCESOS DIRECTOS ---
const btnToggleAccesos = document.getElementById('btn-toggle-accesos');
const textoBtnAccesos = btnToggleAccesos ? btnToggleAccesos.querySelector('.texto-btn-accesos') : null;
const mediaQueryPequena = window.matchMedia('(max-width: 1050px), (max-height: 520px)');

if (btnToggleAccesos) {
  function esVentanaPequena() {
    return mediaQueryPequena.matches;
  }

  function actualizarEstadoBotonAccesos() {
    const pequena = esVentanaPequena();
    if (pequena) {
      const estanAbiertos = document.body.classList.contains('accesos-abiertos-movil');
      btnToggleAccesos.setAttribute('title', estanAbiertos ? 'Ocultar accesos directos' : 'Mostrar accesos directos');
      btnToggleAccesos.setAttribute('aria-label', estanAbiertos ? 'Ocultar accesos directos' : 'Mostrar accesos directos');
      if (textoBtnAccesos) {
        textoBtnAccesos.textContent = estanAbiertos ? 'Ocultar accesos' : 'Accesos directos';
      }
    } else {
      const estanOcultos = document.body.classList.contains('accesos-ocultos');
      btnToggleAccesos.setAttribute('title', estanOcultos ? 'Mostrar accesos directos' : 'Ocultar accesos directos');
      btnToggleAccesos.setAttribute('aria-label', estanOcultos ? 'Mostrar accesos directos' : 'Ocultar accesos directos');
      if (textoBtnAccesos) {
        textoBtnAccesos.textContent = 'Accesos directos';
      }
    }
  }

  // En pantalla grande: restaurar si el usuario los había ocultado manualmente
  if (!esVentanaPequena()) {
    const accesosOcultosGuardados = localStorage.getItem('accesos_ocultos_escritorio') === 'true';
    if (accesosOcultosGuardados) {
      document.body.classList.add('accesos-ocultos');
    }
  }

  actualizarEstadoBotonAccesos();

  btnToggleAccesos.addEventListener('click', () => {
    if (esVentanaPequena()) {
      document.body.classList.toggle('accesos-abiertos-movil');
    } else {
      const estanOcultos = document.body.classList.toggle('accesos-ocultos');
      localStorage.setItem('accesos_ocultos_escritorio', estanOcultos);
    }
    actualizarEstadoBotonAccesos();
  });

  // Reaccionar dinámicamente si el usuario redimensiona la ventana
  mediaQueryPequena.addEventListener('change', (e) => {
    if (e.matches) {
      // Pasó a ventana pequeña: por predeterminado ocultar accesos
      document.body.classList.remove('accesos-abiertos-movil');
    } else {
      // Pasó a ventana grande: restaurar según preferencia o mostrar directamente
      const accesosOcultosGuardados = localStorage.getItem('accesos_ocultos_escritorio') === 'true';
      document.body.classList.toggle('accesos-ocultos', accesosOcultosGuardados);
    }
    actualizarEstadoBotonAccesos();
  });

  // Cerrar accesos con la tecla Escape si están abiertos en ventana pequeña
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('accesos-abiertos-movil')) {
      document.body.classList.remove('accesos-abiertos-movil');
      actualizarEstadoBotonAccesos();
    }
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

// ========================================================
// --- LÓGICA DE JUEGO PI QUIZ ---
// ========================================================
const PI_DIGITS = "141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128";

let currentIndex = 0;
let mistakesLeft = 5;
let isPlaying = false;
let digitBoxes = []; // Array para guardar las referencias a cada casilla

const btnTogglePiQuiz = document.getElementById('btn-toggle-piquiz');
const piQuizContainer = document.getElementById('pi-quiz-container');
const piQuizBtnCerrar = document.getElementById('pi-quiz-btn-cerrar');
const startBtn = document.getElementById('start-btn');
const retryBtn = document.getElementById('retry-btn');
const piGrid = document.getElementById('pi-grid');
const mistakesCount = document.getElementById('mistakes-count');
const gameOverModal = document.getElementById('game-over-modal');
const gameOverTitle = document.getElementById('game-over-title');
const finalScore = document.getElementById('final-score');
const percentileText = document.getElementById('percentile-text');

// Generar el tablero visual de cajas
function buildGrid() {
  if (!piGrid) return;
  // Limpiamos el grid manteniendo solo el "3 ."
  piGrid.innerHTML = '<div class="pi-static-prefix">3 .</div>';
  digitBoxes = []; // Reiniciamos el array de referencias

  // Crear 150 divs (uno para cada número)
  for (let i = 0; i < PI_DIGITS.length; i++) {
    const box = document.createElement('div');
    box.classList.add('digit-box');

    // Añadir al DOM y guardar referencia en el array
    piGrid.appendChild(box);
    digitBoxes.push(box);
  }
}

// Actualiza qué caja tiene el borde iluminado indicando el "cursor"
function updateActiveBox() {
  // Quitar la clase active de todas las cajas
  digitBoxes.forEach(box => box.classList.remove('active'));

  // Ponérsela a la actual, si el juego no ha terminado
  if (currentIndex < digitBoxes.length && isPlaying) {
    const activeBox = digitBoxes[currentIndex];
    activeBox.classList.add('active');
    activeBox.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

function initGame() {
  isPlaying = true;
  currentIndex = 0;
  mistakesLeft = 5;

  if (mistakesCount) mistakesCount.innerText = mistakesLeft;
  if (startBtn) {
    startBtn.innerText = "Play";
    startBtn.style.display = "none";
  }
  if (gameOverModal) gameOverModal.style.display = "none";

  buildGrid(); // Reconstruir cajas vacías
  updateActiveBox(); // Iluminar la primera caja

  document.removeEventListener('keydown', handleKeyPress);
  document.addEventListener('keydown', handleKeyPress);
}

function reanudarOIniciarJuego() {
  if (startBtn && startBtn.innerText === "Reanudar" && currentIndex > 0 && mistakesLeft > 0) {
    isPlaying = true;
    startBtn.style.display = "none";
    updateActiveBox();
    document.removeEventListener('keydown', handleKeyPress);
    document.addEventListener('keydown', handleKeyPress);
  } else {
    initGame();
  }
}

function handleKeyPress(e) {
  if (!isPlaying) return;
  const key = e.key;
  if (!/^[0-9]$/.test(key)) return;

  e.preventDefault();
  const currentBox = digitBoxes[currentIndex];
  if (!currentBox) return;

  if (key === PI_DIGITS[currentIndex]) {
    // Acierto
    currentBox.innerText = key; // Escribir el número en la caja
    currentBox.classList.remove('active');
    currentBox.classList.add('filled'); // Cambiar a verde

    currentIndex++;
    updateActiveBox(); // Mover el "cursor" a la siguiente caja

    if (currentIndex === PI_DIGITS.length) endGame(true);
  } else {
    // Fallo
    mistakesLeft--;
    if (mistakesCount) mistakesCount.innerText = mistakesLeft;

    // Efecto visual de error en la caja actual (flash rojo)
    currentBox.style.borderColor = "#ef4444";
    currentBox.style.backgroundColor = "rgba(239, 68, 68, 0.4)";
    currentBox.style.boxShadow = "0 0 12px rgba(239, 68, 68, 0.8)";

    setTimeout(() => {
      currentBox.style.borderColor = "";
      currentBox.style.backgroundColor = "";
      currentBox.style.boxShadow = "";
    }, 250);

    if (mistakesLeft <= 0) endGame(false);
  }
}

function endGame(won) {
  isPlaying = false;
  document.removeEventListener('keydown', handleKeyPress);

  // Quitar el cursor activo si termina
  if (currentIndex < digitBoxes.length && digitBoxes[currentIndex]) {
    digitBoxes[currentIndex].classList.remove('active');
  }

  if (finalScore) finalScore.innerText = currentIndex;
  if (gameOverTitle) {
    gameOverTitle.innerText = won ? "¡Enhorabuena! 🎉" : "Game Over";
    gameOverTitle.style.color = won ? "#4ade80" : "#f87171";
  }
  if (percentileText) {
    percentileText.innerText = won
      ? "¡Increíble! Has memorizado los 150 dígitos de Pi (Percentil 99)"
      : `Has quedado en el percentil ${calculatePercentile(currentIndex)}`;
  }

  if (gameOverModal) gameOverModal.style.display = "block";
  if (startBtn) {
    startBtn.innerText = "Volver a intentar";
    startBtn.style.display = "none";
  }
}

function calculatePercentile(score) {
  if (score === 150) return 99;
  if (score >= 143) return 96;
  if (score >= 101) return 85;
  if (score >= 52) return 50;
  if (score >= 24) return 25;
  if (score >= 10) return 10;
  return 5;
}

// Abrir y cerrar la vista de Pi Quiz
function abrirPiQuiz() {
  document.body.classList.add('piquiz-activo');
  if (btnTogglePiQuiz) {
    btnTogglePiQuiz.setAttribute('title', 'Cerrar Pi Quiz');
    btnTogglePiQuiz.setAttribute('aria-label', 'Cerrar Pi Quiz');
  }
  if (piQuizContainer) {
    piQuizContainer.setAttribute('aria-hidden', 'false');
  }
  // Desenforcar inputs para que las pulsaciones vayan directamente al juego
  document.querySelectorAll('input').forEach(input => input.blur());

  // Construir casillas si aún no están listas
  if (digitBoxes.length === 0) {
    buildGrid();
  }
}

function cerrarPiQuiz() {
  document.body.classList.remove('piquiz-activo');
  if (btnTogglePiQuiz) {
    btnTogglePiQuiz.setAttribute('title', 'Jugar Pi Quiz');
    btnTogglePiQuiz.setAttribute('aria-label', 'Jugar Pi Quiz');
  }
  if (piQuizContainer) {
    piQuizContainer.setAttribute('aria-hidden', 'true');
  }

  // Si estaba en partida, pausar y retirar listener de teclas
  if (isPlaying) {
    isPlaying = false;
    document.removeEventListener('keydown', handleKeyPress);
    if (currentIndex < digitBoxes.length && digitBoxes[currentIndex]) {
      digitBoxes[currentIndex].classList.remove('active');
    }
    if (startBtn) {
      startBtn.style.display = "inline-block";
      startBtn.innerText = "Reanudar";
    }
  }
}

function togglePiQuiz() {
  if (document.body.classList.contains('piquiz-activo')) {
    cerrarPiQuiz();
  } else {
    abrirPiQuiz();
  }
}

if (btnTogglePiQuiz) {
  btnTogglePiQuiz.addEventListener('click', togglePiQuiz);
}

if (piQuizBtnCerrar) {
  piQuizBtnCerrar.addEventListener('click', cerrarPiQuiz);
}

if (startBtn) {
  startBtn.addEventListener('click', reanudarOIniciarJuego);
}

if (retryBtn) {
  retryBtn.addEventListener('click', initGame);
}

// Cerrar Pi Quiz con tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.body.classList.contains('piquiz-activo')) {
    cerrarPiQuiz();
  }
});

// Inicializar el tablero visual de inmediato
buildGrid();