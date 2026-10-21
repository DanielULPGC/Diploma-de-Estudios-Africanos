/*
 * SER HUMANOS · mapa de la expansión (sala 11)
 * Seis etapas según las figuras 2-7 de Haidle (pp. 112-118). Las coordenadas son aproximadas
 * y solo sirven para situar el yacimiento en un mapa a escala mundial.
 * a = edad que da el catálogo; nuevo = hallazgo posterior a 2022 (no figura en el catálogo).
 */
window.SH = window.SH || {};
window.SH.expansion = [
  {
    id: "e1", rango: "7,5-4,0 Ma", titulo: "Formas bípedas tempranas",
    texto: "Distintas formas de homininos bípedos, documentadas sobre todo en África oriental. Probablemente no forman una única línea evolutiva, sino variantes paralelas de la marcha bípeda (p. 114).",
    sitios: [
      { n: "Toros-Menalla (Sahelanthropus)", lat: 16.2, lon: 17.5, a: "hacia 7 Ma" },
      { n: "Colinas Tugen (Orrorin)", lat: 0.7, lon: 35.8, a: "hacia 6 Ma" },
      { n: "Aramis, Awash (Ardipithecus)", lat: 10.5, lon: 40.4, a: "5,8-3,9 Ma" },
      { n: "Grecia (Graecopithecus, discutido)", lat: 38.0, lon: 23.7, a: "hacia 7 Ma" }
    ]
  },
  {
    id: "e2", rango: "4,0-3,0 Ma", titulo: "Los australopitecos llegan al sur",
    texto: "El clima se enfría y aumenta la estacionalidad; las praderas se extienden. Australopithecus se desarrolla en África oriental y central y, por su mayor flexibilidad, alcanza el sur del continente (pp. 113-114).",
    sitios: [
      { n: "Kanapoi (Au. anamensis)", lat: 2.3, lon: 36.1, a: "hacia 4 Ma" },
      { n: "Laetoli (huellas)", lat: -3.2, lon: 35.2, a: "hacia 3,6 Ma" },
      { n: "Hadar (Lucy)", lat: 11.1, lon: 40.6, a: "3,2 Ma" },
      { n: "Koro Toro (Au. bahrelghazali)", lat: 16.0, lon: 18.5, a: "hacia 3,5 Ma" },
      { n: "Sterkfontein", lat: -26.0, lon: 27.7, a: "hasta 3,67 Ma" },
      { n: "Lomekwi 3 (primeras herramientas)", lat: 3.9, lon: 35.7, a: "hacia 3,3 Ma" }
    ]
  },
  {
    id: "e3", rango: "3,0-2,0 Ma", titulo: "Paranthropus, Homo y la primera salida",
    texto: "Aparecen dos géneros nuevos: Paranthropus, especialista en vegetales duros, y Homo, «especializado en no especializarse». Algunos grupos llegan al norte de África y, según hallazgos recientes, fuera del continente (pp. 115-116).",
    sitios: [
      { n: "Ledi-Geraru (mandíbula de Homo)", lat: 11.5, lon: 40.8, a: "2,8 Ma" },
      { n: "Nyayanga (Olduvayense y Paranthropus)", lat: -0.5, lon: 34.4, a: "2,6-3,0 Ma", nuevo: true },
      { n: "Gona (Olduvayense)", lat: 11.1, lon: 40.3, a: "2,6 Ma" },
      { n: "Lokalalei 2C", lat: 4.1, lon: 35.8, a: "2,34 Ma" },
      { n: "Ain Boucherit (Argelia)", lat: 36.1, lon: 5.5, a: "hasta 2,4 Ma" },
      { n: "Valle de Zarqa (Jordania)", lat: 32.1, lon: 36.1, a: "hasta 2,48 Ma" },
      { n: "Shangchen (China)", lat: 34.0, lon: 109.4, a: "hasta 2,1 Ma" },
      { n: "Uraha (H. rudolfensis)", lat: -10.0, lon: 34.0, a: "hacia 2,5 Ma" }
    ]
  },
  {
    id: "e4", rango: "2,0-1,0 Ma", titulo: "Homo erectus hasta Asia oriental y Europa",
    texto: "Homo erectus y especies afines llegan a Asia oriental y a Europa, quizá en episodios de avance y retroceso. Australopithecus y Paranthropus siguen habitando África oriental y meridional (pp. 116-117).",
    sitios: [
      { n: "Dmanisi (Georgia)", lat: 41.3, lon: 44.3, a: "1,8 Ma" },
      { n: "Kokiselei 4 (primeros bifaces)", lat: 3.9, lon: 35.9, a: "1,76 Ma" },
      { n: "Koobi Fora (fuego)", lat: 3.9, lon: 36.3, a: "1,5 Ma" },
      { n: "‘Ubeidiya (Israel)", lat: 32.7, lon: 35.6, a: "1,4 Ma" },
      { n: "Sangiran (Java)", lat: -7.45, lon: 110.8, a: "hacia 1,6 Ma" },
      { n: "Pirro Nord (Italia)", lat: 41.8, lon: 15.4, a: "1,6-1,3 Ma" },
      { n: "Orce, Barranco León (España)", lat: 37.7, lon: -2.4, a: "hacia 1,4 Ma" },
      { n: "Sima del Elefante, Atapuerca", lat: 42.35, lon: -3.5, a: "1,4-1,0 Ma" },
      { n: "Wonderwerk (fuego en cueva)", lat: -27.85, lon: 23.55, a: "hacia 1 Ma" }
    ]
  },
  {
    id: "e5", rango: "1,0 Ma-400 000 años", titulo: "Homo heidelbergensis y formas pequeñas regionales",
    texto: "H. heidelbergensis se extiende de África a Europa y partes de Asia; en el sur de África y en la isla de Flores surgen especies de pequeño tamaño. Los bifaces, presentes en el Levante desde 1,5 Ma, solo se generalizan en Europa y Asia unos 600 000 años después (pp. 117-118).",
    sitios: [
      { n: "Gesher Benot Ya‘aqov (hogar)", lat: 33.0, lon: 35.6, a: "hacia 790 000 años" },
      { n: "Kalinga (Filipinas)", lat: 17.4, lon: 121.4, a: "hacia 709 000 años" },
      { n: "Happisburgh 3 (Gran Bretaña)", lat: 52.8, lon: 1.5, a: "970 000-780 000 años" },
      { n: "Gran Dolina (H. antecessor)", lat: 42.36, lon: -3.52, a: "hacia 800 000 años" },
      { n: "Mauer (H. heidelbergensis)", lat: 49.3, lon: 8.8, a: "hacia 600 000 años" },
      { n: "Bodo (Etiopía)", lat: 10.6, lon: 40.5, a: "hacia 600 000 años" },
      { n: "Kalambo Falls (estructura de madera)", lat: -8.6, lon: 31.2, a: "476 000 años", nuevo: true },
      { n: "Flores (formas pequeñas)", lat: -8.6, lon: 120.9, a: "Pleistoceno medio" },
      { n: "Barnham (producción de fuego)", lat: 52.37, lon: 0.75, a: "hacia 400 000 años", nuevo: true }
    ]
  },
  {
    id: "e6", rango: "Menos de 400 000 años", titulo: "Neandertales, denisovanos, Homo sapiens… y mezcla",
    texto: "Neandertales en Europa, denisovanos en Asia y Homo sapiens en toda África. Nuestra especie sale en varias oleadas, se mezcla con los demás humanos y, desde hace más de 50 000 años, ocupa Australia, el Ártico, América y el Pacífico (pp. 118-119).",
    sitios: [
      { n: "Jebel Irhoud (Marruecos)", lat: 31.85, lon: -8.87, a: "hacia 300 000 años" },
      { n: "Omo (Etiopía)", lat: 5.0, lon: 35.9, a: "hacia 195 000 años" },
      { n: "Grecia (sapiens temprano)", lat: 36.6, lon: 22.4, a: "hacia 200 000 años" },
      { n: "Israel (sapiens temprano)", lat: 32.7, lon: 35.0, a: "hacia 200 000 años" },
      { n: "Península arábiga", lat: 23.5, lon: 45.0, a: "hacia 120 000 años" },
      { n: "Sur de China", lat: 25.3, lon: 107.4, a: "quizá 80 000 años" },
      { n: "Sudeste asiático", lat: -0.2, lon: 100.6, a: "hacia 70 000 años" },
      { n: "Australia", lat: -12.5, lon: 132.9, a: "más de 50 000 años" },
      { n: "Valle de Neander", lat: 51.2, lon: 6.95, a: "neandertales" },
      { n: "Cueva de Denisova", lat: 51.4, lon: 84.7, a: "denisovanos, 90 000 años (niña híbrida)" },
      { n: "Harbin (denisovano)", lat: 45.8, lon: 126.6, a: "más de 146 000 años", nuevo: true },
      { n: "América", lat: 15.0, lon: -90.0, a: "después; sin fecha en el catálogo" }
    ]
  }
];
