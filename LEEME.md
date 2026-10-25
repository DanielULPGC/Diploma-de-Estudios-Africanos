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
- `datos/imagenes.js` · 32 fotografías de yacimientos (Wikimedia Commons) con autoría, licencia y página de origen.
- `datos/etologia.js` · contenido de etología comparada.
- `datos/referencias.js` · bibliografía (cita APA y DOI). La investigación 2023-2026 se localizó en buena parte gracias a las reseñas del blog Nutcracker Man (Roberto Sáez, https://nutcrackerman.com/); referencias cotejadas en Crossref (octubre de 2026).
- `datos/salas.js`, `datos/especies.js`, `datos/expansion.js` · todo el contenido. Corregir o ampliar contenido no exige tocar `js/`.

## Publicar en GitHub Pages
Suba la carpeta completa a un repositorio y active Pages en la rama principal. No requiere compilación. Three.js se carga desde jsDelivr (versión fijada 0.160.0).

## Modo docente
`index.html?docente` o `index.html#docente`: vitrinas abiertas y botón «Ver solución».

## Privacidad
No recoge datos. El progreso se guarda solo en el navegador (localStorage).

Licencia del recurso: CC BY-NC 4.0. Las síntesis son de redacción propia y no reproducen textos de terceros. Las fotografías no quedan bajo esa licencia: conservan la suya, indicada en cada pie y en `datos/imagenes.js`.

## Cambios
- v0.10 (25-10-2026) · Piloto «¿Qué edad tiene un fósil?»: sala 14, «Laboratorio de cronología», en la vitrina central del fondo del laboratorio, con un perfil estratigráfico 3D (capas, ceniza volcánica y fósil en superficie). Cuatro estaciones y cinco retos: especie frente a ejemplar, qué se ha fechado (Toros-Menalla, Omo I, Jebel Irhoud), edad mínima y la controversia de Sterkfontein. Tres referencias nuevas (Lebatard et al., 2008; Vidal et al., 2022; Blumenschine et al., 2012) y una pregunta más en el examen. El reto numérico admite ahora una pista propia (`pista`).
- v0.9 (25-10-2026) · Cronología revisada tras el cotejo con PaleoBot. *Ardipithecus ramidus*: el límite de 3,9 Ma, sin respaldo en las fuentes, se sustituye por 4,51-4,32 Ma (As Duma, Gona) y 4,4 Ma (Aramis), con Semaw et al. (2005) y White et al. (2009). *Au. africanus*: la ficha advierte que su cronología está en revisión (Granger et al., 2022 y 2023; Frost et al., 2022). *A. ramidus* cita además el contexto geológico de Aramis (WoldeGabriel et al., 2009). *P. boisei*: el debate integra la mandíbula de *Paranthropus* de 2,6 Ma de Mille-Logya (Alemseged et al., 2026). Se completa el volumen y número de Martin et al. (2025).
