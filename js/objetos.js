/*
 * OBJETOS · piezas procedimentales para las vitrinas (sin modelos externos).
 * Cada función devuelve un THREE.Group de unos 0,6 unidades de alto, centrado en el origen.
 * Las piezas son evocaciones, no réplicas de objetos concretos.
 */
import * as THREE from "three";

const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.8, metalness: 0.0, ...extra });

/* Ruido determinista para deformar «piedras» */
function rnd(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
function piedra(geo, amp, seed, flat = true) {
  const r = rnd(seed); const p = geo.attributes.position; const v = new THREE.Vector3(); const mapa = new Map();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const k = `${v.x.toFixed(3)},${v.y.toFixed(3)},${v.z.toFixed(3)}`;
    if (!mapa.has(k)) mapa.set(k, 1 + (r() - 0.5) * amp);
    v.multiplyScalar(mapa.get(k)); p.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

/* Talla por levantamiento de lascas: cada «negativo» es un casquete cóncavo que rebaja
   los vértices situados más allá de un plano aleatorio. Da aristas y facetas creíbles. */
function tallar(geo, { n = 24, seed = 1, prof = 0.35, soloLado = null, mitades = false, fuerza = 1, colores = null } = {}) {
  const r = rnd(seed); const p = geo.attributes.position; const v = new THREE.Vector3();
  geo.computeBoundingBox(); const tam = geo.boundingBox.getSize(new THREE.Vector3());
  const tono = new Float32Array(p.count).fill(0.5);
  for (let k = 0; k < n; k++) {
    const nrm = new THREE.Vector3(r() - 0.5, (r() - 0.5) * 0.9, r() - 0.5);
    if (mitades) nrm.z = (k % 2 ? 1 : -1) * (0.6 + r() * 0.6);
    if (soloLado != null && Math.sign(nrm.x) !== soloLado) nrm.x *= -1;
    nrm.normalize();
    let max = -Infinity; for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i); max = Math.max(max, v.dot(nrm)); }
    const corte = max - (0.05 + r() * prof) * Math.min(tam.x, tam.y, tam.z * 3);
    const radio = 0.35 + r() * 0.5;
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i); const d = v.dot(nrm) - corte;
      if (d > 0) { const cuenco = d * (0.9 + 0.1 * radio) * fuerza; v.addScaledVector(nrm, -cuenco); p.setXYZ(i, v.x, v.y, v.z); tono[i] = (k * 0.618) % 1; }
    }
  }
  if (colores) {
    const c1 = new THREE.Color(colores[0]), c2 = new THREE.Color(colores[1]), c = new THREE.Color(), cols = [];
    for (let i = 0; i < p.count; i++) { c.copy(c1).lerp(c2, tono[i]); cols.push(c.r, c.g, c.b); }
    geo.setAttribute("color", new THREE.Float32BufferAttribute(cols, 3));
  }
  geo.computeVertexNormals(); return geo;
}
/* Color por vértice: córtex (exterior original) frente a superficie tallada */
function colorear(geo, base, alt, seed = 3) {
  const r = rnd(seed); const c1 = new THREE.Color(base), c2 = new THREE.Color(alt); const cols = []; const tmp = new THREE.Color();
  for (let i = 0; i < geo.attributes.position.count; i++) { tmp.copy(c1).lerp(c2, r() * 0.5); cols.push(tmp.r, tmp.g, tmp.b); }
  geo.setAttribute("color", new THREE.Float32BufferAttribute(cols, 3)); return geo;
}
const sinIndice = g => g.index ? g.toNonIndexed() : g;
/* Negativos de lasca en una pieza bifacial: cuencos locales que rebajan una cara hacia el plano medio (z = 0),
   empezando junto al filo, como en la talla por percusión. */
function lascar(geo, { n = 60, seed = 1, radio = 0.08, prof = 0.02, colores }) {
  const r = rnd(seed); const p = geo.attributes.position; const v = new THREE.Vector3();
  const tono = new Float32Array(p.count).fill(0.5); const borde = [];
  for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i); if (Math.abs(v.z) < 0.02) borde.push(i); }
  for (let k = 0; k < n; k++) {
    const lado = k % 2 ? 1 : -1; const c = new THREE.Vector3().fromBufferAttribute(p, borde[Math.floor(r() * borde.length)]);
    const centro = new THREE.Vector2(c.x * 0.75, c.y * 0.92); const rad = radio * (0.6 + r() * 0.8), h = prof * (0.6 + r() * 0.8);
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i); if (Math.sign(v.z) !== lado) continue;
      const d = Math.hypot(v.x - centro.x, v.y - centro.y); if (d >= rad) continue;
      const nz = v.z - lado * h * (1 - (d / rad) ** 2); if (Math.sign(nz) !== lado) continue;
      p.setZ(i, nz); tono[i] = (k * 0.618) % 1;
    }
  }
  const c1 = new THREE.Color(colores[0]), c2 = new THREE.Color(colores[1]), c = new THREE.Color(), cols = [];
  for (let i = 0; i < p.count; i++) { c.copy(c1).lerp(c2, tono[i]); cols.push(c.r, c.g, c.b); }
  geo.setAttribute("color", new THREE.Float32BufferAttribute(cols, 3)); geo.computeVertexNormals(); return geo;
}

