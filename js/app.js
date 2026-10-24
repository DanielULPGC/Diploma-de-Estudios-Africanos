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
const ETO = S.etologia || { casos: [], retos: [], ejes: {}, intro: null };
const porCaso = new Map(ETO.casos.map(c => [c.id, c]));

/* Orden del recorrido guiado: cada sala seguida de una especie */
const ORDEN_RECORRIDO = ["s01", "sahelanthropus", "s02", "ardipithecus", "s03", "afarensis", "s04", "africanus", "s05", "boisei", "s06", "rudolfensis", "s07", "habilis", "s08", "ergaster", "s09", "erectus", "s10", "heidelbergensis", "s11", "neanderthalensis", "s12", "sapiens", "s13"]
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
    if (h.tipo === "sala") { const s = porSala.get(h.id); rotulo.replaceChildren(`Sala ${s.n} · ${s.corto}`, el("small", {}, s.titulo.length > 54 ? s.titulo.slice(0, 52) + "…" : s.titulo)); }
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
  }, el("span", { class: "num" }, String(s.n).padStart(2, "0")), el("span", {}, s.corto),
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
  const pEto = progreso.eto || {};
  poner($("#lista-etologia"),
    el("li", {}, el("button", { class: "item-btn", type: "button", "aria-current": estado.vista === "etologia" ? "true" : null, onclick: vistaEtologia },
      el("span", { class: "num" }, "§"), el("span", {}, "Presentación y retos"),
      el("span", { class: "estado-sala" + (ETO.retos.every((_, i) => pEto[i] || DOCENTE) ? " hecha" : ETO.retos.some((_, i) => pEto[i]) ? " parcial" : ""), "aria-label": ETO.retos.every((_, i) => pEto[i] || DOCENTE) ? "retos superados" : "retos pendientes" }),
      el("small", {}, "Qué aporta comparar especies"))),
    ETO.casos.map((c, k) => el("li", {}, el("button", {
      class: "item-btn", type: "button", "aria-current": estado.sel?.tipo === "caso" && estado.sel.id === c.id ? "true" : null,
      onclick: () => abrirCaso(c.id)
    }, el("span", { class: "num" }, String(k + 1).padStart(2, "0")), el("span", {}, c.corto), el("span"), el("small", {}, c.taxon.split(" (")[0])))));
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
const REFS = S.refs || {};
function bloqueDebates(lista) {
  const l = (Array.isArray(lista) ? lista : [lista]).filter(Boolean);
  if (!l.length) return null;
  return el("section", { class: "seccion aviso", "aria-label": "En debate" }, el("h3", {}, "En debate"),
    l.length === 1 ? el("p", {}, l[0]) : el("ul", {}, l.map(t => el("li", {}, t))));
}
function itemRef(clave) {
  const r = REFS[clave]; if (!r) return null;
  return el("li", {}, r.cita, " ", r.doi ? el("a", { href: "https://doi.org/" + r.doi, target: "_blank", rel: "noopener" }, "doi:" + r.doi) : null);
}
function bloqueReferencias(claves) {
  if (!claves || !claves.length) return null;
  return el("section", { class: "seccion referencias" }, el("h3", {}, "Referencias"), el("ul", { class: "lista-refs" }, claves.map(itemRef)));
}

/* ---------- Fotografías de yacimientos ---------- */
const IMG = S.imagenes || {};
function figuraYacimiento(clave, { titulo = null, compacta = false } = {}) {
  const f = IMG[clave]; if (!f) return null;
  const lic = f.licUrl ? el("a", { href: f.licUrl, target: "_blank", rel: "noopener license" }, f.licencia) : f.licencia;
  return el("figure", { class: "figura" + (compacta ? " compacta" : "") },
    el("img", { src: f.src, alt: f.pie, loading: "lazy", decoding: "async", width: 720, height: 480 }),
    el("figcaption", {}, titulo ? el("strong", {}, titulo + ". ") : null, f.pie,
      el("span", { class: "credito" }, "Foto: ", f.autor || "autoría en Commons", " · ", lic, " · ", el("a", { href: f.pagina, target: "_blank", rel: "noopener" }, "Wikimedia Commons"), " (redimensionada)")));
}
const IMG_ESPECIE = { sahelanthropus: "Toros-Menalla", afarensis: "Laetoli", africanus: "Sterkfontein", boisei: "KoobiFora", rudolfensis: "KoobiFora", habilis: "Hadar", ergaster: "KoobiFora", erectus: "Dmanisi", heidelbergensis: "Mauer", neanderthalensis: "Neander", sapiens: "JebelIrhoud" };

