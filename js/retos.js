/*
 * RETOS · motores genéricos de actividad (clasificar, ordenar, test, numérico)
 * y actividades específicas (caja-rompecabezas, predicción de dieta, martillos de Taï, mapa).
 * Cada motor pinta en un contenedor y llama a fin(superado) cuando el alumnado lo resuelve.
 * Con docente = true se muestra un botón «Ver solución».
 */
export function el(tag, attrs = {}, ...hijos) {
  const n = tag === "svg" || attrs.__svg ? document.createElementNS("http://www.w3.org/2000/svg", tag) : document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "__svg" || v == null || v === false) continue;
    if (k === "class") n.setAttribute("class", v);
    else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v === true ? "" : v);
  }
  for (const h of hijos.flat()) { if (h == null || h === false) continue; n.append(h.nodeType ? h : document.createTextNode(String(h))); }
  return n;
}
const svg = (tag, attrs = {}, ...h) => {
  const a = { ...attrs, __svg: true }; let estilo = "";
  for (const k of ["fill", "stroke"]) if (typeof a[k] === "string" && /var\(|color-mix/.test(a[k])) { estilo += `${k}:${a[k]};`; delete a[k]; }
  if (estilo) a.style = estilo + (a.style || "");
  return el(tag, a, ...h);
};
const barajar = (arr, semilla = 7) => { const a = arr.map((x, i) => [x, i]); let s = semilla; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } if (a.every(([, i], k) => i === k)) a.push(a.shift()); return a; };
const movimientoReducido = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const fmt = n => n >= 10000 ? n.toLocaleString("es-ES").replace(/\./g, "\u202f") : String(n);

function pie(resultado, botones) { return [el("div", { class: "nav-ficha" }, botones), resultado]; }

/* ---------- Clasificar ---------- */
function clasificar(r, cont, fin, { docente }) {
  const filas = r.items.map((it, i) => {
    const sel = el("select", { id: `cls-${i}`, "aria-label": "Categoría para: " + it.t },
      el("option", { value: "" }, "Elija una opción…"), r.categorias.map((c, j) => el("option", { value: j }, c)));
    const exp = el("p", { class: "explicacion", hidden: true }, it.e);
    const caja = el("div", { class: "cls-item" }, el("p", {}, it.t), sel, exp);
    return { it, sel, exp, caja };
  });
  const resultado = el("p", { class: "resultado", "aria-live": "polite" });
  const comprobar = () => {
    let ok = 0;
    filas.forEach(f => { const bien = f.sel.value !== "" && Number(f.sel.value) === f.it.c; f.caja.classList.toggle("correcta", bien); f.caja.classList.toggle("incorrecta", !bien); f.exp.hidden = !bien; if (bien) ok++; });
    const todo = ok === filas.length;
    resultado.textContent = todo ? "¡Todo correcto! La vitrina se ilumina." : `${ok} de ${filas.length} correctas. Revise las marcadas en rojo y vuelva a comprobar.`;
    resultado.classList.toggle("ok", todo); if (todo) fin(true);
  };
  const solucion = () => { filas.forEach(f => { f.sel.value = f.it.c; }); comprobar(); };
  cont.append(el("div", { class: "reto" }, el("p", { class: "consigna" }, r.consigna), filas.map(f => f.caja),
    pie(resultado, [el("button", { class: "boton primario", type: "button", onclick: comprobar }, "Comprobar"), docente ? el("button", { class: "boton", type: "button", onclick: solucion }, "Ver solución") : null])));
}

