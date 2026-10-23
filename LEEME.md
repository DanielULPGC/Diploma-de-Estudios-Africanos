# Ser humanos · museo 3D de los comienzos de la cultura

Recurso docente sobre los comienzos de la cultura humana, con contenido de redacción propia y bibliografía en cada sala y ficha. Inspirado en la exposición «Being Human. The Beginnings of Our Culture» (Archäologisches Museum Frankfurt, 2021-2022) y en su volumen de acompañamiento: Giemsch, L. y Haidle, M. N. (Eds.). (2022). Nünnerich-Asmus. ISBN 978-3-96176-193-7.

## Estructura
- `index.html` · página.
- `css/estilos.css` · estilos (tema claro y oscuro).
- `js/museo.js` · escena Three.js 0.160.0 (galería del tiempo, vitrinas, estelas).
- `js/objetos.js` · piezas 3D procedimentales de las vitrinas.
- `js/retos.js` · motores de retos (clasificar, ordenar, test, numérico, caja, predicciones, mapa).
- `js/app.js` · interfaz, progreso, recorrido, guía docente.
- `js/tierra.js` · costas Natural Earth 1:110m (dominio público).
- `datos/novedades.js` · investigación 2025-2026 por sala y especie, a partir de las reseñas del blog Nutcracker Man (Roberto Sáez, https://nutcrackerman.com/); referencias cotejadas en Crossref (22-10-2026).
- `datos/referencias.js` · bibliografía (cita APA y DOI). La investigación 2023-2026 se localizó en buena parte gracias a las reseñas del blog Nutcracker Man (Roberto Sáez, https://nutcrackerman.com/); referencias cotejadas en Crossref (octubre de 2026).
- `datos/salas.js`, `datos/especies.js`, `datos/expansion.js` · todo el contenido. Corregir o ampliar contenido no exige tocar `js/`.

## Publicar en GitHub Pages
Suba la carpeta completa a un repositorio y active Pages en la rama principal. No requiere compilación. Three.js se carga desde jsDelivr (versión fijada 0.160.0).

## Modo docente
`index.html?docente` o `index.html#docente`: vitrinas abiertas y botón «Ver solución».

## Privacidad
No recoge datos. El progreso se guarda solo en el navegador (localStorage).

Licencia del recurso: CC BY-NC 4.0. Las síntesis son de redacción propia y no reproducen textos de terceros.