/* ---------- Vistas ---------- */
function vistaInicio() {
  estado.vista = "inicio"; estado.sel = null; if (museo) museo.marcar(null); pintarIndice();
  const n = contarMontadas();
  poner(ficha,
    cabecera("Comisariado en prácticas", "Las vitrinas están vacías", el("p", { class: "sub" }, "Los primeros tres millones de años de la cultura humana, en trece salas")),
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
        el("li", {}, "«Recorrido guiado» alterna las trece salas con las doce especies, de los primeros homininos a Homo sapiens."),
        el("li", {}, "El «Gabinete de etología» reúne doce casos de comportamiento animal (simios, monos, loros y cacatúas) que dialogan con las salas."))),
    el("div", { class: "nav-ficha" },
      el("button", { class: "boton primario", type: "button", onclick: () => iniciarRecorrido() }, "Empezar el recorrido"),
      el("button", { class: "boton", type: "button", onclick: vistaGuia }, "Guía de uso"),
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
    cabecera(`Sala ${s.n}`, s.titulo),
    el("p", { class: "idea" }, s.idea),
    el("div", { class: "texto" }, s.sintesis.map(t => el("p", {}, t))),
    el("section", { class: "seccion" }, el("h3", {}, "Retos para montar la vitrina"),
      el("ul", { class: "lista-retos" }, s.retos.map((r, i) => el("li", { class: p[i] || DOCENTE ? "hecho" : "" },
        el("button", { class: "boton", type: "button", onclick: () => abrirReto(id, i) }, r.titulo, el("span", { class: "estado" }, p[i] ? "superado" : "pendiente")))))),
    el("section", { class: "seccion" }, el("h3", {}, "Conceptos clave"),
      el("dl", { class: "glosario" }, s.conceptos.map(c => el("div", {}, el("dt", {}, c.t), el("dd", {}, c.d))))),
    el("section", { class: "seccion" }, el("h3", {}, "Para pensar"), el("p", { class: "pensar" }, s.pensar)),
    bloqueDebates(s.debates),
    bloqueEtologiaRelacionada(s.id),
    bloqueReferencias(s.refs),
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
    cabecera("Ficha de especie", el("i", {}, e.nombre), el("span", { class: "chip" }, el("span", { class: "muestra", style: `--c: var(${l.color})` }), l.nombre)),
    el("dl", { class: "meta" },
      el("dt", {}, "Edad"), el("dd", { class: "mono" }, e.edadTexto),
      el("dt", {}, "Cerebro"), el("dd", { class: "mono" }, `${e.cerebro[0].toLocaleString("es-ES")}-${e.cerebro[1].toLocaleString("es-ES")} cm³`),
      el("dt", {}, "Hallazgo"), el("dd", {}, e.descubrimiento),
      el("dt", {}, "Yacimientos"), el("dd", {}, e.yacimientos),
      e.hallazgos !== "—" ? [el("dt", {}, "Restos"), el("dd", {}, e.hallazgos)] : null),
    el("div", { class: "texto" }, el("p", {}, e.rasgos)),
    IMG_ESPECIE[e.id] ? el("section", { class: "seccion" }, el("h3", {}, "Un yacimiento de la especie"), figuraYacimiento(IMG_ESPECIE[e.id])) : null,
    bloqueDebates(e.debate),
    el("section", { class: "seccion" }, el("h3", {}, "Comparar"), comparador(e)),
    bloqueReferencias(e.refs),
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
    s.append(el("text", { __svg: true, x: x0 - 6, y: y + 9, "text-anchor": "end", "font-size": 9, style: sel ? "font-weight:700" : "", class: sel ? "" : "tenue" }, e.nombre.replace("Australopithecus", "Au.").replace("Paranthropus", "P.").replace("Homo neanderthalensis", "H. neanderthalensis").replace("Homo ", "H. ").replace("Ardipithecus kadabba y A. ramidus", "Ardipithecus").replace("Sahelanthropus tchadensis", "Sahelanthropus")));
    s.append(el("rect", { __svg: true, x: x0 + e.cerebro[0] * k, y: y + 2, width: Math.max(2, (e.cerebro[1] - e.cerebro[0]) * k), height: 9, rx: 2, style: `fill: var(${S.linajes[e.linaje].color}); opacity: ${sel ? 1 : 0.45}` }));
  });
  const y = especies.length * fila + 16;
  [0, 500, 1000, 1500].forEach(v => s.append(el("text", { __svg: true, x: 118 + v * (W - 128) / max, y, "font-size": 8, "text-anchor": "middle", class: "tenue" }, v)));
  return el("div", {}, s, el("p", { class: "explicacion" }, "Rango de volumen cerebral (cm³) según las estimaciones de cada ficha."));
}