function red() {
  const g = new THREE.Group(); const r = rnd(7); const pts = [];
  const nodos = ["Herramientas", "Materias primas", "Saber hacer", "Aprendizaje", "Grupo", "Recursos", "Competidores", "Movilidad", "Planificación", "Entorno"];
  nodos.forEach((_, i) => {
    const a = i / nodos.length * Math.PI * 2, h = (r() - 0.5) * 0.5;
    const p = new THREE.Vector3(Math.cos(a) * 0.32, h, Math.sin(a) * 0.32); pts.push(p);
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(0.045, 1), mat(i % 3 ? "#c9894a" : "#9c3d1c", { roughness: 0.5 }));
    m.position.copy(p); g.add(m);
  });
  const centro = new THREE.Mesh(new THREE.IcosahedronGeometry(0.08, 2), mat("#e8d3b0", { emissive: "#6b3a12", emissiveIntensity: 0.25 }));
  g.add(centro);
  const lineas = [];
  pts.forEach((p, i) => { lineas.push(new THREE.Vector3(), p); lineas.push(p, pts[(i + 3) % pts.length]); });
  g.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(lineas), new THREE.LineBasicMaterial({ color: "#8a6a4a", transparent: true, opacity: 0.7 })));
  return g;
}

function espiral() {
  const g = new THREE.Group();
  const curva = (fase) => new THREE.CatmullRomCurve3(Array.from({ length: 40 }, (_, i) => {
    const t = i / 39, a = t * Math.PI * 4 + fase; return new THREE.Vector3(Math.cos(a) * 0.18, t * 0.62 - 0.31, Math.sin(a) * 0.18);
  }));
  g.add(new THREE.Mesh(new THREE.TubeGeometry(curva(0), 120, 0.03, 10), mat("#3f7a58", { roughness: 0.5 })));
  g.add(new THREE.Mesh(new THREE.TubeGeometry(curva(Math.PI), 120, 0.03, 10), mat("#b8651e", { roughness: 0.5 })));
  return g;
}

function pilares() {
  // Testigo de sondeo: los estratos alternan fases húmedas (oscuras) y áridas (claras)
  const g = new THREE.Group();
  const c = document.createElement("canvas"); c.width = 64; c.height = 512; const x = c.getContext("2d"); const r = rnd(71);
  let y = 0; while (y < 512) { const h = 8 + r() * 34; const humedo = r() < 0.5; const l = humedo ? 70 + r() * 40 : 165 + r() * 50;
    x.fillStyle = `rgb(${l + 20},${l + 4},${l - 18})`; x.fillRect(0, y, 64, h + 1); y += h; }
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const nucleoSed = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.66, 28), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95 }));
  nucleoSed.rotation.z = Math.PI / 2; nucleoSed.position.y = -0.02; g.add(nucleoSed);
  const media = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.7, 28, 1, true, 0, Math.PI), mat("#cfd6d8", { roughness: 0.3, side: THREE.DoubleSide, transparent: true, opacity: 0.55 }));
  media.rotation.z = Math.PI / 2; media.rotation.x = Math.PI; media.position.y = -0.02; g.add(media);
  for (const xx of [-0.25, 0.25]) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.2), mat("#5b4332")); s.position.set(xx, -0.15, 0); g.add(s); }
  return g;
}
function chopper() {
  const g = new THREE.Group();
  // Canto rodado con córtex pardo y un filo tallado en un extremo (talla unifacial)
  const geo = piedra(new THREE.IcosahedronGeometry(0.22, 3), 0.08, 11);
  geo.scale(1.2, 0.85, 0.7);
  colorear(geo, "#6b5a45", "#7d6a52", 13);
  const cortex = geo.attributes.color.array.slice();
  tallar(geo, { n: 9, seed: 12, prof: 0.28, soloLado: 1, colores: ["#9a8d78", "#b9ad98"] });
  // Restituye el córtex donde no hubo lascado (tono neutro = 0,5 → se detecta por posición x)
  const pp = geo.attributes.position, cc = geo.attributes.color;
  for (let i = 0; i < pp.count; i++) if (pp.getX(i) < 0.02) cc.setXYZ(i, cortex[i * 3], cortex[i * 3 + 1], cortex[i * 3 + 2]);
  const m = new THREE.Mesh(geo, mat("#ffffff", { flatShading: true, roughness: 0.9, vertexColors: true }));
  m.rotation.z = 0.35; g.add(m);
  for (let i = 0; i < 3; i++) {
    const l = tallar(piedra(new THREE.IcosahedronGeometry(0.06, 1), 0.2, 20 + i), { n: 4, seed: 30 + i, prof: 0.2 }); l.scale(1.4, 0.35, 1.1);
    const lm = new THREE.Mesh(l, mat("#a3957f", { flatShading: true, roughness: 0.75 }));
    lm.position.set(0.3 + i * 0.07, -0.18, -0.1 + i * 0.1); lm.rotation.set(i, i * 0.7, 0.3); g.add(lm);
  }
  return g;
}

function bifaz() {
  // Silueta amigdaloide (base redondeada, punta aguzada) y sección lenticular,
  // tallada por las dos caras: cada negativo de lasca recibe un matiz propio.
  const g = new THREE.Group();
  const geo = new THREE.IcosahedronGeometry(1, 4); const p = geo.attributes.position; const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i); const t = (v.y + 1) / 2;
    const f = Math.max(0.1, t < 0.4 ? 1 - 0.15 * Math.pow((0.4 - t) / 0.4, 2) : 1 - 0.9 * Math.pow((t - 0.4) / 0.6, 1.3));
    p.setXYZ(i, v.x * 0.18 * f, v.y * 0.3, v.z * 0.1 * Math.max(f, 0.25));
  }
  lascar(geo, { n: 70, seed: 31, radio: 0.09, prof: 0.022, colores: ["#4b4237", "#857867"] });
  piedra(geo, 0.05, 37);
  g.add(new THREE.Mesh(geo, mat("#ffffff", { flatShading: true, roughness: 0.62, metalness: 0.0, vertexColors: true })));
  return g;
}

