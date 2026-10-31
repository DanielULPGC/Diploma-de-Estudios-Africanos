/*
 * SER HUMANOS · las quince salas
 * Contenido armonizado y actualizado (octubre de 2026). Redacción propia con citas de autor y año;
 * las referencias completas están en datos/referencias.js y se citan por clave en «refs».
 * edad: anclaje en la línea del tiempo (Ma); lado: -1 izquierda, 1 derecha, 0 portada; edad null = laboratorio del presente.
 * lab: fila del laboratorio (0 y 1, vitrinas laterales; 2, vitrina central del fondo).
 * Tipos de reto: clasificar, ordenar, test, numerico (pista opcional para el primer fallo), caja, prediccion-dieta, prediccion-tai, mapa.
 */
window.SH = window.SH || {};

window.SH.creditos = {
  linea: "Contenido de redacción propia, con bibliografía en cada sala. Inspirado en la exposición «Being Human. The Beginnings of Our Culture» (Archäologisches Museum Frankfurt, 2021-2022) y en su volumen de acompañamiento (Giemsch y Haidle, 2022).",
  novedades: "La investigación de 2023-2026 se identificó en buena parte a partir de las reseñas del blog Nutcracker Man (Roberto Sáez, https://nutcrackerman.com/); las referencias se han cotejado en Crossref."
};