/* ---------- Ordenar ---------- */
function ordenar(r, cont, fin, { docente }) {
  let orden = barajar(r.items).map(([, i]) => i);
  const lista = el("ol", { class: "ord-lista" });
  const resultado = el("p", { class: "resultado", "aria-live": "polite" });
  let comprobado = false;
  const pintar = (foco) => {
    lista.replaceChildren(...orden.map((idx, pos) => {
      const it = r.items[idx];
      const subir = el("button", { class: "boton", type: "button", "aria-label": `Subir «${it.t}»`, disabled: pos === 0, onclick: () => mover(pos, -1) }, "↑");
      const bajar = el("button", { class: "boton", type: "button", "aria-label": `Bajar «${it.t}»`, disabled: pos === orden.length - 1, onclick: () => mover(pos, 1) }, "↓");
      const li = el("li", { class: "ord-item" + (comprobado ? (idx === pos ? " correcta" : " incorrecta") : "") },
        el("span", { class: "pos" }, pos + 1), el("span", {}, it.t, comprobado ? el("span", { class: "d" }, it.d) : null), el("span", { class: "flechas" }, subir, bajar));
      return li;
    }));
    if (foco) { const b = lista.children[foco.pos]?.querySelectorAll("button")[foco.dir < 0 ? 0 : 1]; (b && !b.disabled ? b : lista.children[foco.pos]?.querySelector("button:not(:disabled)"))?.focus(); }
  };
  const mover = (pos, dir) => { const j = pos + dir; if (j < 0 || j >= orden.length) return; [orden[pos], orden[j]] = [orden[j], orden[pos]]; comprobado = false; resultado.textContent = ""; pintar({ pos: j, dir }); };
  const comprobar = () => {
    comprobado = true; pintar(); const ok = orden.filter((idx, pos) => idx === pos).length; const todo = ok === orden.length;
    resultado.textContent = todo ? "¡Orden correcto! La vitrina se ilumina." : `${ok} de ${orden.length} en su sitio. Ahora ve las fechas: reordene y vuelva a comprobar.`;
    resultado.classList.toggle("ok", todo); if (todo) fin(true);
  };
  pintar();
  cont.append(el("div", { class: "reto" }, el("p", { class: "consigna" }, r.consigna), lista,
    pie(resultado, [el("button", { class: "boton primario", type: "button", onclick: comprobar }, "Comprobar orden"), docente ? el("button", { class: "boton", type: "button", onclick: () => { orden = r.items.map((_, i) => i); comprobar(); } }, "Ver solución") : null])));
}

/* ---------- Test ---------- */
export function test(preguntas, cont, fin, { docente, umbral = 0.7, prefijo = "t" } = {}) {
  const form = el("form", { class: "test" });
  const resultado = el("p", { class: "resultado", "aria-live": "polite" });
  preguntas.forEach((pr, i) => {
    const fs = el("fieldset", {}, el("legend", {}, `${i + 1}. ${pr.q}`));
    pr.o.forEach((op, j) => fs.append(el("label", { class: "opcion" }, el("input", { type: "radio", name: `${prefijo}${i}`, value: j }), op)));
    fs.append(el("p", { class: "explicacion", hidden: true }, pr.e)); form.append(fs);
  });
  form.append(el("div", { class: "nav-ficha" }, el("button", { class: "boton primario", type: "submit" }, "Comprobar respuestas"),
    docente ? el("button", { class: "boton", type: "button", onclick: () => { preguntas.forEach((pr, i) => { form.querySelector(`input[name=${prefijo}${i}][value="${pr.c}"]`).checked = true; }); form.requestSubmit(); } }, "Ver solución") : null), resultado);
  form.addEventListener("submit", ev => {
    ev.preventDefault(); let ok = 0;
    preguntas.forEach((pr, i) => {
      const sel = form.querySelector(`input[name=${prefijo}${i}]:checked`);
      form.querySelectorAll(`input[name=${prefijo}${i}]`).forEach(inp => { const lab = inp.closest(".opcion"); lab.classList.remove("correcta", "incorrecta"); if (Number(inp.value) === pr.c) lab.classList.add("correcta"); else if (inp === sel) lab.classList.add("incorrecta"); });
      form.querySelectorAll("fieldset")[i].querySelector(".explicacion").hidden = false;
      if (sel && Number(sel.value) === pr.c) ok++;
    });
    const sup = ok / preguntas.length >= umbral;
    resultado.textContent = `${ok} de ${preguntas.length} correctas.` + (sup ? " Superado." : ` Necesita al menos ${Math.ceil(umbral * preguntas.length)}.`);
    resultado.classList.toggle("ok", sup); if (sup) fin(true, ok);
  });
  cont.append(form);
}

