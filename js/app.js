/*
 * APLICACIÓN · une los datos (window.SH), el museo 3D y los retos.
 * Todo el contenido llega de datos/; añadir o corregir una sala no exige tocar este fichero.
 */
import { crearMuseo } from "./museo.js";
import { pintarReto, test, el } from "./retos.js";

const S = window.SH;
const $ = s => document.querySelector(s);
const poner = (nodo, ...h) => nodo.replaceChildren(...h.flat().filter(x => x != null && x !== false));
const DOCENTE = new URLSearchParams(location.search).has("docente") || location.hash === "#docente";
const CLAVE = "ser-humanos-progreso-v1";
const leerLS = () => { try { return JSON.parse(localStorage.getItem(CLAVE) || "{}"); } catch (e) { return {}; } };
const guardarLS = v => { try { localStorage.setItem(CLAVE, JSON.stringify(v)); } catch (e) { /* sin almacenamiento: el progreso dura la sesión */ } };
const sesion = { get: k => { try { return sessionStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { sessionStorage.setItem(k, v); } catch (e) {} } };

const salas = [...S.salas].sort((a, b) => a.n - b.n);
const porSala = new Map(salas.map(s => [s.id, s]));
const especies = [...S.especies].sort((a, b) => b.edad[0] - a.edad[0]);
const porEspecie = new Map(especies.map(e => [e.id, e]));
const progreso = leerLS();

/* Orden del catálogo: cada ensayo seguido de su ficha de especie */
const ORDEN_LIBRO = ["s01", "sahelanthropus", "s02", "ardipithecus", "s03", "afarensis", "s04", "africanus", "s05", "boisei", "s06", "rudolfensis", "s07", "habilis", "s08", "ergaster", "s09", "erectus", "s10", "heidelbergensis", "s11", "neanderthalensis", "s12", "sapiens", "s13"]
  .map(id => porSala.has(id) ? { tipo: "sala", id } : { tipo: "especie", id });

const estado = { vista: "inicio", sel: null, recorrido: null };

/* ---------- Progreso ---------- */
function estadoSala(s) {
  if (DOCENTE) return "montada";
  const p = progreso[s.id] || {}; const n = s.retos.filter((_, i) => p[i]).length;
  return n === s.retos.length ? "montada" : n > 0 ? "parcial" : "cerrada";
}
function marcarReto(s, i) {
  progreso[s.id] = progreso[s.id] || {};
  const antes = estadoSala(s);
  progreso[s.id][i] = true; guardarLS(progreso);
  const ahora = estadoSala(s);
  if (museo) museo.setEstadoSala(s.id, ahora);
  pintarIndice();
  return antes !== "montada" && ahora === "montada";
}
function contarMontadas() { return salas.filter(s => estadoSala(s) === "montada").length; }

/* ---------- Museo ---------- */
let museo = null; let hover = null;
try {
  museo = crearMuseo($("#museo"), {
    salas, especies, linajes: S.linajes, tierra: window.ATLAS_TIERRA,
    onSeleccion: (tipo, id) => tipo === "sala" ? abrirSala(id, { volar: true }) : abrirEspecie(id, { volar: true }),
    onHover: h => { hover = h; }
  });
  $("#carga").hidden = true;
  salas.forEach(s => museo.setEstadoSala(s.id, estadoSala(s)));
  museo.onCuadro(pintarRotulo);
} catch (err) {
  console.error(err);
  $("#carga").textContent = "No se pudo iniciar la vista 3D en este navegador (WebGL desactivado o no disponible). El índice, las fichas y los retos funcionan igualmente.";
}
const rotulo = $("#rotulo");
function pintarRotulo() {
  const h = hover || estado.sel; if (!h) { rotulo.hidden = true; return; }
  const p = museo.aPantalla(h.tipo, h.id); if (!p || !p.visible) { rotulo.hidden = true; return; }
  rotulo.hidden = false; rotulo.style.left = p.x + "px"; rotulo.style.top = p.y + "px";
  const clave = h.tipo + h.id;
  if (rotulo.dataset.k !== clave) {
    rotulo.dataset.k = clave;
    if (h.tipo === "sala") { const s = porSala.get(h.id); rotulo.replaceChildren(`Sala ${s.n} · ${s.autoria}`, el("small", {}, s.titulo.length > 54 ? s.titulo.slice(0, 52) + "…" : s.titulo)); }
    else { const e = porEspecie.get(h.id); rotulo.replaceChildren(e.nombre, el("small", {}, `${e.edadTexto} · ${e.cerebro[0]}-${e.cerebro[1]} cm³`)); }
  }
}
const refrescarTema = () => { if (museo) museo.actualizarTema(); };
/* Las texturas de texto se dibujan con las fuentes web: se repintan cuando terminan de cargar */
if (document.fonts && document.fonts.ready) document.fonts.ready.then(refrescarTema).catch(() => {});
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", refrescarTema);
new MutationObserver(refrescarTema).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

/* ---------- Índice ---------- */
function botonSala(s) {
  const st = estadoSala(s);
  return el("li", {}, el("button", {
    class: "item-btn", type: "button", "aria-current": estado.sel?.tipo === "sala" && estado.sel.id === s.id ? "true" : null,
    onclick: () => abrirSala(s.id, { volar: true })
  }, el("span", { class: "num" }, String(s.n).padStart(2, "0")), el("span", {}, s.autoria),
    el("span", { class: "estado-sala" + (st === "montada" ? " hecha" : st === "parcial" ? " parcial" : ""), title: st === "montada" ? "Vitrina montada" : st === "parcial" ? "En montaje" : "Por montar", "aria-label": st === "montada" ? "vitrina montada" : st === "parcial" ? "vitrina en montaje" : "vitrina por montar" }),
    el("small", {}, s.titulo)));
}
function pintarIndice() {
  poner($("#lista-galeria"), salas.filter(s => s.edad != null).map(botonSala));
  poner($("#lista-lab"), salas.filter(s => s.edad == null).map(botonSala));
  poner($("#lista-especies"), especies.map(e => el("li", {}, el("button", {
    class: "item-btn", type: "button", "aria-current": estado.sel?.tipo === "especie" && estado.sel.id === e.id ? "true" : null,
    onclick: () => abrirEspecie(e.id, { volar: true })
  }, el("span", { class: "muestra", style: `--c: var(${S.linajes[e.linaje].color})` }), el("span", {}, el("i", {}, e.nombre)), el("span"), el("small", {}, e.edadTexto)))));
  const n = contarMontadas();
  $("#progreso-relleno").style.width = (n / salas.length * 100) + "%";
  $(".barra-progreso").setAttribute("aria-valuenow", n);
  $("#progreso-texto").textContent = `${n} de ${salas.length}` + (DOCENTE ? " · modo docente" : "");
}
function pintarLeyenda() {
  poner($("#leyenda"),
    Object.values(S.linajes).map(l => el("span", {}, el("span", { class: "muestra", style: `--c: var(${l.color})` }), l.nombre)),
    el("span", { class: "nota" }, "Esfera: volumen cerebral medio · Banda: duración de la especie · Escala temporal en raíz cuadrada"));
}

/* ---------- Ficha: piezas comunes ---------- */
const ficha = $("#ficha");
function cabecera(etq, titulo, ...extra) {
  return el("header", { class: "ficha-cab" }, el("span", { class: "etiqueta" }, etq), el("h2", { tabindex: "-1", id: "ficha-titulo" }, titulo), extra);
}
let arrancando = true;
function enfocarFicha() {
  ficha.scrollTop = 0;
  if (arrancando) return;
  const t = $("#ficha-titulo"); if (t) t.focus({ preventScroll: true });
  if (window.matchMedia("(max-width: 900px)").matches) ficha.scrollIntoView({ block: "start", behavior: "smooth" });
}
function bloqueAviso(a) {
  const tit = a.tipo === "actualizacion" ? "Actualización posterior al catálogo" : a.tipo === "errata" ? "Errata o imprecisión del catálogo" : "Nota de lectura crítica";
  return el("section", { class: "seccion aviso" + (a.tipo === "actualizacion" ? " actualizacion" : ""), "aria-label": tit },
    el("h3", {}, tit), el("p", {}, a.texto),
    a.fuentes?.length ? el("ul", {}, a.fuentes.map(f => el("li", {}, f.cita, " ", f.doi ? el("a", { href: "https://doi.org/" + f.doi, target: "_blank", rel: "noopener" }, "doi:" + f.doi) : null))) : null);
}

/* ---------- Vistas ---------- */
function vistaInicio() {
  estado.vista = "inicio"; estado.sel = null; if (museo) museo.marcar(null); pintarIndice();
  const n = contarMontadas();
  poner(ficha,
    cabecera("Comisariado en prácticas", "La exposición llega a la Facultad", el("p", { class: "sub" }, "A partir del catálogo Being Human. The Beginnings of Our Culture (Archäologisches Museum Frankfurt, 2022)")),
    DOCENTE ? el("p", { class: "docente" }, "Modo docente: vitrinas abiertas y soluciones visibles") : null,
    el("div", { class: "texto" },
      el("p", {}, "Las cajas de la exposición han llegado, pero las vitrinas están vacías. Su tarea, como comisario o comisaria en prácticas, es montar las trece salas: leer cada sala, comprender su idea central y superar sus retos. Cada vitrina se ilumina cuando la sala queda montada."),
      el("p", {}, "La galería recorre el tiempo desde hace siete millones de años (al fondo) hasta hoy. En el suelo, las bandas de color señalan cuánto duró cada especie y las esferas, su volumen cerebral medio. Al final espera el laboratorio del presente: lo que hoy observamos en bebés, en chimpancés o en los huesos para entender el pasado.")),
    el("div", { class: "cifras" },
      el("div", {}, el("strong", {}, `${n}/${salas.length}`), "vitrinas montadas"),
      el("div", {}, el("strong", {}, String(especies.length)), "especies"),
      el("div", {}, el("strong", {}, String(salas.reduce((a, s) => a + s.retos.length, 0))), "retos")),
    el("section", { class: "seccion" }, el("h3", {}, "Cómo moverse"),
      el("ul", { class: "texto", style: "padding-left: 1.1em; font-size: var(--t-sm)" },
        el("li", {}, "Arrastre para girar, rueda o pellizco para acercarse y clic derecho o dos dedos para desplazarse."),
        el("li", {}, "Pulse una vitrina o una esfera para abrir su ficha; el índice permite hacerlo con el teclado."),
        el("li", {}, "«Recorrido guiado» sigue el orden del catálogo: cada ensayo y, a continuación, su ficha de especie."))),
    el("div", { class: "nav-ficha" },
      el("button", { class: "boton primario", type: "button", onclick: () => iniciarRecorrido() }, "Empezar el recorrido"),
      el("button", { class: "boton", type: "button", onclick: vistaGuia }, "Guía docente"),
      n > 0 && !DOCENTE ? el("button", { class: "boton", type: "button", onclick: reiniciar }, "Reiniciar progreso") : null));
  enfocarFicha();
}

function abrirSala(id, { volar = false } = {}) {
  const s = porSala.get(id); if (!s) return;
  if (estado.recorrido && !estado.recorrido.some(p => p.id === id)) terminarRecorrido();
  estado.vista = "sala"; estado.sel = { tipo: "sala", id };
  if (museo) { museo.marcar("sala", id); if (volar) museo.enfocar("sala", id); }
  cerrarVisor(); pintarIndice(); try { history.replaceState(null, "", "#" + id); } catch (e) {}
  const p = progreso[id] || {};
  poner(ficha,
    cabecera(`Sala ${s.n} · pp. ${s.paginas}`, s.titulo, el("p", { class: "sub" }, s.autoria), el("p", { class: "original", lang: "en" }, s.original)),
    el("p", { class: "idea" }, s.idea),
    el("div", { class: "texto" }, s.sintesis.map(t => el("p", {}, t))),
    el("section", { class: "seccion" }, el("h3", {}, "Retos para montar la vitrina"),
      el("ul", { class: "lista-retos" }, s.retos.map((r, i) => el("li", { class: p[i] || DOCENTE ? "hecho" : "" },
        el("button", { class: "boton", type: "button", onclick: () => abrirReto(id, i) }, r.titulo, el("span", { class: "estado" }, p[i] ? "superado" : "pendiente")))))),
    el("section", { class: "seccion" }, el("h3", {}, "Conceptos clave"),
      el("dl", { class: "glosario" }, s.conceptos.map(c => el("div", {}, el("dt", {}, c.t, el("span", { class: "mono" }, "p. " + c.p)), el("dd", {}, c.d))))),
    el("section", { class: "seccion" }, el("h3", {}, "Para pensar"), el("p", { class: "pensar" }, s.pensar)),
    el("section", { class: "seccion" }, el("h3", {}, "En el aula"), el("p", { class: "aula" }, s.aula)),
    s.avisos.map(bloqueAviso),
    navegacion({ tipo: "sala", id }));
  actualizarRecorrido(); enfocarFicha();
}

function abrirReto(id, i) {
  const s = porSala.get(id); const r = s.retos[i];
  estado.vista = "reto";
  const cont = el("div", {});
  const aviso = el("div", { "aria-live": "polite" });
  const fin = () => {
    const nueva = marcarReto(s, i);
    if (nueva) aviso.replaceChildren(el("p", { class: "celebra" }, `Vitrina de la sala ${s.n} montada. Ya van ${contarMontadas()} de ${salas.length}.`));
  };
  pintarReto(r, cont, fin, { docente: DOCENTE, abrirVisor });
  poner(ficha,
    cabecera(`Sala ${s.n} · reto ${i + 1} de ${s.retos.length}`, r.titulo, el("p", { class: "sub" }, s.titulo)),
    cont, aviso,
    el("div", { class: "nav-ficha" },
      el("button", { class: "boton", type: "button", onclick: () => abrirSala(id) }, "Volver a la sala"),
      i < s.retos.length - 1 ? el("button", { class: "boton", type: "button", onclick: () => abrirReto(id, i + 1) }, "Siguiente reto") : null));
  enfocarFicha();
}

function abrirEspecie(id, { volar = false } = {}) {
  const e = porEspecie.get(id); if (!e) return;
  if (estado.recorrido && !estado.recorrido.some(p => p.id === id)) terminarRecorrido();
  estado.vista = "especie"; estado.sel = { tipo: "especie", id };
  if (museo) { museo.marcar("especie", id); if (volar) museo.enfocar("especie", id); }
  cerrarVisor(); pintarIndice(); try { history.replaceState(null, "", "#e-" + id); } catch (e) {}
  const l = S.linajes[e.linaje];
  poner(ficha,
    cabecera(`Ficha de especie · p. ${e.p}`, el("i", {}, e.nombre), el("span", { class: "chip" }, el("span", { class: "muestra", style: `--c: var(${l.color})` }), l.nombre)),
    el("dl", { class: "meta" },
      el("dt", {}, "Edad"), el("dd", { class: "mono" }, e.edadTexto),
      el("dt", {}, "Cerebro"), el("dd", { class: "mono" }, `${e.cerebro[0].toLocaleString("es-ES")}-${e.cerebro[1].toLocaleString("es-ES")} cm³`),
      el("dt", {}, "Hallazgo"), el("dd", {}, e.descubrimiento),
      el("dt", {}, "Yacimientos"), el("dd", {}, e.yacimientos),
      e.hallazgos !== "—" ? [el("dt", {}, "Restos"), el("dd", {}, e.hallazgos)] : null),
    el("div", { class: "texto" }, el("p", {}, e.rasgos)),
    e.nota ? bloqueAviso(e.nota) : null,
    el("section", { class: "seccion" }, el("h3", {}, "Comparar"), comparador(e)),
    navegacion({ tipo: "especie", id }));
  actualizarRecorrido(); enfocarFicha();
}

/* Barra comparativa de volumen cerebral entre todas las especies */
function comparador(actual) {
  const max = 1900; const W = 340, fila = 15;
  const s = el("svg", { viewBox: `0 0 ${W} ${especies.length * fila + 22}`, class: "grafico", role: "img", "aria-label": `Volumen cerebral de las ${especies.length} especies; resaltada ${actual.nombre}.` });
  especies.forEach((e, i) => {
    const y = 4 + i * fila, x0 = 118, k = (W - x0 - 10) / max;
    const sel = e.id === actual.id;
    s.append(el("text", { __svg: true, x: x0 - 6, y: y + 9, "text-anchor": "end", "font-size": 9, style: sel ? "font-weight:700" : "", class: sel ? "" : "tenue" }, e.nombre.replace("Australopithecus", "Au.").replace("Paranthropus", "P.").replace("Homo (sapiens) neanderthalensis", "H. neanderthalensis").replace("Homo ", "H. ").replace("Ardipithecus kadabba y A. ramidus", "Ardipithecus").replace("Sahelanthropus tchadensis", "Sahelanthropus")));
    s.append(el("rect", { __svg: true, x: x0 + e.cerebro[0] * k, y: y + 2, width: Math.max(2, (e.cerebro[1] - e.cerebro[0]) * k), height: 9, rx: 2, style: `fill: var(${S.linajes[e.linaje].color}); opacity: ${sel ? 1 : 0.45}` }));
  });
  const y = especies.length * fila + 16;
  [0, 500, 1000, 1500].forEach(v => s.append(el("text", { __svg: true, x: 118 + v * (W - 128) / max, y, "font-size": 8, "text-anchor": "middle", class: "tenue" }, v)));
  return el("div", {}, s, el("p", { class: "explicacion" }, "Rango de volumen cerebral (cm³) según las fichas del catálogo."));
}

function navegacion(actual) {
  const i = ORDEN_LIBRO.findIndex(p => p.tipo === actual.tipo && p.id === actual.id);
  const ant = ORDEN_LIBRO[i - 1], sig = ORDEN_LIBRO[i + 1];
  const ir = p => p.tipo === "sala" ? abrirSala(p.id, { volar: true }) : abrirEspecie(p.id, { volar: true });
  const nombre = p => p.tipo === "sala" ? `Sala ${porSala.get(p.id).n}` : porEspecie.get(p.id).nombre.split(" ").slice(0, 2).join(" ");
  return el("div", { class: "nav-ficha" },
    el("button", { class: "boton", type: "button", disabled: !ant, onclick: () => ant && ir(ant) }, ant ? "← " + nombre(ant) : "Anterior"),
    el("button", { class: "boton", type: "button", disabled: !sig, onclick: () => sig && ir(sig) }, sig ? nombre(sig) + " →" : "Siguiente"));
}

function vistaGuia() {
  estado.vista = "guia"; terminarRecorrido();
  const lista = (...xs) => el("ul", { style: "margin:0; padding-left:1.1em; display:flex; flex-direction:column; gap:4px" }, xs.map(x => el("li", {}, x)));
  poner(ficha,
    cabecera("Para el profesorado", "Guía docente", el("p", { class: "sub" }, "Propuesta de uso en el aula universitaria (FCEDU) con puente a Primaria")),
    el("section", { class: "seccion" }, el("h3", {}, "Destinatarios y finalidad"),
      el("p", { class: "texto" }, "Alumnado de los Grados en Educación Primaria e Infantil (Didáctica de las Ciencias Sociales y de la Historia) y de Antropología. El recurso convierte el catálogo en un itinerario de lectura activa: cada sala sintetiza un ensayo, plantea conceptos y preguntas, señala erratas y actualizaciones y exige superar retos para «montar» su vitrina.")),
    el("section", { class: "seccion" }, el("h3", {}, "Objetivos"),
      lista("Comprender la cultura como práctica aprendida y transmitida, y su papel en la evolución humana.",
        "Situar especies, tecnologías y procesos en una escala temporal profunda.",
        "Distinguir hecho, interpretación y debate en la investigación paleoantropológica, y reconocer el carácter provisional de las fechas «más antiguas».",
        "Diseñar transposiciones didácticas rigurosas para Primaria.")),
    el("section", { class: "seccion" }, el("h3", {}, "Secuencia propuesta (3 sesiones)"),
      lista(
        "Sesión 1 · Recorrido guiado en modo presentación por las salas 1-3 y debate «¿dónde empieza la cultura?».",
        "Sesión 2 · Comisariado por equipos: reparto de las trece salas. Cada equipo supera sus retos, redacta una cartela propia (60-80 palabras, con página del catálogo) y una transposición a Primaria.",
        "Sesión 3 · Visita cruzada: cada equipo presenta su vitrina; examen de comisariado y debate sobre las notas de actualización (cómo cambia el conocimiento entre 2022 y hoy).")),
    el("section", { class: "seccion" }, el("h3", {}, "Evaluación orientativa"),
      lista("Rigor conceptual de la cartela y uso correcto de la página o el DOI.", "Calidad de la transposición: adecuación a la edad, actividad concreta y evitación de anacronismos.", "Lectura crítica: identificación de al menos una errata, un debate o una actualización.", "Comunicación oral en la visita cruzada.")),
    el("section", { class: "seccion" }, el("h3", {}, "Marco normativo"),
      el("p", { class: "texto" }, "La propuesta se alinea con la LOMLOE y el Real Decreto 157/2022 (enseñanzas mínimas de Primaria). En Canarias, el Decreto 211/2022 sitúa la Prehistoria entre los saberes de Conocimiento del Medio; conviene cotejar en el BOC el ciclo y los criterios concretos antes de programar.")),
    el("section", { class: "seccion aviso" }, el("h3", {}, "Límites del recurso"),
      lista("Las síntesis son de redacción propia y no sustituyen la lectura del catálogo, que no se reproduce.",
        "El catálogo es de 2022: las notas verdes recogen hallazgos posteriores con su DOI; las amarillas, erratas y debates.",
        "Las piezas 3D son evocaciones, no réplicas; las coordenadas del mapa son aproximadas; la escala temporal es de raíz cuadrada.",
        "El progreso se guarda solo en este navegador; no se recogen datos personales.",
        "Recurso elaborado con asistencia de IA generativa y verificación de fuentes; requiere revisión docente antes de su uso.")),
    el("section", { class: "seccion" }, el("h3", {}, "Modo docente"),
      el("p", { class: "texto" }, "Añada #docente al final del enlace (o ?docente si el recurso se aloja en un servidor propio) para abrir todas las vitrinas y mostrar el botón «Ver solución» en cada reto.")),
    el("div", { class: "nav-ficha" }, el("button", { class: "boton", type: "button", onclick: vistaInicio }, "Volver al inicio")));
  enfocarFicha();
}

function vistaExamen() {
  estado.vista = "examen"; terminarRecorrido();
  const cont = el("div", {}); const res = el("div", { "aria-live": "polite" });
  test(S.examen, cont, (ok, n) => { res.replaceChildren(el("p", { class: "celebra" }, `Examen superado (${n} de ${S.examen.length}). Credencial de comisariado obtenida.`)); }, { docente: DOCENTE, umbral: 0.75, prefijo: "ex" });
  poner(ficha, cabecera("Autoevaluación final", "Examen de comisariado", el("p", { class: "sub" }, `${S.examen.length} preguntas · se supera con el 75 %`)), cont, res,
    el("div", { class: "nav-ficha" }, el("button", { class: "boton", type: "button", onclick: vistaInicio }, "Volver al inicio")));
  enfocarFicha();
}

function reiniciar() {
  for (const k of Object.keys(progreso)) delete progreso[k];
  guardarLS(progreso); salas.forEach(s => museo && museo.setEstadoSala(s.id, estadoSala(s))); vistaInicio();
}

/* ---------- Recorrido guiado ---------- */
function iniciarRecorrido() { estado.recorrido = ORDEN_LIBRO; irPaso(0); }
function irPaso(i) { const p = estado.recorrido[i]; if (!p) return; p.tipo === "sala" ? abrirSala(p.id, { volar: true }) : abrirEspecie(p.id, { volar: true }); }
function terminarRecorrido() { estado.recorrido = null; $("#recorrido").hidden = true; }
function actualizarRecorrido() {
  const r = estado.recorrido, barra = $("#recorrido");
  if (!r || !estado.sel) { barra.hidden = true; return; }
  const i = r.findIndex(p => p.tipo === estado.sel.tipo && p.id === estado.sel.id);
  barra.hidden = false;
  barra.replaceChildren(
    el("button", { class: "boton", type: "button", disabled: i <= 0, onclick: () => irPaso(i - 1), "aria-label": "Parada anterior" }, "‹"),
    el("span", { class: "paso" }, "Recorrido ", el("span", { class: "mono" }, `${i + 1}/${r.length}`)),
    el("button", { class: "boton primario", type: "button", disabled: i >= r.length - 1, onclick: () => irPaso(i + 1), "aria-label": "Parada siguiente" }, "›"),
    el("button", { class: "boton", type: "button", onclick: terminarRecorrido }, "Salir"));
}

/* ---------- Visor del mapa de expansión ---------- */
const visor = $("#visor");
function cerrarVisor() { visor.hidden = true; visor.replaceChildren(); }
function abrirVisor(alVisitar) {
  const etapas = S.expansion; const visitadas = new Set(); let actual = 0;
  const canvas = el("canvas", { "aria-hidden": "true" });
  const capa = el("div", { class: "visor-marcas" });
  const info = el("div", { class: "globo-info", hidden: true });
  const cuerpo = el("div", { class: "visor-cuerpo" }, canvas, capa, info);
  const pieV = el("div", { class: "visor-pie", "aria-live": "polite" });
  const botones = etapas.map((e, i) => el("button", { class: "boton", type: "button", "aria-pressed": "false", onclick: () => ir(i) }, e.rango));
  const cerrar = el("button", { class: "boton", type: "button", onclick: () => { cerrarVisor(); document.querySelector("#ficha-titulo")?.focus(); } }, "Cerrar mapa");
  visor.replaceChildren(el("div", { class: "visor-cab" }, el("h3", { id: "visor-titulo" }, "La expansión humana en seis etapas"), el("div", { class: "visor-etapas", role: "group", "aria-label": "Etapas" }, botones), cerrar), cuerpo, pieV);
  visor.setAttribute("role", "dialog"); visor.setAttribute("aria-labelledby", "visor-titulo"); visor.hidden = false;
  const LON0 = -100, LON1 = 160, LAT0 = -45, LAT1 = 70;
  const proyectar = (lon, lat, w, h) => ({ x: (lon - LON0) / (LON1 - LON0) * w, y: (LAT1 - lat) / (LAT1 - LAT0) * h });
  function dibujar() {
    const w = cuerpo.clientWidth, h = cuerpo.clientHeight; if (!w || !h) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2); canvas.width = w * dpr; canvas.height = h * dpr;
    const g = canvas.getContext("2d"); g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const css = getComputedStyle(document.documentElement);
    g.fillStyle = css.getPropertyValue("--surface-2"); g.fillRect(0, 0, w, h);
    g.strokeStyle = css.getPropertyValue("--muted"); g.lineWidth = 1; g.fillStyle = css.getPropertyValue("--line");
    for (const linea of window.ATLAS_TIERRA.costas) {
      g.beginPath(); let salto = false;
      for (let i = 0; i < linea.length; i += 2) { const p = proyectar(linea[i], linea[i + 1], w, h); if (i === 0 || Math.abs(linea[i] - linea[i - 2]) > 180) g.moveTo(p.x, p.y); else g.lineTo(p.x, p.y); }
      g.stroke();
    }
    const capaRect = { w, h };
    capa.replaceChildren(...etapas.slice(0, actual + 1).flatMap((e, k) => e.sitios.map(s => {
      const p = proyectar(s.lon, s.lat, capaRect.w, capaRect.h);
      const b = el("button", { class: "marca-sitio" + (k < actual ? " vieja" : "") + (s.nuevo ? " nuevo" : ""), type: "button", style: `left:${p.x}px; top:${p.y}px`, "aria-label": `${s.n}: ${s.a}${s.nuevo ? " (hallazgo posterior al catálogo)" : ""}` });
      const mostrar = () => { info.hidden = false; info.style.left = p.x + "px"; info.style.top = p.y + "px"; info.textContent = `${s.n} · ${s.a}${s.nuevo ? " · posterior a 2022" : ""}`; };
      b.addEventListener("pointerenter", mostrar); b.addEventListener("focus", mostrar);
      b.addEventListener("pointerleave", () => info.hidden = true); b.addEventListener("blur", () => info.hidden = true);
      return b;
    })));
  }
  function ir(i) {
    actual = i; visitadas.add(i);
    botones.forEach((b, k) => b.setAttribute("aria-pressed", String(k === i)));
    const e = etapas[i];
    pieV.replaceChildren(el("strong", {}, `${e.rango} · ${e.titulo}`), el("p", {}, e.texto), el("p", { class: "mono" }, "Punto actual: etapa en curso · gris: etapas anteriores · anillo verde: hallazgo posterior al catálogo. Ubicaciones aproximadas."));
    dibujar(); alVisitar(visitadas.size);
  }
  new ResizeObserver(dibujar).observe(cuerpo);
  ir(0); botones[0].focus();
}
document.addEventListener("keydown", ev => { if (ev.key === "Escape" && !visor.hidden) { cerrarVisor(); } });