function hoguera(conLuz = true) {
  const g = new THREE.Group();
  for (let i = 0; i < 9; i++) {
    const a = i / 9 * Math.PI * 2;
    const s = new THREE.Mesh(piedra(new THREE.IcosahedronGeometry(0.06, 0), 0.4, 40 + i), mat("#6d6458", { flatShading: true }));
    s.position.set(Math.cos(a) * 0.22, -0.27, Math.sin(a) * 0.22); g.add(s);
  }
  for (let i = 0; i < 5; i++) {
    const tronco = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.32, 8), mat("#3b2a1e"));
    tronco.position.y = -0.25; tronco.rotation.set(Math.PI / 2.6, i / 5 * Math.PI * 2, 0); g.add(tronco);
  }
  const llamas = new THREE.Group(); llamas.name = "llamas";
  [["#f2b33d", 0.11, 0.34], ["#e8692b", 0.08, 0.26], ["#ffe08a", 0.05, 0.2]].forEach(([c, r, h], i) => {
    const f = new THREE.Mesh(new THREE.ConeGeometry(r, h, 14, 1, true), new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.85 - i * 0.1, side: THREE.DoubleSide }));
    f.position.y = -0.22 + h / 2; llamas.add(f);
  });
  g.add(llamas);
  const brasas = new THREE.Mesh(new THREE.CircleGeometry(0.16, 24), new THREE.MeshBasicMaterial({ color: "#ff7a2a", transparent: true, opacity: 0.75 }));
  brasas.rotation.x = -Math.PI / 2; brasas.position.y = -0.285; g.add(brasas);
  const ceniza = new THREE.Mesh(new THREE.CircleGeometry(0.26, 28), mat("#4a443d", { roughness: 1 })); ceniza.rotation.x = -Math.PI / 2; ceniza.position.y = -0.3; g.add(ceniza);
  const N = 40, pos = new Float32Array(N * 3), vida = Array.from({ length: N }, (_, i) => i / N);
  const chispas = new THREE.Points(new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(pos, 3)), new THREE.PointsMaterial({ color: "#ffc061", size: 0.018, transparent: true, opacity: 0.9, depthWrite: false }));
  chispas.userData.soloAbierta = true; g.add(chispas);
  if (conLuz) { const luz = new THREE.PointLight("#ff9a4a", 1.4, 3.2, 2); luz.position.y = 0; luz.name = "luz"; g.add(luz); }
  g.userData.animar = (t) => {
    llamas.children.forEach((f, i) => { const s = 1 + Math.sin(t * 9 + i * 2) * 0.12 + Math.sin(t * 23 + i) * 0.05; f.scale.set(1, s, 1); });
    for (let i = 0; i < N; i++) { const v = (vida[i] + t * 0.35) % 1; const a = i * 2.4; pos[i * 3] = Math.cos(a) * 0.05 * (1 + v) + Math.sin(t * 3 + i) * 0.02 * v; pos[i * 3 + 1] = -0.2 + v * 0.55; pos[i * 3 + 2] = Math.sin(a) * 0.05 * (1 + v); }
    chispas.geometry.attributes.position.needsUpdate = true; chispas.material.opacity = 0.9;
    const l = g.getObjectByName("luz"); if (l) l.intensity = 1.2 + Math.sin(t * 13) * 0.25 + Math.sin(t * 31) * 0.1;
  };
  return g;
}

function baobab() {
  const g = new THREE.Group();
  const geo = new THREE.SphereGeometry(0.13, 28, 20); geo.scale(1, 1.9, 1);
  const fruto = new THREE.Mesh(geo, mat("#8c8a5a", { roughness: 1 }));
  fruto.rotation.z = 0.5; g.add(fruto);
  const tallo = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.18, 8), mat("#4b3a28"));
  tallo.position.set(-0.17, 0.27, 0); tallo.rotation.z = 0.5; g.add(tallo);
  const abierto = new THREE.Mesh(new THREE.SphereGeometry(0.1, 20, 14, 0, Math.PI), mat("#efe6cf", { side: THREE.DoubleSide }));
  abierto.position.set(0.22, -0.2, 0.05); abierto.rotation.y = -0.6; g.add(abierto);
  return g;
}

function cadena() {
  const g = new THREE.Group();
  const percutor = new THREE.Mesh(piedra(new THREE.IcosahedronGeometry(0.09, 3), 0.1, 51).scale(1.15, 0.9, 0.9), mat("#7d756a", { roughness: 0.95 }));
  percutor.position.set(-0.28, 0.05, 0); g.add(percutor);
  const nucleo = new THREE.Mesh(tallar(new THREE.IcosahedronGeometry(0.1, 3), { n: 12, seed: 52, prof: 0.25 }), mat("#8f8576", { flatShading: true, roughness: 0.8 }));
  nucleo.position.set(0, 0.05, 0); g.add(nucleo);
  const l = tallar(new THREE.IcosahedronGeometry(0.08, 2), { n: 5, seed: 53, prof: 0.2 }); l.scale(1.4, 0.35, 1);
  const lasca = new THREE.Mesh(l, mat("#b7ab98", { flatShading: true })); lasca.position.set(0.28, 0.05, 0); g.add(lasca);
  const flecha = (x) => { const c = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.07, 10), mat("#9c3d1c")); c.rotation.z = -Math.PI / 2; c.position.set(x, 0.05, 0); return c; };
  g.add(flecha(-0.14), flecha(0.14));
  return g;
}