/* ---------- Numérico ---------- */
function numerico(r, cont, fin, { docente }) {
  const inp = el("input", { type: "number", id: "num-resp", inputmode: "numeric", min: 0, step: "any" });
  const resultado = el("p", { class: "resultado", "aria-live": "polite" });
  const exp = el("p", { class: "explicacion", hidden: true }, r.explicacion);
  const comprobar = () => {
    const v = Number(String(inp.value).replace(/\s/g, "")); const ok = Number.isFinite(v) && Math.abs(v - r.respuesta) <= r.respuesta * r.tolerancia;
    resultado.textContent = ok ? `Correcto: ${fmt(r.respuesta)} ${r.unidad}.` : "Todavía no. Piense en cuántas generaciones hacen falta y cuántos años dura cada una.";
    resultado.classList.toggle("ok", ok); exp.hidden = !ok; if (ok) fin(true);
  };
  cont.append(el("div", { class: "reto" }, el("p", { class: "consigna" }, r.consigna),
    el("div", { class: "campo" }, el("label", { for: "num-resp" }, "Respuesta"), inp, el("span", {}, r.unidad)), exp,
    pie(resultado, [el("button", { class: "boton primario", type: "button", onclick: comprobar }, "Comprobar"), docente ? el("button", { class: "boton", type: "button", onclick: () => { inp.value = r.respuesta; comprobar(); } }, "Ver solución") : null])));
}

