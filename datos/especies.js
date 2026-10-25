/*
 * SER HUMANOS · fichas de especie
 * Contenido armonizado y actualizado (octubre de 2026). Datos básicos a partir de las fichas del volumen
 * de 2022 (Giemsch y Haidle, Eds.) y de la bibliografía citada en «refs» (datos/referencias.js).
 * edad = [máx, mín] en millones de años (Ma); cerebro = [mín, máx] en cm³.
 * linaje: primeros | australo | parantropo | homo. debate: cuestiones abiertas (opcional).
 */
window.SH = window.SH || {};
window.SH.especies = [
  {
    id: "sahelanthropus", nombre: "Sahelanthropus tchadensis", linaje: "primeros",
    edad: [7.0, 7.0], edadTexto: "hacia 7 Ma", cerebro: [360, 370],
    descubrimiento: "Ahounta Djimdoumalbaye, 2001, desierto de Djurab (Chad).",
    yacimientos: "Chad: Toros-Menalla (desierto de Djurab).",
    hallazgos: "Cráneo casi completo pero muy fragmentado y deformado («Toumaï»), fragmentos de mandíbula, dientes aislados y huesos de las extremidades (fémur y cúbitos).",
    rasgos: "Habitaba mosaicos de pradera y bosque y se alimentaría sobre todo de hojas, raíces y tubérculos. El análisis del fémur (tubérculo femoral, torsión, proporciones respecto del cúbito) indica un bipedismo habitual combinado con la trepa (Daver et al., 2022; Williams et al., 2026).",
    debate: "Otros equipos sostienen que los restos no prueban un bipedismo habitual (Macchiarelli et al., 2020).",
    refs: ["volumen2022", "daver2022", "williams2026", "macchiarelli2020"]
  },
  {
    id: "ardipithecus", nombre: "Ardipithecus kadabba y A. ramidus", linaje: "primeros",
    edad: [5.8, 4.32], edadTexto: "kadabba 5,8-5,18 Ma · ramidus hacia 4,5-4,3 Ma", cerebro: [280, 350],
    descubrimiento: "Gen Suwa halló en 1992 un primer molar en Aramis (Etiopía); «Ardi», un esqueleto en buena parte conservado, se excavó entre 1994 y 1996. Yohannes Haile-Selassie encontró el primer fósil de A. kadabba en 1997.",
    yacimientos: "Etiopía: Aramis y otras localidades del Middle Awash; As Duma, en Gona (triángulo de Afar).",
    hallazgos: "ramidus: esqueleto y dientes. kadabba: fragmento de mandíbula con molar y dientes aislados.",
    rasgos: "Los dos registros están separados en el tiempo (kadabba termina hacia 5,2 Ma y ramidus aparece hacia 4,5 Ma) y difieren en la dentición, por lo que se consideran dos especies. Las edades de A. ramidus proceden de Aramis, hacia 4,4 Ma (White et al., 2009), y de As Duma, entre 4,51 y 4,32 Ma (Semaw et al., 2005); el contexto geológico y paleoambiental de Aramis se describe en WoldeGabriel et al. (2009). Combinaba la marcha bípeda con la trepa: el dedo gordo separado y la pelvis lo muestran, y el tobillo de A. ramidus apunta a una trepa vertical semejante a la de los grandes simios africanos (Prang et al., 2025). El esmalte y los incisivos sugieren una dieta con menos fruta que la del chimpancé actual.",
    debate: "",
    refs: ["volumen2022", "white2009", "woldegabriel2009", "semaw2005", "prang2025"]
  },
  {
    id: "afarensis", nombre: "Australopithecus afarensis", linaje: "australo",
    edad: [3.76, 2.92], edadTexto: "3,76-2,92 Ma", cerebro: [450, 550],
    descubrimiento: "Ludwig Kohl-Larsen halló mandíbulas y dientes en 1938-1939 cerca de Laetoli (Tanzania). Donald Johanson, descubridor de «Lucy», y su equipo describieron la especie en 1979.",
    yacimientos: "Tanzania: Laetoli. Etiopía: Hadar, Maka, Dikika, Aramis, monte Galili. Kenia: río Turkwel.",
    hallazgos: "Esqueleto parcial de «Lucy», esqueleto infantil de Dikika, restos de mano, pie y extremidades, y las huellas fosilizadas de Laetoli.",
    rasgos: "Vivía en paisajes en mosaico. Medía entre 1,20 y 1,40 m y pesaba de 20 a 50 kg. El ángulo de la rodilla y las huellas de Laetoli indican marcha erguida, pero la resistencia relativa de fémur y húmero muestra que seguía usando mucho los árboles (Carlson et al., 2026).",
    debate: "",
    refs: ["volumen2022", "carlson2026"]
  },
  {
    id: "africanus", nombre: "Australopithecus africanus", linaje: "australo",
    edad: [3.0, 2.1], edadTexto: "3,0-2,1 Ma (cronología clásica, en revisión)", cerebro: [450, 550],
    descubrimiento: "Raymond Dart identificó en 1924 el cráneo infantil de Taung (Sudáfrica) y lo publicó en 1925 como primera descripción del género Australopithecus.",
    yacimientos: "Sudáfrica: Sterkfontein, Makapansgat, Taung.",
    hallazgos: "Cráneo y mandíbula del «niño de Taung», molde endocraneal, cráneo «Mrs. Ples» (STS 5), dientes y fragmentos mandibulares.",
    rasgos: "Solo se conoce en el sur de África. Cara algo prognata, frente huidiza y arcos superciliares marcados. La posición del agujero occipital sugiere bipedismo constante. Unos 1,30 m y 30-40 kg; omnívoro, vivía en bosques de galería junto a los ríos.",
    debate: "La diversidad de los australopitecos sudafricanos se discute: el esqueleto «Little Foot» (StW 573), de Sterkfontein, se ha atribuido a una especie aparte, Au. prometheus, atribución que otros rechazan (Martin et al., 2025). También se discute su cronología: la datación por nucleidos cosmogénicos sitúa el Miembro 4 de Sterkfontein, del que procede la mayor parte de sus fósiles, hacia 3,4-3,6 Ma, frente a los 2,6-2,1 Ma estimados a partir de coladas de calcita (Granger et al., 2022). En cambio, el estudio biocronológico de los primates cercopitécidos concluye que ninguna cueva sudafricana es anterior a unos 2,8 Ma (Frost et al., 2022), y los autores de la datación cosmogénica lo rebaten (Granger et al., 2023): la cuestión sigue abierta.",
    refs: ["volumen2022", "martin2025", "granger2022", "frost2022", "granger2023"]
  },
  {
    id: "boisei", nombre: "Paranthropus boisei", linaje: "parantropo",
    edad: [2.3, 1.4], edadTexto: "2,3-1,4 Ma", cerebro: [475, 545],
    descubrimiento: "Mary Leakey halló en 1959 un cráneo con dientes en la garganta de Olduvai (Tanzania).",
    yacimientos: "Tanzania: Peninj, Olduvai. Malaui: Malema. Kenia: Koobi Fora, Nachukui, Chesowanja. Etiopía: Konso, Shungura.",
    hallazgos: "Cráneos, dientes, mandíbulas, una mano parcial (KNM-ER 101000), huesos del pie y de la pierna; probablemente, huellas.",
    rasgos: "Cráneo grande, cara larga, pómulos muy anchos y molares enormes, con una cresta sagital para los músculos masticadores. Dieta rica en vegetales duros. Su mano combina un agarre potente, útil para trepar y alimentarse, con algunos rasgos manipuladores parecidos a los de Homo (Mongle et al., 2025). Las 21 huellas de GaJi10 (Turkana, hacia 1,43 Ma) se atribuyen probablemente a esta especie (Hatala et al., 2026).",
    debate: "Si Paranthropus fabricó o usó herramientas sigue abierto: en Nyayanga aparece junto a útiles olduvayenses de 3,0-2,6 Ma (Plummer et al., 2023). Una mandíbula parcial de Paranthropus de 2,6 Ma hallada en Mille-Logya (Afar, Etiopía), aún sin asignar a especie, es uno de los fósiles más antiguos del género y lleva su área conocida unos 1000 km más al norte (Alemseged et al., 2026).",
    refs: ["volumen2022", "mongle2025", "hatala2026", "plummer2023", "alemseged2026"]
  },
  {
    id: "rudolfensis", nombre: "Homo rudolfensis", linaje: "homo",
    edad: [2.5, 1.8], edadTexto: "2,5-1,8 Ma", cerebro: [750, 752],
    descubrimiento: "Bernard Ngeneo halló en 1972, cerca del lago Turkana, un cráneo muy fragmentado (KNM-ER 1470).",
    yacimientos: "Kenia: formación de Koobi Fora. Malaui: Uraha.",
    hallazgos: "Varios cráneos, mandíbula (UR 501), dientes y huesos de pierna, brazo y pelvis.",
    rasgos: "Uno de los primeros representantes del género Homo. Piernas y pelvis indican una marcha bípeda más frecuente y prolongada que la de especies anteriores. Unos 1,5 m y 45-50 kg; dieta con mucha parte vegetal. No se han hallado herramientas asociadas directamente.",
    debate: "El volumen cerebral se basa en la práctica en un solo cráneo bien conservado (KNM-ER 1470). La mandíbula de Ledi-Geraru (2,8 Ma) es anterior a cualquier H. rudolfensis (Villmoare et al., 2015).",
    refs: ["volumen2022", "villmoare2015"]
  },
  {
    id: "habilis", nombre: "Homo habilis", linaje: "homo",
    edad: [2.3, 1.5], edadTexto: "2,3-1,5 Ma", cerebro: [590, 687],
    descubrimiento: "Los primeros restos se hallaron en Olduvai (Tanzania) a partir de 1959.",
    yacimientos: "Kenia: Koobi Fora, Ileret. Tanzania: Olduvai. Etiopía: Hadar. Sudáfrica: Sterkfontein, Swartkrans, Kromdraai.",
    hallazgos: "Mandíbulas, huesos del cráneo, dientes, huesos de mano y pie, húmeros y fémures.",
    rasgos: "La especie más difícil de delimitar: reúne rasgos de australopitecos (dientes) y de Homo, con un cerebro pequeño para el género (590-687 cm³, quizá más de 800). Se incluyó en Homo por las herramientas cercanas, cuando se creía que solo el género Homo las fabricaba; hoy se conocen útiles más antiguos.",
    debate: "",
    refs: ["volumen2022"]
  },
  {
    id: "ergaster", nombre: "Homo ergaster", linaje: "homo",
    edad: [1.9, 1.4], edadTexto: "1,9-1,4 Ma", cerebro: [510, 900],
    descubrimiento: "Richard Leakey halló los primeros restos en 1971 en Koobi Fora (Kenia); la especie se nombró en 1975.",
    yacimientos: "Kenia: Koobi Fora, lago Turkana. Sudáfrica: Swartkrans.",
    hallazgos: "Cráneo con mandíbula, pelvis, columna, huesos de brazos y piernas y el esqueleto del «niño de Turkana» (KNM-WT 15000).",
    rasgos: "Muchos especialistas lo consideran la forma africana temprana de H. erectus. Alto y esbelto, plenamente erguido y corredor resistente; el niño de Turkana medía 1,59 m. El cráneo DAN5 de Gona (1,6-1,5 Ma) combina una bóveda de H. erectus con cara y dientes semejantes a H. habilis, lo que sugiere una aparición compleja de H. erectus (Baab et al., 2025).",
    debate: "La estatura adulta proyectada a partir del niño de Turkana (hasta 1,85 m) depende del ritmo de crecimiento que se suponga y es discutida.",
    refs: ["volumen2022", "baab2025"]
  },
  {
    id: "erectus", nombre: "Homo erectus", linaje: "homo",
    edad: [2.04, 0.11], edadTexto: "hacia 2 Ma-110 000 años", cerebro: [870, 1150],
    descubrimiento: "Eugène Dubois halló en 1891 una bóveda craneal en Trinil (Java, Indonesia).",
    yacimientos: "Indonesia: Sangiran, Sambungmacan, Trinil, Ngandong, Mojokerto. Georgia: Dmanisi. China: Zhoukoudian, Hexian. Sudáfrica: Drimolen, Saldanha. Argelia: Tighennif. Kenia, Tanzania, Etiopía, Marruecos.",
    hallazgos: "Fragmentos de cráneo, dientes, mandíbulas y huesos de las extremidades.",
    rasgos: "Primera especie de Homo que se extendió fuera de África. Bípeda como nosotros, de 1,45 a 1,80 m y 50-60 kg, con dieta muy variable, nariz cartilaginosa y pulgar flexible. En Sudáfrica está presente hacia 2,04-1,95 Ma (Martin et al., 2026). Las proteínas del esmalte de seis individuos chinos comparten una variante con los denisovanos, lo que sugiere mezcla (Fu et al., 2026).",
    debate: "No es seguro que los fósiles africanos, europeos y asiáticos pertenezcan a una sola especie; en Dmanisi se ha propuesto incluso que convivieran dos taxones (Nery et al., 2025).",
    refs: ["volumen2022", "martin2026", "fu2026", "nery2025", "lordkipanidze2013"]
  },
  {
    id: "heidelbergensis", nombre: "Homo heidelbergensis", linaje: "homo",
    edad: [0.6, 0.2], edadTexto: "600 000-200 000 años", cerebro: [1116, 1450],
    descubrimiento: "Daniel Hartmann halló en 1907 la mandíbula de Mauer, cerca de Heidelberg (Alemania).",
    yacimientos: "Alemania: Mauer, Steinheim. Gran Bretaña: Swanscombe. Francia: Arago. Hungría: Vértesszőlős. Grecia: Petralona. Marruecos: Thomas Quarry. Israel: Zuttiyeh. Etiopía: Bodo. Zambia: Kabwe. Sudáfrica: Elandsfontein.",
    hallazgos: "Huesos del cráneo, mandíbulas y huesos de brazos y piernas.",
    rasgos: "Difiere poco de H. erectus y de los neandertales. Medía 1,60-1,75 m y pesaba 60-80 kg; su dieta tendría, como en todos los cazadores-recolectores, una alta proporción vegetal. Los fósiles de la Sima de los Huesos (Atapuerca), antes incluidos aquí, pertenecen al linaje neandertal (Meyer et al., 2016); su desgaste molar indica una dieta omnívora y flexible (Martín-Francés et al., 2026).",
    debate: "Se discute si es una especie propia o un conjunto heterogéneo de poblaciones del Pleistoceno medio, y cuántos de sus fósiles pertenecen a los linajes neandertal o sapiens.",
    refs: ["volumen2022", "meyer2016", "martinFrances2026"]
  },
  {
    id: "neanderthalensis", nombre: "Homo neanderthalensis", linaje: "homo",
    edad: [0.43, 0.04], edadTexto: "linaje desde hace más de 400 000 años (Meyer et al., 2016); hasta hace unos 40 000", cerebro: [1200, 1740],
    descubrimiento: "Philippe-Charles Schmerling halló fósiles en Engis (Bélgica) en 1829; los restos de la gruta Feldhofer (valle de Neander) aparecieron en 1856 y William King nombró la especie en 1864.",
    yacimientos: "Europa (de Portugal y España a Georgia), Asia central (Uzbekistán, Altái) y Oriente Próximo (Israel, Irak, Siria, Turquía).",
    hallazgos: "Esqueletos casi completos de más de 300 individuos.",
    rasgos: "Más robustos que nosotros, con cráneo grande y alargado, arcos superciliares marcados, nariz ancha y sin mentón. El hioides indica capacidad anatómica para hablar. Dieta variable, con mucha carne y también muchas plantas. Fabricaban mangos con brea de abedul, usaban ocre, probablemente sabían encender fuego, enterraban a sus muertos y cazaban grandes presas con lanzas de madera, como las de Schöningen (hacia 200 000 años) o Lehringen (125 000 años) (Hutson et al., 2025; Verheijen et al., 2026). Los neandertales tardíos del noroeste de Europa formaban una metapoblación conectada, sin signos de endogamia (Bossoms Mesa et al., 2026). Se mezclaron con Homo sapiens y con denisovanos.",
    debate: "La fecha de su desaparición y su papel en ella (competencia, mezcla, demografía) siguen en debate.",
    refs: ["volumen2022", "meyer2016", "hutson2025", "verheijen2026", "bossoms2026", "slon2018"]
  },
  {
    id: "sapiens", nombre: "Homo sapiens", linaje: "homo",
    edad: [0.3, 0], edadTexto: "desde hace unos 300 000 años", cerebro: [1100, 1900],
    descubrimiento: "Los fósiles más antiguos conocidos son los de Jebel Irhoud (Marruecos), con unos 300 000 años; el yacimiento se conoce desde 1961, y los nuevos restos y su datación se publicaron en 2017.",
    yacimientos: "Todo el planeta.",
    hallazgos: "—",
    rasgos: "Única especie humana viva, aunque nuestro genoma conserva pequeñas proporciones de neandertales, denisovanos y otros humanos arcaicos (Zhang et al., 2026). Cara pequeña y vertical, frente alta, mentón y gran neurocráneo; columna en S y pelvis que perfeccionan el bipedismo. Salió de África varias veces: el sur de China tiene presencia humana moderna entre 230 000 y 130 000 años (Zhong et al., 2026). Primera especie que colonizó todo el planeta, capaz de transformar el ambiente a escala inédita y de cooperar a escala global.",
    debate: "El modelo de una única salida de África hace 60 000-40 000 años ha dado paso a varias salidas, algunas sin descendencia actual, cuya cronología se sigue discutiendo.",
    refs: ["volumen2022", "hublin2017", "richter2017", "zhong2026", "zhang2026"]
  }
];

window.SH.linajes = {
  primeros: { nombre: "Primeros homininos", color: "--l1" },
  australo: { nombre: "Australopithecus", color: "--l2" },
  parantropo: { nombre: "Paranthropus", color: "--l3" },
  homo: { nombre: "Homo", color: "--l4" }
};