function caja() {
  const g = new THREE.Group();
  const vidrio = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.42, 0.3), new THREE.MeshStandardMaterial({ color: "#d9e6ea", transparent: true, opacity: 0.25, roughness: 0.1 }));
  g.add(vidrio);
  const aristas = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(0.42, 0.42, 0.3)), new THREE.LineBasicMaterial({ color: "#5b4332" }));
  g.add(aristas);
  const tubo = (y) => { const t = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.18, 14, 1, true), mat("#5b4332", { side: THREE.DoubleSide })); t.rotation.z = Math.PI / 2; t.position.set(-0.13, y, 0); return t; };
  g.add(tubo(0.1), tubo(-0.1));
  const placa = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.09, 0.09), mat("#9b2f45")); placa.position.set(-0.03, 0.1, 0); g.add(placa);
  const premio = new THREE.Mesh(new THREE.OctahedronGeometry(0.05, 0), mat("#e8b23a", { emissive: "#6b4a10", emissiveIntensity: 0.3 })); premio.position.set(0.1, -0.12, 0); g.add(premio);
  const palo = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.36, 8), mat("#7a5a3a")); palo.rotation.z = Math.PI / 2; palo.position.set(-0.4, -0.1, 0); g.add(palo);
  return g;
}

function ventana() {
  const g = new THREE.Group(); const m = mat("#e6dccb", { roughness: 0.6 });
  const marco = (w, h, x, y) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.04), m); b.position.set(x, y, 0); return b; };
  g.add(marco(0.5, 0.04, 0, 0.3), marco(0.5, 0.04, 0, -0.3), marco(0.04, 0.6, -0.23, 0), marco(0.04, 0.6, 0.23, 0));
  const hoja = new THREE.Group();
  const cristal = new THREE.Mesh(new THREE.PlaneGeometry(0.21, 0.54), new THREE.MeshStandardMaterial({ color: "#bcd3dc", transparent: true, opacity: 0.45, side: THREE.DoubleSide }));
  cristal.position.x = 0.105; hoja.add(cristal);
  const larguero = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.56, 0.03), m); larguero.position.x = 0.21; hoja.add(larguero);
  hoja.position.x = -0.21; hoja.rotation.y = -0.9; g.add(hoja);
  return g;
}

function globo(tierra) {
  const g = new THREE.Group();
  g.add(new THREE.Mesh(new THREE.SphereGeometry(0.26, 40, 28), mat("#2c5e8a", { roughness: 0.6 })));
  const laton = mat("#b28a4c", { roughness: 0.35, metalness: 0.75 });
  const meridiano = new THREE.Mesh(new THREE.TorusGeometry(0.295, 0.008, 8, 64), laton); g.add(meridiano);
  if (tierra && tierra.puntos) {
    const pos = [];
    for (let i = 0; i < tierra.puntos.length; i += 6) {
      const lon = tierra.puntos[i], lat = tierra.puntos[i + 1];
      const phi = (90 - lat) * Math.PI / 180, th = (lon + 180) * Math.PI / 180;
      pos.push(-0.264 * Math.sin(phi) * Math.cos(th), 0.264 * Math.cos(phi), 0.264 * Math.sin(phi) * Math.sin(th));
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.add(new THREE.Points(geo, new THREE.PointsMaterial({ color: "#e8d3b0", size: 0.012 })));
  }
  return g;
}

function nuez() {
  const g = new THREE.Group();
  const raiz = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.12, 18), mat("#5b4332", { roughness: 1 }));
  raiz.position.y = -0.24; g.add(raiz);
  const hueco = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.012, 8, 16), mat("#3b2a1e")); hueco.rotation.x = Math.PI / 2; hueco.position.set(0.03, -0.175, 0); g.add(hueco);
  const n = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 10), mat("#7a5e3a")); n.position.set(0.03, -0.15, 0); g.add(n);
  const martillo = new THREE.Mesh(piedra(new THREE.IcosahedronGeometry(0.1, 3), 0.12, 61).scale(1.2, 0.65, 0.8), mat("#8a8174", { roughness: 0.95 }));
  martillo.position.set(0.02, 0.06, 0); martillo.rotation.z = 0.2; g.add(martillo);
  for (let i = 0; i < 4; i++) { const c = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), mat("#8c6a3e")); c.position.set(-0.16 + i * 0.04, -0.17, 0.14 - i * 0.02); g.add(c); }
  return g;
}

function helice() {
  const g = new THREE.Group();
  const a = mat("#2c5e8a", { roughness: 0.4 }), b = mat("#b8651e", { roughness: 0.4 }), barra = mat("#d8ccb8");
  const geoB = new THREE.SphereGeometry(0.028, 12, 10);
  for (let i = 0; i < 14; i++) {
    const t = i / 13, ang = t * Math.PI * 2.4, y = t * 0.6 - 0.3;
    const p1 = new THREE.Vector3(Math.cos(ang) * 0.14, y, Math.sin(ang) * 0.14), p2 = p1.clone().multiply(new THREE.Vector3(-1, 1, -1));
    const s1 = new THREE.Mesh(geoB, a); s1.position.copy(p1); g.add(s1);
    const s2 = new THREE.Mesh(geoB, b); s2.position.copy(p2); g.add(s2);
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.28, 6), barra);
    c.position.set(0, y, 0); c.rotation.z = Math.PI / 2; c.rotation.y = -ang; g.add(c);
  }
  return g;
}

