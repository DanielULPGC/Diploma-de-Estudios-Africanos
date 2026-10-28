/*
 * ARCHIVO DE LA MEMORIA ORAL · casos de estudio sobre la antigüedad y la función de las tradiciones orales.
 * Misma estructura que datos/etologia.js (intro, ejes, casos, retos). Las tradiciones pertenecen a sus
 * comunidades: aquí solo se resume lo que describen los estudios publicados, sin reproducir los relatos.
 * Ejes: paisajes · cielo · sismos · transmision.
 */
(function () {
window.SH = window.SH || {};
window.SH.oralidad = {
  meta: {
    nombre: "Archivo de la memoria oral", titulo: "La memoria oral y el tiempo profundo", etiqueta: "Memoria oral",
    sub: n => `${n} estudios sobre cuánto duran los relatos y para qué sirven`,
    campoTaxon: "Pueblo o tradición", importa: "Por qué importa para la historia humana",
    tonos: { paisajes: "--l3", cielo: "--l4", sismos: "--l1", transmision: "--l2" }, progreso: "oral", hash: "memoria-oral", prefijo: "m-",
    rotulo: ["ARCHIVO DE LA MEMORIA ORAL", "Relatos que recuerdan el pasado profundo"]
  },
  intro: {
    idea: "La cultura no se transmite solo con objetos: también viaja en relatos. Algunos estudios sostienen que ciertas tradiciones orales conservan recuerdos de hechos ocurridos hace miles de años; otros advierten que esa antigüedad es muy difícil de demostrar.",
    texto: [
      "La llamada «arqueología de la oralidad» compara relatos que describen fenómenos naturales (una subida del mar, una erupción, la caída de un meteorito, la posición de una estrella) con la fecha en que esos fenómenos ocurrieron según la geología o la astronomía. Si el relato solo pudo nacer de un testigo directo, la fecha del fenómeno da una edad mínima a la tradición.",
      "Australia es un terreno privilegiado para esta comparación: sus pueblos aborígenes llevan allí decenas de miles de años y sus tradiciones describen paisajes que hoy están bajo el mar o volcanes que llevan milenios apagados. Fuera de Australia, relatos de la costa noroccidental de Norteamérica, de la isla indonesia de Simeulue o de la isla de Man permiten contrastar el método en otros contextos. Otros enfoques miden la transmisión desde fuera: comparan versiones de un mismo cuento entre lenguas emparentadas o registran qué se cuenta, dónde y para qué.",
      "El debate es real. Echo-Hawk (2000) defendió integrar las tradiciones orales en la historia profunda de América; Henige (2009) replicó que una correspondencia entre relato y hecho es fácil de encontrar y casi imposible de verificar. Los casos de este archivo deben leerse con esa tensión presente.",
      "Las tradiciones pertenecen a sus comunidades (palawa, gunditjmara, ngarrindjeri, gugu badhun, entre otras). Aquí solo se resume lo que describen los estudios publicados, varios de ellos firmados junto con esas comunidades; no se reproducen los relatos."
    ],
    conceptos: [
      { t: "Arqueología de la oralidad", d: "Enfoque que data tradiciones orales comparando lo que describen con fenómenos naturales fechados por otros métodos." },
      { t: "Terminus ante quem", d: "Fecha antes de la cual tuvo que originarse algo. Si un relato describe un puente de tierra que se hundió hace unos 12 000 años, el relato tendría al menos esa edad." },
      { t: "Geomitología", d: "Estudio de mitos y relatos que pueden conservar el recuerdo de fenómenos geológicos o astronómicos reales." },
      { t: "Transmisión vertical", d: "Paso de un rasgo cultural de generación en generación dentro de un mismo linaje de poblaciones; los métodos filogenéticos la distinguen de la difusión entre vecinos." },
      { t: "Sesgo de confirmación", d: "Tendencia a buscar en un relato aquello que confirma la hipótesis; es la principal objeción a la datación de tradiciones orales." }
    ],
    pensar: "Si un relato coincide con un hecho de hace 12 000 años, ¿qué otras explicaciones habría que descartar antes de afirmar que lo recuerda?",
    refs: ["echoHawk2000", "henige2009", "hamacher2023"]
  },

  ejes: {
    paisajes: "Paisajes sumergidos",
    cielo: "Volcanes, meteoritos y estrellas",
    sismos: "Terremotos y tsunamis",
    transmision: "Cómo y para qué se transmiten los relatos"
  },

  casos: [
    {
      id: "tasmania-canopo", eje: "cielo", corto: "La gran estrella del sur",
      titulo: "Tradiciones palawa datadas al final del Pleistoceno",
      taxon: "Palawa (aborígenes de Tasmania)", lugar: "Tasmania y estrecho de Bass (Australia)",
      metodo: "Paleogeografía, paleoastronomía y archivos del siglo XIX",
      hallazgo: [
        "Hamacher et al. (2023) analizaron tradiciones palawa registradas a comienzos del siglo XIX, sobre todo por el «conciliador» colonial George Augustus Robinson. Describen la inundación del puente de tierra que unía Tasmania con el continente y una «gran estrella del sur» de gran importancia cultural, que los autores identifican con Canopo (α Carinae).",
        "Con datos batimétricos y topográficos del estrecho de Bass estiman que el puente de tierra quedó sumergido hace unos 12 000 años. Al calcular el movimiento de Canopo por la precesión de los equinoccios, muestran que estuvo muy cerca del polo sur celeste, casi inmóvil en el cielo, entre hace 16 300 y 11 800 años. Ambas líneas sitúan el origen de los relatos al final del Pleistoceno, hace entre 12 000 y 14 000 años."
      ],
      importa: "Si la interpretación es correcta, se trataría de algunos de los relatos registrados más antiguos del mundo y apoyaría que la tradición oral puede mantenerse viva durante más de diez milenios. Conecta con la sala de la expansión humana: los antepasados de los palawa llegaron a Tasmania a pie, por ese puente.",
      cautela: "Las tradiciones llegaron a escrito filtradas por intermediarios coloniales, en un contexto de desposesión violenta, y la identificación de la estrella con Canopo es una interpretación. Los autores descartan otra candidata (la supernova de Vela) porque no encaja con la descripción, pero la datación da una edad mínima coherente, no una prueba de transmisión ininterrumpida.",
      salas: ["s11", "s13"], refs: ["hamacher2023"]
    },
    {
      id: "costas-sumergidas", eje: "paisajes", corto: "Cuando subió el mar",
      titulo: "Recuerdos aborígenes de la inundación de la costa australiana",
      taxon: "Diversos pueblos aborígenes de la costa australiana", lugar: "Costa de Australia",
      metodo: "Comparación de relatos con curvas de nivel del mar",
      hallazgo: [
        "Nunn y Reid (2016) reunieron tradiciones de distintos lugares de la costa australiana que describen tierras hoy sumergidas: islas que antes formaban parte del continente o llanuras costeras donde se cazaba.",
        "Compararon cada relato con la profundidad actual del lugar descrito y con las curvas de subida del nivel del mar tras la última glaciación. Como el mar se estabilizó cerca de su nivel actual hace unos 7000 años, los relatos tendrían, según su argumento, más de 7000 años."
      ],
      importa: "El trabajo convirtió la geografía sumergida en una herramienta de datación y abrió una línea de investigación que después se aplicó en Tasmania y en Australia meridional. Muestra cómo el conocimiento de un paisaje puede viajar en la memoria colectiva aunque ese paisaje desaparezca.",
      cautela: "La edad deriva de una inferencia: que el relato describe lo que vieron testigos directos y no una explicación posterior de las islas o de la costa. Muchas versiones se conocen por registros coloniales o etnográficos fragmentarios.",
      salas: ["s11", "s03"], refs: ["nunnReid2016"]
    },
    {
      id: "ngurunderi", eje: "paisajes", corto: "El viaje de Ngurunderi",
      titulo: "La narración de Ngurunderi y la subida del mar en Australia meridional",
      taxon: "Ngarrindjeri", lugar: "Australia meridional (península de Fleurieu y estrecho de Backstairs)",
      metodo: "Paleogeografía costera con participación de la comunidad",
      hallazgo: [
        "Nunn et al. (2025), con la Ngarrindjeri Aboriginal Corporation como coautora, relacionaron episodios del viaje del ser ancestral Ngurunderi con tres cambios del paisaje fechados por la geología costera.",
        "Estiman que el estrecho de Backstairs Passage quedó sumergido hace entre 11 000 y 10 100 años, que las islas frente a la península de Fleurieu se formaron hace entre 10 400 y 6800 años y que los relatos sobre la península de Younghusband podrían tener más de 6700 años."
      ],
      importa: "Muestra cómo una sola tradición puede recoger varios momentos de la subida del mar posglacial, incluido el ascenso rápido de hace unos 8200 años, y es un ejemplo de investigación hecha con la comunidad y no solo sobre ella.",
      cautela: "Las fechas son las más recientes en que pudo observarse cada cambio, no la edad comprobada del relato. Asumen que la narración describe esos lugares concretos y que se conservó sin reinterpretaciones posteriores.",
      salas: ["s11", "s03"], refs: ["nunn2025"]
    },
    {
      id: "budj-bim", eje: "cielo", corto: "El volcán de Budj Bim",
      titulo: "Volcanes de hace 37 000 años y tradiciones gunditjmara",
      taxon: "Gunditjmara", lugar: "Budj Bim y Tower Hill (Victoria, Australia)",
      metodo: "Datación 40Ar/39Ar de volcanes",
      hallazgo: [
        "Matchan et al. (2020) dataron con argón-argón las erupciones de los volcanes Budj Bim y Tower Hill, en el sureste de Australia, hace unos 36 900 y 36 800 años.",
        "En Tower Hill, bajo los depósitos volcánicos, se habían descrito indicios de presencia humana, por lo que la fecha fija una edad mínima para la ocupación de Victoria, coherente con otros yacimientos de la región. Como Budj Bim y sus coladas aparecen en tradiciones gunditjmara, los autores plantean que, si esos relatos reflejan la actividad volcánica, estarían entre los más antiguos conocidos."
      ],
      importa: "Une dos preguntas de este museo: cuándo llegaron los humanos a cada región (sala 11) y cuánto tiempo puede durar un relato. Budj Bim forma parte hoy de un paisaje cultural declarado Patrimonio Mundial por sus antiguos sistemas de acuicultura.",
      cautela: "La relación entre las tradiciones y estas erupciones es una hipótesis condicional, formulada por los propios autores. El artículo data los volcanes, no los relatos, y también es posible que estos describan el paisaje volcánico sin haber presenciado la erupción.",
      salas: ["s11"], refs: ["matchan2020"]
    },
    {
      id: "kinrara", eje: "cielo", corto: "Historias en la piedra",
      titulo: "Tradiciones gugu badhun sobre el volcán Kinrara",
      taxon: "Gugu Badhun (y un relato ngadjon)", lugar: "Provincia volcánica de McBride, Queensland (Australia)",
      metodo: "Análisis de relatos y datación volcánica previa",
      hallazgo: [
        "Franks et al. (2025) analizaron cinco tradiciones gugu badhun vinculadas al volcán Kinrara. Según su interpretación, describen fuego y coladas de lava, tubos volcánicos, la explosión de la pared del cráter y un episodio de gases o cenizas tóxicos; citan además un relato ngadjon sobre el maar del lago Eacham.",
        "La última erupción de Kinrara se ha datado en unos 7000 ± 2000 años, por lo que estiman una edad máxima de los relatos de unos 7000-7500 años."
      ],
      importa: "Los relatos aportan detalles que la geología no siempre registra, como la secuencia de los fenómenos vista por testigos. Es un ejemplo de cómo la memoria oral puede complementar el estudio de riesgos volcánicos.",
      cautela: "Los propios autores califican las edades de conjeturales: la incertidumbre de la datación es grande, la interpretación de los relatos es plausible pero no demostrada y las fuentes son transcripciones de los años setenta y testimonios de informantes.",
      salas: ["s13"], refs: ["franks2025"]
    },
    {
      id: "volcanes-olvidados", eje: "cielo", corto: "Erupciones recordadas y olvidadas",
      titulo: "La geografía selectiva del vulcanismo en las tradiciones orales",
      taxon: "Tradiciones de distintos continentes", lugar: "Escala mundial",
      metodo: "Comparación de casos a partir de bases de datos volcánicas",
      hallazgo: [
        "Franks, Nunn y McCallum (2024) seleccionaron 20 erupciones anteriores a nuestra era que han dejado tradiciones orales conocidas y 20 que, en apariencia, no han dejado ninguna, para preguntarse por qué unas se recuerdan y otras no.",
        "Proponen que las erupciones aisladas y de gran impacto, poco frecuentes en una región, tienen más probabilidades de recordarse, porque es más difícil confundirlas con otras."
      ],
      importa: "Cambia la pregunta: no solo cuánto dura un recuerdo, sino qué condiciones hacen que un suceso entre en la memoria colectiva y qué hace que se pierda (despoblación, migraciones, mezcla de tradiciones).",
      cautela: "La selección de casos es razonada, no sistemática. Las erupciones «olvidadas» lo son provisionalmente: puede haber tradiciones no publicadas o no traducidas, y muchas de las conocidas llegan de segunda mano.",
      salas: ["s13"], refs: ["franks2024"]
    },
    {
      id: "henbury", eje: "cielo", corto: "El fuego que vino del sol",
      titulo: "Tradiciones aborígenes sobre cráteres de impacto",
      taxon: "Pueblos aborígenes de Australia central y occidental", lugar: "Henbury, Gosses Bluff, Wolfe Creek y otros cráteres",
      metodo: "Revisión de relatos, arte y registros históricos",
      hallazgo: [
        "Hamacher y Goldsmith (2013) revisaron las tradiciones asociadas a varios cráteres de impacto australianos. En Gosses Bluff, Henbury y Wolfe Creek hay relatos que atribuyen el cráter a algo caído del cielo; en otros cráteres no se conocen tradiciones.",
        "En Henbury, cuyos cráteres tienen como mucho unos 4700 años, testimonios recogidos en los años veinte y treinta del siglo XX hablan de un «demonio de fuego» que llegó del sol. Los autores plantean que podría tratarse de un recuerdo del impacto."
      ],
      importa: "Los impactos de meteoritos son fenómenos raros, espectaculares y fechables, lo que los convierte en una buena prueba para la longevidad de la memoria oral.",
      cautela: "Los propios autores advierten que no pueden demostrar que esos relatos existieran antes de la colonización ni del interés científico por los cráteres, que pudo influir en lo que se contaba. Otros relatos de los mismos lugares no describen ningún impacto.",
      salas: ["s13"], refs: ["hamacherGoldsmith2013"]
    },
    {
      id: "cuentos-indoeuropeos", eje: "transmision", corto: "Cuentos de la Edad del Bronce",
      titulo: "Las raíces antiguas de los cuentos populares indoeuropeos",
      taxon: "Cuentos de tradición oral en lenguas indoeuropeas", lugar: "Eurasia",
      metodo: "Métodos filogenéticos comparados",
      hallazgo: [
        "Da Silva y Tehrani (2016) analizaron la presencia de cuentos populares en sociedades de habla indoeuropea con métodos tomados de la biología evolutiva, cruzando su distribución con el árbol de las lenguas y con la distancia geográfica.",
        "Varios cuentos se reparten siguiendo el parentesco entre poblaciones más que la vecindad, lo que indica transmisión de generación en generación. Algunos serían anteriores a las primeras fuentes escritas, y «El herrero y el diablo» podría remontarse a la Edad del Bronce."
      ],
      importa: "Ofrece una vía independiente de los fenómenos naturales: medir la antigüedad de los relatos por su historia de transmisión. Conecta con la sala dedicada a aprender de los demás.",
      cautela: "Las fechas dependen del árbol lingüístico y de los supuestos del modelo. Los cuentos registrados en los siglos XIX y XX son versiones recientes; el método reconstruye la probable presencia de un tipo de cuento, no su forma original.",
      salas: ["s09"], refs: ["daSilva2016"]
    },
    {
      id: "conversacion-fuego", eje: "transmision", corto: "Historias junto al fuego",
      titulo: "La conversación nocturna junto al fuego entre los ju/'hoansi",
      taxon: "Ju/'hoansi (cazadores-recolectores del Kalahari)", lugar: "Botsuana y Namibia",
      metodo: "Etnografía y registro de conversaciones",
      hallazgo: [
        "Wiessner (2014) comparó las conversaciones diurnas y nocturnas de los ju/'hoansi. De día predominaban los asuntos prácticos y las quejas y chismes que hacen cumplir las normas sociales.",
        "De noche, junto al fuego, la conversación se volvía narrativa e imaginativa: los relatos ayudaban a recordar a personas lejanas de la red social, a reparar conflictos del día y a transmitir el conocimiento de las instituciones culturales que sostienen la confianza."
      ],
      importa: "Propone que el control del fuego no solo cambió la dieta, sino que alargó el día y creó un espacio para contar historias. Une la sala del fuego con la transmisión cultural.",
      cautela: "Es el estudio de una sola sociedad actual, y su proyección al pasado es una analogía: no hay forma directa de saber de qué se hablaba junto a los hogares del Pleistoceno.",
      salas: ["s06", "s09"], refs: ["wiessner2014"]
    },
    {
      id: "narradores-agta", eje: "transmision", corto: "Buenos narradores",
      titulo: "Narración y cooperación entre los agta de Filipinas",
      taxon: "Agta (cazadores-recolectores de Filipinas)", lugar: "Isla de Luzón (Filipinas)",
      metodo: "Análisis de relatos, encuestas y experimentos económicos",
      hallazgo: [
        "Smith et al. (2017) mostraron que los relatos agta transmiten normas de cooperación e igualdad, incluida la igualdad entre sexos, temas que también aparecen en otras sociedades cazadoras-recolectoras.",
        "Los campamentos con más narradores hábiles eran más cooperativos, y esas personas eran preferidas como compañeras de campamento y tenían más descendencia. Los autores proponen que contar historias pudo evolucionar como un medio para coordinar la cooperación del grupo."
      ],
      importa: "Plantea que la narración no es un adorno de la cultura, sino una herramienta social con consecuencias medibles, y aporta una explicación de por qué contar historias existe en todas las sociedades humanas.",
      cautela: "Los datos son correlacionales y proceden de una sola sociedad actual; la interpretación evolutiva es una hipótesis que otros estudios tendrán que contrastar.",
      salas: ["s09", "s01"], refs: ["smith2017"]
    },
    {
      id: "isla-de-man", eje: "paisajes", corto: "La isla que se hundió",
      titulo: "Relatos de tierras sumergidas en la isla de Man",
      taxon: "Tradición popular manesa (isla de Man)", lugar: "Isla de Man, mar de Irlanda (Reino Unido)",
      metodo: "Comparación de relatos con curvas de nivel del mar",
      hallazgo: [
        "Nunn (2025) aplicó a Europa el método ensayado en Australia. Reunió relatos maneses sobre tierras que se hundieron: la isla de Manannán mac Lir, que emerge cada siete años; lugares sumergidos donde los marinos dicen oír campanas; y testimonios de los siglos XVIII y XIX según los cuales la isla fue antes mayor o estuvo casi unida a Escocia.",
        "Estimó la profundidad actual de los antiguos puentes de tierra con Cumbria y con Escocia y la comparó con las curvas de nivel relativo del mar de la región. Los puentes habrían quedado sumergidos hace entre unos 10 700 y 8200 años, de modo que los relatos más antiguos tendrían, según el autor, al menos unos 8000 años."
      ],
      importa: "Muestra que la propuesta no depende de la singularidad australiana: también en un ámbito europeo, con siglos de escritura y de mezcla cultural, podrían sobrevivir recuerdos de paisajes perdidos.",
      cautela: "El propio autor advierte que la interpretación de los relatos es incierta y que el resultado depende de la curva de nivel del mar elegida, de los movimientos isostáticos y de la erosión posterior del fondo marino. Los relatos son, además, folclore recogido muy tarde y mezclado con tradiciones cristianas.",
      salas: ["s11", "s03"], refs: ["nunn2025man"]
    },
    {
      id: "maar-relatos", eje: "cielo", corto: "Lagos que nacieron de una explosión",
      titulo: "Relatos sobre la formación de los maares",
      taxon: "Pueblos aborígenes australianos y tradiciones del Lacio (Italia)", lugar: "Australia y lago Albano (Italia)",
      metodo: "Comparación de motivos narrativos con la vulcanología",
      hallazgo: [
        "Un maar es un cráter ancho y poco profundo que se forma cuando el magma entra en contacto con agua subterránea y provoca explosiones; con el tiempo suele llenarse de agua. Nunn et al. (2019) reunieron relatos de varias partes del mundo que parecen recordar la formación de estos lagos o lo que ocurrió después.",
        "Identifican motivos recurrentes: chillidos de aves (quizá escapes de gas), un cielo rojo, un suelo que se retuerce y se agrieta, y más tarde cráteres que se llenan de agua, bordes que ceden e inundaciones aguas abajo. Destacan las tradiciones australianas y los relatos sobre el lago Albano, cerca de Roma."
      ],
      importa: "Los relatos pueden aportar detalles que la geología sola no ve, como la secuencia de lo ocurrido o sus efectos sobre las personas. El trabajo es uno de los antecedentes directos de los estudios sobre Kinrara y sobre las erupciones «recordadas» y «olvidadas» de este archivo.",
      cautela: "La lectura de cada motivo (aves que chillan = gas) es una interpretación entre varias posibles, y los autores reconocen que algunos relatos son difíciles de descifrar. Que un motivo encaje con un fenómeno no prueba que lo recuerde.",
      salas: ["s13"], refs: ["nunn2019maar"]
    },
    {
      id: "cascadia-1700", eje: "sismos", corto: "La noche del gran terremoto",
      titulo: "El terremoto de Cascadia de 1700 en los relatos nativos",
      taxon: "Pueblos de la costa noroccidental de Norteamérica (nuu-chah-nulth, huu-ay-aht, makah, entre otros)", lugar: "Costa de Columbia Británica, Washington, Oregón y norte de California",
      metodo: "Recuento de generaciones en relatos y contraste con registros independientes",
      hallazgo: [
        "Ludwin et al. (2005), entre ellos investigadores de las propias comunidades, reunieron 40 relatos de 32 fuentes que describen sacudidas del suelo o inundaciones del mar en la costa de Cascadia. Nueve tenían detalle suficiente para estimar una fecha contando las generaciones transcurridas desde el narrador.",
        "Los puntos medios de esas nueve estimaciones caen entre 1690 y 1715. Varios relatos sitúan el suceso de noche o en invierno, lo que concuerda con la fecha que ya se conocía por otras vías: un tsunami registrado en Japón sin terremoto local la noche del 26 de enero de 1700 y los anillos de árboles de los «bosques fantasma» que murieron al hundirse la costa."
      ],
      importa: "Es uno de los pocos casos en que un relato oral puede compararse con una fecha documentada al día. Muestra que el conocimiento oral de un riesgo natural puede ser exacto a escala de siglos y útil para la prevención.",
      cautela: "Los relatos se recogieron desde la década de 1860, cuando gran parte de la tradición ya se había perdido, y pasan por transcripciones y traducciones. Las fechas dependen de supuestos sobre la duración de una generación, y algunas inundaciones podrían deberse a tsunamis de terremotos lejanos.",
      salas: ["s13", "s09"], refs: ["ludwin2005"]
    },
    {
      id: "smong", eje: "sismos", corto: "«Smong»: la palabra que salvó vidas",
      titulo: "La tradición oral que salvó a la isla de Simeulue en 2004",
      taxon: "Habitantes de Simeulue (Indonesia)", lugar: "Isla de Simeulue, frente a Sumatra (Indonesia)",
      metodo: "Encuestas y entrevistas tras el tsunami",
      hallazgo: [
        "El tsunami del 26 de diciembre de 2004 llegó al norte de Simeulue con olas de más de 10 m en unos diez minutos. Aun así, en la isla murieron siete personas, frente a decenas de miles en la costa de Sumatra.",
        "McAdoo et al. (2006) atribuyen esa diferencia en buena parte a una tradición oral: el recuerdo del tsunami de 1907, transmitido con la palabra local «smong», enseñaba que tras un terremoto fuerte había que huir a las colinas. Los supervivientes conocían la consigna y la siguieron, también en el tsunami de marzo de 2005."
      ],
      importa: "El caso muestra la función de la memoria oral, no solo su antigüedad: un relato de un siglo bastó para guiar una respuesta colectiva eficaz. Es un argumento a favor de la tradición como forma de aprendizaje social acumulado.",
      cautela: "La comparación entre lugares no es un experimento: la topografía, la distancia a zonas altas y la altura de las olas también influyen en la mortalidad. El relato conserva una consigna práctica de hace un siglo, no un recuerdo de milenios.",
      salas: ["s09", "s10"], refs: ["mcadoo2006"]
    },
    {
      id: "memoria-lugares", eje: "transmision", corto: "Recordar con el paisaje",
      titulo: "Técnicas aborígenes de memorización en un aula universitaria",
      taxon: "Técnica narrativa aborigen asociada a lugares", lugar: "Universidad de Monash (Victoria, Australia)",
      metodo: "Ensayo controlado con estudiantes",
      hallazgo: [
        "Reser et al. (2021), con la participación del investigador aborigen Tyson Yunkaporta, enseñaron a estudiantes de Medicina una técnica de memorización que asocia la información a un relato y a lugares concretos del campus. La compararon con el «palacio de la memoria» de tradición grecolatina y con un grupo de control.",
        "Tras una formación breve, los estudiantes que usaron la técnica aborigen mejoraron más su capacidad de recordar una lista de veinte nombres que los otros dos grupos."
      ],
      importa: "Hamacher et al. (2023) proponen que asociar el saber a lugares del paisaje es uno de los mecanismos que explicarían la larga duración de las tradiciones orales. Este estudio no data ningún relato, pero ofrece una prueba experimental de que ese tipo de técnica mejora la memoria.",
      cautela: "La muestra es pequeña, de un solo campus, y el recuerdo se midió a corto plazo con una tarea artificial. Mostrar que una técnica funciona hoy no demuestra que haya mantenido un relato durante milenios.",
      salas: ["s09", "s10"], refs: ["reser2021"]
    }
  ],

  retos: [
    {
      tipo: "clasificar", titulo: "¿Cómo se fecha un relato?",
      ok: "¡Todo correcto! Ha identificado la vía de datación de cada estudio.",
      consigna: "Cada estudio estima la antigüedad o la función de los relatos por una vía distinta. Asigne a cada uno la vía principal.",
      categorias: ["Cambio del nivel del mar o de la costa", "Erupción o impacto fechado", "Posición de los astros", "Comparación entre culturas o registro etnográfico", "Terremoto o tsunami fechado por otras fuentes"],
      items: [
        { t: "Nunn y Reid (2016): tierras costeras hoy sumergidas", c: 0, e: "Comparan lo descrito con la profundidad actual y con las curvas de subida del mar." },
        { t: "Nunn et al. (2025): el viaje de Ngurunderi", c: 0, e: "Relacionan cada episodio con cambios de la costa fechados por la geología." },
        { t: "Matchan et al. (2020): Budj Bim y Tower Hill", c: 1, e: "Datan las erupciones con argón-argón; la relación con los relatos es una hipótesis." },
        { t: "Franks et al. (2025): el volcán Kinrara", c: 1, e: "Se apoyan en la datación de la última erupción, con una incertidumbre grande." },
        { t: "Hamacher y Goldsmith (2013): cráteres de impacto", c: 1, e: "Comparan los relatos con la edad de los cráteres, como mucho unos 4700 años en Henbury." },
        { t: "Hamacher et al. (2023): la «gran estrella del sur»", c: 2, e: "Calculan cuándo Canopo estuvo casi inmóvil cerca del polo sur celeste; lo combinan con la inundación del estrecho de Bass." },
        { t: "Da Silva y Tehrani (2016): cuentos indoeuropeos", c: 3, e: "Comparan la distribución de los cuentos con el árbol de las lenguas." },
        { t: "Wiessner (2014): conversación junto al fuego", c: 3, e: "Registran y comparan conversaciones diurnas y nocturnas en una sociedad actual." },
        { t: "Nunn (2025): tierras sumergidas de la isla de Man", c: 0, e: "Compara la profundidad de los antiguos puentes de tierra con las curvas de nivel del mar del mar de Irlanda." },
        { t: "Nunn et al. (2019): relatos sobre maares", c: 1, e: "Relacionan los motivos de los relatos con la formación de cráteres volcánicos de explosión." },
        { t: "Ludwin et al. (2005): el terremoto de Cascadia", c: 4, e: "Contrastan los relatos con el tsunami registrado en Japón el 26 de enero de 1700 y con los anillos de los árboles." }
      ]
    },
    {
      tipo: "test", titulo: "Leer con cautela",
      preguntas: [
        { q: "Hamacher et al. (2023) proponen una edad mínima de unos 12 000 años para tradiciones palawa. ¿Qué significa «edad mínima» aquí?", o: ["Que los relatos se inventaron exactamente hace 12 000 años.", "Que, si describen lo que vieron testigos, tuvieron que originarse antes de que el puente de tierra se hundiera.", "Que los relatos se escribieron hace 12 000 años."], c: 1, e: "Es un terminus ante quem: una fecha límite que depende de aceptar que el relato procede de testigos directos." },
        { q: "¿Cuál es la objeción principal de Henige (2009) a este tipo de estudios?", o: ["Que la datación por radiocarbono es imprecisa.", "Que es fácil encontrar coincidencias entre un relato y un hecho, pero casi imposible demostrar que el relato lo recuerda y no lo explica después.", "Que las tradiciones orales no merecen estudiarse."], c: 1, e: "Su crítica es epistemológica: una coincidencia no prueba la transmisión continua de un recuerdo." },
        { q: "Matchan et al. (2020) fechan Budj Bim en unos 37 000 años. ¿Qué demuestra el artículo sobre las tradiciones gunditjmara?", o: ["Que tienen 37 000 años.", "Nada directamente: data los volcanes y plantea como hipótesis que los relatos pudieran reflejar su actividad.", "Que son posteriores a la colonización."], c: 1, e: "La relación entre relato y erupción es condicional; el método fecha la roca, no la narración." },
        { q: "Muchas tradiciones aborígenes se conocen por registros coloniales del siglo XIX. ¿Por qué importa?", o: ["Porque garantizan la exactitud de los relatos.", "Porque los relatos llegan filtrados por intermediarios, traducciones y un contexto de desposesión, lo que obliga a leerlos con cautela.", "No importa: el registro escrito equivale al relato oral."], c: 1, e: "La fuente escrita es otra capa de interpretación entre la tradición y el investigador." },
        { q: "Wiessner (2014) observa que los relatos dominan la conversación nocturna junto al fuego. ¿Qué permite afirmar sobre el Pleistoceno?", o: ["Que los homininos de hace un millón de años contaban historias.", "Ofrece una analogía razonable para pensar el papel del fuego en la vida social, pero no una prueba directa del pasado.", "Que el fuego se controló para contar historias."], c: 1, e: "Es el estudio de una sociedad actual; proyectarlo al pasado requiere otras pruebas." },
        { q: "Reser et al. (2021) comprobaron que una técnica aborigen de memorización basada en lugares mejora el recuerdo. ¿Qué aporta al debate sobre la antigüedad de los relatos?", o: ["Demuestra que los relatos palawa tienen 12 000 años.", "Ofrece un mecanismo plausible de transmisión fiel, pero no data ningún relato.", "Nada, porque se hizo con estudiantes de Medicina."], c: 1, e: "Un experimento actual hace verosímil un mecanismo; la antigüedad de cada relato exige pruebas propias." },
        { q: "En Simeulue, el recuerdo del tsunami de 1907 ayudó a salvar vidas en 2004 (McAdoo et al., 2006). ¿Qué muestra mejor el caso?", o: ["Que todos los relatos orales son exactos.", "Que una tradición oral puede transmitir una consigna práctica eficaz durante un siglo.", "Que la topografía no influyó en la mortalidad."], c: 1, e: "El caso ilustra la función de la memoria oral; la mortalidad también dependió de otros factores." }
      ]
    }
  ]
};
})();