window.SH.salas = [
/* ------------------------------------------------------------------ 1 */
{
  id: "s01", n: 1, objeto: "red", edad: 7.6, lado: 0,
  corto: "¿Dónde empieza la cultura?",
  titulo: "En busca de los comienzos de la cultura",
  idea: "La cultura no empieza con el arte ni con la religión: empieza con el hacer cotidiano que se aprende en grupo y se transmite.",
  sintesis: [
    "Hace entre 3,3 y 1 millón de años, en África, los homininos ya caminaban erguidos y tenían las manos libres. De su herencia primate conservaban la destreza manipuladora y una infancia larga rodeada de parientes, un buen caldo de cultivo para el aprendizaje social (Giemsch y Haidle, 2022).",
    "Sobre esa base aparecen los útiles de piedra de Lomekwi (hacia 3,3 Ma), la talla controlada de decenas de lascas de un mismo núcleo hacia 2,3 Ma, las primeras salidas de África hace más de 2 Ma, los bifaces achelenses desde 1,76 Ma y una relación cada vez más estrecha con el fuego. Nada de esto lo inventó un individuo aislado: el grupo probaba, imitaba, corregía y descomponía las acciones complejas en módulos que podían aprenderse por separado.",
    "¿Dónde está, entonces, la cultura? Una definición amplia la entiende como una práctica aprendida socialmente, de relacionarse con uno mismo, con los demás y con el entorno, que se transmite a lo largo de generaciones. No es el producto excepcional, sino el hacer mismo y las disposiciones que lo sostienen (Giemsch y Haidle, 2022; Haidle y Schlaudt, 2020).",
    "Desde esta perspectiva, biología y cultura han coevolucionado: las prácticas culturales cambian las presiones selectivas y la anatomía condiciona qué prácticas pueden aprenderse y transmitirse (Key, 2026). Los humanos serían, así, seres culturales desde hace millones de años."
  ],
  conceptos: [
    { t: "Cultura (como práctica)", d: "Práctica aprendida socialmente y relativamente duradera, transmitida entre generaciones, que impregna la vida cotidiana." },
    { t: "Hominino", d: "Miembro del linaje humano posterior a la separación respecto de los chimpancés." },
    { t: "Módulo de acción", d: "Fragmento de una acción compleja que puede aprenderse y ejecutarse por separado." },
    { t: "Coevolución gen-cultura", d: "Retroalimentación entre cambios biológicos y prácticas culturales a lo largo de generaciones." }
  ],
  pensar: "Si la cultura es «el hacer mismo», ¿qué ganamos y qué perdemos al llamar cultura a la talla de piedra y no solo al arte? ¿Dónde pondría usted el límite entre hábito, tradición y cultura?",
  debates: [
    "Que un rasgo anatómico y una innovación técnica aparezcan a la vez no demuestra que uno cause la otra; el registro fósil y arqueológico es escaso y discontinuo (Key, 2026)."
  ],
  refs: ["giemschHaidle2022", "haidleSchlaudt2020", "key2026", "gruber2009", "delagnes2005", "jesmer2018"],
  retos: [{
    tipo: "clasificar", titulo: "¿Dónde empieza la cultura?",
    consigna: "Clasifique cada conducta según la definición de cultura como práctica aprendida y transmitida.",
    categorias: ["Conducta heredada", "Aprendizaje individual", "Cultura: práctica aprendida en grupo y transmitida"],
    items: [
      { t: "Un antílope hambriento pace en cuanto encuentra hierba, sin mediación alguna.", c: 0, e: "Respuesta inmediata a una necesidad; no exige aprendizaje social." },
      { t: "La comunidad de Sonso (Uganda) usa esponjas de hojas para sacar miel aunque se le muestre un palo.", c: 2, e: "Tradición de grupo que se mantiene aunque haya otra técnica disponible (Gruber et al., 2009)." },
      { t: "Un individuo descubre por azar que una piedra rota corta, pero nadie más lo aprende.", c: 1, e: "Sin transmisión social, el hallazgo muere con su autor." },
      { t: "En Lokalalei 2C se extraen más de 50 lascas de un núcleo girándolo de forma planificada.", c: 2, e: "Un saber técnico de esa complejidad solo se adquiere y conserva en grupo (Delagnes y Roche, 2005)." },
      { t: "Las crías de borrego cimarrón siguen a la manada y años después guían la migración anual.", c: 2, e: "Tradición migratoria transmitida socialmente (Jesmer et al., 2018)." },
      { t: "El recién nacido aprieta con fuerza el dedo que le toca la palma.", c: 0, e: "Reflejo innato, no aprendido." }
    ]
  }]
},
/* ------------------------------------------------------------------ 2 */
{
  id: "s02", n: 2, objeto: "espiral", edad: 6.0, lado: -1,
  corto: "Naturaleza y cultura",
  titulo: "Entre naturaleza y cultura: los dos orígenes de la humanidad",
  idea: "Somos primates por el cuerpo y seres culturales por el modo de vida; la capacidad cultural es, a su vez, una adaptación biológica.",
  sintesis: [
    "Linneo (1735) incluyó al ser humano en el reino animal, entre los cuadrúpedos y cerca de los simios, aunque creía en la creación separada de cada especie. La búsqueda posterior de una diferencia anatómica absoluta fracasó: solo aparecieron diferencias de grado, en proporciones, pigmentación o tamaño relativo del cerebro. Darwin explicó las semejanzas por descendencia común (Junker, 2022).",
    "La biología molecular identificó a chimpancés y bonobos como nuestros parientes vivos más próximos. Las estimaciones de la separación de ambos linajes han oscilado entre 5 y 8 Ma según el método; un recálculo reciente la sitúa entre 8,7 y 7,3 Ma (d’Oliveira Coelho et al., 2026). Entre esa separación y los primeros humanos median los australopitecos, bípedos con un cerebro no mayor que el de un chimpancé.",
    "Frente a quienes postulan un salto que la biología no puede explicar (el alma de Descartes, las «formas simbólicas» de Cassirer), puede tenderse un puente: la capacidad cultural es una adaptación que combina la estabilidad de la información genética con la flexibilidad de la experiencia. Los animales sociales evitan aprenderlo todo por sí mismos, con los riesgos que eso supone, copiando a otros; surge así un segundo almacén de información que no se hereda por los genes (Junker, 2022).",
    "La cultura ha de ser abierta a lo nuevo, pero no puede contradecir indefinidamente las necesidades biológicas: una comunidad célibe como la de los shakers no podía perpetuarse. A la inversa, la cultura también moldea el cuerpo: el aumento del cerebro y la reducción de la cara en Homo se ajustan mejor a modelos de evolución neutral o estabilizadora que a una selección direccional, lo que deja margen a las restricciones del desarrollo y a la cultura (Hubbe y Harvati, 2026)."
  ],
  conceptos: [
    { t: "Capacidad cultural", d: "Capacidad de aprendizaje social, de base genética, que permite heredar experiencia sin genes." },
    { t: "Australopitecos", d: "«Simios del sur»: homininos bípedos de cerebro pequeño." },
    { t: "Diferencia cuantitativa", d: "Diferencia de grado (proporciones, tamaño relativo del cerebro), no de naturaleza." },
    { t: "Segundo almacén de información", d: "La cultura: unidades transmitidas por el ejemplo y la crianza, no por los genes." }
  ],
  pensar: "El ejemplo de los shakers es llamativo, pero ¿basta la supervivencia biológica para evaluar una cultura? ¿Qué otras culturas han persistido por medios no reproductivos, como la adopción, la conversión o la escuela?",
  debates: [
    "La fecha de la separación entre chimpancés y humanos depende del ritmo de mutación y de las calibraciones fósiles que se usen; las estimaciones siguen variando entre unos 5 y casi 9 Ma."
  ],
  refs: ["junker2022", "coelho2026", "hubbe2026"],
  retos: [{
    tipo: "clasificar", titulo: "¿Quién lo sostuvo?",
    consigna: "Relacione cada idea con su autor o con la disciplina que la aportó.",
    categorias: ["Linneo", "Darwin", "Descartes", "Cassirer", "Biología molecular"],
    items: [
      { t: "Incluye a Homo sapiens en el reino animal, entre los cuadrúpedos, en 1735.", c: 0, e: "Primera edición del Systema Naturæ." },
      { t: "Las propiedades de los seres vivos cambian por la interacción entre herencia y selección.", c: 1, e: "La teoría de la evolución convierte el sistema natural en árbol genealógico." },
      { t: "El cuerpo es una máquina; solo el alma humana, indivisible e inmortal, escapa a ella.", c: 2, e: "Dualismo cartesiano." },
      { t: "El lenguaje, el mito o la ciencia son «fenómenos primordiales del espíritu» sin explicación causal.", c: 3, e: "Las formas simbólicas." },
      { t: "Comparando proteínas y ADN, fecha la separación de humanos y chimpancés.", c: 4, e: "La estimación más reciente la sitúa entre 8,7 y 7,3 Ma (d’Oliveira Coelho et al., 2026)." }
    ]
  }]
},
/* ------------------------------------------------------------------ 3 */
{
  id: "s03", n: 3, objeto: "pilares", edad: 2.8, lado: 1,
  corto: "Clima y evolución biocultural",
  titulo: "Clima, cuerpo y herramientas: la evolución biocultural",
  idea: "Los cambios climáticos empujaron a los homininos; la respuesta del género Homo fue cultural: herramientas en lugar de mandíbulas.",
  sintesis: [
    "El enfriamiento global desde hace unos 10 Ma redujo la selva tropical africana y extendió paisajes más abiertos (Schrenk, 2022). Los fósiles más antiguos atribuidos al linaje humano, Sahelanthropus (Chad, hacia 7 Ma), Orrorin (Kenia, hacia 6 Ma) y Ardipithecus (Etiopía, desde 5,8 Ma), muestran indicios de marcha bípeda combinada con la trepa. Para Sahelanthropus, los análisis del fémur defienden un bipedismo habitual (Daver et al., 2022; Williams et al., 2026) que otros discuten (Macchiarelli et al., 2020). Un fémur de 7,2 Ma hallado en Azmaka (Bulgaria) y atribuido a Graecopithecus reabre la pregunta de dónde surgió el bipedismo (Spassov et al., 2026).",
    "Los australopitecos, desde hace unos 4 Ma, tenían cerebros del tamaño del de un chimpancé, molares grandes y una dieta oportunista. Caminaban erguidos, pero la resistencia de sus huesos indica que seguían pasando mucho tiempo en los árboles; Homo, en cambio, sería mucho más terrestre (Carlson et al., 2026). Frente a los depredadores, la cooperación del grupo era su principal defensa.",
    "Un nuevo enfriamiento, desde hace 2,8 Ma, provocó tres tipos de respuesta (Schrenk, 2022): la expansión pasiva (poblaciones que siguen a su ecosistema), la adaptación anatómica (los Paranthropus, de molares enormes y cresta sagital, más extendidos y versátiles de lo que se creía: Alemseged et al., 2026) y la evolución biocultural. Esta última define a Homo, documentado desde hace 2,8 Ma en Ledi-Geraru (Villmoare et al., 2015): triturar con piedras lo que otros trituran con los dientes da independencia del entorno, a costa de depender cada vez más de las herramientas.",
    "Homo erectus, de cuerpo robusto, piernas largas, prensión de precisión y cerebro creciente, sale de África hace más de 2 Ma: China hacia 2,1 Ma (Zhu et al., 2018), el Cáucaso hacia 1,8 Ma; en Sudáfrica está presente hacia 2,04-1,95 Ma (Martin et al., 2026). En Majuangou (China), entre 1,76 y 1,32 Ma, los homininos preferían paisajes relativamente abiertos (Fan et al., 2025)."
  ],
  conceptos: [
    { t: "Evolución biocultural", d: "Interacción entre cambio biológico y conducta cultural; en Homo, la herramienta sustituye a la especialización anatómica." },
    { t: "Expansión pasiva", d: "Desplazamiento de una población que sigue a su ecosistema cuando este se desplaza." },
    { t: "Megadontia", d: "Dientes de gran tamaño, como los molares de Paranthropus." },
    { t: "Prensión de precisión", d: "Oposición del pulgar que permite que las yemas se toquen y manipulen objetos con control." }
  ],
  pensar: "Schrenk concluye que la transferencia de conocimiento y el intercambio genético fueron la condición de la expansión humana y que el aislamiento no es una estrategia viable ante los retos globales. ¿Es legítimo trasladar así una conclusión paleoantropológica al presente? ¿Qué condiciones debería cumplir esa analogía?",
  debates: [
    "El origen del bipedismo sigue abierto: ni la locomoción de Sahelanthropus ni la atribución del fémur de Azmaka están resueltas.",
    "Una hipótesis atribuye la estabilización de la marcha bípeda a vadear en busca de alimento acuático en las orillas de la sabana (Schrenk, 2022); es una entre varias y no goza de consenso."
  ],
  refs: ["schrenk2022", "daver2022", "williams2026", "macchiarelli2020", "spassov2026", "carlson2026", "alemseged2026", "villmoare2015", "zhu2018", "martin2026", "fan2025"],
  retos: [
    {
      tipo: "clasificar", titulo: "Tres respuestas al enfriamiento de hace 2,8 Ma",
      consigna: "Asigne cada caso al tipo de respuesta.",
      categorias: ["Expansión pasiva", "Adaptación anatómica", "Evolución biocultural"],
      items: [
        { t: "Poblaciones de Au. africanus se desplazan hacia el ecuador por corredores fluviales.", c: 0, e: "Siguen al ecosistema que se contrae." },
        { t: "Paranthropus desarrolla molares enormes y una cresta sagital para los músculos masticadores.", c: 1, e: "Respuesta anatómica a una dieta dura y fibrosa." },
        { t: "Homo rudolfensis tritura alimentos vegetales duros golpeándolos con piedras.", c: 2, e: "La herramienta sustituye a la mandíbula." },
        { t: "Arcos cigomáticos anchos y cara ancha en las poblaciones de África oriental.", c: 1, e: "Rasgos de los «cascanueces»." },
        { t: "Creciente independencia del ambiente, pero dependencia de las herramientas.", c: 2, e: "El precio de la vía cultural." }
      ]
    },
    {
      tipo: "ordenar", titulo: "La galería de antepasados", explicacion: "El orden sigue la primera aparición conocida de cada especie, no una línea de descendencia: varias especies convivieron (por ejemplo, Paranthropus boisei y los primeros Homo en África oriental), y cada nuevo hallazgo puede adelantar o retrasar estas fechas.",
      consigna: "Ordene de más antigua a más reciente según su primera aparición conocida en el registro fósil.",
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
  corto: "Las primeras herramientas",
  titulo: "Las primeras herramientas: Lomekwiense y Olduvayense",
  idea: "Las lascas importaban tanto como los cantos tallados: el Olduvayense es, ante todo, una gran tradición de producción de lascas.",
  sintesis: [
    "El término Olduvayense procede de la garganta de Olduvai (Tanzania), donde Louis y, sobre todo, Mary Leakey definieron esta industria. Se la llamó «industria de cantos tallados» (Modo 1), pero los cantos eran a menudo núcleos y las lascas extraídas eran igual de importantes. Más que una secuencia lineal de lo simple a lo complejo, conviene entenderlo como una gran tradición de producción de lascas (Bolus, 2022).",
    "Antes está el Lomekwiense: en Lomekwi 3 (Turkana occidental, Kenia), útiles de unos 3,3 Ma tallados golpeando la piedra contra un yunque o mediante técnica bipolar (Harmand et al., 2015), con una datación y una asociación que algunos cuestionan (Domínguez-Rodrigo y Alcalá, 2019). En el Olduvayense, el núcleo se sostiene en una mano y se golpea con el percutor de la otra. Los conjuntos más antiguos son los de Nyayanga (Kenia, 3,0-2,6 Ma), junto a restos de Paranthropus (Plummer et al., 2023), Ledi-Geraru (2,61 Ma; Braun et al., 2019) y Gona (2,6 Ma). En Namorotukunan (cuenca del Turkana), la misma técnica se mantuvo unos 300 000 años, entre 2,75 y 2,44 Ma, pese a los cambios ambientales (Braun et al., 2025). En Lokalalei 2C (2,34 Ma), los remontajes muestran más de 50 lascas de un único núcleo (Delagnes y Roche, 2005).",
    "Las lascas abrían recursos nuevos. En EAK (Olduvai, hacia 1,78 Ma) se descuartizó un elefante (Domínguez-Rodrigo et al., 2026), y en Koobi Fora, hacia 1,6 Ma, Homo combinaba caza, carroñeo y extracción de médula, un nicho de forrajeo estable y flexible (Forrest et al., 2026). El carroñeo, lejos de ser marginal, pudo ser una fuente fiable de alimento (Mateos et al., 2025).",
    "Fuera de África, Dmanisi (Georgia, hacia 1,8 Ma) demuestra que se podía salir del continente con un utillaje simple (Lordkipanidze et al., 2013). Pero como el Olduvayense africano es casi un millón de años más antiguo, tener herramientas no bastaba por sí solo para expandirse. Dos rasgos cognitivos destacan: el conocimiento de la mecánica de fractura de la roca y la planificación anticipada, es decir, fabricar útiles para una necesidad futura (Bolus, 2022)."
  ],
  conceptos: [
    { t: "Lomekwiense", d: "Industria de Lomekwi 3 (hacia 3,3 Ma): grandes núcleos y lascas, percutores y yunques; talla sobre yunque o bipolar." },
    { t: "Percusión a mano alzada", d: "El núcleo se sostiene libremente en una mano y se golpea con el percutor; típica del Olduvayense." },
    { t: "Chopper / chopping tool", d: "Canto con filo obtenido por extracciones en una cara (chopper) o en ambas (chopping tool)." },
    { t: "Remontaje", d: "Reconstrucción de la secuencia de talla uniendo lascas y núcleo; revela la planificación." },
    { t: "Planificación anticipada", d: "Producir útiles para una necesidad futura, en lugar y momento desconocidos." }
  ],
  pensar: "Si las primeras herramientas son anteriores al género Homo, o pudieron fabricarlas también los Paranthropus, ¿qué queda de la idea de que «el ser humano es el animal que fabrica herramientas»?",
  debates: [
    "¿Quién fabricó las primeras herramientas? Lomekwi 3 es anterior a los fósiles conocidos de Homo, y en Nyayanga los útiles aparecen junto a Paranthropus.",
    "La edad y la asociación estratigráfica de los útiles de Lomekwi 3 siguen discutiéndose."
  ],
  refs: ["bolus2022", "harmand2015", "dominguez2019", "plummer2023", "braun2019", "braun2025", "delagnes2005", "dominguez2026", "forrest2026", "mateos2025", "lordkipanidze2013"],
  retos: [
    {
      tipo: "clasificar", titulo: "La tipología de Mary Leakey",
      consigna: "Identifique cada útil a partir de su descripción.",
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
        { q: "En Lomekwi 3 la piedra se golpeaba…", o: ["Sosteniéndola en una mano y percutiendo con la otra", "Contra un yunque o mediante técnica bipolar", "Con un percutor blando de asta"], c: 1, e: "Ambas técnicas son raras en el Olduvayense." },
        { q: "¿Qué demuestra Dmanisi?", o: ["Que sin bifaces no se podía salir de África", "Que se salió de África con un utillaje simple, aunque las herramientas solas no explican la expansión", "Que el Olduvayense nació en el Cáucaso"], c: 1, e: "El Olduvayense africano es casi un millón de años anterior." },
        { q: "¿Por qué Lokalalei 2C es especial?", o: ["Por sus bifaces simétricos", "Por los remontajes con más de 50 lascas de un solo núcleo", "Por las primeras huellas de fuego"], c: 1, e: "Indican planificación y destreza técnica (Delagnes y Roche, 2005)." }
      ]
    }
  ]
},
/* ------------------------------------------------------------------ 5 */
{
  id: "s05", n: 5, objeto: "bifaz", edad: 1.76, lado: 1,
  corto: "El Achelense",
  titulo: "De África al mundo: el Achelense",
  idea: "El bifaz acompañó a la humanidad durante más de un millón y medio de años: una tradición longeva, estable y, a la vez, abierta a la simetría.",
  sintesis: [
    "Hacia 1,76 Ma aparecen en África oriental (Kokiselei 4, en Kenia; Konso y Gona, en Etiopía) piezas talladas por las dos caras: los bifaces (Lepre et al., 2011; Beyene et al., 2013). El nombre procede de Saint-Acheul (Francia), donde Boucher de Perthes los interpretó como obra humana en la década de 1830. A diferencia del Olduvayense, el Achelense parte de grandes lascas extraídas de bloques, a menudo apoyados en un yunque o en el suelo, lo que exige fuerza, coordinación y precisión (Giemsch, 2022a). Su aparición casi simultánea con cambios en la mano de Homo erectus (pulgar, musculatura flexora, estabilidad articular) sugiere una coevolución rápida entre anatomía y técnica (Key, 2026).",
    "Suele distinguirse un Achelense temprano (1,76-1 Ma), con bifaces de base gruesa y punta estrecha; uno medio (1-0,6 Ma), con formas ovales y triangulares más simétricas; y uno tardío (0,6-0,3 Ma), con piezas más finas. Hacia 1 Ma su fabricación ya era rutinaria en el Rift, y los refinamientos posteriores no se explican principalmente por cambios cognitivos (Muller et al., 2026). En Gran Bretaña, entre 560 000 y 480 000 años, el grosor de los bifaces se reduce un 41 %, y en Boxgrove se usó un percutor de hueso de elefante para la talla de precisión (Shipton et al., 2026; Parfitt y Bello, 2026). La técnica Levallois anuncia la Edad de Piedra Media, con útiles más pequeños y enmangados, desde hace unos 300 000 años.",
    "Los útiles característicos son el bifaz, el hendedor y el pico; se usaron para descarnar grandes animales y trabajar la madera, y las huellas de uso muestran que el modo de empuñarlos cambió con el tiempo (Rodriguez et al., 2025). La madera también se trabajaba: en Kalambo Falls (Zambia) se ensamblaron troncos hace al menos 476 000 años (Barham et al., 2023). La tecnología llega al Levante hacia 1,4 Ma y a Europa entre 900 000 y 500 000 años; su estabilidad revela una transmisión constante en grupos pequeños y móviles, y su simetría y estandarización pudieron preparar el terreno para el simbolismo (Giemsch, 2022a)."
  ],
  conceptos: [
    { t: "Bifaz", d: "Útil de más de 10 cm, tallado por ambas caras, en forma de gota o triángulo, con punta y base." },
    { t: "Hendedor", d: "Gran útil con filo ancho transversal al eje en lugar de punta." },
    { t: "Percusión blanda", d: "Talla con percutor orgánico (asta, hueso) que permite extraer lascas más finas." },
    { t: "Técnica Levallois", d: "Preparación del núcleo para obtener lascas finas de forma predeterminada." },
    { t: "Inercia tecnológica", d: "Estabilidad de una tradición durante miles de generaciones." }
  ],
  pensar: "¿Puede una herramienta casi idéntica durante un millón de años ser prueba de capacidades cognitivas complejas? ¿Qué nos dice la estabilidad sobre la forma en que se enseñaba?",
  debates: [
    "No hay acuerdo sobre cuánto de la mejora de los bifaces se debe a cambios cognitivos y cuánto a la transmisión cultural, la materia prima o la función."
  ],
  refs: ["giemsch2022a", "lepre2011", "beyene2013", "key2026", "muller2026", "shipton2026", "parfitt2026", "rodriguez2025", "barham2023"],
  retos: [
    {
      tipo: "ordenar", titulo: "Las fases del Achelense", explicacion: "La secuencia refleja una tendencia general hacia piezas más finas, simétricas y regulares, con más negativos de lasca y percusión blanda en las fases tardías. Después, la Edad de Piedra Media sustituye los grandes bifaces por útiles más pequeños, a menudo enmangados, y por la talla Levallois. Es una tendencia, no una ley: las formas conviven y dependen también de la materia prima.",
      consigna: "Ordene de más antigua a más reciente. Los bifaces de Konso muestran la misma tendencia: de piezas casi unifaciales a una talla bifacial extensa (Beyene et al., 2013).",
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
        { t: "Gran útil con un extremo apuntado y otro más ancho y redondeado.", c: 0, e: "Bifaz." },
        { t: "Gran útil con filo ancho transversal al eje longitudinal.", c: 1, e: "Hendedor." },
        { t: "Más grueso que el bifaz y de sección a menudo triangular.", c: 2, e: "Pico." },
        { t: "Percutor de asta o hueso que permite piezas más finas.", c: 3, e: "Percusión blanda; en Boxgrove, incluso de hueso de elefante." },
        { t: "Preparación del núcleo para obtener lascas finas y delgadas.", c: 4, e: "Técnica Levallois." }
      ]
    }
  ]
},
/* ------------------------------------------------------------------ 6 */
{
  id: "s06", n: 6, objeto: "hoguera", edad: 1.5, lado: -1,
  corto: "El fuego",
  titulo: "El fuego: usarlo, mantenerlo, producirlo",
  idea: "Usar el fuego no es lo mismo que producirlo: entre ambos median más de un millón de años y cuatro pasos.",
  sintesis: [
    "El fuego da calor para colonizar latitudes y altitudes mayores, protege frente a depredadores y competidores en las cuevas, ahuyenta insectos, limpia los lechos y alarga el día con luz, creando un espacio social para comer y conversar. Exige, además, organizar el aprovisionamiento de combustible. Es también técnico: endurece puntas de madera, facilita la talla de algunas rocas y permitirá fabricar materiales nuevos, como la brea de abedul. Su ventaja principal, para muchos especialistas, es la cocción, que amplía la dieta, elimina toxinas y ahorra energía digestiva (Giemsch, 2022b).",
    "El proceso puede resumirse en cuatro pasos: habituarse al fuego natural, usarlo, mantenerlo y producirlo (Giemsch, 2022b). El primero no es exclusivamente humano: los chimpancés de sabana de Fongoli (Senegal) se mueven con calma por paisajes en llamas (Pruetz y Herzog, 2017).",
    "Las evidencias más antiguas, de hace unos 1,5 Ma en Koobi Fora, Chesowanja (Kenia) o Swartkrans (Sudáfrica), son discutidas, porque pueden deberse a fuegos naturales. En la cueva de Wonderwerk (Sudáfrica) hay fuego in situ hacia 1 Ma (Berna et al., 2012) y, en niveles de 1,79 a 1,07 Ma, miles de huesos de micromamíferos quemados y al menos dos focos de combustión que indican una gestión recurrente; sus autores proponen que las egagrópilas de rapaces sirvieron de combustible para conservar las brasas (Marin-Monfort et al., 2026). En Gesher Benot Ya‘aqov (Israel), hacia 790 000 años, hay hogares y una elección del lugar de asentamiento ligada a la leña disponible (Goren-Inbar et al., 2004; Allué et al., 2026).",
    "Desde hace unos 400 000 años las evidencias de fuego se multiplican. La prueba más antigua de producción deliberada procede de Barnham (Reino Unido, hacia 415 000 años): sedimentos quemados, bifaces fracturados por el calor y fragmentos de pirita llevados al lugar (Davis et al., 2025). Una hipótesis genética reciente plantea incluso que tanto tiempo junto al fuego seleccionó nuestra respuesta a las quemaduras leves (Cuddihy et al., 2026)."
  ],
  conceptos: [
    { t: "Uso pasivo del fuego", d: "Aprovechar los efectos de un incendio natural (alimentos expuestos, visibilidad)." },
    { t: "Mantenimiento del fuego", d: "Alimentar y transportar un fuego natural sin saber encenderlo." },
    { t: "Producción del fuego", d: "Encender fuego a voluntad, donde y cuando se desee." },
    { t: "Hipótesis de la cocción", d: "La comida cocinada habría permitido reducir el intestino y liberar energía para un cerebro mayor." }
  ],
  pensar: "Si los chimpancés de sabana se mueven con calma entre incendios, ¿dónde está exactamente la frontera entre el uso animal y el uso humano del fuego?",
  debates: [
    "La hipótesis de la cocción compite con otra explicación de la energía extra que exigía un cerebro mayor: la médula ósea, accesible con piedras mucho antes de controlar el fuego.",
    "El uso de egagrópilas como combustible en Wonderwerk es una propuesta, no un resultado demostrado."
  ],
  refs: ["giemsch2022b", "pruetz2017", "berna2012", "marin2026", "shaar2021", "gorenInbar2004", "allue2026", "davis2025", "cuddihy2026"],
  retos: [
    {
      tipo: "ordenar", titulo: "Cuatro pasos hacia el fuego", explicacion: "Cada paso exige más control y anticipación que el anterior: habituarse supone perder el miedo; usar, aprovechar lo que deja el incendio; mantener, alimentar y transportar las llamas; producir, saber encenderlo a voluntad. Entre usar el fuego y producirlo media más de un millón de años.",
      consigna: "Ordene los pasos desde el contacto con el fuego natural hasta su producción.",
      items: [
        { t: "Habituarse: no huir ante un incendio natural", d: "como hacen hoy los chimpancés de sabana" },
        { t: "Usar: aprovechar lo que deja el incendio", d: "frutos, tubérculos y animales expuestos" },
        { t: "Mantener: alimentar y transportar el fuego", d: "prolongarlo y llevarlo a otro lugar" },
        { t: "Producir: encenderlo a voluntad", d: "por azar y experimentación" }
      ]
    },
    {
      tipo: "ordenar", titulo: "Cronología de las evidencias", explicacion: "Las pruebas más antiguas son también las más discutidas, porque los restos quemados al aire libre pueden deberse a incendios naturales. Las evidencias en el interior de una cueva (Wonderwerk) y los hogares reiterados (Gesher Benot Ya‘aqov) son más sólidas; la producción de fuego solo se documenta mucho después, con pirita, en Barnham.",
      consigna: "Ordene de más antigua a más reciente.",
      items: [
        { t: "Koobi Fora (Kenia): materiales alterados por el calor, discutidos", d: "hacia 1,5 Ma" },
        { t: "Wonderwerk (Sudáfrica): fuego in situ en el interior de la cueva", d: "hacia 1 Ma" },
        { t: "Gesher Benot Ya‘aqov (Israel): hogares", d: "hacia 790 000 años" },
        { t: "Barnham (Reino Unido): producción con pirita", d: "hacia 415 000 años" }
      ]
    }
  ]
},
/* ------------------------------------------------------------------ 7 */
{
  id: "s07", n: 7, objeto: "baobab", edad: 1.0, lado: 1,
  corto: "¿Crudo o asado?",
  titulo: "¿Crudo o asado? Cómo cambió el fuego el menú",
  idea: "Con herramientas, el menú vegetal crece; con fuego, casi se duplica, sobre todo en tubérculos, semillas y hojas.",
  sintesis: [
    "Los restos vegetales casi nunca se conservan. Para estimar qué alimentos tenían a su alcance los primeros humanos, Bruch y Hahn (2022) estudiaron las plantas silvestres comestibles de las sabanas actuales de la Cuna de la Humanidad (noreste de Sudáfrica), región con restos de Homo erectus y con el fuego de Wonderwerk. Suponen que muchas especies ya existían hace más de dos millones de años con propiedades nutritivas semejantes.",
    "De 814 especies, más del 20 % son comestibles. Con datos detallados de 139 especies y 203 partes, el estudio distingue frutos, semillas, órganos subterráneos de reserva (raíces, tubérculos, rizomas), hojas y otras partes (savia, corteza, madera). Sin preparación son comestibles 80 partes de 74 especies, sobre todo frutos. Con piedras para cascar, raspar o frotar se supera el centenar. Con fuego, el número casi se duplica: los órganos subterráneos y las hojas se triplican y las semillas se duplican (Bruch y Hahn, 2022).",
    "El baobab (Adansonia digitata) es el mejor ejemplo: cinco partes comestibles sin fuego, como la pulpa rica en vitamina C o las semillas grasas, y hojas que, cocinadas, aportan proteínas. Otros datos apuntan en la misma dirección: en Koobi Fora, hacia 1,6 Ma, Homo combinaba caza, carroñeo y médula (Forrest et al., 2026), y el desgaste de los molares de la Sima de los Huesos (Atapuerca, hacia 430 000 años) indica una dieta omnívora y flexible, con carne y vegetales en proporciones parecidas (Martín-Francés et al., 2026). La flexibilidad alimentaria, más que una dieta concreta, parece el rasgo distintivo."
  ],
  conceptos: [
    { t: "Órganos subterráneos de reserva", d: "Raíces, tubérculos y rizomas ricos en almidón, disponibles también en la estación seca." },
    { t: "Analogía actualista", d: "Inferir el pasado a partir de un sistema actual que se supone comparable." },
    { t: "Alimento de reserva", d: "Recurso disponible todo el año que compensa la escasez estacional." }
  ],
  pensar: "El estudio usa la vegetación actual como modelo de hace dos millones de años. ¿Qué supuestos asume esa analogía y cómo podrían sesgar el resultado?",
  debates: [
    "La analogía con la vegetación actual no puede comprobarse directamente: el clima y las especies han cambiado desde el Pleistoceno."
  ],
  refs: ["bruchHahn2022", "forrest2026", "martinFrances2026"],
  retos: [
    { tipo: "prediccion-dieta", titulo: "Predecir el menú",
      consigna: "Sin fuego ni herramientas hay 80 partes vegetales comestibles. Estime cuántas habría en cada escenario y compare con el estudio de Bruch y Hahn (2022). Los valores por categoría se han leído de su gráfico y son aproximados (±2); los totales de 80 y 203 figuran en el texto del estudio.",
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
  corto: "Pensar dando rodeos",
  titulo: "Dar un rodeo: el camino hacia el pensamiento humano",
  idea: "Pensar es dar rodeos: cuanto más se aleja la solución del problema, más planificación, aprendizaje y cooperación hacen falta.",
  sintesis: [
    "El pensamiento no ocurre solo en el cerebro: se apoya en los sentidos, en las manos, en las cosas (el bastón de una persona ciega, la lista de la compra) y en el grupo, del que heredamos clasificaciones y valores. Un bebé aprende a pensar tocando, chupando y lanzando objetos; un niño aprende a montar en bicicleta montando (Haidle, 2022a).",
    "Para periodos sin escritura, la fabricación y el uso de herramientas son una ventana al pensamiento. El antílope come hierba sin rodeos. El chimpancé que quiere una nuez debe buscar antes un percutor: un rodeo. Para las termitas usa a veces un conjunto de dos herramientas. Desde hace al menos 3,3 Ma, los homininos usan una herramienta para fabricar otra con la que hacer algo distinto: un rodeo ampliado que solo se ha documentado en el linaje humano (Haidle, 2022a).",
    "Los rodeos largos se dominan descomponiéndolos en módulos independientes, como procurarse materia prima o fabricar útiles, que pueden realizarse aunque no se necesiten de inmediato, recombinarse y aprenderse por separado. Fabricar útiles complejos exige aprender y transmitir secuencias de acciones, lo que favorece la imitación, la enseñanza y la comunicación (Key, 2026). En Gran Dolina (Atapuerca), hacia 400 000 años, el 99 % del utillaje es de sílex seleccionado y el aprovisionamiento se desplaza a zonas altas: planificación a escala de paisaje (Arteaga-Brieba et al., 2026).",
    "Si una acción se descompone en módulos, otros pueden encargarse de partes: así se vuelve concebible la cooperación («yo te llevo esto y tú me haces aquello»). Buena parte de lo que hoy damos por supuesto procede de esta ampliación del pensamiento en rodeos iniciada hace unos tres millones de años."
  ],
  conceptos: [
    { t: "Pensamiento en rodeos", d: "Aplazar la meta para atender primero a un medio (una herramienta)." },
    { t: "Rodeo ampliado", d: "Usar una herramienta para fabricar otra herramienta; documentado solo en homininos." },
    { t: "Módulo", d: "Unidad de acción independiente que cumple una meta intermedia." },
    { t: "Cognición corporizada y distribuida", d: "El pensamiento se apoya en el cuerpo, los objetos y el grupo." }
  ],
  pensar: "Las crías de chimpancé tardan unos tres años en dominar el cascado de nueces. ¿Qué implicaciones tiene ese dato para imaginar cuánto tiempo y qué apoyos necesitaba un niño hominino para aprender a tallar?",
  debates: [],
  refs: ["haidle2022a", "key2026", "arteaga2026"],
  retos: [
    {
      tipo: "ordenar", titulo: "Rodeos cada vez más largos", explicacion: "Cada paso alarga la distancia entre la necesidad y su satisfacción: primero una herramienta, después varias combinadas y, por último, una herramienta que sirve para fabricar otra. Cuanto más largo es el rodeo, más memoria, planificación y aprendizaje exige.",
      consigna: "Ordene de menor a mayor distancia entre necesidad y satisfacción.",
      items: [
        { t: "El antílope hambriento pace", d: "sin rodeo" },
        { t: "El chimpancé busca una piedra para cascar una nuez", d: "un rodeo: la herramienta" },
        { t: "El chimpancé abre el termitero con un palo y pesca con una ramita", d: "conjunto de herramientas" },
        { t: "El hominino de Lomekwi talla una lasca con un percutor para cortar", d: "herramienta para hacer herramienta" }
      ]
    },
    {
      tipo: "ordenar", titulo: "Una cadena de módulos", explicacion: "Ningún módulo tiene sentido aislado: cada uno prepara el siguiente y todos dependen de la necesidad final. Esta secuencia, llamada cadena operativa, permite comparar la complejidad de conductas distintas, de los chimpancés a los primeros talladores.",
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
  corto: "Aprender de los demás",
  titulo: "De sonajeros y cajas-rompecabezas: el aprendizaje social",
  idea: "Los niños copian incluso lo inútil: la sobreimitación favorece la transmisión de normas y rituales.",
  sintesis: [
    "Los bebés atienden desde muy pronto a caras, movimientos biológicos y miradas. En estudios con seguidor ocular, bebés de cuatro meses que ven a una persona mirar un juguete y no otro miran después más tiempo el juguete no mirado: el mirado ya les resulta conocido, señal de que la mirada ajena guía su atención y su memoria (Michel, 2022).",
    "El ojo humano tiene un contraste muy marcado entre la pupila oscura y la esclerótica blanca (Kobayashi y Kohshima, 1997). Con puntos negros que «miran» sobre fondo blanco, los bebés reaccionan como ante una mirada real; con el contraste invertido, el efecto se debilita (Michel et al., 2017).",
    "Con niños mayores se usan cajas-rompecabezas, que permiten distinguir la emulación (aprender la meta) de la imitación (aprender el procedimiento exacto). Niños de unos cuatro años y chimpancés vieron introducir un palo en una abertura superior inútil y en otra inferior útil. Los niños copiaron también la acción inútil con la caja opaca y con la transparente; los chimpancés solo la copiaron con la opaca, y con la transparente fueron directos a la abertura útil (Horner y Whiten, 2005).",
    "Las explicaciones de esta sobreimitación son normativas («así se hace»), intencionales («por algo lo hará») y de pertenencia («si lo hago igual, soy del grupo») (Hoehl et al., 2019). Copiar con fidelidad, aunque sea menos eficiente, facilitaría la transmisión de rituales y costumbres sin función física evidente, una pieza clave de la cultura acumulativa."
  ],
  conceptos: [
    { t: "Emulación", d: "Aprender la meta que puede alcanzarse, no el procedimiento." },
    { t: "Imitación", d: "Copiar el procedimiento exacto para lograr una meta." },
    { t: "Sobreimitación", d: "Copiar también acciones innecesarias o causalmente irrelevantes." },
    { t: "Conformismo", d: "Abandonar la estrategia propia para adoptar la de los demás." }
  ],
  pensar: "La sobreimitación hace al niño «menos eficiente» que al chimpancé. ¿En qué sentido es, sin embargo, una ventaja evolutiva? ¿Qué rituales cotidianos o académicos se transmiten precisamente así?",
  debates: [
    "Que los chimpancés no aprendan por imitación es la posición de algunos investigadores, no un consenso.",
    "Un estudio de 2026 (Kaifu et al.) interpreta deformaciones craneales en fósiles de H. erectus y H. floresiensis como indicio de crías muy dependientes y crianza cooperativa; no se ha podido verificar su referencia completa."
  ],
  refs: ["michel2022", "kobayashi1997", "michel2017", "horner2005", "hoehl2019"],
  retos: [
    { tipo: "caja", titulo: "La caja-rompecabezas",
      consigna: "Observe la demostración: primero el palo entra por la abertura superior (inútil) y después por la inferior (útil). Prediga qué hará cada sujeto." }
  ]
},
/* ------------------------------------------------------------------ 10 */
{
  id: "s10", n: 10, objeto: "ventana", edad: null, lado: 1, lab: 0,
  corto: "Habitus",
  titulo: "Habitus: la imprimación cultural",
  idea: "Antes de imitar o de ser enseñados, absorbemos un modo de estar en el mundo: el habitus es el humus de la cultura.",
  sintesis: [
    "Cuatro escenas (Schlaudt, 2022): Susanne abre la ventana de un aula cargada y Patrick no lo piensa, aunque sabe hacerlo; las crías de borrego cimarrón siguen a la manada en su migración anual sin «saberlo» (Jesmer et al., 2018); los niños de Langda (Nueva Guinea) juegan en el río mientras los adultos golpean piedras para elegir la que «suena bien» para hacer hachas (Stout, 2002); Armand es admitido en una universidad de élite pese a no saber la respuesta, mientras Hamid, que sí la sabía, es rechazado.",
    "La última escena se explica con Pierre Bourdieu: el habitus o capital cultural es una herencia intangible, propia de un medio social, que en una entrevista o en un examen se percibe como rasgo individual (seguridad, desenvoltura). Bourdieu lo usó para explicar cómo se reproducen las desigualdades en sociedades que se proclaman igualitarias.",
    "El concepto puede aplicarse a los comienzos de la cultura (Haidle y Schlaudt, 2020). Las ciencias del comportamiento distinguen la imitación del más joven, la demostración consciente del mayor y la enseñanza propiamente dicha, con corrección y explicación. El habitus es más básico: no se copia una acción percibida como medio para un fin, sino que se participa y se «toma el mismo camino». Bourdieu lo comparaba con la ósmosis. Los niños de Langda no prestaban atención, pero sabrán dónde y cómo encontrar la piedra adecuada.",
    "Las tradiciones así absorbidas pueden ser muy estables. En la cueva de Üçağızlı II (Turquía), neandertales (77 000-59 000 años) y Homo sapiens (59 000-47 000 años) se suceden sin ruptura visible: mismas técnicas de talla y misma selección de conchas como adorno (Baykara et al., 2026)."
  ],
  conceptos: [
    { t: "Habitus", d: "Disposición incorporada, propia de un medio social, que orienta la percepción y la acción sin deliberación." },
    { t: "Capital cultural", d: "Recursos culturales heredados (gustos, saberes, maneras) que funcionan como ventaja social." },
    { t: "Ósmosis cultural", d: "Absorción lenta del ambiente social, sin intención de aprender ni de enseñar." },
    { t: "Enseñanza", d: "Transmisión intencional que incluye corrección y explicación." }
  ],
  pensar: "Si el habitus se percibe como talento individual, ¿qué consecuencias tiene para la evaluación en una entrevista de trabajo, un examen oral o la concesión de una beca?",
  debates: [
    "Aplicar el habitus a los homininos es una propuesta teórica, no un resultado empírico.",
    "En Üçağızlı II, la continuidad puede deberse a la transmisión entre grupos o a soluciones convergentes ante un mismo entorno."
  ],
  refs: ["schlaudt2022", "haidleSchlaudt2020", "jesmer2018", "stout2002", "baykara2026"],
  retos: [
    {
      tipo: "clasificar", titulo: "Formas de aprender",
      consigna: "Relacione cada situación con la forma de aprendizaje que describe.",
      categorias: ["Imitación", "Demostración", "Enseñanza", "Habitus"],
      items: [
        { t: "La cría copia lo que ha visto hacer a un adulto.", c: 0, e: "La iniciativa es del más joven." },
        { t: "Un adulto muestra a propósito cómo golpear el núcleo, despacio, delante del aprendiz.", c: 1, e: "Demostración consciente del mayor." },
        { t: "La adulta corrige el ángulo del golpe y explica por qué esa piedra no sirve.", c: 2, e: "Corrección y comentario explicativo." },
        { t: "Los niños de Langda juegan en el río y, años después, saben qué piedra «suena bien».", c: 3, e: "Absorción sin atención deliberada." },
        { t: "En la cena, los hijos aprenden de qué se habla y qué no se dice.", c: 3, e: "El ejemplo clásico de Bourdieu." }
      ]
    },
    {
      tipo: "clasificar", titulo: "Las cuatro escenas",
      consigna: "¿Qué ilustra cada escena?",
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
  corto: "La expansión humana",
  titulo: "Más allá de las montañas: la expansión humana",
  idea: "La expansión humana no fue un viaje con destino, sino procesos largos, en oleadas, con retrocesos y mezclas.",
  sintesis: [
    "El relato se ha reescrito muchas veces. El niño de Taung, identificado en 1924 y publicado en 1925, no fue aceptado hasta los hallazgos africanos de los años sesenta y setenta. En los ochenta, la anatomía y la genética situaron el origen de nuestra especie en África, con una gran salida hace 60 000-40 000 años. Desde 2010, con más fósiles, mejores dataciones y genomas antiguos, el panorama es mucho más complejo (Haidle, 2022b).",
    "Distribuirse no es siempre emigrar: una especie puede desplazarse porque se desplaza su hábitat, y las migraciones con destino son un fenómeno reciente. Los australopitecos llegaron al sur de África hace unos 3,67 Ma. Homo, «especializado en no especializarse», salió pronto del continente: Ain Boucherit (Argelia, hasta 2,4 Ma; Sahnouni et al., 2018), el valle de Zarqa (Jordania, hasta 2,48 Ma), Shangchen (China, hasta 2,1 Ma; Zhu et al., 2018) y Dmanisi (1,8 Ma). Una nueva cronología, aún sin publicar en su versión definitiva, situaría además ‘Ubeidiya (Israel) hacia 2,14-1,93 Ma. Con solo 1 km por generación de 20 años se recorren 10 000 km en 200 000 años (Haidle, 2022b).",
    "Java y el norte de China se ocupan hacia 1,6 Ma, Europa mediterránea hacia 1,4-1,2 Ma y Filipinas hacia 709 000 años (Ingicco et al., 2018), quizá con avances y retrocesos. Desde hace unos 500 000 años se separan los grupos que darán neandertales en Europa y denisovanos en Asia, mientras Homo sapiens se forma en toda África, como muestra Jebel Irhoud (Marruecos, hacia 300 000 años; Hublin et al., 2017). Los denisovanos, conocidos al principio por fragmentos, tienen ya un cráneo, el de Harbin (más de 146 000 años; Fu et al., 2025a, 2025b), y nuevos restos en Bianfu (suroeste de China, 167 000-134 000 años; Rao et al., 2026). El esmalte de seis Homo erectus chinos comparte una variante con ellos (Fu et al., 2026), y nuestro genoma conserva huellas de linajes «superarcaicos» (Zhang et al., 2026).",
    "Nuestra especie salió de África varias veces: hay indicios en Grecia e Israel hacia 200 000 años, en el sur de China entre 230 000 y 130 000 años (Fuyan; Zhong et al., 2026) y en Arabia durante las fases húmedas (Bretzke et al., 2026). Llegó a Sahul (Australia y Nueva Guinea) hacia 60 000 años (Gandini et al., 2025), quizá por una ruta septentrional por Sulawesi, donde una plantilla de mano de al menos 67 800 años sería el arte rupestre más antiguo conocido (Oktaviana et al., 2026). Después ocupó el Ártico, América y el Pacífico. Que África tenga ese papel central puede explicarse, según un modelo matemático, por ser durante millones de años la mayor región densamente poblada (Bons et al., 2019)."
  ],
  conceptos: [
    { t: "Dispersión pasiva", d: "Cambio de distribución que sigue al desplazamiento del hábitat." },
    { t: "Out of Africa II", d: "Gran salida de Homo sapiens hace 60 000-40 000 años según el modelo de los años ochenta, hoy matizado por salidas anteriores." },
    { t: "Mezcla (introgresión)", d: "Intercambio genético entre poblaciones humanas distintas (sapiens, neandertales, denisovanos)." },
    { t: "«Especialización en no especializarse»", d: "Dieta y conducta flexibles que reducen los requisitos de hábitat de Homo." }
  ],
  pensar: "La historia de la expansión depende de hallazgos y dataciones aislados que cambian cada pocos años. ¿Cómo deberían presentarse en un libro o en una exposición las fechas «más antiguas»?",
  debates: [
    "La nueva datación de ‘Ubeidiya (Matmon et al., 2026) no se ha podido verificar con DOI.",
    "La datación por uranio-torio del arte de Sulawesi ha sido cuestionada.",
    "La atribución de algunos restos asiáticos a los denisovanos se basa en pocas variantes de proteínas."
  ],
  refs: ["haidle2022b", "sahnouni2018", "zhu2018", "ingicco2018", "hublin2017", "fu2025a", "fu2025b", "rao2026", "fu2026", "zhang2026", "zhong2026", "bretzke2026", "gandini2025", "oktaviana2026", "bons2019"],
  retos: [
    { tipo: "mapa", titulo: "Seis momentos de la expansión",
      consigna: "Recorra las seis etapas del mapa y ordene después los hitos de llegada." },
    {
      tipo: "ordenar", titulo: "¿Quién llegó antes?", explicacion: "La expansión no fue un único viaje: los homininos salieron de África muy pronto y varias veces (Zarqa, Shangchen, Dmanisi), mientras que llegar a Filipinas o a Sahul exigió cruzar el mar. Homo sapiens se expandió mucho más tarde. Varias de estas fechas siguen en revisión.",
      consigna: "Ordene de más antiguo a más reciente.",
      items: [
        { t: "Australopitecos en el sur de África", d: "hasta 3,67 Ma" },
        { t: "Homo en el valle de Zarqa (Jordania)", d: "hasta 2,48 Ma" },
        { t: "Shangchen (China central)", d: "hasta 2,1 Ma" },
        { t: "Dmanisi (Georgia)", d: "1,8 Ma" },
        { t: "Java y norte de China", d: "hacia 1,6 Ma" },
        { t: "Filipinas", d: "hacia 709 000 años" },
        { t: "Homo sapiens en el sur de China (Fuyan)", d: "230 000-130 000 años" },
        { t: "Sahul (Australia y Nueva Guinea)", d: "hacia 60 000 años" }
      ]
    },
    { tipo: "numerico", titulo: "Un kilómetro por generación",
      consigna: "Si el territorio explorado avanza 1 km por generación (unos 20 años) en una dirección, ¿cuántos años hacen falta para recorrer 10 000 km?",
      respuesta: 200000, tolerancia: 0.02, unidad: "años",
      explicacion: "10 000 km × 1 generación/km × 20 años/generación = 200 000 años." }
  ]
},
/* ------------------------------------------------------------------ 12 */
{
  id: "s12", n: 12, objeto: "nuez", edad: null, lado: -1, lab: 1,
  corto: "Culturas chimpancés",
  titulo: "Culturas chimpancés: en busca de indicios",
  idea: "Hay diferencias de conducta entre comunidades de chimpancés que no explican ni los genes ni la ecología: los cimientos de la cultura no son exclusivamente humanos.",
  sintesis: [
    "Si cultura es lo que crea el ser humano frente a la naturaleza, la pregunta se cierra antes de empezar. En biología se habla de tradición cultural cuando una conducta adaptativa no está controlada genéticamente y se transmite por aprendizaje social; la suma de tradiciones es la cultura de un grupo (Wittig, 2022). Los chimpancés, nuestros parientes más próximos junto a los bonobos, viven en comunidades de fisión-fusión, crían durante unos diez años y usan herramientas variadas: palos afilados para cazar gálagos, esponjas de hojas, martillos de piedra o madera para cascar nueces, juegos de palo y ramita para las termitas.",
    "La comparación de seis estudios de campo de larga duración separó tres categorías de conducta: universales (I), ausentes por razones ecológicas (II) y ausentes sin causa ecológica (III). Solo las de categoría III son candidatas a tradiciones culturales: 38 conductas, entre ellas el cascado de nueces, la pesca de termitas o la «danza de la lluvia» (Whiten et al., 1999). Un experimento lo reforzó: ante troncos con miel, la comunidad de Kanyawara usó palos y la de Sonso, que no usa palos, hizo esponjas de hojas, incluso después de que se le mostrara el palo (Gruber et al., 2009).",
    "En el parque de Taï (Costa de Marfil), las comunidades del norte y del este pasan de martillos de piedra (60-70 %) a martillos de madera (10-20 %) a medida que las nueces de coula se ablandan durante la temporada; la del sur sigue usando piedra (en torno al 80 %) aunque no tiene más piedras (Luncz et al., 2012). Las hembras que emigraron al grupo del sur adoptaron en pocas temporadas la costumbre local: conformismo cultural en libertad (Wittig, 2022)."
  ],
  conceptos: [
    { t: "Tradición cultural", d: "Conducta transmitida por aprendizaje social, no por genes ni impuesta por el ambiente." },
    { t: "Método de exclusión", d: "Atribuir a la cultura las diferencias que no explican ni la genética ni la ecología (categoría III)." },
    { t: "Fisión-fusión", d: "Organización en subgrupos cambiantes dentro de una comunidad." },
    { t: "Conformismo", d: "Adoptar la práctica dominante del nuevo grupo aunque la propia fuera igual de eficaz." }
  ],
  pensar: "El método de exclusión define la cultura por lo que no es (ni genes ni ecología). ¿Qué problemas plantea esta definición negativa? ¿Puede aplicarse también a grupos humanos?",
  debates: [
    "El método de exclusión suscitó un fuerte debate: diferencias ecológicas o genéticas sutiles podrían explicar parte de las conductas atribuidas a la cultura."
  ],
  refs: ["wittig2022", "whiten1999", "gruber2009", "luncz2012", "coelho2026"],
  retos: [
    { tipo: "prediccion-tai", titulo: "Martillos de piedra en Taï",
      consigna: "Las comunidades del norte y del este cambian de piedra a madera durante la temporada. Prediga cómo se comporta la comunidad del sur." },
    {
      tipo: "clasificar", titulo: "Las tres categorías",
      consigna: "Clasifique cada observación según el método de exclusión.",
      categorias: ["I · Universal", "II · Ausencia ecológica", "III · Candidata a cultura"],
      items: [
        { t: "Una conducta que muestran todas las comunidades estudiadas.", c: 0, e: "Probable adaptación genética." },
        { t: "Una comunidad no casca nueces porque en su territorio no hay nueces.", c: 1, e: "La ausencia se explica por el ambiente." },
        { t: "Una comunidad no casca nueces aunque tiene nueces, martillos y yunques.", c: 2, e: "Ausencia no explicada por la ecología." },
        { t: "Sonso usa hojas y no palos para la miel, incluso cuando se le muestra el palo.", c: 2, e: "Experimento de Gruber et al. (2009)." }
      ]
    }
  ]
},
/* ------------------------------------------------------------------ 13 */
{
  id: "s13", n: 13, objeto: "helice", edad: null, lado: 1, lab: 1,
  corto: "Métodos de investigación",
  titulo: "Tras los pasos de la hominización: investigación y métodos",
  idea: "Sin tiempo no hay historia: la datación ordena causas y efectos, y huesos, dientes, genes y proteínas cuentan biografías.",
  sintesis: [
    "La paleoantropología combina geología, biología, química, física e ingeniería. La dimensión temporal es la primera: la datación relativa (estratigrafía) establece secuencias, y la absoluta (geocronología, por ejemplo la desintegración radiactiva) da edades con márgenes de error. A veces importa más saber qué ocurrió antes que la cifra exacta (Böhme, 2022).",
    "La morfología comparada y, cuando se conserva materia orgánica, el ADN y las proteínas permiten reconstruir parentescos. Los denisovanos se identificaron por el ADN de una falange, y una niña siberiana de hace unos 90 000 años resultó hija de madre neandertal y padre denisovano (Slon et al., 2018). Donde el ADN no se conserva, las proteínas antiguas identifican especie y sexo: restos denisovanos en Bianfu y Harbin o el esmalte de Homo erectus en China (Rao et al., 2026; Fu et al., 2025a; Fu et al., 2026). Los genomas de 27 neandertales tardíos del noroeste de Europa no muestran signos de endogamia, sino una metapoblación conectada (Bossoms Mesa et al., 2026).",
    "Huesos y dientes informan sobre crecimiento, duración de la infancia y parto. La química del esmalte, sobre todo el bario, registra la lactancia y el destete (Austin et al., 2013); un niño neandertal fue destetado hacia los dos años y medio (Smith et al., 2018). El dimorfismo sexual y la proporción entre los dedos índice y anular se han usado para inferir la estructura social, con mucha cautela. Un individuo desdentado de Dmanisi (1,8 Ma) que sobrevivió sin poder masticar sugiere cuidados ajenos (Lordkipanidze et al., 2005).",
    "El desgaste dental, las caries, los isótopos estables y los restos en el sarro informan de la dieta; las marcas de corte, del aprovechamiento de carne y médula; los carbones, los suelos alterados y nuevas técnicas de luminiscencia aplicadas a huesos quemados, del fuego (Marin-Monfort et al., 2026). Las armas de madera más conocidas, las lanzas de Schöningen, se fechan hoy hacia 200 000 años y se asocian a neandertales (Hutson et al., 2025)."
  ],
  conceptos: [
    { t: "Datación relativa", d: "Establece el orden de los acontecimientos (estratigrafía)." },
    { t: "Datación absoluta", d: "Asigna una edad con margen de error (métodos geocronológicos)." },
    { t: "Morfología comparada", d: "Análisis de formas y patrones de huesos y dientes." },
    { t: "Paleoproteómica", d: "Estudio de proteínas antiguas, que se conservan más tiempo que el ADN." },
    { t: "Isótopos estables", d: "Proporciones químicas en el hueso que reflejan la dieta." }
  ],
  pensar: "Inferir «monogamia o poliginia» a partir de la proporción entre los dedos es tentador. ¿Qué cautelas exige deducir conductas sociales de un rasgo anatómico?",
  debates: [
    "Las inferencias sociales a partir de rasgos anatómicos (dimorfismo, proporción de dedos) son indirectas y discutidas.",
    "Según un estudio de proteínas del esmalte (Madupe et al., 2026; sin DOI verificado), los veinte individuos de Homo naledi analizados serían todos mujeres, un resultado inesperado que aún debe explicarse."
  ],
  refs: ["bohme2022", "slon2018", "rao2026", "fu2025a", "fu2026", "bossoms2026", "austin2013", "smith2018", "lordkipanidze2005", "marin2026", "hutson2025"],
  retos: [{
    tipo: "clasificar", titulo: "Detectives del pasado",
    consigna: "¿Qué método responde a cada pregunta?",
    categorias: ["Estratigrafía (datación relativa)", "Datación absoluta", "ADN antiguo", "Química del esmalte", "Sarro dental", "Dimorfismo y proporción de dedos", "Patologías y cuidados"],
    items: [
      { t: "¿Se encendió el fuego antes o después de construir el asentamiento?", c: 0, e: "Basta conocer el orden de las capas." },
      { t: "¿Cuántos años tiene esta capa volcánica?", c: 1, e: "Métodos radiométricos con margen de error." },
      { t: "¿Quiénes eran los padres de la niña de Denisova?", c: 2, e: "Madre neandertal y padre denisovano (Slon et al., 2018)." },
      { t: "¿Hasta qué edad mamó este niño?", c: 3, e: "Bario y otros elementos incorporados al esmalte durante su formación." },
      { t: "¿Qué plantas comían los neandertales de la península ibérica?", c: 4, e: "Restos vegetales atrapados en el sarro." },
      { t: "¿Era una especie monógama o polígina?", c: 5, e: "Inferencia indirecta y discutible." },
      { t: "¿Alguien ayudaba a comer a un individuo sin dientes?", c: 6, e: "El individuo desdentado de Dmanisi (Lordkipanidze et al., 2005)." }
    ]
  }]
},
/* ------------------------------------------------------------------ 14 */
{
  id: "s14", n: 14, objeto: "estratos", edad: null, lado: 0, lab: 2,
  corto: "Laboratorio de cronología",
  titulo: "¿Qué edad tiene un fósil? Laboratorio de cronología",
  idea: "Una fecha no es un dato aislado, sino una inferencia: dice qué se dató, con qué método y con qué margen de error.",
  sintesis: [
    "Antes de leer una fecha conviene preguntar a qué se refiere. El rango de una especie es la envolvente de sus fósiles conocidos y cambia con cada hallazgo: Paranthropus boisei se documenta entre unos 2,3 y 1,4 Ma, mientras que su holotipo, OH 5, procede de un nivel de Olduvai de hacia 1,84 Ma (Blumenschine et al., 2012). Las dos cifras no se contradicen: responden a preguntas distintas. Lo mismo ocurre con una mandíbula de Paranthropus de 2,6 Ma hallada en Mille-Logya (Etiopía): es la edad de un fósil del género, aún sin especie asignada, y no amplía por sí sola el rango de P. boisei (Alemseged et al., 2026).",
    "Pocas veces se fecha el propio fósil. En Toros-Menalla (Chad) se dataron con nucleidos cosmogénicos los sedimentos próximos al hallazgo de Toumaï, entre 7,2 y 6,8 Ma (Lebatard et al., 2008); como el cráneo apareció en superficie, la asociación con esos niveles se ha discutido. En Jebel Irhoud (Marruecos), la edad de 315 000 ± 34 000 años procede de sílex calentados en el fuego y fechados por termoluminiscencia (Richter et al., 2017). La cifra vale para el fósil solo si su relación con lo fechado es segura.",
    "Algunas fechas son edades mínimas. En Etiopía, los restos de Omo I están por debajo de una ceniza volcánica correlacionada con una erupción del volcán Shala de hace 233 000 ± 22 000 años (Vidal et al., 2022). Omo I puede ser más antiguo, pero no más reciente, mientras esa correlación se mantenga. El margen (±) indica el intervalo plausible: una conclusión prudente usa su extremo más desfavorable.",
    "Las fechas también se discuten. Para el Miembro 4 de Sterkfontein (Sudáfrica), del que procede buena parte de los fósiles de Australopithecus africanus, la datación por nucleidos cosmogénicos del cuarzo da unos 3,4-3,6 Ma y considera más jóvenes, por intrusivas, las coladas de calcita que habían dado 2,6-2,1 Ma (Granger et al., 2022). En cambio, el tamaño de los molares del mono Theropithecus oswaldi, comparado con la secuencia de África oriental, indica que ninguna cueva sudafricana supera unos 2,8 Ma (Frost et al., 2022). Los autores de la datación cosmogénica atribuyen esa fauna más reciente a mezclas de depósitos (Granger et al., 2023). Hoy ninguna de las dos posiciones puede darse por demostrada."
  ],
  conceptos: [
    { t: "Rango de una especie", d: "Intervalo entre sus fósiles más antiguos y más recientes conocidos; cambia con los hallazgos." },
    { t: "Edad del contexto", d: "Edad de los sedimentos o de la ceniza asociados a un fósil, no del fósil mismo." },
    { t: "Edad mínima", d: "Límite que indica que un fósil es al menos así de antiguo." },
    { t: "Margen de incertidumbre (±)", d: "Intervalo plausible de una fecha; cada artículo indica cómo lo calcula." },
    { t: "Nucleidos cosmogénicos", d: "Isótopos producidos por rayos cósmicos en rocas expuestas; su desintegración tras el enterramiento permite fecharlo." },
    { t: "Biocronología", d: "Datación de un depósito por comparación con la fauna de secuencias ya fechadas." }
  ],
  pensar: "Un manual dice: «Australopithecus africanus vivió hace 3-2 millones de años». ¿Qué tendría que añadir para que la frase fuera fiel a la evidencia?",
  debates: [
    "La edad del Miembro 4 de Sterkfontein: datación cosmogénica (3,4-3,6 Ma) frente a biocronología de cercopitécidos (no más de unos 2,8 Ma).",
    "La asociación entre el cráneo de Toumaï, hallado en superficie, y los sedimentos fechados.",
    "Los márgenes de error no siempre se expresan igual: conviene comprobar en cada artículo si corresponden a una o a dos desviaciones típicas."
  ],
  refs: ["blumenschine2012", "alemseged2026", "lebatard2008", "richter2017", "vidal2022", "granger2022", "frost2022", "granger2023"],
  retos: [
    {
      tipo: "clasificar", titulo: "Estación 1 · ¿Especie o ejemplar?",
      consigna: "Prediga antes de mirar la síntesis: ¿qué representa cada fecha?",
      categorias: ["Rango de una especie", "Edad de un ejemplar o de su contexto", "Edad mínima"],
      items: [
        { t: "Paranthropus boisei: 2,3-1,4 Ma.", c: 0, e: "Envolvente de los fósiles atribuidos a la especie." },
        { t: "Australopithecus afarensis: 3,76-2,92 Ma.", c: 0, e: "Envolvente del registro, no una duración continua demostrada." },
        { t: "OH 5, holotipo de P. boisei, en un nivel de Olduvai: hacia 1,84 Ma.", c: 1, e: "Edad del nivel que contiene el holotipo (Blumenschine et al., 2012)." },
        { t: "Sedimentos de Toros-Menalla junto a Toumaï: 7,2-6,8 Ma.", c: 1, e: "Edad del contexto, no del cráneo (Lebatard et al., 2008)." },
        { t: "Mandíbula de Paranthropus de Mille-Logya: 2,6 Ma.", c: 1, e: "Un fósil del género sin especie asignada: no amplía por sí solo el rango de P. boisei." },
        { t: "Omo I: al menos 233 000 ± 22 000 años.", c: 2, e: "Los restos están por debajo de una ceniza fechada (Vidal et al., 2022)." }
      ]
    },
    {
      tipo: "test", titulo: "Estación 2 · ¿Qué se ha fechado?",
      preguntas: [
        { q: "La edad de 7,2-6,8 Ma de Toros-Menalla procede de…", o: ["El cráneo de Toumaï, fechado directamente", "Los sedimentos próximos al hallazgo, con nucleidos cosmogénicos", "Los dientes, con radiocarbono"], c: 1, e: "Lebatard et al. (2008) fecharon los sedimentos; como el cráneo apareció en superficie, la asociación se ha discutido. El radiocarbono no alcanza más de unos 50 000 años." },
        { q: "En Omo I, Vidal et al. (2022) fecharon…", o: ["El cráneo", "Una ceniza volcánica situada por encima de los restos", "Una ceniza situada por debajo de los restos"], c: 1, e: "Una ceniza por encima da una edad mínima: los restos son al menos así de antiguos." },
        { q: "La edad de 315 000 ± 34 000 años de Jebel Irhoud procede sobre todo de…", o: ["Sílex calentados, fechados por termoluminiscencia", "Radiocarbono de huesos", "La comparación con fauna de África oriental"], c: 0, e: "Richter et al. (2017): el fuego «pone a cero» el reloj de la termoluminiscencia del sílex." }
      ]
    },
    { tipo: "numerico", titulo: "Estación 3 · Una edad mínima prudente",
      consigna: "La ceniza situada por encima de Omo I tiene 233 000 ± 22 000 años. Tomando el extremo más desfavorable del margen, ¿qué edad mínima puede afirmarse con más seguridad?",
      respuesta: 211000, tolerancia: 0.01, unidad: "años",
      pista: "Todavía no. La ceniza está por encima de los restos: busque el valor más bajo que permite el margen de error.",
      explicacion: "233 000 − 22 000 = 211 000 años. Omo I tiene al menos esa edad mientras se mantenga la correlación de la ceniza; puede ser bastante más antiguo (Vidal et al., 2022)." },
    {
      tipo: "clasificar", titulo: "Estación 4 · Sterkfontein en debate",
      consigna: "Antes de leer el debate, vote: ¿3,5 Ma o menos de 2,8 Ma? Después clasifique cada argumento según la edad que apoya.",
      categorias: ["Apoya una edad antigua (3,4-3,6 Ma)", "Apoya una edad reciente (2,8 Ma o menos)"],
      items: [
        { t: "Aluminio-26 y berilio-10 en el cuarzo del relleno de la cueva.", c: 0, e: "Datación por nucleidos cosmogénicos (Granger et al., 2022)." },
        { t: "Las coladas de calcita son intrusivas y más jóvenes que la brecha con fósiles.", c: 0, e: "Por eso, según Granger et al. (2022), las fechas de 2,6-2,1 Ma subestiman la edad." },
        { t: "Coladas de calcita fechadas en 2,6-2,1 Ma dentro del depósito.", c: 1, e: "Base de la cronología anterior, más reciente." },
        { t: "Tamaño de los molares de Theropithecus oswaldi comparado con África oriental.", c: 1, e: "Biocronología de cercopitécidos (Frost et al., 2022)." },
        { t: "Los fósiles de monos más recientes proceden de mezclas por voladuras y del Miembro 5.", c: 0, e: "Réplica de Granger et al. (2023) a la biocronología." }
      ]
    },
    {
      tipo: "test", titulo: "Estación 4 · Una conclusión proporcionada",
      preguntas: [
        { q: "¿Qué frase se ajusta mejor a la evidencia sobre el Miembro 4 de Sterkfontein?", o: ["Tiene 3,5 Ma: la datación radiométrica siempre prevalece", "Tiene menos de 2,8 Ma: la fauna lo demuestra", "Su edad está en debate: dos métodos independientes dan resultados incompatibles y cada equipo explica los datos del otro"], c: 2, e: "Ningún método «gana» por principio: la cuestión depende de la asociación entre lo fechado y los fósiles, y sigue abierta." },
        { q: "¿Cómo debería presentarse la edad de Australopithecus africanus en una cartela?", o: ["«Hace 3-2 millones de años»", "«Entre unos 3,6 y 2,1 Ma, según el método; la edad de Sterkfontein se discute»", "No debe darse ninguna fecha"], c: 1, e: "Dar la horquilla, decir de dónde sale y advertir el debate es más honesto que una cifra cerrada o que el silencio." }
      ]
    }
  ]
},
/* ------------------------------------------------------------------ 15 */
{
  id: "s15", n: 15, objeto: "trenza", edad: 0.4, lado: -1,
  corto: "¿Cuántas humanidades?",
  titulo: "¿Cuántas humanidades? Convivir, mezclarse, desaparecer",
  idea: "Durante casi toda nuestra historia hubo varias formas de ser humano a la vez: convivieron, a veces se mezclaron, y solo una ha llegado hasta hoy.",
  sintesis: [
    "La imagen de una fila que avanza del simio al ser humano no resiste el registro fósil. En la cueva de Drimolen (Sudáfrica), en depósitos de hace 2,04-1,95 Ma, aparecen juntos Paranthropus robustus y Homo erectus (Herries et al., 2020). La descripción de 18 restos craneales y mandibulares inéditos del mismo yacimiento asigna 14 a P. robustus, uno a H. erectus, el adulto DNH 127, y tres a homininos sin especie determinada (Martin et al., 2026). En ese paisaje, el linaje que conduciría a nosotros no era el más abundante entre los fósiles.",
    "Europa muestra la misma diversidad. En la Sima del Elefante (Atapuerca), un fragmento de cara de hace 1,4-1,1 Ma, apodado «Pink», resulta más próximo a Homo erectus que a Homo antecessor, la especie documentada en niveles más recientes de la cercana Gran Dolina. Sus autores lo clasifican provisionalmente como Homo aff. erectus («afín a»), una fórmula que deja abierta la posibilidad de otra especie, y proponen que Europa occidental recibió al menos dos poblaciones distintas en el Pleistoceno inferior (Huguet et al., 2025). Mucho después, hacia 430 000 años, los humanos de la Sima de los Huesos ya pertenecían al linaje neandertal según su ADN nuclear (Meyer et al., 2016), y un parietal de Ruidera (Ciudad Real), de hasta 224 000 años, conserva rasgos arcaicos que sugieren que en la península convivían todavía poblaciones de anatomía inesperada (García-Martínez et al., 2026).",
    "Convivir no siempre significó mantenerse separados. Los genomas más antiguos de humanos modernos, de Ranis (Alemania) y Zlatý kůň (Chequia), de hace unos 45 000 años, pertenecen a una población pequeña que no dejó descendencia conocida; aun así, su ascendencia neandertal procede del mismo episodio de mezcla que comparten todas las personas no africanas actuales, fechado hace 45 000-49 000 años (Sümer et al., 2025). Una joven de la cueva de Denisova era hija de madre neandertal y padre denisovano (Slon et al., 2018), y nuestro genoma guarda también huellas de linajes que no conocemos por fósiles (Zhang et al., 2026). Los denisovanos, con el cráneo de Harbin y los restos de Bianfu, se presentan en las salas 11 y 13.",
    "Si hubo varias humanidades, ¿qué nos hace humanos? Ningún rasgo apareció de golpe ni en una sola especie: caminar erguido, tallar piedra, usar el fuego o tener un cerebro grande forman un mosaico repartido en el tiempo y entre linajes. Además, cada especie fósil es una hipótesis que puede agruparse o separarse según el concepto de especie que se use; hay propuestas para leer la taxonomía de los homininos en clave de linajes (Martin et al., 2024). La pregunta deja de ser «¿quién fue el primer humano?» y pasa a ser «¿qué compartimos, y con quién?»."
  ],
  conceptos: [
    { t: "Coexistencia (simpatría)", d: "Presencia de dos o más especies en el mismo lugar y época; no implica por sí sola que se relacionaran." },
    { t: "Homo aff. (affinis)", d: "«Afín a»: atribución provisional que reconoce parecido con una especie sin asignar el fósil a ella." },
    { t: "Homo sp.", d: "Fósil del género Homo cuya especie no se determina, por ejemplo por ser un fragmento." },
    { t: "Episodio de mezcla", d: "Momento de intercambio genético entre poblaciones; se fecha por la longitud de los fragmentos heredados." },
    { t: "Mosaico evolutivo", d: "Los rasgos cambian a ritmos distintos y no aparecen juntos en un único antepasado." },
    { t: "Linaje", d: "Secuencia de poblaciones unidas por descendencia a lo largo del tiempo." }
  ],
  pensar: "Un cartel de aula muestra la «marcha del progreso»: cinco figuras en fila, del simio al ser humano actual. Con lo visto en esta sala, ¿qué tres cambios haría en el cartel y qué ganaría y perdería el alumnado con cada uno?",
  debates: [
    "Pink es un único fragmento facial y su atribución (Homo aff. erectus) es provisional.",
    "El parietal de Ruidera es un fragmento y se clasifica solo como Homo sp.; sus autores desaconsejan conclusiones amplias.",
    "La proporción de especies entre los fósiles de Drimolen puede reflejar la conservación y el muestreo, no necesariamente la abundancia real de cada especie.",
    "Cuántas especies de homininos deben reconocerse depende del concepto de especie empleado y sigue discutiéndose."
  ],
  refs: ["herries2020", "martin2026", "huguet2025", "meyer2016", "garciamartinez2026", "sumer2025", "slon2018", "zhang2026", "martin2024"],
  retos: [
    {
      tipo: "clasificar", titulo: "¿Qué muestra cada hallazgo?",
      consigna: "Prediga antes de leer la síntesis: ¿qué tipo de prueba aporta cada hallazgo sobre la existencia de varias humanidades?",
      categorias: ["Coexistencia en el mismo lugar y época", "Mezcla genética", "Población distinta sin especie asignada", "Sucesión, no coexistencia"],
      items: [
        { t: "Paranthropus robustus y Homo erectus en los mismos depósitos de Drimolen, de 2,04-1,95 Ma.", c: 0, e: "Mismo yacimiento y misma horquilla temporal (Herries et al., 2020; Martin et al., 2026)." },
        { t: "Una joven de Denisova, hija de madre neandertal y padre denisovano.", c: 1, e: "Primera generación de una mezcla (Slon et al., 2018)." },
        { t: "La ascendencia neandertal de los individuos de Ranis procede del episodio que comparten todos los no africanos actuales.", c: 1, e: "Mezcla fechada hace 45 000-49 000 años (Sümer et al., 2025)." },
        { t: "Pink, clasificado como Homo aff. erectus.", c: 2, e: "Atribución provisional: parecido con H. erectus sin asignarlo a esa especie (Huguet et al., 2025)." },
        { t: "El parietal RVH-1 de Ruidera, clasificado como Homo sp.", c: 2, e: "Un fragmento con rasgos arcaicos, sin especie determinada (García-Martínez et al., 2026)." },
        { t: "Pink (1,4-1,1 Ma) en la Sima del Elefante y Homo antecessor en niveles más recientes de la Gran Dolina.", c: 3, e: "Dos poblaciones distintas en la misma sierra, pero en momentos diferentes: es sucesión, no convivencia." }
      ]
    },
    { tipo: "numerico", titulo: "Contar fósiles en Drimolen",
      consigna: "De los 18 restos descritos por Martin et al. (2026), 15 se asignan a especie: 14 a Paranthropus robustus y 1 a Homo erectus. ¿Qué porcentaje de los asignados corresponde a P. robustus? Redondee al entero.",
      respuesta: 93, tolerancia: 0.02, unidad: "%",
      pista: "Todavía no. Divida los 14 restos de P. robustus entre los 15 asignados a especie, no entre los 18.",
      explicacion: "14 / 15 ≈ 0,93, es decir, un 93 %. La cifra describe la muestra fósil, no necesariamente cuántos individuos de cada especie vivían allí: la conservación y la excavación también influyen." },
    {
      tipo: "test", titulo: "Leer con cautela",
      preguntas: [
        { q: "¿Qué significa clasificar Pink como Homo aff. erectus?", o: ["Que es con seguridad un Homo erectus", "Que se parece a Homo erectus, pero se deja abierta la posibilidad de otra especie", "Que es un híbrido de Homo erectus y Homo antecessor"], c: 1, e: "«Affinis» indica afinidad, no identidad (Huguet et al., 2025)." },
        { q: "Según Sümer et al. (2025), la ascendencia neandertal de las personas no africanas actuales…", o: ["Procede de muchos episodios independientes en cada región", "Procede en lo esencial de un episodio de mezcla común, hace 45 000-49 000 años", "Solo la conservan las poblaciones europeas"], c: 1, e: "Los genomas de Ranis y Zlatý kůň comparten ese episodio con todos los no africanos actuales." },
        { q: "¿Qué permite afirmar el hallazgo de Drimolen?", o: ["Que Homo erectus y Paranthropus robustus competían por los mismos alimentos", "Que ambas especies están presentes en los mismos depósitos de hace unos 2 Ma", "Que Paranthropus robustus es antepasado de Homo erectus"], c: 1, e: "La coexistencia en un paisaje es un dato; la competencia o el contacto entre especies son hipótesis que requieren otras pruebas." }
      ]
    }
  ]
}
];

/* Autoevaluación final: el «examen de comisariado» */
window.SH.examen = [
  { q: "¿Qué definición de cultura se defiende en el recorrido?", o: ["La suma de arte, música, religión y filosofía", "Una práctica aprendida socialmente y transmitida entre generaciones", "Todo lo que el ser humano crea frente a la naturaleza"], c: 1, e: "La cultura es el hacer mismo, no un producto excepcional (sala 1)." },
  { q: "Las herramientas de piedra más antiguas conocidas proceden de…", o: ["Olduvai, hace 2,6 Ma", "Lomekwi 3, hace unos 3,3 Ma", "Dmanisi, hace 1,8 Ma"], c: 1, e: "Lomekwiense; su datación sigue discutiéndose (sala 4)." },
  { q: "¿Qué distingue la respuesta de Homo al enfriamiento de hace 2,8 Ma?", o: ["Molares más grandes", "El uso de herramientas en lugar de la especialización anatómica", "La migración hacia el sur"], c: 1, e: "Evolución biocultural (sala 3)." },
  { q: "¿Qué útil define el Achelense?", o: ["El chopper", "El bifaz", "La punta de flecha"], c: 1, e: "Junto al hendedor y el pico (sala 5)." },
  { q: "¿Cuál es el orden de los pasos hacia el fuego?", o: ["Producir, mantener, usar, habituarse", "Habituarse, usar, mantener, producir", "Usar, habituarse, producir, mantener"], c: 1, e: "Sala 6." },
  { q: "¿Dónde está la prueba más antigua de producción deliberada de fuego?", o: ["Wonderwerk, hace 1 Ma", "Barnham, hacia 415 000 años", "Gesher Benot Ya‘aqov, hacia 790 000 años"], c: 1, e: "Sedimentos quemados y pirita (Davis et al., 2025)." },
  { q: "Con fuego, ¿qué categorías de plantas comestibles se triplican?", o: ["Frutos y semillas", "Órganos subterráneos y hojas", "Solo los frutos"], c: 1, e: "Las semillas se duplican (sala 7)." },
  { q: "¿Qué es un «rodeo ampliado»?", o: ["Usar dos herramientas a la vez", "Usar una herramienta para fabricar otra herramienta", "Recorrer grandes distancias"], c: 1, e: "Solo documentado en homininos (sala 8)." },
  { q: "En la caja-rompecabezas transparente, los niños de cuatro años…", o: ["Fueron directos a la abertura útil", "Copiaron también la acción inútil", "No resolvieron la caja"], c: 1, e: "Sobreimitación (sala 9)." },
  { q: "Para Bourdieu, el habitus…", o: ["Se aprende mediante enseñanza explícita", "Se absorbe del medio social y se percibe como rasgo individual", "Es una disposición genética"], c: 1, e: "Sala 10." },
  { q: "Con 1 km por generación de 20 años, 10 000 km se recorren en…", o: ["20 000 años", "200 000 años", "2 millones de años"], c: 1, e: "Sala 11." },
  { q: "¿Qué hicieron las hembras que emigraron al grupo sur de Taï?", o: ["Mantuvieron su costumbre", "Adoptaron la costumbre local de los martillos de piedra", "Dejaron de cascar nueces"], c: 1, e: "Conformismo (sala 12)." },
  { q: "¿Qué método permite identificar especie y sexo cuando el ADN no se conserva?", o: ["La estratigrafía", "La paleoproteómica", "La datación radiométrica"], c: 1, e: "Las proteínas antiguas duran más que el ADN (sala 13)." },
  { q: "Si un fósil está bajo una ceniza fechada en 233 000 ± 22 000 años, el fósil…", o: ["Tiene exactamente 233 000 años", "Tiene al menos unos 211 000 años y puede ser más antiguo", "Es más reciente que la ceniza"], c: 1, e: "Edad mínima, como en Omo I (sala 14)." },
  { q: "Pink, de la Sima del Elefante, se clasifica como Homo aff. erectus. ¿Qué indica esa fórmula?", o: ["Que es con seguridad un Homo erectus", "Afinidad con Homo erectus, dejando abierta otra especie", "Que es antepasado directo de Homo antecessor"], c: 1, e: "Atribución provisional (sala 15)." }
];