function estratos() {
  // Perfil estratigráfico (sala 14): capas de sedimento, una ceniza volcánica clara fechable
  // y un fósil esquemático hallado en superficie, cuya relación con las capas hay que demostrar
  const g = new THREE.Group();
  const c = document.createElement("canvas"); c.width = 256; c.height = 256; const x = c.getContext("2d"); const r = rnd(1414);
  let y = 0; const ceniza = [92, 104];
  while (y < 256) {
    const h = 10 + r() * 22; const l = 105 + r() * 70;
    x.fillStyle = `rgb(${l + 26},${l + 8},${l - 22})`; x.fillRect(0, y, 256, h + 1);
    x.fillStyle = "rgba(40,25,15,0.18)"; for (let i = 0; i < 40; i++) x.fillRect(r() * 256, y + r() * h, 2 + r() * 3, 1.5);
    y += h;
  }
  x.fillStyle = "#e9e4da"; x.fillRect(0, ceniza[0], 256, ceniza[1] - ceniza[0]);
  x.fillStyle = "rgba(120,110,100,0.35)"; for (let i = 0; i < 70; i++) x.fillRect(r() * 256, ceniza[0] + r() * 12, 1.5, 1.5);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const lado = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.95 });
  const techo = mat("#9c7f5c", { roughness: 1 });
  const bloque = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.46, 0.3), [lado, lado, techo, techo, lado, lado]);
  bloque.position.y = -0.08; g.add(bloque);
  // La ceniza sobresale un poco: es la capa que se fecha
  const banda = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.022, 0.32), mat("#efe9df", { roughness: 0.9 }));
  banda.position.y = -0.08 + 0.23 - (ceniza[0] + 6) / 256 * 0.46; g.add(banda);
  // Fósil en superficie: bóveda y cara esquemáticas
  const hueso = mat("#c9b48e", { roughness: 0.7 });
  const boveda = new THREE.Mesh(new THREE.SphereGeometry(0.085, 24, 16), hueso);
  boveda.scale.set(1.25, 0.8, 1); boveda.position.set(0.12, 0.2, 0.02); g.add(boveda);
  const cara = new THREE.Mesh(new THREE.SphereGeometry(0.05, 18, 12), hueso);
  cara.scale.set(1, 0.9, 1.1); cara.position.set(0.21, 0.18, 0.03); g.add(cara);
  // Etiqueta de latón con una flecha: «¿qué se fechó?»
  const etiqueta = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.05, 0.01), mat("#b28a4c", { roughness: 0.35, metalness: 0.7 }));
  etiqueta.position.set(-0.28, banda.position.y, 0.17); g.add(etiqueta);
  return g;
}

export function crearObjeto(tipo, tierra) {
  switch (tipo) {
    case "red": return red();
    case "espiral": return espiral();
    case "pilares": return pilares();
    case "chopper": return chopper();
    case "bifaz": return bifaz();
    case "hoguera": return hoguera(true);
    case "baobab": return baobab();
    case "cadena": return cadena();
    case "caja": return caja();
    case "ventana": return ventana();
    case "globo": return globo(tierra);
    case "nuez": return nuez();
    case "helice": return helice();
    case "estratos": return estratos();
    default: return new THREE.Group();
  }
}