/* ---------- Caja-rompecabezas (Michel) ---------- */
function caja(r, cont, fin, { docente }) {
  let transparente = false;
  const g = svg("svg", { viewBox: "0 0 320 220", class: "caja-svg", role: "img", "aria-label": "Caja-rompecabezas con dos aberturas a la izquierda: una superior y otra inferior. Dentro, al fondo de la abertura inferior, hay una pegatina de premio." });
  const cuerpo = svg("rect", { x: 110, y: 30, width: 170, height: 160, rx: 6, fill: "var(--sc-madera)", stroke: "var(--ink)", "stroke-width": 2 });
  const tubos = [svg("rect", { x: 110, y: 62, width: 90, height: 26, fill: "var(--bg)", stroke: "var(--ink)", "stroke-width": 1.5 }), svg("rect", { x: 110, y: 132, width: 130, height: 26, fill: "var(--bg)", stroke: "var(--ink)", "stroke-width": 1.5 })];
  const placa = svg("rect", { x: 186, y: 58, width: 8, height: 34, fill: "var(--ko)" });
  const premio = svg("path", { d: "M252 145 l6 -12 l6 12 l-12 -7 h12 z", fill: "var(--c-otro)", stroke: "var(--ink)", "stroke-width": 1 });
  const etqs = [svg("text", { x: 104, y: 54, "text-anchor": "end", "font-size": 12 }, "superior"), svg("text", { x: 104, y: 124, "text-anchor": "end", "font-size": 12 }, "inferior")];
  const palo = svg("rect", { x: 4, y: 72, width: 80, height: 6, rx: 3, fill: "#7a5a3a" });
  g.append(cuerpo, ...tubos, placa, premio, ...etqs, palo);
  const actualizar = () => { cuerpo.style.fill = transparente ? "color-mix(in srgb, var(--bg) 70%, transparent)" : "var(--sc-madera)"; placa.style.display = transparente ? "" : "none"; premio.style.display = transparente ? "" : "none"; bOp.setAttribute("aria-pressed", String(!transparente)); bTr.setAttribute("aria-pressed", String(transparente)); };
  const bOp = el("button", { class: "boton", type: "button", onclick: () => { transparente = false; actualizar(); } }, "Caja opaca");
  const bTr = el("button", { class: "boton", type: "button", onclick: () => { transparente = true; actualizar(); } }, "Caja transparente");
  const demo = async () => {
    const pasos = [[4, 72], [70, 72], [4, 72], [4, 142], [120, 142], [4, 142]];
    for (const [x, y] of pasos) { palo.setAttribute("x", x); palo.setAttribute("y", y); await new Promise(res => setTimeout(res, movimientoReducido() ? 120 : 520)); }
    estadoDemo.textContent = "Demostración: el palo entra por la abertura superior (no consigue nada) y después por la inferior, que da acceso al premio.";
  };
  const estadoDemo = el("p", { class: "explicacion", "aria-live": "polite" });
  const preguntas = [
    { s: "Niño o niña de unos 4 años · caja opaca", c: 1 },
    { s: "Niño o niña de unos 4 años · caja transparente", c: 1 },
    { s: "Chimpancé · caja opaca", c: 1 },
    { s: "Chimpancé · caja transparente", c: 0 }
  ];
  const opciones = ["Solo la abertura útil (emula)", "También la abertura inútil (imita)"];
  const resp = new Array(preguntas.length).fill(null);
  const bloques = preguntas.map((p, i) => {
    const bs = opciones.map((o, j) => el("button", { class: "boton", type: "button", "aria-pressed": "false", onclick: () => { resp[i] = j; bs.forEach((b, k) => b.setAttribute("aria-pressed", String(k === j))); } }, o));
    const box = el("div", { class: "prediccion" }, el("p", {}, p.s), el("div", { class: "opts", role: "group", "aria-label": p.s }, bs)); return { box, bs };
  });
  const resultado = el("p", { class: "resultado", "aria-live": "polite" });
  const exp = el("p", { class: "explicacion", hidden: true }, "Los niños sobreimitaron con las dos cajas; los chimpancés solo cuando no veían que la placa bloqueaba la abertura superior. Cuando el mecanismo era visible, emularon (pp. 97-98; Horner y Whiten, 2005).");
  const comprobar = () => {
    let ok = 0; preguntas.forEach((p, i) => { const b = resp[i] === p.c; bloques[i].box.classList.toggle("correcta", b); bloques[i].box.classList.toggle("incorrecta", !b); if (b) ok++; });
    exp.hidden = false; const todo = ok === preguntas.length;
    resultado.textContent = todo ? "¡Exacto! Ese contraste es el núcleo del estudio." : `${ok} de ${preguntas.length}. Pista: ¿quién tiene más motivos sociales para copiar aunque vea el mecanismo?`;
    resultado.classList.toggle("ok", todo); if (todo) fin(true);
  };
  actualizar();
  cont.append(el("div", { class: "reto" }, el("p", { class: "consigna" }, r.consigna),
    el("div", { class: "toggle", role: "group", "aria-label": "Tipo de caja" }, bOp, bTr), g,
    el("button", { class: "boton", type: "button", onclick: demo }, "Ver demostración"), estadoDemo,
    bloques.map(b => b.box), exp,
    pie(resultado, [el("button", { class: "boton primario", type: "button", onclick: comprobar }, "Comprobar predicciones"), docente ? el("button", { class: "boton", type: "button", onclick: () => { preguntas.forEach((p, i) => { resp[i] = p.c; bloques[i].bs.forEach((b, k) => b.setAttribute("aria-pressed", String(k === p.c))); }); comprobar(); } }, "Ver solución") : null])));
}

