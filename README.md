# 🧩 Colección de Extensiones y Temas (Chrome & Edge)

Este repositorio es una colección de extensiones y temas personalizados creados para navegadores basados en Chromium (Google Chrome, Microsoft Edge, Brave, etc.). 

Las extensiones de este repositorio están pensadas como experiencias modulares: puedes instalar los temas visuales junto con los overrides de pestañas para crear interfaces únicas en tu navegador.

## 📂 Contenido del Repositorio

El repositorio está dividido en carpetas independientes, cada una siendo una extensión funcional por sí misma. Chrome requiere que los Temas y las Extensiones de Nueva Pestaña vayan separados.

*   📁 **/Guguel-New-Tab**
    *   Extensión que reemplaza la "Nueva Pestaña" por un buscador interactivo con fondos rotatorios (JPG/GIF), títulos aleatorios y efectos de ratón con partículas.
*   📁 **/Tema-Oscuro**
    *   Tema de Chrome (Manifest V3) que modifica los colores de los bordes, barras de marcadores y pestañas activas/inactivas para una experiencia *Dark Mode*.
*   📁 **/Tema-Claro-Pastel**
    *   Tema de Chrome alternativo con paletas de colores suaves y pastel.

## 🛠️️ Cómo Instalar (Modo Desarrollador)

Para usar cualquiera de los elementos de este repositorio, debes cargarlos de forma individual en tu navegador:

1. Ve a la página de extensiones de tu navegador:
   *   Chrome: `chrome://extensions/`
   *   Edge: `edge://extensions/`
2. Habilita el **"Modo de desarrollador"**.
3. Haz clic en **"Cargar sin empaquetar"**.
4. Selecciona la subcarpeta específica que quieres instalar (ej. `Guguel-New-Tab`). 
5. Repite el proceso para instalar un Tema y combinar ambos efectos.

*Nota: Al instalar un override de Nueva Pestaña por primera vez, el navegador te avisará del cambio. Debes hacer clic en **"Conservar cambios"**.*

## 🔧 Tecnologías Utilizadas

*   **HTML5 & CSS3:** Para la estructura, variables estéticas, animaciones CSS y layout adaptativo (Flexbox).
*   **Vanilla JavaScript:** Pre-carga dinámica de recursos pesados (GIFs), inyección de estilos y generación de partículas interactivas en el DOM.
*   **JSON (Manifest V3):** Para la configuración de metadatos, permisos de navegador y declaración de overrides (`chrome_url_overrides`).