/* ---------- Emblemas del gabinete de etología (piezas pequeñas, ~0,3 de alto) ---------- */
function hoja(color = "#5f8a3e", largo = 0.26) {
  const s = new THREE.Shape(); s.moveTo(0, -largo / 2); s.quadraticCurveTo(largo * 0.42, 0, 0, largo / 2); s.quadraticCurveTo(-largo * 0.42, 0, 0, -largo / 2);
  const m = new THREE.Mesh(new THREE.ShapeGeometry(s, 12), mat(color, { side: THREE.DoubleSide, roughness: 0.7 }));
  const nervio = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, largo, 5), mat("#3d5a26")); m.add(nervio);
  return m;
}
const EMBLEMAS = {
  "comunicacion-simios": () => { // hoja mordisqueada (leaf-clipping) y ondas de sonido
    const g = new THREE.Group(); const h = hoja("#6d8f45"); h.scale.set(1, 1, 1); h.rotation.z = 0.3; g.add(h);
    for (let i = 1; i <= 3; i++) { const o = new THREE.Mesh(new THREE.TorusGeometry(0.06 + i * 0.045, 0.006, 6, 24, Math.PI / 2), mat("#2c5e8a")); o.position.set(0.05, 0.02, 0); o.rotation.z = -Math.PI / 4; g.add(o); }
    return g;
  },
  "loros-imitacion": () => { // loro gris estilizado con cola roja y bocadillo
    const g = new THREE.Group();
    const cuerpo = new THREE.Mesh(new THREE.SphereGeometry(0.075, 20, 14).scale(1, 1.35, 0.9), mat("#6f767c", { roughness: 0.8 })); g.add(cuerpo);
    const cabeza = new THREE.Mesh(new THREE.SphereGeometry(0.05, 18, 12), mat("#858c92")); cabeza.position.set(0, 0.12, 0.01); g.add(cabeza);
    const pico = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.045, 10), mat("#2a2622")); pico.rotation.x = Math.PI / 2; pico.position.set(0, 0.11, 0.06); g.add(pico);
    const cola = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.08, 0.02), mat("#b2302a")); cola.position.set(0, -0.12, -0.03); cola.rotation.x = 0.4; g.add(cola);
    const globo = new THREE.Mesh(new THREE.SphereGeometry(0.04, 14, 10).scale(1.4, 1, 0.4), mat("#efe6d6")); globo.position.set(0.12, 0.17, 0); g.add(globo);
    return g;
  },
  "piedras-bossou": () => { // yunque, martillo y nuez
    const g = new THREE.Group();
    const yunque = new THREE.Mesh(piedra(new THREE.IcosahedronGeometry(0.12, 2), 0.1, 81).scale(1.3, 0.45, 1), mat("#8a8072", { roughness: 0.95 })); yunque.position.y = -0.08; g.add(yunque);
    const martillo = new THREE.Mesh(piedra(new THREE.IcosahedronGeometry(0.06, 2), 0.12, 82).scale(1.3, 0.8, 0.9), mat("#5d5850", { roughness: 0.9 })); martillo.position.set(0.05, 0.07, 0); martillo.rotation.z = 0.4; g.add(martillo);
    const nuez = new THREE.Mesh(new THREE.SphereGeometry(0.025, 12, 10), mat("#7a5a34")); nuez.position.set(-0.05, -0.02, 0.02); g.add(nuez);
    return g;
  },
  "cacatuas-ganchos": () => { // herramienta con gancho
    const g = new THREE.Group(); const m = mat("#9c7a52", { roughness: 0.8 });
    const curva = new THREE.CatmullRomCurve3([new THREE.Vector3(0, -0.15, 0), new THREE.Vector3(0, 0.1, 0), new THREE.Vector3(0.02, 0.15, 0), new THREE.Vector3(0.06, 0.14, 0), new THREE.Vector3(0.07, 0.1, 0)]);
    g.add(new THREE.Mesh(new THREE.TubeGeometry(curva, 40, 0.009, 8), m));
    const cresta = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 10), mat("#f4efe6")); cresta.position.set(-0.1, -0.05, 0); cresta.rotation.z = 0.5; g.add(cresta);
    const ave = new THREE.Mesh(new THREE.SphereGeometry(0.055, 16, 12).scale(1, 1.3, 0.9), mat("#f4efe6", { roughness: 0.7 })); ave.position.set(-0.1, -0.13, 0); g.add(ave);
    return g;
  },
  "macacos-peces": () => { // trucha
    const g = new THREE.Group();
    const cuerpo = new THREE.Mesh(new THREE.SphereGeometry(0.06, 20, 14).scale(2.6, 0.9, 0.55), mat("#9a8a6a", { roughness: 0.4, metalness: 0.2 })); g.add(cuerpo);
    const cola = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.08, 3), mat("#7d6e52")); cola.rotation.z = Math.PI / 2; cola.position.x = -0.19; g.add(cola);
    for (let i = 0; i < 7; i++) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.008, 6, 5), mat("#3a2e24")); p.position.set(-0.08 + i * 0.03, 0.02 + (i % 2) * 0.012, 0.03); g.add(p); }
    const ojo = new THREE.Mesh(new THREE.SphereGeometry(0.009, 8, 6), mat("#111")); ojo.position.set(0.12, 0.012, 0.028); g.add(ojo);
    return g;
  },
  "automedicacion": () => { // brote con hojas enrolladas
    const g = new THREE.Group();
    const tallo = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.008, 0.3, 6), mat("#4c6a2c")); g.add(tallo);
    [[0.08, 0.6], [-0.02, -0.7], [-0.09, 0.5]].forEach(([y, rz]) => { const h = hoja("#5f8a3e", 0.14); h.position.set(Math.sign(rz) * 0.05, y, 0); h.rotation.z = rz; g.add(h); });
    const rollo = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.08, 10), mat("#4f7a34")); rollo.rotation.z = Math.PI / 2; rollo.position.set(0.09, -0.12, 0.03); g.add(rollo);
    return g;
  },
  "etanol-chimpances": () => { // racimo de frutos maduros
    const g = new THREE.Group(); const r = rnd(91);
    for (let i = 0; i < 9; i++) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.04, 14, 10), mat(i % 3 ? "#d49a2a" : "#b4632a", { roughness: 0.45 })); f.position.set((r() - 0.5) * 0.14, (r() - 0.5) * 0.14 - 0.03, (r() - 0.5) * 0.08); g.add(f); }
    const rabo = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.12, 5), mat("#4b3a28")); rabo.position.y = 0.1; g.add(rabo);
    return g;
  },
  "ecologia-etanol": () => { // fruto abierto y burbujas de fermentación
    const g = new THREE.Group();
    const mitad = new THREE.Mesh(new THREE.SphereGeometry(0.09, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2), mat("#c9473f", { side: THREE.DoubleSide })); mitad.rotation.x = Math.PI; mitad.position.y = -0.04; g.add(mitad);
    const pulpa = new THREE.Mesh(new THREE.CircleGeometry(0.088, 24), mat("#f0d48a")); pulpa.rotation.x = -Math.PI / 2; pulpa.position.y = -0.039; g.add(pulpa);
    for (let i = 0; i < 6; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.01 + i * 0.003, 10, 8), mat("#e8eef0", { transparent: true, opacity: 0.7, roughness: 0.1 })); b.position.set(Math.sin(i * 2) * 0.03, 0.0 + i * 0.035, Math.cos(i * 2) * 0.02); g.add(b); }
    return g;
  },
  "simios-girar": () => { // cuerda con espiral de giro
    const g = new THREE.Group();
    const cuerda = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.34, 8), mat("#a88a5a")); g.add(cuerda);
    const curva = new THREE.CatmullRomCurve3(Array.from({ length: 30 }, (_, i) => { const a = i / 29 * Math.PI * 3.5; return new THREE.Vector3(Math.cos(a) * (0.05 + i * 0.002), -0.1 + i * 0.006, Math.sin(a) * (0.05 + i * 0.002)); }));
    g.add(new THREE.Mesh(new THREE.TubeGeometry(curva, 80, 0.006, 6), mat("#9b2f45")));
    const punta = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.04, 8), mat("#9b2f45")); punta.position.set(0.1, 0.075, 0); punta.rotation.z = -1.2; g.add(punta);
    return g;
  },
  "volta": () => { // rama quebrada
    const g = new THREE.Group(); const m = mat("#5b4332", { roughness: 0.95 });
    const a = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.024, 0.2, 8), m); a.position.set(-0.03, 0.04, 0); a.rotation.z = 0.25; g.add(a);
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.018, 0.14, 8), m); b.position.set(0.06, -0.1, 0); b.rotation.z = 1.25; g.add(b);
    const h = hoja("#8a7a3a", 0.1); h.position.set(-0.08, 0.13, 0); h.rotation.z = 0.8; g.add(h);
    return g;
  },
  "bonobos-cooperacion": () => { // dos anillos entrelazados: grupos que cooperan
    const g = new THREE.Group();
    const a = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.014, 10, 32), mat("#3f7a58", { roughness: 0.4 })); a.position.x = -0.045; g.add(a);
    const b = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.014, 10, 32), mat("#b8651e", { roughness: 0.4 })); b.position.x = 0.045; b.rotation.y = Math.PI / 2; g.add(b);
    return g;
  },
  "adolescencia-chimpances": () => { // balanza: recompensa segura frente a arriesgada
    const g = new THREE.Group(); const laton = mat("#b28a4c", { roughness: 0.35, metalness: 0.75 });
    const pie = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.22, 6), laton); g.add(pie);
    const brazo = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.008, 0.008), laton); brazo.position.y = 0.11; brazo.rotation.z = -0.15; g.add(brazo);
    [[-0.12, 0.09], [0.12, 0.06]].forEach(([x, y], i) => { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.03, 0.012, 16), laton); p.position.set(x, y - 0.04, 0); g.add(p);
      const fr = new THREE.Mesh(new THREE.SphereGeometry(i ? 0.03 : 0.018, 12, 10), mat(i ? "#c9473f" : "#e8b23a")); fr.position.set(x, y - 0.015, 0); g.add(fr); });
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.015, 16), laton); base.position.y = -0.11; g.add(base);
    return g;
  }
};
/* Emblemas del archivo de la memoria oral */
const agua = () => new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.05, 0.22), mat("#3d7fa8", { transparent: true, opacity: 0.6, roughness: 0.15 }));
function volcan(color = "#5a4a3c", lava = true) {
  const g = new THREE.Group();
  const cono = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.14, 0.16, 20, 1, true), mat(color, { roughness: 0.95, side: THREE.DoubleSide })); g.add(cono);
  if (lava) { const crater = new THREE.Mesh(new THREE.CircleGeometry(0.034, 16), new THREE.MeshBasicMaterial({ color: "#ff6a1f" })); crater.rotation.x = -Math.PI / 2; crater.position.y = 0.079; g.add(crater);
    const colada = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.15, 0.006), new THREE.MeshBasicMaterial({ color: "#e8521a" })); colada.position.set(0.05, 0.01, 0.06); colada.rotation.set(-0.7, 0, -0.75); g.add(colada); }
  return g;
}
function figura(color = "#7a5a3a") { const g = new THREE.Group(); const c = new THREE.Mesh(new THREE.CapsuleGeometry(0.018, 0.04, 4, 8), mat(color)); c.position.y = 0.03; g.add(c);
  const h = new THREE.Mesh(new THREE.SphereGeometry(0.016, 10, 8), mat(color)); h.position.y = 0.085; g.add(h); return g; }