/* ---------- Presentación y botones ---------- */
function presentar(on) {
  document.body.classList.toggle("modo-presentacion", on);
  $("#btn-presentar").setAttribute("aria-pressed", on ? "true" : "false");
  $("#btn-presentar span").textContent = on ? "Salir de presentación" : "Presentar";
  sesion.set("sh-presentacion", on ? "1" : "0");
}
$("#btn-presentar").addEventListener("click", () => presentar(!document.body.classList.contains("modo-presentacion")));
$("#btn-inicio").addEventListener("click", () => { terminarRecorrido(); if (museo) museo.vistaGeneral(); vistaInicio(); });
$("#btn-recorrido").addEventListener("click", iniciarRecorrido);
$("#btn-guia").addEventListener("click", vistaGuia);
$("#btn-examen").addEventListener("click", vistaExamen);
$("#btn-general").addEventListener("click", () => museo && museo.vistaGeneral());
document.addEventListener("keydown", ev => {
  if (/input|textarea|select/i.test(document.activeElement.tagName)) return;
  if (ev.key === "Escape" && document.body.classList.contains("modo-presentacion") && visor.hidden) presentar(false);
  if (estado.recorrido && estado.sel && (ev.key === "ArrowRight" || ev.key === "ArrowLeft")) {
    const i = estado.recorrido.findIndex(p => p.tipo === estado.sel.tipo && p.id === estado.sel.id);
    irPaso(i + (ev.key === "ArrowRight" ? 1 : -1));
  }
});

/* ---------- Arranque ---------- */
$("#fuente").textContent = `${S.fuente.cita} ISBN ${S.fuente.isbn}. ${S.fuente.nota}`;
pintarLeyenda(); pintarIndice();
const ancla = decodeURIComponent(location.hash.slice(1));
if (porSala.has(ancla)) abrirSala(ancla, { volar: true });
else if (ancla.startsWith("e-") && porEspecie.has(ancla.slice(2))) abrirEspecie(ancla.slice(2), { volar: true });
else vistaInicio();
if (sesion.get("sh-presentacion") === "1") presentar(true);
arrancando = false;