/* ---------- Predicción de la dieta (Bruch y Hahn) ---------- */
function prediccionDieta(r, cont, fin) {
  const cols = ["--c-uso", "--c-fruto", "--c-semilla", "--c-otro", "--c-hoja"];
  const tot = r.escenarios.map(e => e.valores.reduce((a, b) => a + b, 0));
  const entradas = r.escenarios.slice(1).map((e, i) => {
    const id = "est-" + e.id;
    const inp = el("input", { type: "number", id, min: 0, max: 400, step: 1, value: "" });
    return { e, inp, fila: el("div", { class: "campo" }, el("label", { for: id, style: "flex: 1 1 12em" }, e.nombre), inp, el("span", { class: "mono" }, "partes")) };
  });
  const zona = el("div", {});
  const resultado = el("p", { class: "resultado", "aria-live": "polite" });
  const dibujar = (est) => {
    const W = 360, H = 230, x0 = 108, escala = (W - x0 - 14) / 220, alto = 30, gap = 18;
    const s = svg("svg", { viewBox: `0 0 ${W} ${H}`, class: "grafico", role: "img", "aria-label": "Gráfico de barras apiladas: partes vegetales comestibles por escenario. " + r.escenarios.map((e, i) => `${e.nombre}: unas ${tot[i]}`).join("; ") + "." });
    [0, 50, 100, 150, 200].forEach(v => { s.append(svg("line", { x1: x0 + v * escala, x2: x0 + v * escala, y1: 8, y2: H - 22, stroke: "var(--line)" }), svg("text", { x: x0 + v * escala, y: H - 6, "text-anchor": "middle", "font-size": 10, class: "tenue" }, v)); });
    r.escenarios.forEach((e, i) => {
      const y = 10 + i * (alto + gap); let x = x0;
      s.append(svg("text", { x: x0 - 6, y: y + alto / 2 + 4, "text-anchor": "end", "font-size": 10 }, e.corto || e.nombre));
      e.valores.forEach((v, k) => { s.append(svg("rect", { x, y, width: v * escala, height: alto, fill: `var(${cols[k]})` })); x += v * escala; });
      s.append(svg("text", { x: x + 4, y: y + alto / 2 + 4, "font-size": 10, class: "tenue" }, tot[i]));
      if (est && i > 0 && Number.isFinite(est[i - 1])) { const xe = x0 + Math.min(est[i - 1], 220) * escala; s.append(svg("line", { x1: xe, x2: xe, y1: y - 4, y2: y + alto + 4, stroke: "var(--ink)", "stroke-width": 2.5, "stroke-dasharray": "3 2" })); }
    });
    return s;
  };
  const comparar = () => {
    const est = entradas.map(x => x.inp.value === "" ? NaN : Number(x.inp.value));
    if (est.some(v => !Number.isFinite(v))) { resultado.textContent = "Escriba una estimación para cada escenario antes de comparar."; return; }
    zona.replaceChildren(dibujar(est), el("div", { class: "ley-graf" }, r.categorias.map((c, k) => el("span", {}, el("i", { style: `--c: var(${cols[k]})` }), c)), el("span", {}, "- - su estimación")));
    const errores = est.map((v, i) => Math.round(Math.abs(v - tot[i + 1]) / tot[i + 1] * 100));
    resultado.textContent = `Diferencias con el estudio: ${errores.map((e, i) => `${r.escenarios[i + 1].nombre.toLowerCase()}, ${e} %`).join("; ")}. Fíjese en qué categorías crecen con el fuego: órganos subterráneos y hojas se triplican; las semillas se duplican (p. 77).`;
    resultado.classList.add("ok"); fin(true);
  };
  cont.append(el("div", { class: "reto" }, el("p", { class: "consigna" }, r.consigna), entradas.map(x => x.fila), zona,
    pie(resultado, [el("button", { class: "boton primario", type: "button", onclick: comparar }, "Comparar con el estudio")])));
}