const estrella = (c = "#ffe9a8", r = 0.03) => new THREE.Mesh(new THREE.OctahedronGeometry(r, 0), new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 0.9 }));
Object.assign(EMBLEMAS, {
  "tasmania-canopo": () => { // puente de tierra inundado bajo una estrella casi inmóvil
    const g = new THREE.Group(); const w = agua(); w.position.y = -0.12; g.add(w);
    for (const x of [-0.12, 0.12]) { const t = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.18), mat("#7d6a4a")); t.position.set(x, -0.1, 0); g.add(t); }
    const puente = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.02, 0.06), mat("#7d6a4a")); puente.position.y = -0.125; g.add(puente);
    const e = estrella(); e.position.y = 0.13; g.add(e);
    const arco = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.003, 6, 30), mat("#e8d3b0")); arco.position.y = 0.13; g.add(arco);
    return g;
  },
  "costas-sumergidas": () => { // isla que fue costa
    const g = new THREE.Group(); const isla = new THREE.Mesh(piedra(new THREE.SphereGeometry(0.11, 18, 12, 0, Math.PI * 2, 0, Math.PI / 2), 0.08, 101), mat("#8a7752")); isla.position.y = -0.12; g.add(isla);
    const w = agua(); w.scale.set(1.1, 1.6, 1.2); w.position.y = -0.1; g.add(w);
    const linea = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.004, 0.004), mat("#e8d3b0")); linea.position.set(0, -0.15, 0.13); g.add(linea);
    return g;
  },
  "ngurunderi": () => { // canoa y camino sobre el agua hacia una isla
    const g = new THREE.Group(); const w = agua(); w.position.y = -0.12; g.add(w);
    const canoa = new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2).scale(2, 0.5, 0.6), mat("#6b4a2e", { side: THREE.DoubleSide })); canoa.position.set(-0.05, -0.08, 0); g.add(canoa);
    const isla = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat("#8a7752")); isla.position.set(0.12, -0.095, -0.03); g.add(isla);
    for (let i = 0; i < 4; i++) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.008, 6, 5), mat("#e8d3b0")); p.position.set(-0.1 + i * 0.06, -0.04 + Math.sin(i) * 0.02, 0.05); g.add(p); }
    return g;
  },
  "budj-bim": () => { const g = new THREE.Group(); const v = volcan(); v.position.y = -0.04; g.add(v);
    const anguila = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.007, 6, 24, Math.PI * 1.4), mat("#3a3a2e")); anguila.position.set(0, -0.14, 0.09); anguila.rotation.x = -Math.PI / 2; g.add(anguila); return g; },
  "kinrara": () => { const g = new THREE.Group(); const v = volcan("#4f4238"); v.position.y = -0.04; g.add(v);
    const tubo = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.2, 12, 1, true), mat("#2a211b", { side: THREE.DoubleSide })); tubo.rotation.z = Math.PI / 2; tubo.position.set(0, -0.13, 0.06); g.add(tubo); return g; },
  "volcanes-olvidados": () => { const g = new THREE.Group(); const a = volcan(); a.position.set(-0.08, -0.04, 0); g.add(a);
    const b = volcan("#8d8780", false); b.position.set(0.1, -0.07, -0.03); b.scale.setScalar(0.7); g.add(b); return g; },
  "henbury": () => { const g = new THREE.Group();
    const borde = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.022, 8, 28), mat("#9a5a32", { roughness: 0.95 })); borde.rotation.x = Math.PI / 2; borde.scale.z = 0.6; borde.position.y = -0.13; g.add(borde);
    const m = estrella("#ffb36b", 0.025); m.position.set(0.08, 0.1, 0); g.add(m);
    const estela = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.16, 10), new THREE.MeshBasicMaterial({ color: "#ffd59a", transparent: true, opacity: 0.6 })); estela.position.set(0.13, 0.16, 0); estela.rotation.z = 0.6; g.add(estela);
    return g; },
  "cuentos-indoeuropeos": () => { // árbol filogenético
    const g = new THREE.Group(); const m = mat("#b28a4c", { roughness: 0.35, metalness: 0.6 });
    const rama = (x0, y0, x1, y1) => { const l = Math.hypot(x1 - x0, y1 - y0); const c = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, l, 6), m); c.position.set((x0 + x1) / 2, (y0 + y1) / 2, 0); c.rotation.z = Math.atan2(x0 - x1, y1 - y0); g.add(c); };
    rama(0, -0.15, 0, -0.05); rama(0, -0.05, -0.1, 0.05); rama(0, -0.05, 0.1, 0.05); rama(-0.1, 0.05, -0.14, 0.14); rama(-0.1, 0.05, -0.06, 0.14); rama(0.1, 0.05, 0.06, 0.14); rama(0.1, 0.05, 0.14, 0.14);
    for (const x of [-0.14, -0.06, 0.06, 0.14]) { const h = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.04, 0.008), mat("#efe6d6")); h.position.set(x, 0.165, 0); g.add(h); }
    return g; },
  "conversacion-fuego": () => { const g = new THREE.Group(); const f = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 10), new THREE.MeshBasicMaterial({ color: "#f2a33d" })); f.position.y = -0.1; g.add(f);
    for (let i = 0; i < 4; i++) { const a = i / 4 * Math.PI * 2 + 0.4; const p = figura(i % 2 ? "#6b4a2e" : "#8a6a4a"); p.position.set(Math.cos(a) * 0.12, -0.15, Math.sin(a) * 0.12); g.add(p); }
    const cielo = estrella("#ffffff", 0.012); cielo.position.set(-0.08, 0.12, 0); g.add(cielo); return g; },
  "narradores-agta": () => { const g = new THREE.Group(); const n = figura("#5e3f2a"); n.position.set(0, -0.15, 0); n.scale.setScalar(1.3); g.add(n);
    for (let i = 0; i < 5; i++) { const a = Math.PI * (0.15 + i * 0.17); const p = figura("#8a6a4a"); p.position.set(Math.cos(a) * 0.13, -0.15, Math.sin(a) * 0.1 + 0.03); g.add(p); }
    const globo = new THREE.Mesh(new THREE.SphereGeometry(0.035, 14, 10).scale(1.5, 1, 0.4), mat("#efe6d6")); globo.position.set(0.06, 0.04, 0); g.add(globo); return g; }
});
export function crearEmblema(id) { const f = EMBLEMAS[id]; return f ? f() : new THREE.Group(); }
