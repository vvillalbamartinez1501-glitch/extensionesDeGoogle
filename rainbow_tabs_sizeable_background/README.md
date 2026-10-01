# 🌌 Guguel Custom New Tab

Una extensión para Google Chrome y Microsoft Edge que reemplaza la aburrida página de "Nueva Pestaña" nativa por una experiencia inmersiva, interactiva y multipropósito.

## ✨ Características Principales

*   **Buscador 100% Funcional:** Barra de búsqueda central enlazada directamente al motor de Google.
*   **Fondos Aleatorios (Pre-cargados):** Sistema de fondos que rota aleatoriamente entre archivos estáticos (`.jpg`) y animados (`.gif`) adaptados a pantalla completa, con un optimizador para evitar pantallas negras durante la carga.
*   **Efectos Interactivos Avanzados:** La barra de búsqueda cuenta con un campo de energía eléctrico y chispas/partículas luminosas generadas por JavaScript que siguen el movimiento del ratón.
*   **Títulos y Favicons Dinámicos:** Rotación automática de títulos de pestaña (incluyendo kaomojis) y una selección de iconos aleatorios en cada nueva pestaña.
*   **Manifest V3:** Código moderno, seguro y estructurado según las últimas normativas de Chromium.

## 🚀 Instalación (Carga sin empaquetar)

Al no estar subida a la tienda oficial de extensiones, debes instalarla manualmente usando el Modo Desarrollador:

1. Descarga o clona este repositorio en tu ordenador.
2. Abre tu navegador (Google Chrome o Microsoft Edge).
3. Escribe en la barra de direcciones `chrome://extensions/` (o `edge://extensions/`).
4. Activa el **"Modo de desarrollador"** (arriba a la derecha en Chrome, o a la izquierda en Edge).
5. Haz clic en el botón **"Cargar sin empaquetar"** (Load unpacked).
6. Selecciona la carpeta donde tienes los archivos de esta extensión.
7. Al abrir una nueva pestaña por primera vez, el navegador te preguntará si quieres conservar los cambios. Haz clic en **"Mantener cambios"**.

## 🎨 Personalización

Puedes adaptar esta extensión a cualquier temática fácilmente:
*   **Fondos:** Añade tus imágenes a `images/backgrounds/` y registra sus nombres exactos en la lista `LISTA_FONDOS` del archivo `script.js`.
*   **Colores de la electricidad:** Modifica las variables `--efecto-color-1` y `--efecto-color-2` en la sección `:root` del archivo `index.html`.
*   **Logo:** Reemplaza el archivo `guguel_logo.png` en la carpeta `images/logo/`.