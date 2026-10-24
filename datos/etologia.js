/*
 * GABINETE DE ETOLOGÍA COMPARADA · doce casos de estudio sobre el comportamiento de otros animales
 * que ayudan a pensar los comienzos de la cultura humana. Cada caso enlaza con las salas afines
 * (campo «salas») y cita sus fuentes (claves de datos/referencias.js).
 * Ejes: cultura · tecnica · alimentacion · social.
 */
(function () {
window.SH = window.SH || {};
window.SH.etologia = {
  intro: {
    idea: "La etología estudia el comportamiento animal en su contexto ecológico y evolutivo. Comparar especies vivas no reconstruye directamente el pasado, pero permite poner a prueba hipótesis sobre él.",
    texto: [
      "Las salas del museo muestran que muchos rasgos que se creían exclusivamente humanos tienen raíces compartidas: el uso de herramientas, la transmisión social o la cooperación aparecen, con otra forma y otra escala, en otros animales. La etología comparada aporta el contrapunto vivo de esos restos: observa conductas que no fosilizan, como una llamada, un gesto, la reacción ante un cuerpo inmóvil o la elección de un fruto fermentado.",
      "Niko Tinbergen (1963) propuso analizar cada conducta con cuatro preguntas complementarias: su mecanismo, su desarrollo en el individuo, su función o valor adaptativo y su historia evolutiva. Los doce casos de este gabinete responden sobre todo a una o dos de ellas; ninguno las agota.",
      "La comparación tiene dos lógicas distintas. Los grandes simios, por su parentesco cercano, sirven para inferir rasgos que quizá ya tenía el último antepasado común (homología). Las aves y los macacos, mucho más lejanos, muestran cómo presiones semejantes pueden producir soluciones parecidas por caminos independientes (convergencia)."
    ],
    conceptos: [
      { t: "Homología", d: "Semejanza heredada de un antepasado común; justifica inferir rasgos ancestrales a partir de especies emparentadas." },
      { t: "Convergencia", d: "Semejanza surgida de forma independiente en linajes distintos ante problemas parecidos; informa sobre las condiciones que favorecen un rasgo, no sobre su antigüedad." },
      { t: "Cultura animal", d: "Conducta propia de un grupo, aprendida socialmente y no explicable solo por diferencias genéticas o ecológicas (Whiten et al., 1999; Kalan et al., 2025)." },
      { t: "Las cuatro preguntas de Tinbergen", d: "Mecanismo, desarrollo, función y evolución: cuatro niveles de explicación de una misma conducta, que no compiten entre sí." },
      { t: "Antropomorfismo", d: "Atribuir a otros animales estados mentales humanos sin pruebas suficientes; su opuesto, la negación de toda continuidad, es igualmente un sesgo." }
    ],
    pensar: "Si un chimpancé y un loro resuelven el mismo problema, ¿qué nos dice cada caso sobre los primeros homininos? ¿Por qué no nos dice lo mismo?",
    refs: ["tinbergen1963", "whiten1999", "kalan2025"]
  },

  ejes: {
    cultura: "Cultura y comunicación",
    tecnica: "Técnica e innovación",
    alimentacion: "Alimentación y química del entorno",
    social: "Vida social y mente"
  },

  casos: [
    {
      id: "comunicacion-simios", eje: "cultura", corto: "¿Dialectos de los simios?",
      titulo: "Comunicación cultural en los grandes simios salvajes",
      taxon: "Chimpancés, bonobos, gorilas y orangutanes", lugar: "Diversas poblaciones salvajes de África y Asia",
      metodo: "Revisión de la literatura",
      hallazgo: [
        "La revisión de Kalan et al. (2025) sostiene que la comunicación es un terreno especialmente fértil para estudiar la cultura animal. A diferencia del uso de herramientas extractivas, que depende mucho de los recursos disponibles, una llamada o un gesto están menos condicionados por la ecología y más moldeados por la vida social.",
        "Los datos reunidos muestran repertorios vocales y gestuales más variables de lo que se suponía y cada vez más indicios de variación propia de cada grupo. Un ejemplo es el «leaf-clipping» de los chimpancés: arrancar ruidosamente el limbo de una hoja con los dientes, que en Mahale, Budongo o Ngogo sirve sobre todo para solicitar la cópula, en Bossou aparece en el juego y en momentos de frustración y en Taï también precede a la emisión de «pant hoots». Otro ejemplo son las posibles diferencias acústicas de esas llamadas entre comunidades."
      ],
      importa: "Si las señales varían por convención de grupo y no por necesidad ecológica, ofrecen una vía para estudiar la conformidad, los significados convencionales e incluso la arbitrariedad del signo: piezas que la antropología asocia al lenguaje y al pensamiento simbólico.",
      cautela: "Las autoras subrayan tanto lo que no se sabe como lo que se sabe: pocas poblaciones bien estudiadas, métodos de registro distintos entre equipos y dificultad para descartar diferencias genéticas o acústicas del entorno. La variación de grupo es necesaria, pero no suficiente, para hablar de cultura.",
      salas: ["s09", "s12"], refs: ["kalan2025", "whiten1999"]
    },
    {
      id: "loros-imitacion", eje: "cultura", corto: "Loros que imitan",
      titulo: "La imitación vocal de los loros de compañía",
      taxon: "Psitaciformes (19 especies bien muestreadas; destaca el loro gris, Psittacus erithacus)", lugar: "Hogares de propietarios (encuesta)",
      metodo: "Encuesta a propietarios",
      hallazgo: [
        "Benedict et al. (2022) reunieron, mediante una encuesta pública, datos de 877 loros de compañía. Las especies difieren mucho en su capacidad de imitar sonidos humanos: el loro gris presenta los repertorios mayores, y dentro de una misma especie la variación individual es enorme (un loro gris puede imitar entre cero y unas seiscientas palabras).",
        "No apareció un efecto general del sexo, la edad o el trato con otros loros, aunque sí diferencias por sexo en cinco de las diecinueve especies mejor muestreadas. La mayoría de las aves improvisaba (por ejemplo, recombinando palabras) y usaba las imitaciones en contextos humanos apropiados."
      ],
      importa: "El aprendizaje vocal de producción, es decir, aprender a emitir sonidos nuevos copiándolos, es raro en el reino animal y crucial en la evolución del lenguaje humano. Que aparezca en aves muy alejadas de nosotros indica convergencia: la vida social compleja puede favorecer esta capacidad por caminos independientes.",
      cautela: "Los datos proceden de lo que cuentan los propietarios, no de grabaciones. El propio estudio detecta un sesgo humano: se tiende a suponer que los loros que hablan son machos. Además, la imitación de palabras humanas en cautividad no equivale al repertorio natural de la especie en libertad.",
      salas: ["s09"], refs: ["benedict2022"]
    },
    {
      id: "piedras-bossou", eje: "tecnica", corto: "Elegir la piedra",
      titulo: "Chimpancés que eligen piedras como los primeros talladores",
      taxon: "Chimpancé (Pan troglodytes verus)", lugar: "Bossou (Guinea)",
      metodo: "Experimento de campo",
      hallazgo: [
        "Braun et al. (2025) ofrecieron a los chimpancés de Bossou, que cascan nueces con martillo y yunque de piedra, rocas que esa población no conocía. Se escogieron los mismos tipos de roca que seleccionaban los homininos de Kanjera South (Kenia) hace unos 2 millones de años.",
        "Los chimpancés eligieron piedras más duras como martillos y más blandas como yunques. Distinguían, por tanto, propiedades mecánicas que no se ven: el color no influía en la elección y rocas de color parecido, pero de dureza distinta, se trataron de forma diferente. Los adultos parecen identificar esas propiedades por aprendizaje individual, y los jóvenes reutilizaban a menudo las combinaciones de piedras elegidas por los adultos."
      ],
      importa: "La selección de materia prima por sus propiedades físicas es uno de los pocos rasgos que pueden compararse directamente entre el registro arqueológico olduvayense y la conducta de un primate vivo. El estudio muestra que esa selectividad no exige tallar ni un cerebro de Homo.",
      cautela: "El experimento no registró qué individuos observaban cada elección, de modo que no puede confirmar que la selección se aprenda socialmente: la reutilización de piedras por los jóvenes es una vía posible de transmisión, no una prueba de enseñanza.",
      salas: ["s04", "s12"], refs: ["braun2025stone"]
    },
    {
      id: "cacatuas-ganchos", eje: "tecnica", corto: "Cacatúas innovadoras",
      titulo: "Experiencia variada y transferencia de herramientas en la cacatúa de Goffin",
      taxon: "Cacatúa de Goffin (Cacatua goffiniana)", lugar: "Laboratorio (Viena)",
      metodo: "Experimento en cautividad",
      hallazgo: [
        "Ibáñez de Aldecoa et al. (2023) compararon dos grupos de cacatúas (13 aves en total) que aprendieron a usar una herramienta con gancho. Un grupo la practicó en varias tareas distintas; el otro, el mismo número de ensayos en una sola tarea.",
        "Ambos grupos transfirieron la herramienta a dos problemas nuevos, pero en el segundo el grupo con experiencia diversa tuvo más éxito y alcanzó el criterio en menos ensayos. La práctica variada parece producir un conocimiento más generalizable; la práctica intensiva en un solo contexto pudo hacer a las aves más rígidas."
      ],
      importa: "La innovación técnica no depende solo de la capacidad cognitiva, sino también de la historia de experiencias. La idea dialoga con la sala de «Pensar dando rodeos»: aplicar un medio conocido a un fin nuevo es una de las bases de la tecnología compleja, y una especie muy lejana muestra cómo la diversidad de práctica la facilita.",
      cautela: "La muestra es pequeña y en cautividad, y las cacatúas de Goffin no usan herramientas de forma habitual en libertad. Es un caso de convergencia que ilumina mecanismos de aprendizaje, no una reconstrucción de la conducta de los homininos.",
      salas: ["s08", "s04"], refs: ["ibanez2023"]
    },
    {
      id: "macacos-peces", eje: "alimentacion", corto: "Macacos pescadores",
      titulo: "Macacos japoneses que pescan para sobrevivir al invierno",
      taxon: "Macaco japonés (Macaca fuscata)", lugar: "Kamikochi, Alpes japoneses",
      metodo: "Observación de campo y cámaras de fototrampeo",
      hallazgo: [
        "Un estudio previo del mismo equipo, basado en ADN de excrementos, había revelado que en invierno estos macacos comen invertebrados de río y truchas. Takenaka et al. (2022) documentaron cómo lo hacen: voltean piedras para capturar larvas acuáticas y atrapan peces que nadan en los arroyos.",
        "Registraron unas catorce capturas probables de peces (seis por observación directa y ocho con cámaras). Los arroyos, alimentados por manantiales y por el calor volcánico, mantienen unos 5-6 °C todo el año y no se cubren de nieve, lo que permite el acceso en la estación de mayor escasez."
      ],
      importa: "La conducta muestra cómo una población de primates amplía su dieta hacia proteína animal acuática bajo presión climática. Ofrece un modelo vivo de la flexibilidad alimentaria que las salas atribuyen a los homininos ante los cambios del clima.",
      cautela: "Se trata de una población local y de pocas observaciones. Los autores proponen que la conducta se ha desarrollado para sobrevivir al invierno, pero su origen (innovación individual, difusión social) y su frecuencia exacta siguen sin conocerse.",
      salas: ["s03", "s07"], refs: ["takenaka2022"]
    },
    {
      id: "automedicacion", eje: "alimentacion", corto: "¿Primates que se medican?",
      titulo: "Automedicación en primates no humanos",
      taxon: "25 especies de primates de 9 familias", lugar: "América Central y del Sur, África, Madagascar y Asia",
      metodo: "Revisión sistemática",
      hallazgo: [
        "De la Fuente et al. (2022) revisaron sistemáticamente la literatura sobre el posible uso medicinal de plantas por primates salvajes. Identificaron 575 especies vegetales de 135 familias, usadas sobre todo por monos del Viejo Mundo (46,5 %) y grandes simios (41 %).",
        "Distinguen tres tipos de conducta: la ingestión (tragar hojas enteras sin masticar, tragar semillas o mascar médula amarga), el uso tópico (frotarse el pelaje) y la fumigación del nido. Las plantas implicadas tienen propiedades antiparasitarias, antibacterianas, antipalúdicas, antiinflamatorias o repelentes de insectos, entre otras."
      ],
      importa: "La automedicación plantea la continuidad entre la selección animal de plantas y las tradiciones médicas humanas, y sitúa en otros primates una relación con el entorno que no es solo alimentaria. Para la antropología, conecta con la etnobotánica y con la pregunta de cuándo un saber práctico se vuelve tradición.",
      cautela: "Es difícil separar el uso medicinal de la dieta normal, sobre todo cuando el uso es preventivo. La revisión evalúa qué requisitos se cumplen para cada planta (estado de enfermedad, uso infrecuente, efecto comprobado…) y muestra que para muchas especies vegetales la prueba sigue siendo incompleta.",
      salas: ["s12", "s02"], refs: ["delaFuente2022"]
    },
    {
      id: "etanol-chimpances", eje: "alimentacion", corto: "Fruta fermentada",
      titulo: "Chimpancés que ingieren alcohol al comer fruta",
      taxon: "Chimpancé (Pan troglodytes)", lugar: "Ngogo (Uganda) y Taï (Costa de Marfil)",
      metodo: "Muestreo de campo y estimación",
      hallazgo: [
        "Maro et al. (2025) midieron el etanol de los frutos maduros que comen los chimpancés en dos poblaciones salvajes. La concentración media fue baja, en torno al 0,3 % en peso, pero constante.",
        "Como un chimpancé come unos 4,5 kg de fruta al día, el equipo estima una ingesta de unos 14 g de etanol diarios (±9): una exposición continua y en dosis bajas, no episodios de embriaguez."
      ],
      importa: "El estudio respalda la llamada hipótesis del «mono borracho»: la atracción humana por el alcohol tendría raíces en la exposición de nuestros antepasados frugívoros a la fermentación natural, mucho antes de la fermentación controlada, documentada hace entre 9000 y 13 000 años.",
      cautela: "La cifra diaria es una estimación a partir de la concentración media y de la cantidad de fruta consumida, no una medición en los animales. No se sabe si los chimpancés buscan activamente frutos con más etanol ni con qué eficacia lo metabolizan; la equivalencia en «bebidas estándar» depende de cómo se ajuste al peso corporal.",
      salas: ["s07"], refs: ["maro2025", "bowland2024"]
    },
    {
      id: "ecologia-etanol", eje: "alimentacion", corto: "La ecología del alcohol",
      titulo: "El etanol en la naturaleza: una perspectiva ecoevolutiva",
      taxon: "Plantas, levaduras, bacterias, insectos y mamíferos", lugar: "Escala global",
      metodo: "Revisión de la literatura",
      hallazgo: [
        "Bowland et al. (2024) sostienen que el consumo de etanol no es una rareza humana. Desde el Cretácico, los frutos carnosos ofrecen azúcar a levaduras fermentadoras, de modo que el etanol forma parte de muchos frutos, savias y néctares, y su presencia en la dieta animal sería igual de antigua.",
        "Numerosos linajes muestran adaptaciones para aprovecharlo en lugar de evitarlo. Las explicaciones propuestas van desde lo nutricional (calorías, señal olfativa de fruta madura) hasta lo medicinal o lo cognitivo, con posibles efectos sociales."
      ],
      importa: "La revisión saca el alcohol del marco exclusivamente médico y cultural humano y lo sitúa en la ecología. Ayuda a entender por qué muchas sociedades humanas lo han producido y le han dado un papel social y ritual: sobre una predisposición biológica antigua se construyen prácticas culturales muy diversas.",
      cautela: "Muchos de los beneficios propuestos siguen sin estudiarse en especies silvestres y con las dosis que realmente ofrece la naturaleza. Buena parte de los datos procede de laboratorio (por ejemplo, de moscas del vinagre).",
      salas: ["s07", "s02"], refs: ["bowland2024", "maro2025"]
    },
    {
      id: "simios-girar", eje: "social", corto: "Girar hasta marearse",
      titulo: "Grandes simios que alteran su estado mental girando",
      taxon: "Orangutanes, gorilas, chimpancés y bonobos", lugar: "Vídeos públicos, sobre todo de zoológicos",
      metodo: "Análisis de vídeos públicos",
      hallazgo: [
        "Lameira y Perlman (2023) analizaron 40 vídeos de YouTube con 132 episodios de simios que giraban colgados de cuerdas o lianas durante el juego solitario, con un total de 709 vueltas. La velocidad media fue de 1,43 vueltas por segundo y la máxima sostenida, de 3,3.",
        "Esas velocidades son comparables a las de prácticas humanas de giro empleadas para alcanzar estados de trance, como la danza de los derviches, y cuantas más vueltas daba un simio más señales de mareo mostraba al detenerse."
      ],
      importa: "La búsqueda de estados alterados de conciencia es casi universal en las culturas humanas y tiene un papel destacado en el ritual. Este estudio sugiere que la inclinación a provocarlos con el propio cuerpo, sin sustancias, podría ser compartida con los grandes simios.",
      cautela: "Los propios autores presentan el trabajo como exploratorio. Los vídeos no son una muestra aleatoria (se publican los episodios llamativos), proceden casi todos de cautividad y el estado mental se infiere de la conducta. Hablar de experiencia «trascendente» en un simio sería antropomorfismo.",
      salas: ["s01", "s02"], refs: ["lameira2023"]
    },
    {
      id: "volta", eje: "social", corto: "La caída de Volta",
      titulo: "Respuestas de los chimpancés ante un joven malherido",
      taxon: "Chimpancé (Pan troglodytes schweinfurthii)", lugar: "Grupo M, Parque Nacional de los Montes Mahale (Tanzania)",
      metodo: "Observación de campo (estudio de caso)",
      hallazgo: [
        "En septiembre de 2022, Volta, un chimpancé joven, cayó de un árbol alto y quedó temporalmente inmóvil, con una conmoción grave y fractura nasal. Shimada y Yano (2023) registraron cómo reaccionó su grupo hasta que el animal se recuperó poco a poco.",
        "Catorce de los veintiséis miembros del grupo se acercaron a él. Las conductas fueron parecidas a las descritas ante individuos desplomados o recién muertos: exploración, conductas de atención hacia el otro, alguna agresión y, por primera vez documentado, lamer su sangre. Los machos adultos, incluido el macho alfa, permanecieron cerca más tiempo que las hembras."
      ],
      importa: "El caso alimenta el debate sobre cómo perciben otros animales la pérdida de animación de un congénere, uno de los puntos de partida comparativos para pensar el origen de las conductas humanas ante la muerte, incluidas las funerarias.",
      cautela: "Es un único episodio, sin grupo de comparación, y su interpretación depende de comparar con relatos anteriores. Describe la detección de que «algo va mal» y una respuesta social intensa, pero no demuestra un concepto de muerte.",
      salas: ["s01", "s12"], refs: ["shimada2023"]
    },
    {
      id: "bonobos-cooperacion", eje: "social", corto: "Cooperar con el vecino",
      titulo: "Cooperación entre grupos de bonobos",
      taxon: "Bonobo (Pan paniscus)", lugar: "Reserva de Kokolopori (República Democrática del Congo)",
      metodo: "Observación de campo",
      hallazgo: [
        "Samuni y Surbeck (2023) siguieron dos grupos vecinos de bonobos que pasaban alrededor del 20 % del tiempo juntos. Durante los encuentros, individuos de grupos distintos se espulgaban, formaban coaliciones y compartían comida, además de mantener interacciones agresivas, con frecuencias relativas muy parecidas dentro y entre grupos.",
        "La cooperación se dirigía a compañeros concretos, no al azar: quien más cooperaba recibía más espulgamiento y comida, también de miembros del otro grupo. Los bonobos tratan a ciertos vecinos como a los miembros de su propio grupo."
      ],
      importa: "Contrasta con los chimpancés, cuyos encuentros entre grupos son casi siempre hostiles. Como señala Silk (2023), el caso ayuda a pensar el origen de las sociedades humanas multinivel, en las que las relaciones de cooperación cruzan las fronteras del grupo de residencia.",
      cautela: "Se basa en dos grupos de una sola reserva. Chimpancés y bonobos están igual de emparentados con nosotros, así que ninguna de las dos especies es por sí sola «el modelo» del antepasado común: las reconstrucciones dependen de cuál se tome como referencia.",
      salas: ["s12", "s09"], refs: ["samuni2023", "silk2023"]
    },
    {
      id: "adolescencia-chimpances", eje: "social", corto: "Adolescentes arriesgados",
      titulo: "Riesgo e impulsividad en la adolescencia de los chimpancés",
      taxon: "Chimpancé (Pan troglodytes)", lugar: "Santuario de Tchimpounga (República del Congo)",
      metodo: "Experimento en santuario",
      hallazgo: [
        "Rosati et al. (2023) estudiaron a 40 chimpancés de entre 6 y 25 años, nacidos en libertad y que viven en grandes recintos forestales. Les plantearon dos decisiones: elegir entre una recompensa segura y una arriesgada, y entre una recompensa inmediata y otra mayor pero demorada.",
        "Los adolescentes asumían más riesgos que los adultos, como ocurre en los humanos, pero no eran más impulsivos: esperaban igual que los adultos, aunque reaccionaban con más frustración a la espera. Los niveles de cortisol y testosterona confirmaron los cambios hormonales propios de la adolescencia."
      ],
      importa: "La adolescencia humana es un periodo largo de aprendizaje y de reorganización emocional. El estudio muestra que algunos de sus rasgos psicológicos son compartidos con los chimpancés y otros no, lo que ayuda a separar qué parte de la historia vital humana es antigua y cuál es propia de nuestro linaje.",
      cautela: "Los chimpancés de santuario no viven exactamente como los salvajes, y el diseño transversal compara individuos de distinta edad en lugar de seguir a los mismos a lo largo del tiempo.",
      salas: ["s09", "s10"], refs: ["rosati2023"]
    }
  ],

  retos: [
    {
      tipo: "clasificar", titulo: "¿Cómo se sabe?",
      ok: "¡Todo correcto! Ha identificado el método de los doce casos.",
      consigna: "Cada caso se apoya en un tipo de prueba distinto. Asigne a cada estudio su método principal: de él dependen el alcance y los límites de sus conclusiones.",
      categorias: ["Trabajo de campo: observación o muestreo", "Experimento de campo", "Cautividad o santuario", "Revisión o síntesis de estudios previos"],
      items: [
        { t: "Kalan et al. (2025): comunicación cultural en los grandes simios", c: 3, e: "Reúne y evalúa lo publicado sobre llamadas y gestos de poblaciones salvajes." },
        { t: "Benedict et al. (2022): imitación vocal en 877 loros de compañía", c: 2, e: "Encuesta a propietarios sobre aves que viven con humanos." },
        { t: "Braun et al. (2025): piedras nuevas para los chimpancés de Bossou", c: 1, e: "Se introducen rocas desconocidas en el lugar de cascado de una población salvaje." },
        { t: "Ibáñez de Aldecoa et al. (2023): ganchos y cacatúas de Goffin", c: 2, e: "Experimento con dos grupos de aves en laboratorio." },
        { t: "Takenaka et al. (2022): macacos que pescan en Kamikochi", c: 0, e: "Observación directa y cámaras de fototrampeo en los arroyos." },
        { t: "De la Fuente et al. (2022): plantas medicinales y primates", c: 3, e: "Revisión sistemática de la literatura." },
        { t: "Maro et al. (2025): etanol en los frutos que comen los chimpancés", c: 0, e: "Muestreo de frutos en dos poblaciones salvajes y estimación de la ingesta." },
        { t: "Bowland et al. (2024): ecología evolutiva del etanol", c: 3, e: "Síntesis de estudios sobre muchos linajes." },
        { t: "Lameira y Perlman (2023): simios que giran", c: 2, e: "Vídeos públicos, casi todos de zoológicos." },
        { t: "Shimada y Yano (2023): la caída de Volta", c: 0, e: "Registro de un episodio espontáneo en un grupo salvaje." },
        { t: "Samuni y Surbeck (2023): bonobos de dos grupos vecinos", c: 0, e: "Seguimiento de grupos salvajes sin intervenir." },
        { t: "Rosati et al. (2023): decisiones arriesgadas en adolescentes", c: 2, e: "Tareas de elección con chimpancés de un santuario." }
      ]
    },
    {
      tipo: "test", titulo: "Leer con cautela",
      preguntas: [
        { q: "Tras la caída de Volta, varios chimpancés exploraron su cuerpo y lamieron su sangre. ¿Qué conclusión es más defendible?", o: ["Los chimpancés tienen un concepto de muerte equivalente al humano.", "Detectaron un cambio brusco en un congénere y respondieron con intensidad, pero un solo caso no demuestra un concepto de muerte.", "La conducta es puramente agresiva y carece de interés comparativo."], c: 1, e: "Es un estudio de caso sin grupo de comparación: describe respuestas, no estados mentales." },
        { q: "Maro et al. (2025) estiman unos 14 g diarios de etanol en la dieta de los chimpancés. ¿Qué significa?", o: ["Que se emborrachan a diario.", "Una exposición continua a dosis bajas, estimada a partir de la fruta consumida, no medida en los animales.", "Que buscan activamente la fruta más fermentada."], c: 1, e: "La concentración de los frutos es baja (en torno al 0,3 %); la cifra es una estimación y el estudio no demuestra preferencia por el etanol." },
        { q: "¿Cuál es la principal limitación de la encuesta sobre loros de compañía?", o: ["Que los loros no aprenden sonidos nuevos.", "Que los datos son relatos de propietarios, con sesgos como suponer que los loros que hablan son machos.", "Que incluye una sola especie."], c: 1, e: "El propio estudio detecta ese sesgo humano y advierte que la imitación en cautividad no equivale al repertorio natural." },
        { q: "En Bossou, los jóvenes reutilizaban las piedras elegidas por los adultos. ¿Qué permite afirmar?", o: ["Que los adultos enseñan deliberadamente a los jóvenes.", "Que existe una vía posible de transmisión, aunque el experimento no pudo confirmar el aprendizaje social.", "Que la elección de piedras es innata."], c: 1, e: "Faltaban datos sobre quién observaba a quién; la reutilización es compatible con la transmisión, pero no la prueba." },
        { q: "¿Por qué la cacatúa de Goffin interesa al estudio de la tecnología humana, si no es un pariente cercano?", o: ["Porque desciende de un antepasado común reciente con los homininos.", "Porque, por convergencia, muestra qué condiciones de aprendizaje favorecen transferir una herramienta a problemas nuevos.", "Porque usa herramientas de piedra en libertad."], c: 1, e: "Las especies lejanas informan sobre mecanismos y condiciones, no sobre rasgos heredados." }
      ]
    }
  ]
};
})();
