/*
 * SER HUMANOS · las trece salas
 * Una sala por ensayo del catálogo. Síntesis de redacción propia; p = página impresa.
 * edad: anclaje en la línea del tiempo (Ma); lado: -1 izquierda, 1 derecha; null = laboratorio del presente.
 * Tipos de reto: clasificar, ordenar, test, numerico, caja, prediccion-dieta, prediccion-tai, mapa.
 */
window.SH = window.SH || {};

window.SH.fuente = {
  cita: "Giemsch, L. y Haidle, M. N. (Eds.). (2022). Being Human. The Beginnings of Our Culture. Volumen que acompaña a la exposición temporal (5 de mayo de 2021-27 de marzo de 2022), Archäologisches Museum Frankfurt. Nünnerich-Asmus (Archäologisches Museum Frankfurt – Publikationen 6; ROCEEH Perspectives 3).",
  isbn: "978-3-96176-193-7",
  nota: "Síntesis y traducción de redacción propia con fines docentes; no reproduce imágenes ni sustituye la lectura del catálogo."
};

window.SH.salas = [
/* ------------------------------------------------------------------ 1 */
{
  id: "s01", n: 1, objeto: "red", edad: 7.6, lado: 0,
  titulo: "En busca de los comienzos de nuestra cultura",
  original: "In search of the beginnings of our culture",
  autoria: "Liane Giemsch y Miriam Noël Haidle", paginas: "10-14",
  idea: "La cultura no empieza con el arte ni con la religión: empieza con el hacer cotidiano que se aprende en grupo y se transmite.",
  sintesis: [
    "Las comisarias acotan el periodo que estudia la exposición: entre 3,3 y 1 millones de años en África. Para entonces los homininos ya caminaban erguidos y tenían las manos libres; de la herencia primate conservaban la habilidad manipuladora y una infancia larga rodeada de parientes, un buen caldo de cultivo para el aprendizaje social.",
    "Sobre esa base aparecen las herramientas de piedra de Lomekwi (hace algo más de 3 Ma), la talla controlada de decenas de lascas de un solo núcleo hacia 2,3 Ma, la primera salida de África hace más de 2 Ma, los bifaces achelenses desde 1,8 Ma y una relación cada vez más estrecha con el fuego. Nada de esto lo inventó un individuo aislado: el grupo probaba, imitaba, corregía y descomponía las acciones complejas en módulos aprendibles.",
    "La pregunta de fondo es dónde está la cultura. La respuesta del catálogo es deliberadamente amplia: la cultura es una práctica socialmente aprendida de relacionarse con uno mismo, con los demás y con el entorno, que se comunica a lo largo de generaciones. No es el producto excepcional, sino el hacer mismo (performance) y el habitus. Por eso cabe afirmar que los humanos son seres culturales desde hace millones de años y que han evolucionado con y a través de la cultura."
  ],
  conceptos: [
    { t: "Cultura (como práctica)", d: "Práctica aprendida socialmente y relativamente duradera, transmitida entre generaciones, que impregna la vida cotidiana.", p: 14 },
    { t: "Hominino", d: "Miembro del linaje humano posterior a la separación respecto de los chimpancés.", p: 11 },
    { t: "Módulo de acción", d: "Fragmento de una acción compleja que puede aprenderse y ejecutarse por separado.", p: 12 },
    { t: "Performance y habitus", d: "Las dos caras de la conducta cultural: las acciones concretas y las disposiciones incorporadas.", p: 14 }
  ],
  pensar: "Si la cultura es «el hacer mismo», ¿qué ganamos y qué perdemos al llamar cultura a la talla de piedra y no solo al arte? ¿Dónde pondría usted el límite entre hábito, tradición y cultura?",
  aula: "En Primaria, el arranque de la Prehistoria puede plantearse desde objetos cotidianos («¿quién te enseñó a usar esto?») antes que desde las pinturas rupestres: la cultura como algo que se aprende de otros.",
  avisos: [],
  retos: [{
    tipo: "clasificar", titulo: "¿Dónde empieza la cultura?",
    consigna: "Clasifique cada conducta según la definición de cultura del catálogo (p. 14).",
    categorias: ["Conducta heredada", "Aprendizaje individual", "Cultura: práctica aprendida en grupo y transmitida"],
    items: [
      { t: "Un antílope hambriento pace en cuanto encuentra hierba, sin mediación alguna.", c: 0, e: "Respuesta inmediata a una necesidad; no exige aprendizaje social (p. 86)." },
      { t: "La comunidad de Sonso (Uganda) usa esponjas de hojas para sacar miel aunque se le muestre un palo.", c: 2, e: "Tradición de grupo que se mantiene aunque haya otra técnica disponible (pp. 126-127)." },
      { t: "Un individuo descubre por azar que una piedra rota corta, pero nadie más lo aprende.", c: 1, e: "Sin transmisión social, el hallazgo muere con su autor." },
      { t: "En Lokalalei 2C se extraen más de 50 lascas de un núcleo girándolo de forma planificada.", c: 2, e: "Un saber técnico de esa complejidad solo se adquiere y conserva en grupo (p. 47)." },
      { t: "Las crías de borrego cimarrón siguen a la manada y años después guían la migración anual.", c: 2, e: "Tradición migratoria transmitida socialmente (p. 103; Jesmer et al., 2018)." },
      { t: "El recién nacido aprieta con fuerza el dedo que le toca la palma.", c: 0, e: "Reflejo innato, no aprendido." }
    ]
  }]
},
/* ------------------------------------------------------------------ 2 */
{
  id: "s02", n: 2, objeto: "espiral", edad: 6.0, lado: -1,
  titulo: "Entre naturaleza y cultura: los dos orígenes de la humanidad",
  original: "Between nature and culture: the two origins of humanity",
  autoria: "Thomas Junker", paginas: "16-24",
  idea: "Somos primates por el cuerpo y seres culturales por el modo de vida; la capacidad cultural es, a su vez, una adaptación biológica.",
  sintesis: [
    "Junker recorre la historia de una idea incómoda. Linneo (1735) incluyó al ser humano en el reino animal, entre los cuadrúpedos y cerca de los simios, aunque creía en la creación separada de cada especie. La búsqueda posterior de una diferencia anatómica absoluta fracasó: solo aparecieron diferencias cuantitativas. Darwin explicó las semejanzas por descendencia común, y la biología molecular situó a nuestros parientes más próximos, los chimpancés, y la separación de ambos linajes hace entre cinco y siete millones de años. Entre esa separación y los primeros humanos median los australopitecos, bípedos sin un cerebro mayor que el de un chimpancé.",
    "Frente a quienes postulan un salto inexplicable para la biología (el alma de Descartes, las «formas simbólicas» de Cassirer), el autor propone un puente: la capacidad cultural es una adaptación que combina la estabilidad de la información genética con la flexibilidad de la experiencia individual. Los animales sociales evitan tener que aprenderlo todo por sí mismos (con los riesgos que eso conlleva) copiando a otros; surge así un segundo almacén de información, la cultura, que no se hereda por los genes.",
    "La cultura debe ser libre y abierta a lo nuevo, pero no puede contradecir indefinidamente la biología: el autor cita a los shakers, comunidad célibe que no podía perpetuarse. El ser humano vive en dos mundos, y esa doble condición es «un experimento evolutivo de resultado desconocido»."
  ],
  conceptos: [
    { t: "Capacidad cultural", d: "Capacidad de aprendizaje social, determinada genéticamente, que permite heredar experiencia sin genes.", p: 23 },
    { t: "Australopitecos", d: "«Simios del sur»: homininos bípedos de cerebro pequeño, últimos antepasados aún simiescos.", p: 19 },
    { t: "Diferencia cuantitativa", d: "Diferencia de grado (proporciones, tamaño relativo del cerebro), no de naturaleza.", p: 19 },
    { t: "Segundo almacén de información", d: "La cultura: unidades transmitidas por el ejemplo y la crianza, no por los genes.", p: 23 }
  ],
  pensar: "El ejemplo de los shakers es llamativo, pero ¿basta la supervivencia biológica para evaluar una cultura? ¿Qué otras culturas han persistido por medios no reproductivos (adopción, conversión, escuela)?",
  aula: "La discusión «¿qué nos hace humanos?» funciona bien como debate inicial en el Grado; conviene separar lo que afirma la biología de lo que sostienen la filosofía o la teología, sin enfrentarlas de forma caricaturesca.",
  avisos: [
    { tipo: "aviso", texto: "Junker sitúa los primeros humanos hacia 2,5 Ma (p. 19); otros capítulos del mismo catálogo mencionan la mandíbula de Ledi-Geraru, de 2,8 Ma (p. 50). La separación chimpancé-humano se da como 5-7 Ma (p. 19) y como 7-8 Ma (p. 123): las estimaciones moleculares varían según el método.", fuentes: [] }
  ],
  retos: [{
    tipo: "clasificar", titulo: "¿Quién lo sostuvo?",
    consigna: "Relacione cada idea con su autor o con la disciplina que la aportó.",
    categorias: ["Linneo", "Darwin", "Descartes", "Cassirer", "Biología molecular"],
    items: [
      { t: "Incluye a Homo sapiens en el reino animal, entre los cuadrúpedos, en 1735.", c: 0, e: "Primera edición del Systema Naturæ (p. 17)." },
      { t: "Las propiedades de los seres vivos cambian por la interacción entre herencia y selección.", c: 1, e: "La teoría de la evolución convierte el sistema natural en árbol genealógico (p. 19)." },
      { t: "El cuerpo es una máquina; solo el alma humana, indivisible e inmortal, escapa a ella.", c: 2, e: "Dualismo cartesiano (p. 20)." },
      { t: "El lenguaje, el mito o la ciencia son «fenómenos primordiales del espíritu» sin explicación causal.", c: 3, e: "Las formas simbólicas (p. 20)." },
      { t: "Comparando proteínas y ADN, fecha la separación de humanos y chimpancés.", c: 4, e: "Último antepasado común hace 5-7 Ma según Junker (p. 19)." }
    ]
  }]
},
/* ------------------------------------------------------------------ 3 */
{
  id: "s03", n: 3, objeto: "pilares", edad: 2.8, lado: 1,
  titulo: "Evolución biocultural humana temprana",
  original: "Early human biocultural evolution",
  autoria: "Friedemann Schrenk", paginas: "26-38",
  idea: "Los cambios climáticos empujaron a los homininos; la respuesta del género Homo fue cultural: herramientas en lugar de mandíbulas.",
  sintesis: [
    "Schrenk resume unos 7 millones de años (350 000 generaciones). El enfriamiento global desde hace unos 10 Ma redujo la selva tropical; algunas poblaciones de grandes simios ocuparon las orillas de las nuevas sabanas, donde vadear en busca de alimento acuático habría estabilizado la marcha bípeda. Sahelanthropus (Chad, 7 Ma), Orrorin (Kenia, 6 Ma) y Ardipithecus (Etiopía, 5,8 Ma) muestran ya indicios de bipedismo, y la reducción de los caninos sugiere cambios en la conducta social.",
    "Los australopitecos (desde Au. anamensis, unos 4 Ma) tenían cerebros del tamaño del de un chimpancé, molares grandes y una dieta oportunista; la cooperación del grupo era su principal defensa frente a los depredadores. Un nuevo enfriamiento, desde hace 2,8 Ma, provocó tres tipos de respuesta: la expansión pasiva (poblaciones que siguen a su bioma, como Au. africanus hacia el norte), la adaptación evolutiva (los Paranthropus, «cascanueces» de molares enormes y cresta sagital) y la evolución biocultural: Homo rudolfensis tritura con piedras lo que otros trituran con los dientes, a costa de depender cada vez más de las herramientas.",
    "Homo erectus, con cuerpo robusto, piernas largas, prensión de precisión y cerebro creciente (de 800-900 cm³ a más de 1100-1200 cm³), sale de África hace unos 2 Ma y llega a China (2,1 Ma), al Cáucaso (1,8 Ma) y, más tarde, a Europa y Filipinas. El autor concluye con una lectura para el presente: la transferencia de conocimiento y el intercambio genético y cultural fueron la condición de nuestra expansión, y el aislamiento no es una estrategia viable ante los retos globales."
  ],
  conceptos: [
    { t: "Evolución biocultural", d: "Interacción entre cambio biológico y conducta cultural; en Homo, la herramienta sustituye a la especialización anatómica.", p: 33 },
    { t: "Expansión pasiva", d: "Desplazamiento de una población que sigue a su ecosistema cuando este se desplaza.", p: 31 },
    { t: "Megadontia", d: "Dientes de gran tamaño, como los molares de Paranthropus.", p: 31 },
    { t: "Prensión de precisión", d: "Oposición del pulgar que permite que las yemas se toquen y manipulen objetos con control.", p: 36 }
  ],
  pensar: "El cierre de Schrenk traslada una conclusión paleoantropológica a la política actual. ¿Es legítimo ese salto? ¿Qué condiciones debería cumplir una analogía histórica para ser rigurosa en el aula?",
  aula: "La tríada «moverse, cambiar el cuerpo o inventar» es un buen organizador para explicar en Primaria cómo responden los seres vivos a un cambio del clima.",
  avisos: [
    { tipo: "aviso", texto: "La hipótesis del vadeo como origen del bipedismo (p. 27) es una entre varias y no goza de consenso. Del mismo modo, el «uso controlado del fuego» en Koobi Fora hace 1,5 Ma (p. 36) es una interpretación discutida; el capítulo de Giemsch (sala 6) es más prudente.", fuentes: [] }
  ],
  retos: [
    {
      tipo: "clasificar", titulo: "Tres respuestas al enfriamiento de hace 2,8 Ma",
      consigna: "Asigne cada caso al tipo de respuesta que describe Schrenk (p. 31-33).",
      categorias: ["Expansión pasiva", "Adaptación evolutiva", "Evolución biocultural"],
      items: [
        { t: "Poblaciones de Au. africanus se desplazan hacia el ecuador por corredores fluviales.", c: 0, e: "Siguen al bioma que se contrae (p. 31)." },
        { t: "Paranthropus desarrolla molares enormes y una cresta sagital para los músculos masticadores.", c: 1, e: "Respuesta anatómica a una dieta dura y fibrosa (p. 31)." },
        { t: "Homo rudolfensis tritura alimentos vegetales duros golpeándolos con piedras.", c: 2, e: "La herramienta sustituye a la mandíbula (p. 33)." },
        { t: "Arcos cigomáticos anchos y cara ancha en las poblaciones de África oriental.", c: 1, e: "Rasgos de los «cascanueces» (p. 31)." },
        { t: "Creciente independencia del ambiente, pero dependencia de las herramientas.", c: 2, e: "El precio de la vía cultural (p. 33)." }
      ]
    },
    {
      tipo: "ordenar", titulo: "La galería de antepasados",
      consigna: "Ordene de más antigua a más reciente según su primera aparición en las fichas del catálogo.",
      items: [
        { t: "Sahelanthropus tchadensis", d: "hacia 7 Ma" },
        { t: "Ardipithecus kadabba", d: "5,8 Ma" },
        { t: "Australopithecus afarensis", d: "3,76 Ma" },
        { t: "Homo rudolfensis", d: "2,5 Ma" },
        { t: "Paranthropus boisei", d: "2,3 Ma" },
        { t: "Homo ergaster", d: "1,9 Ma" },
        { t: "Homo heidelbergensis", d: "600 000 años" },
        { t: "Homo sapiens", d: "300 000 años" }
      ]
    }
  ]
},
/* ------------------------------------------------------------------ 4 */
{
  id: "s04", n: 4, objeto: "chopper", edad: 2.6, lado: -1,
  titulo: "El Olduvayense: la primera etapa de la tecnología lítica",
  original: "The earliest stage of human stone tool technology: the Oldowan",
  autoria: "Michael Bolus", paginas: "40-52",
  idea: "Las lascas importaban tanto como los cantos tallados: el Olduvayense es, ante todo, una gran tradición de producción de lascas.",
  sintesis: [
    "El término procede de la garganta de Olduvai (Tanzania), donde Louis y, sobre todo, Mary Leakey definieron esta industria. Se la llamó «industria de cantos tallados» (Modo 1 de Grahame Clark), pero hoy sabemos que los cantos eran a menudo núcleos y que las lascas extraídas eran igual de importantes. Bolus, siguiendo a Haidle, prefiere entenderlo como un término tecnocronológico amplio, entre 2,6 y 1,6 Ma, y no como una secuencia lineal de lo simple a lo complejo.",
    "Antes del Olduvayense está el Lomekwiense: en Lomekwi 3 (Turkana occidental, Kenia), útiles de unos 3,3 Ma, tallados golpeando la piedra contra un yunque o mediante técnica bipolar. En el Olduvayense, en cambio, el núcleo se sostiene en una mano y se golpea con el percutor que sostiene la otra; la producción de lascas es más dirigida y puede ser seriada. Los yacimientos más antiguos son Ledi-Geraru (2,61 Ma) y Gona (2,6 Ma), en Etiopía. En Lokalalei 2C (2,34 Ma), los remontajes muestran más de 50 lascas extraídas de un único núcleo, signo de planificación y destreza.",
    "Fuera de África, Dmanisi (Georgia, 1,8 Ma) demuestra que se podía salir del continente con un utillaje simple, sin bifaces. Pero como el Olduvayense africano es casi un millón de años más antiguo, tener herramientas no bastaba por sí solo para expandirse. El autor subraya dos rasgos cognitivos: el conocimiento de la mecánica de fractura de la roca y la planificación anticipada, es decir, fabricar útiles para una necesidad futura y aún indeterminada."
  ],
  conceptos: [
    { t: "Lomekwiense", d: "Industria de Lomekwi 3 (unos 3,3 Ma): grandes núcleos y lascas, percutores y yunques; talla sobre yunque o bipolar.", p: 44 },
    { t: "Percusión a mano alzada", d: "El núcleo se sostiene libremente en una mano y se golpea con el percutor; típica del Olduvayense.", p: 44 },
    { t: "Chopper / chopping tool", d: "Canto con filo obtenido por extracciones en una cara (chopper) o en ambas (chopping tool).", p: 44 },
    { t: "Remontaje", d: "Reconstrucción de la secuencia de talla uniendo lascas y núcleo; revela la planificación.", p: 47 },
    { t: "Planificación anticipada", d: "Producir útiles para una necesidad futura, en lugar y momento desconocidos.", p: 51 }
  ],
  pensar: "Si las primeras herramientas son anteriores al género Homo, ¿qué consecuencias tiene para la idea de que «el ser humano es el animal que fabrica herramientas»?",
  aula: "La talla experimental es inviable en el aula de Primaria, pero los remontajes se trabajan muy bien como rompecabezas: reconstruir un objeto a partir de sus fragmentos y deducir el orden de los golpes.",
  avisos: [
    { tipo: "actualizacion", texto: "Desde 2023, Nyayanga (Kenia) aporta herramientas olduvayenses de 2,6-3,0 Ma y restos de Paranthropus, lo que adelanta el Olduvayense y complica su atribución. La datación y asociación de Lomekwi 3 también han sido cuestionadas (Domínguez-Rodrigo y Alcalá, 2019, Journal of African Archaeology, 17(2), 173-176).", fuentes: [
      { cita: "Plummer, T. W. et al. (2023). Expanded geographic distribution and dietary strategies of the earliest Oldowan hominins and Paranthropus. Science, 379, 561-566.", doi: "10.1126/science.abo7452" },
      { cita: "Harmand, S. et al. (2015). 3.3-million-year-old stone tools from Lomekwi 3, West Turkana, Kenya. Nature, 521, 310-315.", doi: "10.1038/nature14464" },
      { cita: "Braun, D. R. et al. (2019). Earliest known Oldowan artifacts at >2.58 Ma from Ledi-Geraru, Ethiopia. PNAS, 116, 11712-11717.", doi: "10.1073/pnas.1820177116" }
    ] }
  ],
  retos: [
    {
      tipo: "clasificar", titulo: "La tipología de Mary Leakey",
      consigna: "Identifique cada útil a partir de su descripción (p. 44-45).",
      categorias: ["Chopper", "Chopping tool", "Poliedro", "Discoide", "Esferoide", "Raedera pesada", "Raedera ligera"],
      items: [
        { t: "Canto con un único filo obtenido por extracciones en una sola cara.", c: 0, e: "Chopper." },
        { t: "Canto con filo preparado mediante extracciones en ambas caras.", c: 1, e: "Chopping tool." },
        { t: "Pieza angulosa con tres o más aristas trabajadas que suelen cortarse; para Schick y Toth, núcleos muy reducidos.", c: 2, e: "Poliedro." },
        { t: "Núcleo plano, de sección lenticular o en D, con un filo dentado trabajado casi en todo su contorno.", c: 3, e: "Discoide." },
        { t: "Canto tallado de forma esférica en el que las aristas salientes no se han eliminado del todo.", c: 4, e: "Esferoide." },
        { t: "Pieza plana con retoque abrupto en uno o varios bordes.", c: 5, e: "Raedera pesada." },
        { t: "Útil de retoque fabricado sobre una lasca.", c: 6, e: "Raedera ligera." }
      ]
    },
    {
      tipo: "test", titulo: "Lomekwiense u Olduvayense",
      preguntas: [
        { q: "En Lomekwi 3 la piedra se golpeaba…", o: ["Sosteniéndola en una mano y percutiendo con la otra", "Contra un yunque o mediante técnica bipolar", "Con un percutor blando de asta"], c: 1, e: "Ambas técnicas son raras en el Olduvayense (p. 44)." },
        { q: "¿Qué demuestra Dmanisi según Bolus?", o: ["Que sin bifaces no se podía salir de África", "Que se salió de África con un utillaje simple, aunque las herramientas solas no explican la expansión", "Que el Olduvayense nació en el Cáucaso"], c: 1, e: "El Olduvayense africano es casi un millón de años anterior (p. 47)." },
        { q: "¿Por qué Lokalalei 2C es especial?", o: ["Por sus bifaces simétricos", "Por los remontajes con más de 50 lascas de un solo núcleo", "Por las primeras huellas de fuego"], c: 1, e: "Indican planificación y destreza técnica (p. 47)." }
      ]
    }
  ]
},
/* ------------------------------------------------------------------ 5 */
{
  id: "s05", n: 5, objeto: "bifaz", edad: 1.76, lado: 1,
  titulo: "De África al mundo: el Achelense",
  original: "From Africa around the world: the Acheulean",
  autoria: "Liane Giemsch", paginas: "54-64",
  idea: "El bifaz acompañó a la humanidad 1,7 millones de años: la tradición tecnológica más longeva, estable y, a la vez, abierta a la simetría.",
  sintesis: [
    "Hacia 1,76 Ma aparecen en África oriental (Kokiselei 4 en Kenia, Konso-Gardula y Gona en Etiopía) piezas talladas por las dos caras: los bifaces. El nombre procede de Saint-Acheul (norte de Francia), donde Boucher de Perthes los interpretó como obra humana en la década de 1830. Frente al Olduvayense, el Achelense parte de grandes lascas extraídas de bloques, a menudo apoyados en un yunque o en el suelo, lo que exige más fuerza, coordinación y precisión.",
    "Se distinguen tres fases: temprana (1,76-1 Ma), con bifaces de base gruesa y punta estrecha; media (1-0,6 Ma), con formas ovales y triangulares más simétricas; y tardía (0,6-0,3 Ma), con piezas más finas gracias, probablemente, a la percusión blanda con percutores de asta o hueso. La técnica Levallois anuncia la Edad de Piedra Media, en la que útiles más pequeños y enmangados sustituyen a las grandes piezas manuales, hacia 300 000-200 000 años.",
    "Los útiles característicos son el bifaz (punta estrecha y base ancha), el hendedor (filo transversal ancho) y el pico (más grueso, de sección triangular). Se usaron para descarnar grandes animales y trabajar madera. La distancia de transporte de materias primas pasa de 15 km a 45 km en el Achelense medio. La tecnología llega al Levante hace 1,4 Ma (‘Ubeidiya) y a Europa entre 900 000 y 500 000 años. Su conservadurismo revela una transmisión estable en grupos pequeños y móviles; su simetría y estandarización, según la autora, sentaron bases para el simbolismo y el lenguaje."
  ],
  conceptos: [
    { t: "Bifaz", d: "Útil de más de 10 cm, tallado por ambas caras, en forma de gota o triángulo, con punta y base.", p: 58 },
    { t: "Hendedor", d: "Gran útil con filo ancho transversal al eje en lugar de punta; una suerte de bifaz de filo ancho.", p: 60 },
    { t: "Percusión blanda", d: "Talla con percutor orgánico (asta, hueso) que permite extraer lascas más finas.", p: 57 },
    { t: "Técnica Levallois", d: "Preparación del núcleo para obtener lascas finas de forma predeterminada; transición a la Edad de Piedra Media.", p: 58 },
    { t: "Inercia tecnológica", d: "Estabilidad de una tradición durante miles de generaciones.", p: 63 }
  ],
  pensar: "¿Puede una herramienta casi idéntica durante un millón de años ser prueba de capacidades cognitivas complejas? ¿Qué nos dice la estabilidad sobre la forma en que se enseñaba?",
  aula: "La simetría axial del bifaz es un puente natural con Matemáticas en Primaria: medir, doblar y comparar mitades de una silueta recortada.",
  avisos: [
    { tipo: "actualizacion", texto: "La estructura de troncos ensamblados de Kalambo Falls (Zambia), de al menos 476 000 años, muestra trabajo de la madera en un contexto achelense; el catálogo solo menciona allí restos vegetales.", fuentes: [
      { cita: "Barham, L. et al. (2023). Evidence for the earliest structural use of wood at least 476,000 years ago. Nature, 622, 107-111.", doi: "10.1038/s41586-023-06557-9" },
      { cita: "Lepre, C. J. et al. (2011). An earlier origin for the Acheulian. Nature, 477, 82-85.", doi: "10.1038/nature10372" }
    ] }
  ],
  retos: [
    {
      tipo: "ordenar", titulo: "Las fases del Achelense",
      consigna: "Ordene de más antigua a más reciente (pp. 57-58). Los bifaces de Konso (fig. 3) muestran la misma tendencia: de piezas casi unifaciales a una talla bifacial extensa.",
      items: [
        { t: "Base gruesa y redondeada, extremo estrecho y apuntado", d: "Achelense temprano, 1,76-1 Ma" },
        { t: "Formas ovales y triangulares, más simetría y equilibrio", d: "Achelense medio, 1-0,6 Ma" },
        { t: "Piezas finas y simétricas, con muchos negativos; percusión blanda", d: "Achelense tardío, 0,6-0,3 Ma" },
        { t: "Útiles pequeños y enmangados; lascas Levallois", d: "Edad de Piedra Media, desde unos 300 000 años" }
      ]
    },
    {
      tipo: "clasificar", titulo: "Útiles y técnicas",
      consigna: "Relacione cada descripción con el término correcto.",
      categorias: ["Bifaz", "Hendedor", "Pico", "Percusión blanda", "Técnica Levallois"],
      items: [
        { t: "Gran útil con un extremo apuntado y otro más ancho y redondeado.", c: 0, e: "p. 58." },
        { t: "Gran útil con filo ancho transversal al eje longitudinal.", c: 1, e: "p. 60." },
        { t: "Más grueso que el bifaz y de sección a menudo triangular.", c: 2, e: "p. 60." },
        { t: "Percutor de asta o hueso que permite piezas más finas.", c: 3, e: "p. 57." },
        { t: "Preparación del núcleo para obtener lascas finas y delgadas.", c: 4, e: "p. 58." }
      ]
    }
  ]
},
/* ------------------------------------------------------------------ 6 */
{
  id: "s06", n: 6, objeto: "hoguera", edad: 1.5, lado: -1,
  titulo: "El uso temprano del fuego",
  original: "Early human use of fire",
  autoria: "Liane Giemsch", paginas: "66-72",
  idea: "Usar el fuego no es lo mismo que producirlo: entre ambos median más de un millón de años y cuatro pasos.",
  sintesis: [
    "Para la autora, el control del fuego marca una frontera exclusiva entre humanos y animales. Sus ventajas son muchas: calor para colonizar latitudes y altitudes mayores, protección frente a depredadores y competidores en las cuevas, humo contra los insectos, limpieza de los lechos, luz que alarga el día y crea un espacio social para comer, contar y planificar. Exige además organizar el aprovisionamiento de combustible.",
    "El fuego también es técnico: endurece puntas de madera, facilita la talla de algunas rocas y, más tarde, permite fabricar materiales nuevos como la brea de abedul. Sirve para cazar y para gestionar el paisaje, y conserva los alimentos por secado y ahumado. Su ventaja principal, para muchos especialistas, es la cocción, que amplía la dieta, elimina toxinas y parásitos y ahorra energía digestiva.",
    "El proceso se resume en cuatro pasos: habituarse al fuego natural, usarlo, mantenerlo y producirlo. Las evidencias arqueológicas más antiguas (sedimentos, líticos o huesos alterados térmicamente) proceden de Koobi Fora (1,5 Ma), Chesowanja y Gadeb; las cuevas de Swartkrans y Wonderwerk aportan pruebas de hace un millón de años, y Gesher Benot Ya‘aqov (Israel), de unos 790 000 años, el primer posible hogar. Desde hace 400 000 años las evidencias aumentan mucho. El catálogo fecha la producción indudable del fuego hacia 30 000 años, con indicios neandertales anteriores."
  ],
  conceptos: [
    { t: "Uso pasivo del fuego", d: "Aprovechar los efectos de un incendio natural (alimentos expuestos, visibilidad).", p: 70 },
    { t: "Mantenimiento del fuego", d: "Alimentar y transportar un fuego natural sin saber encenderlo.", p: 70 },
    { t: "Producción del fuego", d: "Encender fuego a voluntad, donde y cuando se desee.", p: 70 },
    { t: "Hipótesis de la cocción", d: "La comida cocinada habría reducido el intestino y liberado energía para un cerebro mayor (Wrangham).", p: 70 }
  ],
  pensar: "La autora presenta el fuego como frontera «exclusiva» entre humanos y animales, pero cita a chimpancés de sabana que se mueven con calma entre incendios (Pruetz y Herzog, 2017). ¿Dónde estaría exactamente la frontera?",
  aula: "Ordenar los cuatro pasos del fuego es una actividad sencilla para Primaria que introduce una idea clave de la historia de la técnica: los descubrimientos son procesos, no instantes.",
  avisos: [
    { tipo: "actualizacion", texto: "En Barnham (Suffolk, Reino Unido) se han documentado sedimentos quemados, bifaces fracturados por el calor y dos fragmentos de pirita llevados al lugar, interpretados como la prueba más antigua de producción de fuego, hacia 400 000 años. Si se confirma, adelanta en unos 350 000 años la fecha que da el catálogo.", fuentes: [
      { cita: "Davis, R. et al. (2025). Earliest evidence of making fire. Nature.", doi: "10.1038/s41586-025-09855-6" },
      { cita: "Goren-Inbar, N. et al. (2004). Evidence of hominin control of fire at Gesher Benot Ya‘aqov, Israel. Science, 304, 725-727.", doi: "10.1126/science.1095443" },
      { cita: "Berna, F. et al. (2012). Microstratigraphic evidence of in situ fire in the Acheulean strata of Wonderwerk Cave. PNAS, 109, E1215-E1220.", doi: "10.1073/pnas.1117620109" }
    ] }
  ],
  retos: [
    {
      tipo: "ordenar", titulo: "Cuatro pasos hacia el fuego",
      consigna: "Ordene los pasos que propone la autora (p. 70).",
      items: [
        { t: "Habituarse: no huir ante un incendio natural", d: "como hacen hoy los chimpancés de sabana" },
        { t: "Usar: aprovechar lo que deja el incendio", d: "frutos, tubérculos y animales expuestos" },
        { t: "Mantener: alimentar y transportar el fuego", d: "prolongarlo y llevarlo a otro lugar" },
        { t: "Producir: encenderlo a voluntad", d: "por azar y experimentación" }
      ]
    },
    {
      tipo: "ordenar", titulo: "Cronología de las evidencias",
      consigna: "Ordene de más antigua a más reciente, incluida la actualización de 2025.",
      items: [
        { t: "Koobi Fora (Kenia): materiales alterados por el calor", d: "1,5 Ma" },
        { t: "Wonderwerk y Swartkrans (Sudáfrica): fuego en cueva", d: "hacia 1 Ma" },
        { t: "Gesher Benot Ya‘aqov (Israel): posible hogar", d: "hacia 790 000 años" },
        { t: "Barnham (Reino Unido): producción con pirita", d: "hacia 400 000 años" },
        { t: "Producción «clara» según el catálogo", d: "hacia 30 000 años" }
      ]
    }
  ]
},
/* ------------------------------------------------------------------ 7 */
{
  id: "s07", n: 7, objeto: "baobab", edad: 1.0, lado: 1,
  titulo: "¿Crudo o asado? Cómo cambió el fuego el menú",
  original: "Raw or roasted? How fire changed what’s on the menu",
  autoria: "Angela A. Bruch y Karen Hahn", paginas: "74-80",
  idea: "Con herramientas el menú vegetal crece; con fuego casi se duplica, sobre todo en tubérculos, semillas y hojas.",
  sintesis: [
    "Las autoras parten de un problema de fuentes: los restos vegetales casi nunca se conservan. Para estimar qué comida vegetal tenían a su alcance los primeros humanos, estudian las plantas silvestres comestibles de las sabanas actuales de la Cuna de la Humanidad (noreste de Sudáfrica), región con restos de Homo erectus y con el fuego de Wonderwerk (1 Ma). Suponen que muchas especies ya existían hace más de dos millones de años con las mismas propiedades nutritivas.",
    "De 814 especies, más del 20 % son comestibles. Con datos detallados de 139 especies y 203 partes, el estudio distingue frutos, semillas, órganos subterráneos de reserva (raíces, tubérculos, rizomas), hojas y «otros» (savia, corteza, madera). Sin preparación son comestibles 80 partes de 74 especies, sobre todo frutos (63) y algunas hojas (10). Con piedras para cascar, raspar o frotar se supera el centenar. Con fuego, el número casi se duplica: los órganos subterráneos se triplican, las semillas se duplican y las hojas se triplican.",
    "El baobab (Adansonia digitata) es el mejor ejemplo: cinco partes comestibles sin fuego (pulpa rica en vitamina C, semillas grasas, flores, brotes) y hojas que, cocinadas, aportan proteínas. Las técnicas complejas de procesado y las especias amplían hoy aún más el menú. La conclusión es prudente: aunque se ignora el ritmo exacto, preparar los alimentos con fuego fue un paso decisivo para el rendimiento alimentario."
  ],
  conceptos: [
    { t: "Órganos subterráneos de reserva (USO)", d: "Raíces, tubérculos y rizomas ricos en almidón, disponibles también en la estación seca.", p: 76 },
    { t: "Analogía actualista", d: "Inferir el pasado a partir de un sistema actual que se supone comparable.", p: 75 },
    { t: "Alimento de reserva", d: "Recurso disponible todo el año que compensa la escasez estacional.", p: 77 }
  ],
  pensar: "El estudio usa la vegetación actual como modelo de hace dos millones de años. ¿Qué supuestos asume esa analogía y cómo podrían sesgar el resultado?",
  aula: "El gráfico de barras de la p. 76 se presta a la lectura de gráficos en Primaria: comparar, calcular diferencias y formular hipótesis sobre por qué crecen unas categorías y otras no.",
  avisos: [
    { tipo: "aviso", texto: "Los valores del reto se han leído del gráfico de barras (fig. 2, p. 76) y son aproximados (±2); los totales de 80 y 203 sí figuran en el texto.", fuentes: [] }
  ],
  retos: [
    { tipo: "prediccion-dieta", titulo: "Predecir el menú",
      consigna: "Sin fuego ni herramientas hay 80 partes vegetales comestibles. Estime cuántas habría en cada escenario y compare con el gráfico de las autoras.",
      escenarios: [
        { id: "a", corto: "Sin fuego ni útiles", nombre: "Sin fuego, sin herramientas", valores: [2, 63, 3, 2, 10] },
        { id: "b", corto: "Útiles sin fuego", nombre: "Sin fuego, con herramientas", valores: [5, 77, 6, 2, 13] },
        { id: "c", corto: "Fuego y útiles", nombre: "Con fuego y herramientas", valores: [16, 78, 13, 4, 36] },
        { id: "d", corto: "Hoy (con especias)", nombre: "«Hoy», con hierbas y especias", valores: [21, 89, 28, 11, 54] }
      ],
      categorias: ["Órganos subterráneos", "Frutos", "Semillas", "Otros", "Hojas"]
    }
  ]
},
/* ------------------------------------------------------------------ 8 */
{
  id: "s08", n: 8, objeto: "cadena", edad: 3.3, lado: 1,
  titulo: "Dar un rodeo en el camino hacia el pensamiento humano",
  original: "Taking a detour on the path to human thinking",
  autoria: "Miriam Noël Haidle", paginas: "82-90",
  idea: "Pensar es dar rodeos: cuanto más se aleja la solución del problema, más planificación, aprendizaje y cooperación hacen falta.",
  sintesis: [
    "Haidle parte de una concepción corporizada y distribuida del pensamiento: no ocurre solo en el cerebro, sino también en los sentidos, en las manos, en las cosas (el bastón de una persona ciega, la lista de la compra) y en el grupo, del que heredamos clasificaciones y valores. Un bebé aprende a pensar tocando, chupando y lanzando objetos; un niño aprende a montar en bicicleta montando.",
    "Para periodos sin escritura, la producción y el uso de herramientas son una ventana al pensamiento. El antílope come hierba sin rodeos. El chimpancé que quiere una nuez debe primero buscar un percutor: un rodeo. Para las termitas usa a veces un conjunto de dos herramientas. Desde hace al menos 3,3 Ma (Lomekwi), los homininos usan una herramienta para fabricar otra herramienta con la que hacer algo distinto: un rodeo ampliado, solo documentado en el linaje humano.",
    "Los rodeos largos se dominan descomponiéndolos en módulos independientes (procurar materia prima, fabricar útiles) que pueden realizarse aunque no se necesiten de inmediato, recombinarse y aprenderse por separado. Los niños practicaban cortando con lascas antes de saber tallarlas. Y si una acción se descompone en módulos, otros pueden encargarse de partes: así se vuelve concebible la cooperación («yo te llevo esto y tú me haces aquello»). Todo lo que hoy damos por supuesto procede, según la autora, de esta ampliación del pensamiento en rodeos iniciada hace unos tres millones de años."
  ],
  conceptos: [
    { t: "Pensamiento en rodeos", d: "Aplazar la meta para atender primero a un medio (una herramienta).", p: 86 },
    { t: "Rodeo ampliado", d: "Usar una herramienta para fabricar otra herramienta; documentado solo en homininos.", p: 87 },
    { t: "Módulo", d: "Unidad de acción independiente que cumple una meta intermedia.", p: 88 },
    { t: "Cognición corporizada y distribuida", d: "El pensamiento se apoya en el cuerpo, los objetos y el grupo.", p: 85 }
  ],
  pensar: "Las crías de chimpancé tardan unos tres años en dominar el cascado de nueces. ¿Qué implicaciones tiene ese dato para imaginar cuánto tiempo y qué apoyos necesitaba un niño hominino para aprender a tallar?",
  aula: "Descomponer una tarea en módulos (preparar una merienda, montar una maqueta) y repartirlos en el equipo ilustra en Primaria por qué la cooperación depende de la planificación.",
  avisos: [],
  retos: [
    {
      tipo: "ordenar", titulo: "Rodeos cada vez más largos",
      consigna: "Ordene de menor a mayor distancia entre necesidad y satisfacción (pp. 86-87).",
      items: [
        { t: "El antílope hambriento pace", d: "sin rodeo" },
        { t: "El chimpancé busca una piedra para cascar una nuez", d: "un rodeo: la herramienta" },
        { t: "El chimpancé abre el termitero con un palo y pesca con una ramita", d: "conjunto de herramientas" },
        { t: "El hominino de Lomekwi talla una lasca con un percutor para cortar", d: "herramienta para hacer herramienta" }
      ]
    },
    {
      tipo: "ordenar", titulo: "Una cadena de módulos",
      consigna: "Reconstruya la cadena operativa para descarnar una presa con una lasca.",
      items: [
        { t: "Recordar dónde hay buena materia prima", d: "memoria del paisaje" },
        { t: "Ir a buscarla y transportarla con el grupo", d: "módulo de aprovisionamiento" },
        { t: "Tallar una lasca con filo golpeando con el percutor", d: "módulo de fabricación" },
        { t: "Cortar la carne antes de que lleguen las hienas", d: "uso de la herramienta" },
        { t: "Comer y compartir", d: "satisfacción de la necesidad" }
      ]
    }
  ]
},
/* ------------------------------------------------------------------ 9 */
{
  id: "s09", n: 9, objeto: "caja", edad: null, lado: -1, lab: 0,
  titulo: "De sonajeros y cajas-rompecabezas: el aprendizaje social como clave de lo humano",
  original: "Of rattles and puzzle boxes—social learning as the key to being human",
  autoria: "Christine Michel", paginas: "92-100",
  idea: "Los niños copian incluso lo inútil: la sobreimitación favorece la transmisión de normas y rituales.",
  sintesis: [
    "La psicología del desarrollo muestra que los bebés atienden desde muy pronto a caras, movimientos biológicos y miradas. En los estudios con seguidor ocular (eye tracker), bebés de cuatro meses que ven a una persona mirar un juguete y no otro miran después más tiempo el juguete no mirado: el mirado ya les resulta conocido, señal de que la mirada ajena guía su atención y su memoria.",
    "El ojo humano tiene un contraste muy marcado entre la pupila oscura y la esclerótica blanca. Con puntos negros que «miran» sobre fondo blanco, los bebés reaccionan como ante una mirada real; con el contraste invertido (puntos blancos sobre fondo negro), el efecto se debilita.",
    "Con niños mayores se usan cajas-rompecabezas. La autora distingue la emulación (aprender la meta: sacar la recompensa) de la imitación (aprender el camino exacto). En un estudio, niños de unos cuatro años y chimpancés vieron introducir un palo en una abertura superior inútil y en otra inferior útil. Los niños copiaron también la acción inútil, tanto con la caja opaca como con la transparente; los chimpancés solo la copiaron con la caja opaca, y con la transparente fueron directos a la abertura útil. Las explicaciones propuestas son normativas («así se hace»), intencionales («por algo lo hará») y de pertenencia («si lo hago igual, soy del grupo»). Esa sobreimitación facilitaría la transmisión de rituales y costumbres sin función física evidente."
  ],
  conceptos: [
    { t: "Emulación", d: "Aprender la meta que puede alcanzarse, no el procedimiento.", p: 96 },
    { t: "Imitación", d: "Copiar el procedimiento exacto para lograr una meta.", p: 97 },
    { t: "Sobreimitación", d: "Copiar también acciones innecesarias o causalmente irrelevantes.", p: 98 },
    { t: "Conformismo", d: "Abandonar la estrategia propia para adoptar la de los pares.", p: 99 }
  ],
  pensar: "La sobreimitación hace «menos eficiente» al niño que al chimpancé. ¿En qué sentido es, sin embargo, una ventaja evolutiva? ¿Qué rituales escolares se transmiten precisamente así?",
  aula: "En la formación de maestros, el estudio invita a revisar la demostración docente: el alumnado copia también los gestos innecesarios del modelo, para bien y para mal.",
  avisos: [
    { tipo: "aviso", texto: "La afirmación de que los chimpancés no pueden aprender por imitación es una posición de algunos investigadores (p. 99), no un consenso.", fuentes: [
      { cita: "Horner, V. y Whiten, A. (2005). Causal knowledge and imitation/emulation switching in chimpanzees (Pan troglodytes) and children (Homo sapiens). Animal Cognition, 8(3), 164-181.", doi: "10.1007/s10071-004-0239-6" },
      { cita: "Michel, C., Pauen, S. y Hoehl, S. (2017). Schematic eye-gaze cues influence infants’ object encoding dependent on their contrast polarity. Scientific Reports, 7, 7347.", doi: "10.1038/s41598-017-07445-9" },
      { cita: "Hoehl, S. et al. (2019). ‘Over-imitation’: A review and appraisal of a decade of research. Developmental Review, 51, 90-108.", doi: "10.1016/j.dr.2018.12.002" }
    ] }
  ],
  retos: [
    { tipo: "caja", titulo: "La caja-rompecabezas",
      consigna: "Observe la demostración: primero el palo entra por la abertura superior (inútil) y después por la inferior (útil). Prediga qué hará cada sujeto." }
  ]
},
/* ------------------------------------------------------------------ 10 */
{
  id: "s10", n: 10, objeto: "ventana", edad: null, lado: 1, lab: 0,
  titulo: "Habitus: la imprimación cultural",
  original: "Habitus: the cultural primer",
  autoria: "Oliver Schlaudt", paginas: "102-108",
  idea: "Antes de imitar o de ser enseñados, absorbemos un modo de estar en el mundo: el habitus es el humus de la cultura.",
  sintesis: [
    "Schlaudt abre con cuatro escenas: Susanne abre la ventana del aula cargada y Patrick no lo piensa, aunque sabe hacerlo; las crías de borrego cimarrón siguen a la manada en su migración anual sin «saberlo»; los niños de Langda (Nueva Guinea) juegan en el río mientras los adultos golpean piedras para elegir la que «suena bien» para hacer hachas; Armand, de 17 años, es admitido en una universidad de élite pese a no saber la respuesta, mientras Hamid, que sí la sabía, es rechazado.",
    "Para explicar la última escena recurre a Pierre Bourdieu: el habitus o capital cultural es una herencia intangible propia de un medio social que, en la escuela o en una entrevista, se percibe como rasgo individual (seguridad, desenvoltura). Bourdieu lo usó para explicar cómo se reproducen las desigualdades en sociedades que se proclaman igualitarias.",
    "El autor propone usar el concepto para los comienzos de la cultura. Las ciencias del comportamiento distinguen la imitación del más joven, la demostración consciente del mayor y la enseñanza propiamente dicha, con corrección y explicación. El habitus es más básico: no se copia una acción percibida como medio para un fin, sino que se participa, se «toma el mismo camino». Bourdieu lo comparaba con la ósmosis. Los niños de Langda no prestaban atención, pero sabrán dónde y cómo encontrar la piedra adecuada."
  ],
  conceptos: [
    { t: "Habitus", d: "Disposición incorporada, propia de un medio social, que orienta la percepción y la acción sin deliberación.", p: 105 },
    { t: "Capital cultural", d: "Recursos culturales heredados (gustos, saberes, maneras) que funcionan como ventaja social.", p: 105 },
    { t: "Ósmosis cultural", d: "Absorción lenta del ambiente social, sin intención de aprender ni de enseñar.", p: 107 },
    { t: "Enseñanza", d: "Transmisión intencional que incluye corrección y explicación.", p: 107 }
  ],
  pensar: "Si el habitus se percibe como talento individual, ¿qué consecuencias tiene para la evaluación en una entrevista, en un examen oral o en el Prácticum?",
  aula: "El concepto de capital cultural es imprescindible en la formación del profesorado para leer la desigualdad en el aula sin naturalizarla como «falta de capacidad».",
  avisos: [
    { tipo: "aviso", texto: "La aplicación del habitus a los homininos es una propuesta teórica del autor (desarrollada en Haidle y Schlaudt, 2020), no un resultado empírico.", fuentes: [
      { cita: "Haidle, M. N. y Schlaudt, O. (2020). Where does cumulative culture begin? A plea for a sociologically informed perspective. Biological Theory, 15, 161-174.", doi: "10.1007/s13752-020-00351-w" },
      { cita: "Jesmer, B. R. et al. (2018). Is ungulate migration culturally transmitted? Evidence of social learning from translocated animals. Science, 361, 1023-1025.", doi: "10.1126/science.aat0985" },
      { cita: "Stout, D. (2002). Skill and cognition in stone tool production: An ethnographic case study from Irian Jaya. Current Anthropology, 43(5), 693-722.", doi: "10.1086/342638" }
    ] }
  ],
  retos: [
    {
      tipo: "clasificar", titulo: "Formas de aprender",
      consigna: "Relacione cada situación con la forma de aprendizaje que describe el autor (p. 107).",
      categorias: ["Imitación", "Demostración", "Enseñanza", "Habitus"],
      items: [
        { t: "La cría copia lo que ha visto hacer a un adulto.", c: 0, e: "La iniciativa es del más joven." },
        { t: "Un adulto muestra a propósito cómo golpear el núcleo, despacio, delante del aprendiz.", c: 1, e: "Demostración consciente del mayor." },
        { t: "La adulta corrige el ángulo del golpe y explica por qué esa piedra no sirve.", c: 2, e: "Corrección y comentario explicativo." },
        { t: "Los niños de Langda juegan en el río y, años después, saben qué piedra «suena bien».", c: 3, e: "Absorción sin atención deliberada." },
        { t: "En la cena, los hijos aprenden de qué se habla y qué no se dice.", c: 3, e: "El ejemplo de Bourdieu (p. 107)." }
      ]
    },
    {
      tipo: "clasificar", titulo: "Las cuatro escenas",
      consigna: "¿Qué ilustra cada escena del ensayo?",
      categorias: ["Disposición incorporada que no se activa", "Tradición animal sin intención", "Saber técnico absorbido", "Capital cultural percibido como talento"],
      items: [
        { t: "Patrick sabe abrir una ventana pero no se le ocurre hacerlo.", c: 0, e: "Escena I." },
        { t: "Las crías de borrego siguen a la manada y luego guían la migración.", c: 1, e: "Escena II." },
        { t: "Los niños de Langda juegan mientras los adultos eligen piedras.", c: 2, e: "Escena III." },
        { t: "Armand es admitido; Hamid, no.", c: 3, e: "Escena IV." }
      ]
    }
  ]
},
/* ------------------------------------------------------------------ 11 */
{
  id: "s11", n: 11, objeto: "globo", edad: 2.1, lado: -1,
  titulo: "Más allá de las montañas, hacia el ancho mundo: la expansión humana",
  original: "Across the mountains, into the wide world. Evidence of human expansion",
  autoria: "Miriam Noël Haidle", paginas: "110-120",
  idea: "La expansión humana no fue un viaje con destino, sino procesos largos, en oleadas, con retrocesos y mezclas.",
  sintesis: [
    "Haidle muestra cómo se ha reescrito el relato. Tras Darwin y el valle de Neander, se conocieron formas asiáticas y europeas; el niño de Taung (1925) no fue aceptado hasta los hallazgos africanos de los años sesenta y setenta. En los años ochenta, la anatomía (Bräuer) y la genética (Cann y colaboradores) situaron el origen de nuestra especie en África hace unos 200 000 años, con una segunda salida (Out of Africa II) hace 60 000-40 000 años. Desde 2010 el panorama se ha complicado: más especies, mejores dataciones, genomas antiguos y mezclas.",
    "Distribuirse no es siempre emigrar: una especie puede desplazarse porque se desplaza su hábitat. Las migraciones con destino son un fenómeno reciente. Los primeros homininos (7,5-4 Ma) ocupaban mosaicos de bosque, palmeral y pradera; los australopitecos llegaron al sur de África hace unos 3,67 Ma. Homo, «especializado en no especializarse», se expandió pronto: Ain Boucherit (Argelia, hasta 2,4 Ma), el valle de Zarqa (Jordania, hasta 2,48 Ma) y Shangchen (China, hasta 2,1 Ma) superan ya a Dmanisi (1,8 Ma).",
    "Con solo 1 km por generación de 20 años se recorren 10 000 km en 200 000 años. Java y el norte de China se habitan hacia 1,6 Ma, Europa mediterránea hacia 1,4-1,2 Ma, quizá con avances y retrocesos. Desde hace unos 500 000 años se separan los grupos que darán neandertales en Europa y denisovanos en Asia, mientras Homo sapiens se forma en toda África. Nuestra especie sale varias veces (Grecia e Israel, hacia 200 000 años; Arabia, 120 000; China, quizá 80 000; Sudeste asiático, 70 000), se mezcla con otros humanos y, desde hace más de 50 000 años, ocupa Australia, el Ártico, América y el Pacífico. El modelo de Bons et al. (2019) explica el papel de África por su mayor superficie densamente poblada."
  ],
  conceptos: [
    { t: "Dispersión pasiva", d: "Cambio de distribución que sigue al desplazamiento del hábitat.", p: 113 },
    { t: "Out of Africa II", d: "Gran salida de Homo sapiens hace 60 000-40 000 años según el modelo de los años ochenta.", p: 111 },
    { t: "Mezcla (admixture)", d: "Intercambio genético entre poblaciones humanas distintas (sapiens, neandertales, denisovanos).", p: 118 },
    { t: "«Especialización en no especializarse»", d: "Dieta y conducta flexibles que reducen los requisitos de hábitat de Homo.", p: 115 }
  ],
  pensar: "La autora advierte que dependemos de hallazgos y dataciones aislados para escribir esta historia. ¿Cómo deberían presentarse en un libro de texto las fechas «más antiguas», sabiendo que cambian cada pocos años?",
  aula: "El cálculo de 1 km por generación conecta Historia y Matemáticas (proporcionalidad, escalas temporales) y desmonta la idea de «viaje»: nadie sabía que estaba saliendo de África.",
  avisos: [
    { tipo: "actualizacion", texto: "En 2025, el análisis de proteínas y de ADN mitocondrial del sarro dental atribuyó el cráneo de Harbin (China, más de 146 000 años) a los denisovanos, que hasta entonces se conocían casi solo por fragmentos.", fuentes: [
      { cita: "Fu, Q. et al. (2025). The proteome of the Late Middle Pleistocene Harbin individual. Science.", doi: "10.1126/science.adu9677" },
      { cita: "Fu, Q. et al. (2025). Denisovan mitochondrial DNA from dental calculus of the >146,000-year-old Harbin cranium. Cell.", doi: "10.1016/j.cell.2025.05.040" },
      { cita: "Zhu, Z. et al. (2018). Hominin occupation of the Chinese Loess Plateau since about 2.1 million years ago. Nature, 559, 608-612.", doi: "10.1038/s41586-018-0299-4" },
      { cita: "Bons, P. D. et al. (2019). Out of Africa by spontaneous migration waves. PLOS ONE, 14(4), e0201998.", doi: "10.1371/journal.pone.0201998" }
    ] }
  ],
  retos: [
    { tipo: "mapa", titulo: "Seis momentos de la expansión",
      consigna: "Recorra las seis etapas del mapa y ordene después los hitos de llegada." },
    {
      tipo: "ordenar", titulo: "¿Quién llegó antes?",
      consigna: "Ordene de más antiguo a más reciente según el catálogo.",
      items: [
        { t: "Australopitecos en el sur de África", d: "hasta 3,67 Ma" },
        { t: "Homo en el valle de Zarqa (Jordania)", d: "hasta 2,48 Ma" },
        { t: "Shangchen (China central)", d: "hasta 2,1 Ma" },
        { t: "Dmanisi (Georgia)", d: "1,8 Ma" },
        { t: "Java y norte de China", d: "hacia 1,6 Ma" },
        { t: "Filipinas", d: "hacia 700 000 años" },
        { t: "Homo sapiens en Arabia", d: "hacia 120 000 años" },
        { t: "Australia", d: "hace más de 50 000 años" }
      ]
    },
    { tipo: "numerico", titulo: "Un kilómetro por generación",
      consigna: "Si el territorio explorado avanza 1 km por generación (unos 20 años) en una dirección, ¿cuántos años hacen falta para recorrer 10 000 km?",
      respuesta: 200000, tolerancia: 0.02, unidad: "años",
      explicacion: "10 000 km × 1 generación/km × 20 años/generación = 200 000 años (p. 116)." }
  ]
},
/* ------------------------------------------------------------------ 12 */
{
  id: "s12", n: 12, objeto: "nuez", edad: null, lado: -1, lab: 1,
  titulo: "Culturas chimpancés: en busca de indicios",
  original: "Chimpanzee cultures—a search for clues",
  autoria: "Roman M. Wittig", paginas: "122-134",
  idea: "Hay diferencias de conducta entre comunidades de chimpancés que no explican ni los genes ni la ecología: los cimientos de la cultura no son exclusivos nuestros.",
  sintesis: [
    "Si cultura es lo que crea el ser humano frente a la naturaleza, la pregunta se cierra antes de empezar. En biología se habla de tradición cultural cuando una conducta adaptativa no está controlada genéticamente y se transmite por aprendizaje social; la suma de tradiciones es la cultura de un grupo. Los chimpancés, que comparten en torno al 99 % del genoma con nosotros, viven en comunidades de fisión-fusión, crían durante unos diez años y usan herramientas variadas: palos afilados para cazar gálagos, esponjas de hojas, martillos de piedra o madera para cascar nueces, juegos de palo y ramita para las termitas.",
    "Boesch y Whiten compararon seis estudios de campo y separaron tres categorías: conductas universales (I), ausentes por razones ecológicas (II) y ausentes sin causa ecológica (III). Solo las de categoría III son candidatas a tradiciones culturales: 38 conductas, entre ellas el cascado de nueces, la pesca de termitas o la «danza de la lluvia». El experimento de Gruber reforzó la idea: ante troncos con miel, la comunidad de Kanyawara usó palos y la de Sonso, que no usa palos, hizo esponjas de hojas, incluso tras ver el palo.",
    "En el parque de Taï (Costa de Marfil), las comunidades del norte y del este pasan de martillos de piedra (60-70 %) a martillos de madera (10-20 %) a medida que las nueces de coula se ablandan durante la temporada; la del sur sigue usando piedra (alrededor del 80 %) aunque no tiene más piedras. Las hembras que emigraron al grupo del sur adoptaron en pocas temporadas la costumbre local: conformismo cultural en libertad."
  ],
  conceptos: [
    { t: "Tradición cultural", d: "Conducta transmitida por aprendizaje social, no por genes ni impuesta por el ambiente.", p: 123 },
    { t: "Método de exclusión", d: "Atribuir a la cultura las diferencias que no explican ni la genética ni la ecología (categoría III).", p: 125 },
    { t: "Fisión-fusión", d: "Organización en subgrupos cambiantes dentro de una comunidad.", p: 124 },
    { t: "Conformismo", d: "Adoptar la práctica dominante del nuevo grupo aunque la propia fuera igual de eficaz.", p: 129 }
  ],
  pensar: "El método de exclusión define la cultura por lo que no es (ni genes ni ecología). ¿Qué problemas plantea esta definición negativa? ¿Puede aplicarse también a grupos humanos?",
  aula: "Los vídeos del Taï Chimpanzee Project (citados en la p. 133) permiten observar y registrar conductas con una ficha de campo, un ejercicio de método científico adaptable a Primaria.",
  avisos: [
    { tipo: "aviso", texto: "El catálogo da dos horquillas para la separación de humanos y chimpancés: 5-7 Ma (Junker, p. 19) y 7-8 Ma (Wittig, p. 123).", fuentes: [
      { cita: "Whiten, A. et al. (1999). Cultures in chimpanzees. Nature, 399, 682-685.", doi: "10.1038/21415" },
      { cita: "Gruber, T. et al. (2009). Wild chimpanzees rely on cultural knowledge to solve an experimental honey acquisition task. Current Biology, 19(21), 1806-1810.", doi: "10.1016/j.cub.2009.08.060" },
      { cita: "Luncz, L. V., Mundry, R. y Boesch, C. (2012). Evidence for cultural differences between neighboring chimpanzee communities. Current Biology, 22(10), 922-926.", doi: "10.1016/j.cub.2012.03.031" }
    ] }
  ],
  retos: [
    { tipo: "prediccion-tai", titulo: "Martillos de piedra en Taï",
      consigna: "Las comunidades del norte y del este cambian de piedra a madera durante la temporada. Prediga cómo se comporta la comunidad del sur." },
    {
      tipo: "clasificar", titulo: "Las tres categorías",
      consigna: "Clasifique cada observación según el método de Boesch y Whiten (p. 125).",
      categorias: ["I · Universal", "II · Ausencia ecológica", "III · Candidata a cultura"],
      items: [
        { t: "Una conducta que muestran todas las comunidades estudiadas.", c: 0, e: "Probable adaptación genética." },
        { t: "Una comunidad no casca nueces porque en su territorio no hay nueces.", c: 1, e: "La ausencia se explica por el ambiente." },
        { t: "Una comunidad no casca nueces aunque tiene nueces, martillos y yunques.", c: 2, e: "Ausencia no explicada por la ecología." },
        { t: "Sonso usa hojas y no palos para la miel, incluso cuando se le muestra el palo.", c: 2, e: "Experimento de Gruber (pp. 126-127)." }
      ]
    }
  ]
},
/* ------------------------------------------------------------------ 13 */
{
  id: "s13", n: 13, objeto: "helice", edad: null, lado: 1, lab: 1,
  titulo: "Tras los pasos de la hominización: investigación y métodos",
  original: "Tracing the steps to becoming human: research and scientific methods",
  autoria: "Madelaine Böhme", paginas: "136-141",
  idea: "Sin tiempo no hay historia: la datación ordena causas y efectos, y huesos, dientes y genes cuentan biografías.",
  sintesis: [
    "Böhme presenta la caja de herramientas de la paleoantropología, en la que intervienen geología, biología, química, física e ingeniería. La dimensión temporal es la primera: la datación relativa (estratigrafía) establece secuencias, y la absoluta (geocronología, p. ej., desintegración radiactiva) da edades con márgenes de error. A veces importa más saber qué ocurrió antes que la cifra exacta.",
    "La morfología comparada y, cuando se conserva materia orgánica, el ADN y las proteínas permiten reconstruir parentescos: los denisovanos se reconocieron por el ADN de una falange, y una niña siberiana de hace unos 90 000 años resultó hija de madre neandertal y padre denisovano. Huesos y dientes informan sobre crecimiento y duración de la infancia, sobre el parto (los australopitecos no tenían un canal estrecho y sus crías nacían más maduras), sobre la lactancia (elementos traza en el esmalte) y sobre la estructura social (dimorfismo sexual, proporción entre índice y anular).",
    "Un individuo desdentado de Dmanisi (1,8 Ma) que sobrevivió sin poder masticar sugiere cuidados ajenos. El desgaste dental, las caries, los isótopos estables y los restos en el sarro informan de la dieta; las marcas de corte, del aprovechamiento de carne y médula; los carbones y suelos alterados, del fuego. Las lanzas de Schöningen son las armas más antiguas conocidas, y las materias primas y los enterramientos hablan de intercambios, valores y creencias."
  ],
  conceptos: [
    { t: "Datación relativa", d: "Establece el orden de los acontecimientos (estratigrafía).", p: 137 },
    { t: "Datación absoluta", d: "Asigna una edad con margen de error (métodos geocronológicos).", p: 137 },
    { t: "Morfología comparada", d: "Análisis de formas y patrones de huesos y dientes.", p: 137 },
    { t: "Isótopos estables", d: "Proporciones químicas en el hueso que reflejan la dieta.", p: 140 }
  ],
  pensar: "La autora deduce «monogamia o poliginia» de la proporción entre los dedos. ¿Qué cautelas exige inferir conductas sociales de un rasgo anatómico?",
  aula: "Cada método puede convertirse en una «pregunta detectivesca» para Primaria: ¿cómo sabemos qué comían?, ¿cómo sabemos cuántos años tiene?",
  avisos: [
    { tipo: "aviso", texto: "El catálogo atribuye la estimación de la lactancia a la razón calcio/estroncio (p. 139); los estudios de referencia sobre neandertales se basan sobre todo en el bario. El dato de alimentos sólidos a los 5-6 meses no lleva referencia en el catálogo y no se ha podido verificar. Las lanzas de Schöningen se fechan hoy hacia 200 000 años y se asocian a neandertales.", fuentes: [
      { cita: "Austin, C. et al. (2013). Barium distributions in teeth reveal early-life dietary transitions in primates. Nature, 498, 216-219.", doi: "10.1038/nature12169" },
      { cita: "Slon, V. et al. (2018). The genome of the offspring of a Neanderthal mother and a Denisovan father. Nature, 561, 113-116.", doi: "10.1038/s41586-018-0455-x" },
      { cita: "Lordkipanidze, D. et al. (2005). The earliest toothless hominin skull. Nature, 434, 717-718.", doi: "10.1038/434717b" },
      { cita: "Hutson, J. M. et al. (2025). Revised age for Schöningen hunting spears… Science Advances, 11(19).", doi: "10.1126/sciadv.adv0752" }
    ] }
  ],
  retos: [{
    tipo: "clasificar", titulo: "Detectives del pasado",
    consigna: "¿Qué método responde a cada pregunta?",
    categorias: ["Estratigrafía (datación relativa)", "Datación absoluta", "ADN antiguo", "Elementos traza en el esmalte", "Sarro dental", "Dimorfismo y proporción de dedos", "Patologías y cuidados"],
    items: [
      { t: "¿Se encendió el fuego antes o después de construir el asentamiento?", c: 0, e: "Basta conocer el orden de las capas (p. 137)." },
      { t: "¿Cuántos años tiene esta capa volcánica?", c: 1, e: "Métodos radiométricos con margen de error." },
      { t: "¿Quiénes eran los padres de la niña de Denisova?", c: 2, e: "Madre neandertal y padre denisovano (p. 138)." },
      { t: "¿Hasta qué edad mamó este niño?", c: 3, e: "Composición del esmalte durante su formación (p. 139)." },
      { t: "¿Qué plantas comían los neandertales de la península ibérica?", c: 4, e: "Restos vegetales en el sarro (pp. 121, 140)." },
      { t: "¿Era una especie monógama o polígina?", c: 5, e: "Inferencia indirecta y discutible (p. 139)." },
      { t: "¿Alguien ayudaba a comer a un individuo sin dientes?", c: 6, e: "El individuo desdentado de Dmanisi (p. 139)." }
    ]
  }]
}
];