function navegacion(actual) {
  const serie = ORDEN_RECORRIDO.filter(p => p.tipo === actual.tipo);
  const i = serie.findIndex(p => p.id === actual.id);
  const ant = serie[i - 1], sig = serie[i + 1];
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
    cabecera("Para el profesorado", "Guía de uso", el("p", { class: "sub" }, "Propuesta para la docencia universitaria y la divulgación")),
    el("section", { class: "seccion" }, el("h3", {}, "Destinatarios y finalidad"),
      el("p", { class: "texto" }, "Estudiantes universitarios de Antropología, Historia, Arqueología y Biología, y cualquier persona interesada en la evolución humana. El recurso es un itinerario de lectura activa: cada sala sintetiza un tema con bibliografía actualizada, plantea conceptos, preguntas y debates abiertos, y exige superar retos para «montar» su vitrina.")),
    el("section", { class: "seccion" }, el("h3", {}, "Objetivos"),
      lista("Comprender la cultura como práctica aprendida y transmitida, y su papel en la evolución humana.",
        "Situar especies, tecnologías y procesos en una escala temporal profunda.",
        "Distinguir hecho, interpretación y debate en la investigación paleoantropológica, y reconocer el carácter provisional de las fechas «más antiguas».",
        "Valorar críticamente las fuentes y reconocer qué resultados recientes siguen en debate.")),
    el("section", { class: "seccion" }, el("h3", {}, "Secuencia propuesta (3 sesiones)"),
      lista(
        "Sesión 1 · Recorrido guiado en modo presentación por las salas 1-3 y debate «¿dónde empieza la cultura?».",
        "Sesión 2 · Comisariado por equipos: reparto de las trece salas. Cada equipo supera sus retos y redacta una cartela propia (60-80 palabras) que cite al menos dos referencias de la sala, una de ellas de 2023-2026.",
        "Sesión 3 · Visita cruzada: cada equipo presenta su vitrina; examen de comisariado y debate sobre los recuadros «En debate»: qué sabemos, qué no y cómo podría resolverse.",
        "Ampliación · Gabinete de etología: cada equipo elige un caso, lo relaciona con su sala y explica qué pregunta de Tinbergen responde, si la comparación es por homología o por convergencia y cuáles son sus límites.")),
    el("section", { class: "seccion" }, el("h3", {}, "Evaluación orientativa"),
      lista("Rigor conceptual de la cartela y uso correcto de las referencias.", "Lectura crítica: identificación de al menos un debate abierto y de las pruebas de cada postura.", "Contraste de fuentes: distinguir el artículo original de su difusión divulgativa.", "Comunicación oral en la visita cruzada.")),
    el("section", { class: "seccion aviso" }, el("h3", {}, "Límites del recurso"),
      lista("Las síntesis son de redacción propia; cada sala y cada ficha citan sus fuentes, reunidas en «Bibliografía y créditos».",
        "El contenido está actualizado a octubre de 2026. Las cuestiones abiertas se señalan en los recuadros «En debate»; la investigación de 2023-2026 se localizó en buena parte gracias a las reseñas de Nutcracker Man (Roberto Sáez), y sus referencias se cotejaron en Crossref.",
        "Las piezas 3D son evocaciones, no réplicas; las coordenadas del mapa son aproximadas; la escala temporal es de raíz cuadrada.",
        "Las fotografías proceden de Wikimedia Commons, con licencias libres (dominio público, CC0, CC BY, CC BY-SA, Licence Ouverte); cada pie indica autoría, licencia y si la imagen muestra el yacimiento o solo su entorno. Al reutilizarlas, mantenga esos créditos.",
        "El progreso se guarda solo en este navegador; no se recogen datos personales.",
        "Recurso elaborado con asistencia de IA generativa y verificación de fuentes; requiere revisión docente antes de su uso.")),
    el("section", { class: "seccion" }, el("h3", {}, "Modo docente"),
      el("p", { class: "texto" }, "Añada #docente al final del enlace (o ?docente si el recurso se aloja en un servidor propio) para abrir todas las vitrinas y mostrar el botón «Ver solución» en cada reto.")),
    el("div", { class: "nav-ficha" }, el("button", { class: "boton", type: "button", onclick: vistaInicio }, "Volver al inicio")));
  enfocarFicha();
}

