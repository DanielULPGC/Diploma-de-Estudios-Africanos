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
  const g = new THREE.Group();
  const anchos = [0.05, 0.075, 0.06, 0.09, 0.07, 0.1];
  const cols = ["#8b6b4a", "#a87b4f", "#c08a52", "#9c3d1c", "#7c6a2e", "#2c5e8a"];
  anchos.forEach((w, i) => {
    const h = 0.3 + i * 0.06;
    const m = new THREE.Mesh(new THREE.CylinderGeometry(w, w, h, 20), mat(cols[i], { roughness: 0.6 }));
    m.position.set((i - 2.5) * 0.11, h / 2 - 0.3, 0); g.add(m);
  });
  return g;
}

function chopper() {
  const g = new THREE.Group();
  const geo = piedra(new THREE.DodecahedronGeometry(0.22, 1), 0.35, 11);
  geo.scale(1.15, 0.8, 0.75);
  const m = new THREE.Mesh(geo, mat("#6f6556", { flatShading: true, roughness: 0.95 }));
  m.rotation.z = 0.4; g.add(m);
  for (let i = 0; i < 3; i++) {
    const l = piedra(new THREE.TetrahedronGeometry(0.07, 0), 0.4, 20 + i); l.scale(1.3, 0.4, 1);
    const lm = new THREE.Mesh(l, mat("#8c806d", { flatShading: true }));
    lm.position.set(0.3 + i * 0.07, -0.18, -0.1 + i * 0.1); lm.rotation.set(i, i * 0.7, 0.3); g.add(lm);
  }
  return g;
}

function bifaz() {
  const g = new THREE.Group();
  const perfil = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24; const y = t * 0.62 - 0.31;
    const r = 0.17 * Math.pow(Math.sin(Math.PI * Math.pow(1 - t, 0.75)), 0.85) * (1 - 0.25 * t);
    perfil.push(new THREE.Vector2(Math.max(r, 0.001), y));
  }
  const geo = piedra(new THREE.LatheGeometry(perfil, 18), 0.12, 31);
  geo.scale(1, 1, 0.38);
  const m = new THREE.Mesh(geo, mat("#4a4a48", { flatShading: true, roughness: 0.7, metalness: 0.05 }));
  g.add(m);
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
  if (conLuz) { const luz = new THREE.PointLight("#ff9a4a", 1.4, 3.2, 2); luz.position.y = 0; luz.name = "luz"; g.add(luz); }
  g.userData.animar = (t) => {
    llamas.children.forEach((f, i) => { const s = 1 + Math.sin(t * 9 + i * 2) * 0.12 + Math.sin(t * 23 + i) * 0.05; f.scale.set(1, s, 1); });
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
  const percutor = new THREE.Mesh(piedra(new THREE.SphereGeometry(0.09, 10, 8), 0.2, 51), mat("#7d756a", { flatShading: true }));
  percutor.position.set(-0.28, 0.05, 0); g.add(percutor);
  const nucleo = new THREE.Mesh(piedra(new THREE.DodecahedronGeometry(0.1, 0), 0.3, 52), mat("#8f8576", { flatShading: true }));
  nucleo.position.set(0, 0.05, 0); g.add(nucleo);
  const l = piedra(new THREE.TetrahedronGeometry(0.08, 0), 0.3, 53); l.scale(1.4, 0.35, 1);
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
  const martillo = new THREE.Mesh(piedra(new THREE.BoxGeometry(0.22, 0.12, 0.14, 2, 2, 2), 0.25, 61), mat("#8a8174", { flatShading: true }));
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
    default: return new THREE.Group();
  }
}