/* Autoevaluación final: el «examen de comisariado» */
window.SH.examen = [
  { q: "¿Qué definición de cultura defienden las comisarias?", o: ["La suma de arte, música, religión y filosofía", "Una práctica aprendida socialmente y transmitida entre generaciones", "Todo lo que el ser humano crea frente a la naturaleza"], c: 1, e: "La cultura es el hacer mismo, no un producto excepcional (p. 14)." },
  { q: "Las herramientas de piedra más antiguas citadas en el catálogo proceden de…", o: ["Olduvai, hace 2,6 Ma", "Lomekwi 3, hace unos 3,3 Ma", "Dmanisi, hace 1,8 Ma"], c: 1, e: "Lomekwiense (p. 44)." },
  { q: "Según Schrenk, ¿qué distingue la respuesta de Homo al enfriamiento de hace 2,8 Ma?", o: ["Molares más grandes", "El uso de herramientas en lugar de la especialización anatómica", "La migración hacia el sur"], c: 1, e: "Evolución biocultural (p. 33)." },
  { q: "¿Qué útil define el Achelense?", o: ["El chopper", "El bifaz", "La punta de flecha"], c: 1, e: "Junto al hendedor y el pico (p. 58)." },
  { q: "¿Cuál es el orden de los pasos hacia el fuego?", o: ["Producir, mantener, usar, habituarse", "Habituarse, usar, mantener, producir", "Usar, habituarse, producir, mantener"], c: 1, e: "p. 70." },
  { q: "Con fuego, ¿qué categorías de plantas comestibles se triplican?", o: ["Frutos y semillas", "Órganos subterráneos y hojas", "Solo los frutos"], c: 1, e: "Las semillas se duplican (p. 77)." },
  { q: "¿Qué es un «rodeo ampliado»?", o: ["Usar dos herramientas a la vez", "Usar una herramienta para fabricar otra herramienta", "Recorrer grandes distancias"], c: 1, e: "Solo documentado en homininos (p. 87)." },
  { q: "En la caja-rompecabezas transparente, los niños de cuatro años…", o: ["Fueron directos a la abertura útil", "Copiaron también la acción inútil", "No resolvieron la caja"], c: 1, e: "Sobreimitación (p. 97)." },
  { q: "Para Bourdieu, el habitus…", o: ["Se aprende mediante enseñanza explícita", "Se absorbe del medio social y se percibe como rasgo individual", "Es una disposición genética"], c: 1, e: "pp. 105-107." },
  { q: "Con 1 km por generación de 20 años, 10 000 km se recorren en…", o: ["20 000 años", "200 000 años", "2 millones de años"], c: 1, e: "p. 116." },
  { q: "¿Qué hicieron las hembras que emigraron al grupo sur de Taï?", o: ["Mantuvieron su costumbre", "Adoptaron la costumbre local de los martillos de piedra", "Dejaron de cascar nueces"], c: 1, e: "Conformismo (p. 129)." },
  { q: "¿Qué método permite saber qué ocurrió antes, sin fecha exacta?", o: ["La datación relativa (estratigrafía)", "El ADN antiguo", "Los isótopos estables"], c: 0, e: "p. 137." }
];