/* ---------- Martillos de Taï (Wittig) ---------- */
function prediccionTai(r, cont, fin, { docente }) {
  const W = 360, H = 220, x0 = 40, y0 = 190, ancho = 300, alto = 170;
  const X = s => x0 + (s - 1) / 19 * ancho, Y = p => y0 - p * alto;
  const g = svg("svg", { viewBox: `0 0 ${W} ${H}`, class: "grafico", role: "img", "aria-label": "Esquema: proporción de martillos de piedra a lo largo de 20 semanas. Norte y este bajan de alrededor del 65 % al 15 %." });
  [0, 0.2, 0.4, 0.6, 0.8, 1].forEach(p => { g.append(svg("line", { x1: x0, x2: x0 + ancho, y1: Y(p), y2: Y(p), stroke: "var(--line)" }), svg("text", { x: x0 - 6, y: Y(p) + 3, "text-anchor": "end", "font-size": 9, class: "tenue" }, `${Math.round(p * 100)} %`)); });
  [1, 5, 10, 15, 20].forEach(s => g.append(svg("text", { x: X(s), y: y0 + 14, "text-anchor": "middle", "font-size": 9, class: "tenue" }, s)));
  g.append(svg("text", { x: x0 + ancho / 2, y: H - 2, "text-anchor": "middle", "font-size": 9, class: "tenue" }, "semana de la temporada de cascado"));
  g.append(svg("polygon", { points: `${X(1)},${Y(0.7)} ${X(20)},${Y(0.2)} ${X(20)},${Y(0.1)} ${X(1)},${Y(0.6)}`, fill: "var(--l4)", opacity: 0.35 }));
  g.append(svg("text", { x: X(14), y: Y(0.42), "font-size": 10, fill: "var(--l4)" }, "norte y este"));
  const lineaSur = svg("line", { x1: X(1), x2: X(20), y1: Y(0.8), y2: Y(0.8), stroke: "var(--accent)", "stroke-width": 3, opacity: 0 });
  const textoSur = svg("text", { x: X(14), y: Y(0.86), "font-size": 10, fill: "var(--accent)", opacity: 0 }, "sur");
  g.append(lineaSur, textoSur);
  const ops = ["Baja como en el norte y el este", "Se mantiene alta toda la temporada", "Sube a medida que avanza la temporada"];
  let elegido = null;
  const bs = ops.map((o, j) => el("button", { class: "boton", type: "button", "aria-pressed": "false", onclick: () => { elegido = j; bs.forEach((b, k) => b.setAttribute("aria-pressed", String(k === j))); } }, o));
  const resultado = el("p", { class: "resultado", "aria-live": "polite" });
  const preg = el("div", { class: "prediccion" }, el("p", {}, "¿Qué hace la comunidad del sur?"), el("div", { class: "opts", role: "group" }, bs));
  const revelar = () => {
    if (elegido == null) { resultado.textContent = "Elija primero una predicción."; return; }
    lineaSur.setAttribute("opacity", 1); textoSur.setAttribute("opacity", 1);
    const bien = elegido === 1; preg.classList.toggle("correcta", bien); preg.classList.toggle("incorrecta", !bien);
    resultado.textContent = (bien ? "Bien visto. " : "No exactamente. ") + "El grupo del sur sigue usando martillos de piedra (alrededor del 80 %) toda la temporada, aunque no tiene más piedras que sus vecinos: una «cultura del martillo de piedra» (p. 129).";
    resultado.classList.add("ok"); fin(true);
  };
  cont.append(el("div", { class: "reto" }, el("p", { class: "consigna" }, r.consigna), g,
    el("p", { class: "explicacion" }, "Esquema simplificado a partir de las cifras del texto (60-70 % al inicio, 10-20 % hacia la semana 20); no reproduce los datos de la fig. 6."),
    preg, pie(resultado, [el("button", { class: "boton primario", type: "button", onclick: revelar }, "Revelar"), docente ? el("button", { class: "boton", type: "button", onclick: () => { bs[1].click(); revelar(); } }, "Ver solución") : null])));
}

/* ---------- Mapa (Haidle) ---------- */
function mapa(r, cont, fin, { abrirVisor }) {
  const resultado = el("p", { class: "resultado", "aria-live": "polite" });
  cont.append(el("div", { class: "reto" }, el("p", { class: "consigna" }, r.consigna),
    el("p", { class: "consigna" }, "El mapa se abre sobre la escena. Para superar el reto, visite las seis etapas."),
    el("div", { class: "nav-ficha" }, el("button", { class: "boton primario", type: "button", onclick: () => abrirVisor(visitadas => { resultado.textContent = `Etapas visitadas: ${visitadas} de 6.`; if (visitadas >= 6) { resultado.textContent += " Reto superado."; resultado.classList.add("ok"); fin(true); } }) }, "Abrir el mapa")),
    resultado));
}

export function pintarReto(r, cont, fin, opciones = {}) {
  switch (r.tipo) {
    case "clasificar": return clasificar(r, cont, fin, opciones);
    case "ordenar": return ordenar(r, cont, fin, opciones);
    case "test": return test(r.preguntas, cont, fin, { ...opciones, prefijo: "r" });
    case "numerico": return numerico(r, cont, fin, opciones);
    case "caja": return caja(r, cont, fin, opciones);
    case "prediccion-dieta": return prediccionDieta(r, cont, fin, opciones);
    case "prediccion-tai": return prediccionTai(r, cont, fin, opciones);
    case "mapa": return mapa(r, cont, fin, opciones);
    default: cont.append(el("p", {}, "Tipo de reto no disponible."));
  }
}
