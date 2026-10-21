/*
 * SER HUMANOS · datos de especies
 * Las doce fichas («Profile») del catálogo, traducidas y resumidas con redacción propia.
 * p = página impresa del catálogo. edad = [máx, mín] en millones de años (Ma).
 * cerebro = [mín, máx] en cm³. linaje: primeros | australo | parantropo | homo.
 * Las notas señalan erratas del catálogo o investigación posterior a 2022.
 */
window.SH = window.SH || {};
window.SH.especies = [
  {
    id: "sahelanthropus", nombre: "Sahelanthropus tchadensis", linaje: "primeros", p: 15,
    edad: [7.0, 7.0], edadTexto: "hacia 7 Ma", cerebro: [360, 370],
    descubrimiento: "Ahounta Djimdoumalbaye, 2001, desierto de Djurab (Chad).",
    yacimientos: "Chad: Toros-Menalla (desierto de Djurab).",
    hallazgos: "Cráneo casi completo pero muy fragmentado y deformado («Toumaï»), cuatro fragmentos de mandíbula y cuatro dientes aislados.",
    rasgos: "Habitaba mosaicos de pradera y bosque y se alimentaría sobre todo de hojas, raíces y tubérculos, con insectos grandes y pequeños vertebrados en épocas de escasez. El catálogo deja abierto si ya era bípedo de forma permanente.",
    nota: {
      tipo: "actualizacion",
      texto: "La locomoción de Sahelanthropus sigue en debate. Daver et al. (2022) y, con nuevos análisis del fémur (tubérculo femoral, anteversión, proporciones), Williams et al. (2026) defienden un bipedismo habitual combinado con trepa; otros equipos lo discuten (p. ej., Macchiarelli et al., 2020, Journal of Human Evolution).",
      fuentes: [
        { cita: "Daver, G. et al. (2022). Postcranial evidence of late Miocene hominin bipedalism in Chad. Nature, 609, 94-100.", doi: "10.1038/s41586-022-04901-z" },
        { cita: "Williams, S. A. et al. (2026). Earliest evidence of hominin bipedalism in Sahelanthropus tchadensis. Science Advances, 12(1).", doi: "10.1126/sciadv.adv0130" }
      ]
    }
  },
  {
    id: "ardipithecus", nombre: "Ardipithecus kadabba y A. ramidus", linaje: "primeros", p: 25,
    edad: [5.8, 3.9], edadTexto: "kadabba 5,8-5,18 Ma · ramidus 4,42-3,9 Ma", cerebro: [280, 350],
    descubrimiento: "Gen Suwa halló en 1992 un primer molar en Aramis (Etiopía); «Ardi», un esqueleto en buena parte conservado, se excavó entre 1994 y 1996. Yohannes Haile-Selassie encontró el primer fósil de A. kadabba en 1997.",
    yacimientos: "Etiopía: Aramis, río Awash (triángulo de Afar).",
    hallazgos: "ramidus: esqueleto y dientes. kadabba: fragmento de mandíbula derecha con molar y cuatro dientes inferiores aislados.",
    rasgos: "Hasta 1,9 millones de años separan ambos registros, por lo que se consideran dos especies. Ardipithecus enlaza la locomoción trepadora de los grandes simios con la marcha bípeda constante: el dedo gordo separado y la pelvis muestran que conservaba la capacidad de trepar. El esmalte y los incisivos apuntan a una dieta con menos fruta que la del chimpancé actual.",
    nota: null
  },
  {
    id: "afarensis", nombre: "Australopithecus afarensis", linaje: "australo", p: 39,
    edad: [3.76, 2.92], edadTexto: "3,76-2,92 Ma", cerebro: [450, 550],
    descubrimiento: "Ludwig Kohl-Larsen halló mandíbulas y dientes en 1938-1939 en el valle de Garusi, cerca de Laetoli (Tanzania). Donald Johanson, descubridor de «Lucy», y su equipo describieron la especie en 1979.",
    yacimientos: "Tanzania: Laetoli. Etiopía: Hadar, Maka, Dikika, Aramis, monte Galili. Kenia: río Turkwel.",
    hallazgos: "Esqueleto parcial de «Lucy», esqueleto infantil de Dikika, restos de mano, pie y extremidades, y las huellas fosilizadas de Laetoli.",
    rasgos: "Vivía en paisajes en mosaico (pradera con árboles aislados y bosquetes junto a cursos de agua). Medía entre 1,20 y 1,40 m y pesaba de 20 a 50 kg. El ángulo de la rodilla indica marcha erguida; dedos de manos y pies más cortos que los de los monos apuntan a una vida en el suelo.",
    nota: null
  },
  {
    id: "africanus", nombre: "Australopithecus africanus", linaje: "australo", p: 53,
    edad: [3.0, 2.1], edadTexto: "3,0-2,1 Ma", cerebro: [450, 550],
    descubrimiento: "Raymond Dart identificó en 1924 el cráneo infantil de Taung (Sudáfrica), base de la primera descripción del género Australopithecus (publicada en 1925).",
    yacimientos: "Sudáfrica: Sterkfontein, Makapansgat, Taung.",
    hallazgos: "Cráneo y mandíbula del «niño de Taung», molde endocraneal, cráneo «Mrs. Ples» (STS 5), dientes y fragmentos mandibulares.",
    rasgos: "Solo se conoce en el sur de África. Cara algo prognata, frente huidiza y arcos superciliares marcados. La posición del agujero occipital sugiere bipedismo constante. Unos 1,30 m y 30-40 kg; omnívoro, vivía en bosques de galería junto a los ríos.",
    nota: { tipo: "errata", texto: "El catálogo fecha el hallazgo de Taung en 1924 (prefacio y ficha) y en 1925 (p. 29). La pieza se identificó en 1924 y Dart la publicó en 1925.", fuentes: [] }
  },
  {
    id: "boisei", nombre: "Paranthropus boisei", linaje: "parantropo", p: 65,
    edad: [2.3, 1.4], edadTexto: "2,3-1,4 Ma", cerebro: [475, 545],
    descubrimiento: "Mary Leakey halló en 1959 un cráneo con dientes en la garganta de Olduvai (Tanzania).",
    yacimientos: "Tanzania: Peninj, Olduvai. Malaui: Malema. Kenia: Koobi Fora, Nachukui, Chesowanja. Etiopía: Konso, Shungura.",
    hallazgos: "Cráneos, dientes, mandíbulas, un tobillo, huesos del pulgar y de la pierna.",
    rasgos: "Cráneo grande, cara larga y mandíbula poderosa; pómulos muy anchos y molares enormes. Los músculos masticadores se anclaban en una cresta sagital. Dieta de semillas, raíces y tubérculos, con frutos, hojas e insectos; no se sabe si comía carne.",
    nota: {
      tipo: "actualizacion",
      texto: "En Nyayanga (Kenia) aparecen herramientas olduvayenses de 2,6-3,0 Ma junto a los restos más antiguos conocidos de Paranthropus, lo que reabre la pregunta de quién fabricó las primeras herramientas.",
      fuentes: [{ cita: "Plummer, T. W. et al. (2023). Expanded geographic distribution and dietary strategies of the earliest Oldowan hominins and Paranthropus. Science, 379, 561-566.", doi: "10.1126/science.abo7452" }]
    }
  },
  {
    id: "rudolfensis", nombre: "Homo rudolfensis", linaje: "homo", p: 73,
    edad: [2.5, 1.8], edadTexto: "2,5-1,8 Ma", cerebro: [750, 752],
    descubrimiento: "Bernard Ngeneo halló en 1972, cerca del lago Turkana, un cráneo muy fragmentado (KNM-ER 1470).",
    yacimientos: "Kenia: formación de Koobi Fora. Malaui: Uraha.",
    hallazgos: "Varios cráneos, mandíbula (UR 501), dientes y huesos de pierna, brazo y pelvis.",
    rasgos: "Para el catálogo es la especie más antigua del género Homo. Piernas y pelvis indican una marcha bípeda más frecuente y prolongada que la de especies anteriores. Unos 1,5 m y 45-50 kg; dieta con mucha parte vegetal. No se han hallado herramientas asociadas directamente.",
    nota: { tipo: "errata", texto: "El rango cerebral (750-752 cm³) refleja en la práctica un único cráneo bien estimado (KNM-ER 1470). La mandíbula de Ledi-Geraru (2,8 Ma), citada en el propio catálogo (p. 50), sería más antigua que cualquier H. rudolfensis.", fuentes: [{ cita: "Villmoare, B. et al. (2015). Early Homo at 2.8 Ma from Ledi-Geraru, Afar, Ethiopia. Science, 347, 1352-1355.", doi: "10.1126/science.aaa1343" }] }
  },
  {
    id: "habilis", nombre: "Homo habilis", linaje: "homo", p: 81,
    edad: [2.3, 1.5], edadTexto: "2,3-1,5 Ma", cerebro: [590, 687],
    descubrimiento: "La primera pieza, una mandíbula, se halló en Olduvai en 1959 (el catálogo atribuye el hallazgo a Heselo Mukuri).",
    yacimientos: "Kenia: Koobi Fora, Ileret. Tanzania: Olduvai. Etiopía: Hadar. Sudáfrica: Sterkfontein, Swartkrans, Kromdraai.",
    hallazgos: "Mandíbulas, huesos del cráneo, dientes, huesos de mano y pie, húmeros y fémures.",
    rasgos: "Es «la especie más difícil de asir»: reúne rasgos de australopitecos (dientes) y de Homo, con un cerebro pequeño para el género (590-687 cm³, quizá más de 800). Se incluyó en Homo por las herramientas cercanas, cuando se creía que solo el género Homo fabricaba útiles; hoy sabemos que hay herramientas más antiguas.",
    nota: null
  },
  {
    id: "ergaster", nombre: "Homo ergaster", linaje: "homo", p: 91,
    edad: [1.9, 1.4], edadTexto: "1,9-1,4 Ma", cerebro: [510, 900],
    descubrimiento: "Richard Leakey halló los primeros restos en 1971 en Koobi Fora (Kenia); la especie se nombró en 1975 e incorporó fósiles descritos por John Robinson en 1949.",
    yacimientos: "Kenia: Koobi Fora, lago Turkana. Sudáfrica: Swartkrans.",
    hallazgos: "Cráneo con mandíbula, pelvis, columna, huesos de brazos y piernas y el esqueleto del «niño de Turkana» (KNM-WT 15000).",
    rasgos: "Muchos especialistas lo consideran la forma africana temprana de H. erectus. Alto y esbelto, plenamente erguido y corredor resistente. El niño de Turkana medía 1,59 m; el catálogo calcula unos 1,85 m para un adulto. Allí donde aparecen herramientas con sus restos también hay Paranthropus boisei, posible fabricante alternativo.",
    nota: { tipo: "aviso", texto: "La estatura adulta proyectada a partir del niño de Turkana depende del ritmo de crecimiento que se suponga, y estudios posteriores han propuesto cifras menores. Conviene presentarla como estimación discutida.", fuentes: [] }
  },
  {
    id: "erectus", nombre: "Homo erectus", linaje: "homo", p: 101,
    edad: [1.9, 0.11], edadTexto: "1,9 Ma-110 000 años", cerebro: [870, 1150],
    descubrimiento: "Eugène Dubois halló en 1891 una bóveda craneal en Trinil (Java, Indonesia).",
    yacimientos: "Indonesia: Sangiran, Sambungmacan, Trinil, Ngandong, Kedung Brubus, Mojokerto. Georgia: Dmanisi. Sudáfrica: Saldanha. Argelia: Tighennif (Ternifine). Kenia, Tanzania, Etiopía, Marruecos.",
    hallazgos: "Fragmentos de cráneo, dientes, mandíbulas y huesos de las extremidades.",
    rasgos: "Se considera la primera especie de Homo que salió de África, aunque no es seguro que los fósiles africanos, europeos y asiáticos pertenezcan a la misma especie. Bípedo como nosotros, de 1,45 a 1,80 m y 50-60 kg, con dieta muy variable. Nariz cartilaginosa (mejor regulación térmica del aire) y pulgar flexible para la motricidad fina.",
    nota: { tipo: "errata", texto: "El catálogo sitúa Ternifine en Túnez. El yacimiento (hoy Tighennif) está en Argelia, como el propio catálogo indica en la p. 61.", fuentes: [] }
  },
  {
    id: "heidelbergensis", nombre: "Homo heidelbergensis", linaje: "homo", p: 109,
    edad: [0.6, 0.2], edadTexto: "600 000-200 000 años", cerebro: [1116, 1450],
    descubrimiento: "Daniel Hartmann halló en 1907 la mandíbula de Mauer, cerca de Heidelberg (Alemania).",
    yacimientos: "Alemania: Mauer, Steinheim. España: Atapuerca. Gran Bretaña: Swanscombe. Francia: Arago. Hungría: Vértesszöllös. Grecia: Petralona. Marruecos: Thomas Quarry. Israel: Zuttiyeh. Etiopía: Bodo. Zambia: Kabwe. Sudáfrica: Elandsfontein.",
    hallazgos: "Huesos del cráneo, mandíbulas y huesos de brazos y piernas.",
    rasgos: "Difiere poco de H. erectus y de los neandertales, por lo que se discute si es una especie propia. El catálogo le atribuye las lanzas y bastones arrojadizos de madera de Schöningen. Medía 1,60-1,75 m y pesaba 60-80 kg; su dieta tendría, como en todos los cazadores-recolectores, una alta proporción vegetal.",
    nota: {
      tipo: "actualizacion",
      texto: "Una nueva datación sitúa las lanzas de Schöningen hacia 200 000 años y las vincula con neandertales, no con H. heidelbergensis. Además, el ADN de la Sima de los Huesos (Atapuerca) los relaciona con el linaje neandertal.",
      fuentes: [{ cita: "Hutson, J. M. et al. (2025). Revised age for Schöningen hunting spears indicates intensification of Neanderthal cooperative behavior around 200,000 years ago. Science Advances, 11(19).", doi: "10.1126/sciadv.adv0752" }]
    }
  },
  {
    id: "neanderthalensis", nombre: "Homo (sapiens) neanderthalensis", linaje: "homo", p: 121,
    edad: [0.175, 0.03], edadTexto: "hacia 175 000-30 000 años (según el catálogo)", cerebro: [1200, 1740],
    descubrimiento: "Philippe-Charles Schmerling halló fósiles en Engis (Bélgica) en 1829; William King definió la especie en 1864 sobre los restos de la gruta Feldhofer (valle de Neander, 1856).",
    yacimientos: "Europa (de Portugal y España a Georgia), Asia central (Uzbekistán, Rusia) y Oriente Próximo (Israel, Irak, Siria, Turquía).",
    hallazgos: "Esqueletos casi completos de más de 300 individuos.",
    rasgos: "Más robustos que nosotros, con cráneo grande y alargado, arcos superciliares marcados, nariz ancha y sin mentón. El hioides indica capacidad anatómica para hablar. Dieta variable (isótopos con mucha carne; el sarro dental revela también muchas plantas). Fabricaban mangos con brea de abedul, probablemente hacían fuego, usaban ocre rojo y enterraban a sus muertos. Se mezclaron con Homo sapiens y con denisovanos.",
    nota: { tipo: "errata", texto: "El catálogo afirma que King identificó la especie en 1856; los restos del valle de Neander aparecieron en 1856 y King publicó el nombre en 1864. El rango temporal es conservador: otros autores llevan el linaje neandertal a más de 400 000 años (Sima de los Huesos).", fuentes: [] }
  },
  {
    id: "sapiens", nombre: "Homo sapiens", linaje: "homo", p: 135,
    edad: [0.3, 0], edadTexto: "desde hace unos 300 000 años", cerebro: [1100, 1900],
    descubrimiento: "Los restos de Jebel Irhoud (Marruecos), de unos 300 000 años, se publicaron en 2017 como los más antiguos de nuestra especie; antes lo eran los de Omo (Etiopía), de unos 195 000 años.",
    yacimientos: "Todo el planeta.",
    hallazgos: "—",
    rasgos: "Única especie humana viva, aunque nuestro genoma conserva pequeñas proporciones de neandertales, denisovanos y otros humanos arcaicos. Cara pequeña y vertical, frente alta, mentón y gran neurocráneo; columna en S y pelvis que perfeccionan el bipedismo. Primera especie que colonizó todo el mundo, capaz de transformar el ambiente a escala inédita y de cooperar a escala global.",
    nota: {
      tipo: "errata",
      texto: "El catálogo dice que los restos de Jebel Irhoud «se descubrieron en 2017»: el yacimiento se conoce desde 1961 y en 2017 se publicaron los nuevos fósiles y su datación.",
      fuentes: [
        { cita: "Hublin, J.-J. et al. (2017). New fossils from Jebel Irhoud, Morocco and the pan-African origin of Homo sapiens. Nature, 546, 289-292.", doi: "10.1038/nature22336" },
        { cita: "Richter, D. et al. (2017). The age of the hominin fossils from Jebel Irhoud, Morocco, and the origins of the Middle Stone Age. Nature, 546, 293-296.", doi: "10.1038/nature22335" }
      ]
    }
  }
];

window.SH.linajes = {
  primeros: { nombre: "Primeros homininos", color: "--l1" },
  australo: { nombre: "Australopithecus", color: "--l2" },
  parantropo: { nombre: "Paranthropus", color: "--l3" },
  homo: { nombre: "Homo", color: "--l4" }
};
