# Ser humanos · museo 3D de los comienzos de la cultura

Recurso docente (FCEDU, ULPGC) basado en Giemsch, L. y Haidle, M. N. (Eds.). (2022). *Being Human. The Beginnings of Our Culture*. Archäologisches Museum Frankfurt / Nünnerich-Asmus. ISBN 978-3-96176-193-7.

## Estructura
- `index.html` · página.
- `css/estilos.css` · estilos (tema claro y oscuro).
- `js/museo.js` · escena Three.js 0.160.0 (galería del tiempo, vitrinas, estelas).
- `js/objetos.js` · piezas 3D procedimentales de las vitrinas.
- `js/retos.js` · motores de retos (clasificar, ordenar, test, numérico, caja, predicciones, mapa).
- `js/app.js` · interfaz, progreso, recorrido, guía docente.
- `js/tierra.js` · costas Natural Earth 1:110m (dominio público).
- `datos/salas.js`, `datos/especies.js`, `datos/expansion.js` · todo el contenido. Corregir o ampliar contenido no exige tocar `js/`.

## Publicar en GitHub Pages
Suba la carpeta completa a un repositorio y active Pages en la rama principal. No requiere compilación. Three.js se carga desde jsDelivr (versión fijada 0.160.0).

## Modo docente
`index.html?docente` o `index.html#docente`: vitrinas abiertas y botón «Ver solución».

## Privacidad
No recoge datos. El progreso se guarda solo en el navegador (localStorage).

Licencia del recurso: CC BY-NC 4.0. Las síntesis son de redacción propia y no reproducen el catálogo.
