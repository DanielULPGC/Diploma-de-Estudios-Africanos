/*
 * MUSEO · escena Three.js independiente del contenido.
 * Una galería de claustro recorre el tiempo desde hace 7 Ma (fondo) hasta hoy (primer plano).
 * Escala temporal: z = -L · √(edad / 7), que da más espacio al último millón de años.
 * Recibe salas y especies genéricas y emite eventos de selección.
 */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { crearObjeto } from "./objetos.js";

const L = 56;               // longitud de la línea del tiempo (7 Ma → 0)
const EDAD_MAX = 7;
export const zDe = edad => -L * Math.sqrt(Math.max(0, edad) / EDAD_MAX);
const movimientoReducido = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const token = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim() || "#888";

/* Posición lateral de cada especie dentro de la franja del tiempo */
const CARRIL = {
  sahelanthropus: -2.4, ardipithecus: -2.4, afarensis: -1.4, africanus: -0.8, boisei: 0.1,
  rudolfensis: 1.0, habilis: 1.55, ergaster: 2.1, erectus: 2.65, heidelbergensis: 1.0, neanderthalensis: 1.55, sapiens: 2.1
};

/* Lugar de las vitrinas del laboratorio del presente */
const LAB = { 0: 4.5, 1: 10.5 };

function texturaTexto(lineas, { ancho = 512, alto = 128, color = "#3a2f25", tam = 54, fondo = null, peso = 600, familia = "Bricolage Grotesque, system-ui, sans-serif" } = {}) {
  const c = document.createElement("canvas"); c.width = ancho; c.height = alto;
  const g = c.getContext("2d");
  if (fondo) { g.fillStyle = fondo; g.fillRect(0, 0, ancho, alto); }
  g.fillStyle = color; g.textAlign = "center"; g.textBaseline = "middle";
  const ls = Array.isArray(lineas) ? lineas : [lineas];
  ls.forEach((l, i) => {
    const t = i === 0 ? tam : tam * 0.6;
    let tt = t; g.font = `${i === 0 ? peso : 400} ${tt}px ${familia}`;
    while (g.measureText(l).width > ancho * 0.92 && tt > 10) { tt -= 2; g.font = `${i === 0 ? peso : 400} ${tt}px ${familia}`; }
    g.fillText(l, ancho / 2, alto / 2 + (i - (ls.length - 1) / 2) * tam * 0.95);
  });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

/* ---- Texturas procedimentales (en gris claro: el color lo pone el material según el tema) ---- */
function aleatorio(semilla) { let x = semilla; return () => { x = (x * 16807) % 2147483647; return (x - 1) / 2147483646; }; }
function lienzo(n = 512) { const c = document.createElement("canvas"); c.width = c.height = n; return [c, c.getContext("2d")]; }
function aTextura(c, rx, ry) {
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry); t.anisotropy = 8; return t;
}
function motas(g, n, rnd, tam, alfa) {
  for (let i = 0; i < n; i++) { const v = rnd() < 0.5 ? 0 : 255; g.fillStyle = `rgba(${v},${v},${v},${alfa * rnd()})`; g.fillRect(rnd() * 512, rnd() * 512, tam * rnd() + 0.6, tam * rnd() + 0.6); }
}
function texturaLosas() {
  const [c, g] = lienzo(); const rnd = aleatorio(11); const n = 4, lado = 512 / n;
  for (let j = 0; j < n; j++) for (let i = -1; i < n; i++) {
    const l = 224 + Math.round(rnd() * 26); g.fillStyle = `rgb(${l},${l - 2},${l - 6})`;
    g.fillRect(i * lado + (j % 2) * lado / 2, j * lado, lado, lado);
  }
  motas(g, 9000, rnd, 2.2, 0.08);
  g.strokeStyle = "rgba(60,45,30,0.38)"; g.lineWidth = 3;
  for (let j = 0; j <= n; j++) { g.beginPath(); g.moveTo(0, j * lado); g.lineTo(512, j * lado); g.stroke(); }
  for (let j = 0; j < n; j++) for (let i = 0; i <= n; i++) { const x = (i * lado + (j % 2) * lado / 2) % 512; g.beginPath(); g.moveTo(x, j * lado); g.lineTo(x, (j + 1) * lado); g.stroke(); }
  return c;
}
function texturaEstratos() {
  const [c, g] = lienzo(); const rnd = aleatorio(29); let y = 0;
  while (y < 512) { const h = 6 + rnd() * 26; const l = 205 + Math.round(rnd() * 45); g.fillStyle = `rgb(${l},${l - 4},${l - 10})`; g.fillRect(0, y, 512, h + 1); y += h; }
  motas(g, 7000, rnd, 2, 0.1);
  return c;
}
function texturaEstuco(semilla = 5) {
  const [c, g] = lienzo(); const rnd = aleatorio(semilla); g.fillStyle = "rgb(236,232,226)"; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 220; i++) { const x = rnd() * 512, y = rnd() * 512, r = 20 + rnd() * 70, l = rnd() < 0.5 ? 0 : 255;
    const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, `rgba(${l},${l},${l},${0.05 * rnd()})`); gr.addColorStop(1, `rgba(${l},${l},${l},0)`); g.fillStyle = gr; g.fillRect(x - r, y - r, 2 * r, 2 * r); }
  motas(g, 6000, rnd, 1.6, 0.07);
  return c;
}
function texturaHalo(interior, exterior = "rgba(0,0,0,0)") {
  const [c, g] = lienzo(256); const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, interior); gr.addColorStop(1, exterior); g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function texturaPlaca(texto, { color = "#f3ead9", fondo = "rgba(58,42,32,0.86)", ancho = 512, alto = 128, tam = 58 } = {}) {
  const c = document.createElement("canvas"); c.width = ancho; c.height = alto; const g = c.getContext("2d");
  g.font = `600 ${tam}px Bricolage Grotesque, system-ui, sans-serif`;
  const w = Math.min(ancho - 8, g.measureText(texto).width + 64), x = (ancho - w) / 2, y = 14, h = alto - 28, r = h / 2;
  g.fillStyle = fondo; g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.fill();
  g.fillStyle = color; g.textAlign = "center"; g.textBaseline = "middle"; g.fillText(texto, ancho / 2, alto / 2 + 2);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

function arcoApuntado(ancho, alto) {
  // Arco apuntado: dos arcos de radio 0,8·ancho con centros en la línea de arranque.
  // Devuelve el contorno de un paño de muro con el vano del arco recortado (polígono simple en U).
  const w = ancho / 2, R = ancho * 0.8, c = R - w;            // centros en x = ±c
  const flecha = Math.sqrt(R * R - c * c);                   // altura de la clave sobre el arranque
  const tope = alto + flecha + 0.35, m = 0.2, pasos = 18;
  const s = new THREE.Shape();
  s.moveTo(-w - m, 0); s.lineTo(-w - m, tope); s.lineTo(w + m, tope); s.lineTo(w + m, 0); s.lineTo(w, 0); s.lineTo(w, alto);
  const aClave = Math.atan2(flecha, c);                       // ángulo de la clave visto desde el centro (-c, alto)
  for (let i = 1; i <= pasos; i++) { const a = aClave * i / pasos; s.lineTo(-c + R * Math.cos(a), alto + R * Math.sin(a)); }
  for (let i = 1; i <= pasos; i++) { const a = Math.PI - aClave + aClave * i / pasos; s.lineTo(c + R * Math.cos(a), alto + R * Math.sin(a)); }
  s.lineTo(-w, 0); s.lineTo(-w - m, 0);
  return { forma: s, altura: tope };
}

export function crearMuseo(contenedor, { salas, especies, linajes, tierra, onSeleccion, onHover } = {}) {
  /* Calidad automática: equipos modestos o táctiles reciben sombras y resolución más ligeras */
  const modesto = (navigator.hardwareConcurrency || 4) <= 4 || window.matchMedia("(pointer: coarse)").matches;
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, modesto ? 1.5 : 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.95;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  contenedor.appendChild(renderer.domElement);
  renderer.domElement.setAttribute("role", "img");
  renderer.domElement.setAttribute("aria-label", "Museo en 3D: una galería de claustro recorre el tiempo desde hace siete millones de años hasta hoy, con vitrinas por sala y estelas por especie. Use el índice para navegar con el teclado.");

  const escena = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  escena.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
  const camara = new THREE.PerspectiveCamera(50, 1, 0.1, 220);
  const controles = new OrbitControls(camara, renderer.domElement);
  controles.enableDamping = true; controles.dampingFactor = 0.08; controles.maxPolarAngle = Math.PI * 0.49;
  controles.minDistance = 1.2; controles.maxDistance = 95; controles.screenSpacePanning = true;

  /* ---- Luz ---- */
  const hemi = new THREE.HemisphereLight("#e8eef2", "#5e4a34", 0.6); escena.add(hemi);
  const sol = new THREE.DirectionalLight("#ffd9a6", 2.1); sol.position.set(-18, 17, -8); sol.target.position.set(0, 0, -24);
  sol.castShadow = true; sol.shadow.mapSize.set(modesto ? 1024 : 2048, modesto ? 1024 : 2048); sol.shadow.bias = -0.0004; sol.shadow.normalBias = 0.02;
  Object.assign(sol.shadow.camera, { left: -46, right: 46, top: 18, bottom: -18, near: 1, far: 80 });
  escena.add(sol, sol.target);

  /* ---- Materiales que dependen del tema ---- */
  const cLosas = texturaLosas(), cEstuco = texturaEstuco(5), cPiedra = texturaEstuco(17);
  const mSuelo = new THREE.MeshStandardMaterial({ roughness: 0.92, map: aTextura(cLosas, 5, 20) });
  const mFranja = new THREE.MeshStandardMaterial({ roughness: 0.95, map: aTextura(texturaEstratos(), 1, 6) });
  const mPiedra = new THREE.MeshStandardMaterial({ roughness: 0.85, map: aTextura(cPiedra, 0.5, 0.5) });
  const mMuro = new THREE.MeshStandardMaterial({ roughness: 0.95, map: aTextura(cEstuco, 8, 1) });
  const mMadera = new THREE.MeshStandardMaterial({ roughness: 0.7 });
  const mLab = new THREE.MeshStandardMaterial({ roughness: 0.7, map: aTextura(cLosas, 3.4, 3.1) });
  const mLaton = new THREE.MeshStandardMaterial({ color: "#b28a4c", roughness: 0.35, metalness: 0.75 });
  /* Manchas de luz y sombras de contacto: planos con degradado radial, baratos de dibujar */
  const texPozo = texturaHalo("rgba(255,214,150,1)");
  const texSombra = texturaHalo("rgba(20,12,6,0.9)");
  const geoMancha = new THREE.PlaneGeometry(1, 1);
  const mancha = (tex, w, d, opacidad, aditiva = false) => {
    const m = new THREE.Mesh(geoMancha, new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: opacidad, depthWrite: false, blending: aditiva ? THREE.AdditiveBlending : THREE.NormalBlending }));
    m.rotation.x = -Math.PI / 2; m.scale.set(w, d, 1); m.renderOrder = 1; return m;
  };
  for (const m of [mSuelo, mFranja, mPiedra, mMuro, mMadera, mLab]) m.envMapIntensity = 0.3;

  /* ---- Arquitectura ---- */
  const Z0 = -64, Z1 = 16; const largo = Z1 - Z0; const zc = (Z0 + Z1) / 2;
  const suelo = new THREE.Mesh(new THREE.PlaneGeometry(20, largo), mSuelo); suelo.rotation.x = -Math.PI / 2; suelo.position.z = zc; suelo.receiveShadow = true; escena.add(suelo);
  const franja = new THREE.Mesh(new THREE.PlaneGeometry(6.6, L + 1), mFranja); franja.rotation.x = -Math.PI / 2; franja.position.set(0, 0.005, -L / 2); franja.receiveShadow = true; escena.add(franja);
  const lab = new THREE.Mesh(new THREE.PlaneGeometry(13.5, 12.5), mLab); lab.rotation.x = -Math.PI / 2; lab.position.set(0, 0.006, 8); lab.receiveShadow = true; escena.add(lab);

  // Arquerías del claustro a ambos lados
  const PASO = 3.4, VANO = PASO - 0.4;
  const { forma, altura: altoArco } = arcoApuntado(VANO, 2.4);
  const geoArco = new THREE.ExtrudeGeometry(forma, { depth: 0.45, bevelEnabled: false });
  geoArco.translate(0, 0, -0.225);
  const geoCol = new THREE.CylinderGeometry(0.17, 0.2, 2.4, 14);
  for (const lado of [-1, 1]) {
    for (let z = Z0 + 2; z <= Z1 - 1; z += PASO) {
      const a = new THREE.Mesh(geoArco, mPiedra); a.rotation.y = Math.PI / 2; a.position.set(lado * 7.4, 0, z); a.castShadow = true; a.receiveShadow = true; escena.add(a);
      const col = new THREE.Mesh(geoCol, mPiedra); col.position.set(lado * 7.4, 1.2, z + PASO / 2); col.castShadow = true; escena.add(col);
    }
    const muro = new THREE.Mesh(new THREE.PlaneGeometry(largo, 7), mMuro); muro.rotation.y = -lado * Math.PI / 2; muro.position.set(lado * 9.6, 3.5, zc); muro.receiveShadow = true; escena.add(muro);
    const cornisa = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.3, largo), mPiedra); cornisa.position.set(lado * 7.4, altoArco + 0.15, zc); cornisa.castShadow = true; escena.add(cornisa);
  }

  // Muros de cierre en los dos extremos
  for (const [z, ry] of [[Z0, 0], [Z1, Math.PI]]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(19.2, 7), mMuro); m.position.set(0, 3.5, z); m.rotation.y = ry; m.receiveShadow = true; escena.add(m); }

  // Portada y rótulos de cabecera
  const cartel = (texto, sub, x, y, z, ry = 0, ancho = 6) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(ancho, ancho / 4), new THREE.MeshBasicMaterial({ map: texturaTexto([texto, sub], { color: token("--sc-texto"), tam: 64 }), transparent: true }));
    m.position.set(x, y, z); m.rotation.y = ry; escena.add(m); return m;
  };
  const carteles = [
    cartel("SER HUMANOS", "Los comienzos de nuestra cultura", 0, 4.6, Z0 + 0.05, 0, 8),
    cartel("LABORATORIO DEL PRESENTE", "Lo que observamos hoy para entender el pasado", 0, 4.6, Z1 - 0.05, Math.PI, 7)
  ];

  /* ---- Línea del tiempo ---- */
  const grupoTiempo = new THREE.Group(); escena.add(grupoTiempo);
  const marcasEdad = [7, 6, 5, 4, 3, 2, 1, 0.5, 0.1];
  const mTick = new THREE.MeshStandardMaterial({ color: "#8c6a3c", roughness: 0.4, metalness: 0.6 });
  const etiquetasEdad = [];
  for (const e of marcasEdad) {
    const z = zDe(e);
    const t = new THREE.Mesh(new THREE.PlaneGeometry(6.6, 0.05), mTick); t.scale.y = 1.6; t.rotation.x = -Math.PI / 2; t.position.set(0, 0.01, z); grupoTiempo.add(t);
    const txt = e >= 1 ? `${e} Ma` : `${Math.round(e * 1000)} 000 años`;
    const et = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 0.85), new THREE.MeshBasicMaterial({ map: texturaPlaca(txt), transparent: true, depthWrite: false }));
    et.rotation.x = -Math.PI / 2; et.position.set(-4.95, 0.014, z); grupoTiempo.add(et); etiquetasEdad.push(et);
  }
  const hoy = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 0.85), new THREE.MeshBasicMaterial({ map: texturaPlaca("Hoy"), transparent: true, depthWrite: false }));
  hoy.rotation.x = -Math.PI / 2; hoy.position.set(-4.95, 0.014, 0.3); grupoTiempo.add(hoy); etiquetasEdad.push(hoy);

  /* ---- Especies: bandas de duración y estelas ---- */
  const marcas = new Map(); // clave "e:id" | "s:id"
  const grupoEspecies = new THREE.Group(); escena.add(grupoEspecies);
  const mPlinto = new THREE.MeshStandardMaterial({ color: "#efe7da", roughness: 0.5 });
  for (const e of especies) {
    const x = CARRIL[e.id] ?? 0; const col = new THREE.Color(token(linajes[e.linaje].color));
    const z0 = zDe(e.edad[0]), z1 = zDe(e.edad[1]);
    const largoBanda = Math.max(0.35, Math.abs(z1 - z0));
    const banda = new THREE.Mesh(new THREE.PlaneGeometry(0.34, largoBanda), new THREE.MeshStandardMaterial({ color: col, roughness: 0.6, transparent: true, opacity: 0.85 }));
    banda.rotation.x = -Math.PI / 2; banda.position.set(x, 0.02, (z0 + z1) / 2 + (largoBanda === 0.35 ? 0 : 0)); grupoEspecies.add(banda);
    const plinto = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.9, 0.34), mPlinto); plinto.position.set(x, 0.45, z0); plinto.castShadow = true; grupoEspecies.add(plinto);
    const sombraP = mancha(texSombra, 0.9, 0.9, 0.4); sombraP.position.set(x, 0.025, z0); grupoEspecies.add(sombraP);
    const media = (e.cerebro[0] + e.cerebro[1]) / 2;
    const r = 0.0235 * Math.cbrt(media);
    const matEsf = new THREE.MeshStandardMaterial({ color: col, roughness: 0.35, metalness: 0.05, emissive: col, emissiveIntensity: 0.08 });
    const esfera = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 22), matEsf); esfera.position.set(x, 0.9 + r, z0); esfera.castShadow = true; grupoEspecies.add(esfera);
    const toque = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.6, 0.5), new THREE.MeshBasicMaterial({ visible: false })); toque.position.set(x, 0.8, z0); toque.userData.clave = "e:" + e.id; grupoEspecies.add(toque);
    marcas.set("e:" + e.id, { tipo: "especie", id: e.id, toque, ancla: esfera, banda, matEsf, colorBase: col, linaje: e.linaje, pos: new THREE.Vector3(x, 0.9 + r, z0) });
  }

  /* ---- Vitrinas ---- */
  const grupoVitrinas = new THREE.Group(); escena.add(grupoVitrinas);
  const placas = [];
  const fantasma = new THREE.MeshBasicMaterial({ color: "#8a7a66", wireframe: true, transparent: true, opacity: 0.35 });
  const geoBase = new THREE.BoxGeometry(1.5, 0.95, 1.1);
  const geoVidrio = new THREE.BoxGeometry(1.4, 1.05, 1.0);
  const geoLuz = new THREE.BoxGeometry(1.42, 0.06, 1.02);
  for (const s of salas) {
    let x, z, ry = 0;
    if (s.lado === 0) { x = 0; z = Z0 + 3.2; ry = 0; }
    else if (s.edad == null) { x = s.lado * 4.6; z = LAB[s.lab]; ry = -s.lado * Math.PI / 2; }
    else { x = s.lado * 5.6; z = zDe(s.edad); ry = -s.lado * Math.PI / 2; }
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry;
    const base = new THREE.Mesh(geoBase, mMadera); base.position.y = 0.475; base.castShadow = true; g.add(base);
    const vidrio = new THREE.Mesh(geoVidrio, new THREE.MeshStandardMaterial({ color: "#e9f1f2", transparent: true, opacity: 0.14, roughness: 0.05, metalness: 0.1, depthWrite: false }));
    vidrio.position.y = 0.95 + 0.525; g.add(vidrio);
    const aristas = new THREE.LineSegments(new THREE.EdgesGeometry(geoVidrio), new THREE.LineBasicMaterial({ color: "#b28a4c", transparent: true, opacity: 0.8 }));
    const remate = new THREE.Mesh(new THREE.BoxGeometry(1.54, 0.04, 1.14), mLaton); remate.position.y = 0.97; g.add(remate);
    const sombraV = mancha(texSombra, 2.4, 2.0, 0.45); sombraV.position.y = 0.012; g.add(sombraV);
    const pozo = mancha(texPozo, 3.6, 3.2, 0.1, true); pozo.position.set(0, 0.016, 0.9); g.add(pozo);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: texPozo, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    halo.scale.set(2.6, 1.6, 1); halo.position.y = 1.55; g.add(halo);
    aristas.position.copy(vidrio.position); g.add(aristas);
    const matLuz = new THREE.MeshBasicMaterial({ color: "#6d6255" });
    const luz = new THREE.Mesh(geoLuz, matLuz); luz.position.y = 2.03; g.add(luz);
    const placa = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.42), new THREE.MeshBasicMaterial({ map: texturaTexto([`Sala ${s.n}`, s.corto], { color: "#f3ead9", tam: 56, fondo: "#3a2a20" }) }));
    placa.userData.texto = [`Sala ${s.n}`, s.corto]; placas.push(placa);
    placa.position.set(0, 0.6, 0.556); g.add(placa);
    const obj = crearObjeto(s.objeto, tierra); obj.position.y = 1.45; obj.scale.setScalar(1.25); g.add(obj);
    const originales = new Map(); obj.traverse(o => { if (o.isMesh || o.isPoints || o.isLine) originales.set(o, o.material); });
    const toque = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.2, 1.2), new THREE.MeshBasicMaterial({ visible: false })); toque.position.y = 1.1; toque.userData.clave = "s:" + s.id; g.add(toque);
    grupoVitrinas.add(g);
    const ancla = new THREE.Object3D(); ancla.position.y = 2.15; g.add(ancla);
    marcas.set("s:" + s.id, { tipo: "sala", id: s.id, toque, ancla, obj, originales, matLuz, pozo, halo, grupo: g, estado: "cerrada", lado: s.lado, x, z });
  }

  function setEstadoSala(id, estado) {
    const m = marcas.get("s:" + id); if (!m) return;
    m.estado = estado;
    const abierta = estado === "montada";
    m.obj.traverse(o => { if (m.originales.has(o)) o.material = abierta ? m.originales.get(o) : (o.isMesh ? fantasma : m.originales.get(o)); });
    m.obj.traverse(o => { if (o.isPointLight) o.visible = abierta; });
    m.matLuz.color.set(abierta ? "#ffe2b0" : estado === "parcial" ? "#c99a5a" : "#6d6255");
    m.pozo.material.opacity = abierta ? 0.42 : estado === "parcial" ? 0.2 : 0.08;
    m.halo.material.opacity = abierta ? 0.22 : 0;
  }

  /* ---- Cámara: vista general y vuelos ---- */
  const VISTA_GENERAL = { pos: new THREE.Vector3(3.0, 7.6, Z1 - 1.2), tgt: new THREE.Vector3(-0.5, 0.4, -25) };
  camara.position.copy(VISTA_GENERAL.pos); controles.target.copy(VISTA_GENERAL.tgt);
  let vuelo = null;
  function volarA(pos, tgt, dur = 1200) {
    if (movimientoReducido()) { camara.position.copy(pos); controles.target.copy(tgt); return; }
    vuelo = { p0: camara.position.clone(), t0p: controles.target.clone(), p1: pos.clone(), t1: tgt.clone(), ini: performance.now(), dur };
  }
  function pasoVuelo(ahora) {
    if (!vuelo) return;
    const t = Math.min(1, (ahora - vuelo.ini) / vuelo.dur);
    const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const alto = Math.sin(Math.PI * e) * Math.min(6, vuelo.p0.distanceTo(vuelo.p1) * 0.15);
    camara.position.lerpVectors(vuelo.p0, vuelo.p1, e); camara.position.y += alto;
    controles.target.lerpVectors(vuelo.t0p, vuelo.t1, e);
    if (t >= 1) vuelo = null;
  }
  function enfocar(clave) {
    const m = marcas.get(clave); if (!m) return;
    if (m.tipo === "sala") {
      const c = new THREE.Vector3(m.x, 1.4, m.z);
      let pos;
      if (m.lado === 0) pos = new THREE.Vector3(0, 2.6, m.z + 5);
      else pos = new THREE.Vector3(m.x - m.lado * 4.2, 2.5, m.z + 2.2);
      volarA(pos, c);
    } else {
      const p = m.pos; volarA(new THREE.Vector3(p.x + 2.6, 2.5, p.z + 4.6), new THREE.Vector3(p.x, 0.9, p.z));
    }
  }
  function vistaGeneral() { volarA(VISTA_GENERAL.pos, VISTA_GENERAL.tgt); }

  /* ---- Interacción ---- */
  const ray = new THREE.Raycaster(); const raton = new THREE.Vector2();
  const toques = [...marcas.values()].map(m => m.toque);
  let pulsado = null, encima = null, seleccion = null;
  function claveBajo(ev) {
    const r = renderer.domElement.getBoundingClientRect();
    raton.x = ((ev.clientX - r.left) / r.width) * 2 - 1; raton.y = -((ev.clientY - r.top) / r.height) * 2 + 1;
    ray.setFromCamera(raton, camara);
    const hit = ray.intersectObjects(toques, false)[0];
    return hit ? hit.object.userData.clave : null;
  }
  renderer.domElement.addEventListener("pointerdown", ev => { pulsado = { x: ev.clientX, y: ev.clientY }; vuelo = null; });
  renderer.domElement.addEventListener("pointerup", ev => {
    if (!pulsado) return; const mov = Math.hypot(ev.clientX - pulsado.x, ev.clientY - pulsado.y); pulsado = null;
    if (mov > 6) return; const c = claveBajo(ev); if (c && onSeleccion) { const m = marcas.get(c); onSeleccion(m.tipo, m.id); }
  });
  renderer.domElement.addEventListener("pointermove", ev => {
    if (ev.pointerType === "touch") return; const c = claveBajo(ev);
    if (c !== encima) { encima = c; renderer.domElement.style.cursor = c ? "pointer" : ""; if (onHover) onHover(c ? { tipo: marcas.get(c).tipo, id: marcas.get(c).id } : null); }
  });
  renderer.domElement.addEventListener("pointerleave", () => { if (encima) { encima = null; if (onHover) onHover(null); } });

  function marcar(tipo, id) { seleccion = tipo ? (tipo === "sala" ? "s:" : "e:") + id : null; }
  function aPantalla(tipo, id) {
    const m = marcas.get((tipo === "sala" ? "s:" : "e:") + id); if (!m) return null;
    const v = m.ancla.getWorldPosition(new THREE.Vector3());
    const delante = v.clone().sub(camara.position).dot(camara.getWorldDirection(new THREE.Vector3())) > 0;
    v.project(camara); const r = renderer.domElement.getBoundingClientRect();
    return { x: (v.x + 1) / 2 * r.width, y: (1 - v.y) / 2 * r.height, visible: delante && Math.abs(v.x) < 1.05 && Math.abs(v.y) < 1.05 };
  }

  /* ---- Tema ---- */
  function actualizarTema() {
    const cielo = new THREE.Color(token("--sc-cielo"));
    const niebla = new THREE.Color(token("--sc-niebla"));
    const [cc, gc] = lienzo(256); const gr = gc.createLinearGradient(0, 0, 0, 256);
    gr.addColorStop(0, "#" + cielo.clone().offsetHSL(0, 0.04, -0.08).getHexString()); gr.addColorStop(0.75, "#" + niebla.getHexString()); gr.addColorStop(1, "#" + niebla.getHexString());
    gc.fillStyle = gr; gc.fillRect(0, 0, 256, 256);
    if (escena.background && escena.background.isTexture) escena.background.dispose();
    escena.background = new THREE.CanvasTexture(cc); escena.background.colorSpace = THREE.SRGBColorSpace;
    escena.fog = new THREE.Fog(niebla, 38, 125);
    mSuelo.color.set(token("--sc-suelo")); mFranja.color.set(token("--sc-franja")); mPiedra.color.set(token("--sc-piedra"));
    mMuro.color.set(token("--sc-muro")); mMadera.color.set(token("--sc-madera"));
    mLab.color.set(token("--sc-suelo")).offsetHSL(0, -0.05, 0.06);
    const oscuro = cielo.getHSL({}).l < 0.3;
    hemi.intensity = oscuro ? 0.35 : 0.6; sol.intensity = oscuro ? 0.6 : 2.1; renderer.toneMappingExposure = oscuro ? 0.95 : 0.98;
    for (const m of marcas.values()) if (m.tipo === "especie") { const c = new THREE.Color(token(linajes[m.linaje].color)); m.colorBase = c; m.matEsf.color.copy(c); m.matEsf.emissive.copy(c); m.banda.material.color.copy(c); }
    const colTexto = token("--sc-texto");
    /* Las placas de edad son siempre oscuras con texto claro: se leen igual en los dos temas */
    carteles[0].material.map = texturaTexto(["SER HUMANOS", "Los comienzos de nuestra cultura"], { color: colTexto, tam: 64 }); carteles[0].material.needsUpdate = true;
    carteles[1].material.map = texturaTexto(["LABORATORIO DEL PRESENTE", "Lo que observamos hoy para entender el pasado"], { color: colTexto, tam: 64 }); carteles[1].material.needsUpdate = true;
    for (const p of placas) { p.material.map.dispose(); p.material.map = texturaTexto(p.userData.texto, { color: "#f3ead9", tam: 56, fondo: "#3a2a20" }); p.material.needsUpdate = true; }
  }
  actualizarTema();

  function tamano() {
    const w = contenedor.clientWidth || 1, h = contenedor.clientHeight || 1;
    renderer.setSize(w, h, false); camara.aspect = w / h; camara.fov = w / h < 0.9 ? 62 : 50; camara.updateProjectionMatrix();
  }
  new ResizeObserver(tamano).observe(contenedor); tamano();

  const oyentes = []; const reloj = new THREE.Clock();
  function bucle(ahora) {
    pasoVuelo(ahora); controles.update();
    const t = reloj.getElapsedTime(); const quieto = movimientoReducido();
    for (const [clave, m] of marcas) {
      const sel = clave === seleccion, hov = clave === encima;
      if (m.tipo === "sala") {
        if (m.estado === "montada" && !quieto) m.obj.rotation.y = t * 0.35;
        if (m.obj.userData.animar && m.estado === "montada" && !quieto) m.obj.userData.animar(t);
        const s = sel ? 1.08 : hov ? 1.04 : 1; m.grupo.scale.setScalar(s);
        if (m.estado === "montada") m.halo.material.opacity = (sel || hov ? 0.3 : 0.2) + (quieto ? 0 : Math.sin(t * 1.6 + m.z) * 0.04);
      } else {
        const s = sel ? 1.25 + (quieto ? 0 : Math.sin(t * 3) * 0.05) : hov ? 1.15 : 1; m.ancla.scale.setScalar(s);
        m.matEsf.emissiveIntensity = sel ? 0.45 : hov ? 0.3 : 0.08;
      }
    }
    // Las llamas también se animan dentro de los objetos anidados
    renderer.render(escena, camara);
    for (const f of oyentes) f();
    requestAnimationFrame(bucle);
  }
  requestAnimationFrame(bucle);

  return { setEstadoSala, enfocar: (tipo, id) => enfocar((tipo === "sala" ? "s:" : "e:") + id), vistaGeneral, marcar, aPantalla, actualizarTema, onCuadro: f => oyentes.push(f) };
}