function vistaBibliografia() {
  estado.vista = "bibliografia"; terminarRecorrido(); cerrarVisor(); estado.sel = null; if (museo) museo.marcar(null); pintarIndice();
  const usadas = new Set([...salas, ...especies, ...ETO.casos, ETO.intro || {}].flatMap(x => x.refs || []));
  const lista = [...usadas].filter(k => REFS[k]).sort((a, b) => REFS[a].cita.localeCompare(REFS[b].cita, "es"));
  poner(ficha,
    cabecera("Fuentes", "Bibliografía y créditos", el("p", { class: "sub" }, `${lista.length} referencias citadas en las salas, las fichas y el gabinete de etología`)),
    el("section", { class: "seccion" }, el("h3", {}, "Créditos"),
      el("p", { class: "texto" }, S.creditos.linea),
      el("p", { class: "texto" }, S.creditos.novedades),
      el("p", { class: "texto" }, "Fotografías de Wikimedia Commons con licencias libres (autoría y licencia en cada pie). Cartografía: Natural Earth (dominio público).")),
    el("section", { class: "seccion referencias" }, el("h3", {}, "Referencias"), el("ul", { class: "lista-refs" }, lista.map(itemRef))),
    el("div", { class: "nav-ficha" }, el("button", { class: "boton", type: "button", onclick: vistaInicio }, "Volver al inicio")));
  enfocarFicha();
}

function vistaGaleria() {
  estado.vista = "galeria"; terminarRecorrido(); cerrarVisor(); estado.sel = null; if (museo) museo.marcar(null); pintarIndice();
  const etapas = S.expansion;
  const sin = [];
  const bloques = etapas.map(e => {
    const con = e.sitios.filter(s => s.img && IMG[s.img]);
    e.sitios.filter(s => !s.img).forEach(s => sin.push(s.n));
    return con.length ? el("section", { class: "seccion" }, el("h3", {}, `${e.rango} · ${e.titulo}`),
      el("div", { class: "galeria" }, con.map(s => figuraYacimiento(s.img, { titulo: `${s.n} (${s.a})`, compacta: true })))) : null;
  });
  poner(ficha,
    cabecera("Galería", "Yacimientos en imágenes", el("p", { class: "sub" }, `${Object.keys(IMG).length} fotografías con licencia libre (Wikimedia Commons), ordenadas por las etapas del mapa de la sala 11`)),
    el("p", { class: "consigna" }, "Algunas imágenes muestran el yacimiento; otras, el paisaje de la región, un museo o un fósil hallado allí. El pie lo indica en cada caso."),
    bloques,
    el("section", { class: "seccion aviso" }, el("h3", {}, "Sin fotografía libre localizada"), el("p", {}, sin.join(" · ") + ".")),
    el("div", { class: "nav-ficha" }, el("button", { class: "boton", type: "button", onclick: () => abrirSala("s11", { volar: true }) }, "Ir a la sala 11"), el("button", { class: "boton", type: "button", onclick: vistaInicio }, "Volver al inicio")));
  enfocarFicha();
}

/* ---------- Gabinete de etología ---------- */
function bloqueEtologiaRelacionada(salaId) {
  const casos = ETO.casos.filter(c => c.salas.includes(salaId));
  if (!casos.length) return null;
  return el("section", { class: "seccion" }, el("h3", {}, "Etología relacionada"),
    el("p", { class: "explicacion" }, "Casos del gabinete de etología que dialogan con esta sala."),
    el("div", { class: "botonera" }, casos.map(c => el("button", { class: "boton", type: "button", onclick: () => abrirCaso(c.id) }, c.corto))));
}
function salirDeEscena() { terminarRecorrido(); cerrarVisor(); estado.sel = null; if (museo) museo.marcar(null); }
function vistaEtologia() {
  salirDeEscena(); estado.vista = "etologia"; pintarIndice();
  try { history.replaceState(null, "", "#etologia"); } catch (e) {}
  const I = ETO.intro; const pEto = progreso.eto || {};
  poner(ficha,
    cabecera("Gabinete de etología", "Etología comparada", el("p", { class: "sub" }, `${ETO.casos.length} casos de comportamiento animal para pensar los comienzos de la cultura`)),
    el("p", { class: "idea" }, I.idea),
    el("div", { class: "texto" }, I.texto.map(t => el("p", {}, t))),
    el("section", { class: "seccion" }, el("h3", {}, "Retos del gabinete"),
      el("p", { class: "explicacion" }, "No forman parte del montaje de las vitrinas; sirven para practicar la lectura crítica de los casos."),
      el("ul", { class: "lista-retos" }, ETO.retos.map((r, i) => el("li", { class: pEto[i] || DOCENTE ? "hecho" : "" },
        el("button", { class: "boton", type: "button", onclick: () => abrirRetoEto(i) }, r.titulo, el("span", { class: "estado" }, pEto[i] ? "superado" : "pendiente")))))),
    Object.entries(ETO.ejes).map(([k, nombre]) => el("section", { class: "seccion" }, el("h3", {}, nombre),
      el("ul", { class: "lista-casos" }, ETO.casos.filter(c => c.eje === k).map(c => el("li", {},
        el("button", { class: "boton ancho", type: "button", onclick: () => abrirCaso(c.id) }, el("span", {}, c.titulo), el("small", {}, `${c.taxon.split(" (")[0]} · ${c.metodo}`))))))),
    el("section", { class: "seccion" }, el("h3", {}, "Conceptos clave"),
      el("dl", { class: "glosario" }, I.conceptos.map(c => el("div", {}, el("dt", {}, c.t), el("dd", {}, c.d))))),
    el("section", { class: "seccion" }, el("h3", {}, "Para pensar"), el("p", { class: "pensar" }, I.pensar)),
    bloqueReferencias(I.refs),
    el("div", { class: "nav-ficha" }, el("button", { class: "boton primario", type: "button", onclick: () => abrirCaso(ETO.casos[0].id) }, "Empezar por el primer caso")));
  enfocarFicha();
}
function abrirCaso(id) {
  const c = porCaso.get(id); if (!c) return;
  salirDeEscena(); estado.vista = "caso"; estado.sel = { tipo: "caso", id }; pintarIndice();
  try { history.replaceState(null, "", "#t-" + id); } catch (e) {}
  const i = ETO.casos.indexOf(c), ant = ETO.casos[i - 1], sig = ETO.casos[i + 1];
  poner(ficha,
    cabecera(`Etología · ${ETO.ejes[c.eje]}`, c.titulo),
    el("dl", { class: "meta" },
      el("dt", {}, "Especie"), el("dd", {}, c.taxon),
      el("dt", {}, "Lugar"), el("dd", {}, c.lugar),
      el("dt", {}, "Método"), el("dd", {}, c.metodo)),
    el("div", { class: "texto" }, c.hallazgo.map(t => el("p", {}, t))),
    el("section", { class: "seccion" }, el("h3", {}, "Por qué importa para la evolución humana"), el("p", { class: "texto" }, c.importa)),
    el("section", { class: "seccion aviso", "aria-label": "Límites de la interpretación" }, el("h3", {}, "Límites de la interpretación"), el("p", {}, c.cautela)),
    el("section", { class: "seccion" }, el("h3", {}, "Salas relacionadas"),
      el("div", { class: "botonera" }, c.salas.map(sid => { const s = porSala.get(sid); return s ? el("button", { class: "boton", type: "button", onclick: () => abrirSala(sid, { volar: true }) }, `Sala ${s.n} · ${s.corto}`) : null; }))),
    bloqueReferencias(c.refs),
    el("div", { class: "nav-ficha" },
      el("button", { class: "boton", type: "button", disabled: !ant, onclick: () => ant && abrirCaso(ant.id) }, ant ? "← " + ant.corto : "Anterior"),
      el("button", { class: "boton", type: "button", onclick: vistaEtologia }, "Gabinete"),
      el("button", { class: "boton", type: "button", disabled: !sig, onclick: () => sig && abrirCaso(sig.id) }, sig ? sig.corto + " →" : "Siguiente")));
  enfocarFicha();
}
function abrirRetoEto(i) {
  const r = ETO.retos[i]; salirDeEscena(); estado.vista = "reto-eto";
  const cont = el("div", {}); const aviso = el("div", { "aria-live": "polite" });
  const fin = () => {
    progreso.eto = progreso.eto || {}; const nuevo = !progreso.eto[i];
    progreso.eto[i] = true; guardarLS(progreso); pintarIndice();
    if (nuevo) aviso.replaceChildren(el("p", { class: "celebra" }, "Reto del gabinete superado."));
  };
  pintarReto(r, cont, fin, { docente: DOCENTE });
  poner(ficha,
    cabecera(`Gabinete de etología · reto ${i + 1} de ${ETO.retos.length}`, r.titulo),
    cont, aviso,
    el("div", { class: "nav-ficha" },
      el("button", { class: "boton", type: "button", onclick: vistaEtologia }, "Volver al gabinete"),
      i < ETO.retos.length - 1 ? el("button", { class: "boton", type: "button", onclick: () => abrirRetoEto(i + 1) }, "Siguiente reto") : null));
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
function iniciarRecorrido() { estado.recorrido = ORDEN_RECORRIDO; irPaso(0); }
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
  const mapa = el("div", { class: "visor-mapa" }, canvas, capa, info);
  const lado = el("div", { class: "visor-lado", "aria-live": "polite" });
  const cuerpo = el("div", { class: "visor-cuerpo" }, mapa, lado);
  let elegido = null;
  function verSitio(s) {
    elegido = s;
    capa.querySelectorAll(".marca-sitio").forEach(m => m.classList.toggle("activa", m.dataset.n === s.n));
    lado.replaceChildren(el("h4", {}, s.n), el("p", { class: "mono" }, s.a + (s.nuevo ? " · hallazgo o datación de 2023-2026" : "")),
      s.img && IMG[s.img] ? figuraYacimiento(s.img) : el("p", { class: "explicacion" }, "No se ha localizado una fotografía de este yacimiento con licencia libre."),
      el("p", { class: "explicacion" }, "Ubicación aproximada en el mapa."));
  }
  function listaSitios() {
    const e = etapas[actual];
    lado.replaceChildren(el("h4", {}, "Yacimientos de esta etapa"), el("p", { class: "explicacion" }, "Pulse un punto del mapa o un nombre para ver su fotografía."),
      el("ul", { class: "lista-sitios" }, e.sitios.map(s => el("li", {}, el("button", { class: "boton", type: "button", onclick: () => verSitio(s) }, s.n, s.img && IMG[s.img] ? el("span", { class: "chip-foto", "aria-label": "con fotografía" }, "foto") : null)))));
  }
  const pieV = el("div", { class: "visor-pie", "aria-live": "polite" });
  const botones = etapas.map((e, i) => el("button", { class: "boton", type: "button", "aria-pressed": "false", onclick: () => ir(i) }, e.rango));
  const cerrar = el("button", { class: "boton", type: "button", onclick: () => { cerrarVisor(); document.querySelector("#ficha-titulo")?.focus(); } }, "Cerrar mapa");
  visor.replaceChildren(el("div", { class: "visor-cab" }, el("h3", { id: "visor-titulo" }, "La expansión humana en seis etapas"), el("div", { class: "visor-etapas", role: "group", "aria-label": "Etapas" }, botones), cerrar), cuerpo, pieV);
  visor.setAttribute("role", "dialog"); visor.setAttribute("aria-labelledby", "visor-titulo"); visor.hidden = false;
  const LON0 = -100, LON1 = 160, LAT0 = -45, LAT1 = 70;
  const proyectar = (lon, lat, w, h) => ({ x: (lon - LON0) / (LON1 - LON0) * w, y: (LAT1 - lat) / (LAT1 - LAT0) * h });
  function dibujar() {
    const w = mapa.clientWidth, h = mapa.clientHeight; if (!w || !h) return;
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
      const conFoto = s.img && IMG[s.img];
      const b = el("button", { class: "marca-sitio" + (k < actual ? " vieja" : "") + (s.nuevo ? " nuevo" : "") + (conFoto ? " con-foto" : "") + (elegido && elegido.n === s.n ? " activa" : ""), "data-n": s.n, type: "button", style: `left:${p.x}px; top:${p.y}px`, "aria-label": `${s.n}: ${s.a}${s.nuevo ? " (hallazgo o datación de 2023-2026)" : ""}${conFoto ? ". Con fotografía" : ""}`, onclick: () => verSitio(s) });
      const mostrar = () => { info.hidden = false; info.style.left = p.x + "px"; info.style.top = p.y + "px"; info.textContent = `${s.n} · ${s.a}${s.nuevo ? " · 2023-2026" : ""}`; };
      b.addEventListener("pointerenter", mostrar); b.addEventListener("focus", mostrar);
      b.addEventListener("pointerleave", () => info.hidden = true); b.addEventListener("blur", () => info.hidden = true);
      return b;
    })));
  }
  function ir(i) {
    actual = i; visitadas.add(i);
    botones.forEach((b, k) => b.setAttribute("aria-pressed", String(k === i)));
    const e = etapas[i];
    pieV.replaceChildren(el("strong", {}, `${e.rango} · ${e.titulo}`), el("p", {}, e.texto), el("p", { class: "mono" }, "Punto de color: etapa en curso · gris: etapas anteriores · anillo verde: hallazgo o datación de 2023-2026 · punto blanco central: con fotografía. Ubicaciones aproximadas."));
    elegido = null; listaSitios(); dibujar(); alVisitar(visitadas.size);
  }
  new ResizeObserver(dibujar).observe(mapa);
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
$("#btn-galeria").addEventListener("click", vistaGaleria);
$("#btn-bibliografia").addEventListener("click", vistaBibliografia);
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
$("#fuente").textContent = S.creditos.linea;
pintarLeyenda(); pintarIndice();
const ancla = decodeURIComponent(location.hash.slice(1));
if (porSala.has(ancla)) abrirSala(ancla, { volar: true });
else if (ancla.startsWith("e-") && porEspecie.has(ancla.slice(2))) abrirEspecie(ancla.slice(2), { volar: true });
else if (ancla === "etologia") vistaEtologia();
else if (ancla.startsWith("t-") && porCaso.has(ancla.slice(2))) abrirCaso(ancla.slice(2));
else vistaInicio();
if (sesion.get("sh-presentacion") === "1") presentar(true);
arrancando = false;
