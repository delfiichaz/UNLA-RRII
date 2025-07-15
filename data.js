const materiasData = [
    // --- PRIMER AÑO ---
    {
        id: 'h_moderna_contemporanea_i',
        nombre: 'Historia Moderna y Contemporánea I',
        anio: 1,
        semestre: 1,
        prerequisitos: [],
        correlativas: ['h_moderna_contemporanea_ii']
    },
    {
        id: 'h_argentina_i',
        nombre: 'Historia Argentina I',
        anio: 1,
        semestre: 1,
        prerequisitos: [],
        correlativas: ['h_argentina_ii']
    },
    {
        id: 'logica_epistemologia',
        nombre: 'Lógica y Epistemología de las Ciencias Sociales',
        anio: 1,
        semestre: 1,
        prerequisitos: [],
        correlativas: ['metodologia_investigacion']
    },
    {
        id: 'intro_relaciones_internacionales',
        nombre: 'Introducción a las Relaciones Internacionales',
        anio: 1,
        semestre: 1,
        prerequisitos: [],
        correlativas: ['teoria_rr_ii']
    },
    {
        id: 'pensamiento_filosofico',
        nombre: 'Pensamiento Filosófico',
        anio: 1,
        semestre: 1,
        prerequisitos: [],
        correlativas: ['filosofia_moderna_contemporanea']
    },
    {
        id: 'h_moderna_contemporanea_ii',
        nombre: 'Historia Moderna y Contemporánea II',
        anio: 1,
        semestre: 2,
        prerequisitos: ['h_moderna_contemporanea_i'],
        correlativas: []
    },
    {
        id: 'h_argentina_ii',
        nombre: 'Historia Argentina II',
        anio: 1,
        semestre: 2,
        prerequisitos: ['h_argentina_i'],
        correlativas: []
    },
    {
        id: 'metodologia_investigacion',
        nombre: 'Metodología de la Investigación en Ciencias Sociales',
        anio: 1,
        semestre: 2,
        prerequisitos: ['logica_epistemologia'],
        correlativas: ['metodos_tecnicas_aplicados']
    },
    {
        id: 'filosofia_moderna_contemporanea',
        nombre: 'Filosofía Moderna y Contemporánea',
        anio: 1,
        semestre: 2,
        prerequisitos: ['pensamiento_filosofico'],
        correlativas: []
    },
    {
        id: 'economia_politica_i',
        nombre: 'Economía Política I',
        anio: 1,
        semestre: 2,
        prerequisitos: [],
        correlativas: ['economia_politica_ii']
    },

    // --- SEGUNDO AÑO ---
    {
        id: 'teoria_rr_ii',
        nombre: 'Teoría de las Relaciones Internacionales I',
        anio: 2,
        semestre: 3,
        prerequisitos: ['intro_relaciones_internacionales'],
        correlativas: ['teoria_rr_iii']
    },
    {
        id: 'economia_politica_ii',
        nombre: 'Economía Política II',
        anio: 2,
        semestre: 3,
        prerequisitos: ['economia_politica_i'],
        correlativas: ['economia_politica_internacional_i']
    },
    {
        id: 'sistematica_ciencia_politica',
        nombre: 'Sistemática de la Ciencia Política',
        anio: 2,
        semestre: 3,
        prerequisitos: ['logica_epistemologia'], // Suponiendo
        correlativas: ['teoria_politica_i']
    },
    {
        id: 'metodos_tecnicas_aplicados',
        nombre: 'Métodos y Técnicas de Investigación Aplicados',
        anio: 2,
        semestre: 3,
        prerequisitos: ['metodologia_investigacion'],
        correlativas: ['disenio_modelos']
    },
    {
        id: 'politica_internacional_contemporanea',
        nombre: 'Política Internacional Contemporánea',
        anio: 2,
        semestre: 3,
        prerequisitos: ['intro_relaciones_internacionales'],
        correlativas: ['agenda_internacional']
    },
    {
        id: 'historia_rr_ii',
        nombre: 'Historia de las Relaciones Internacionales y Perspectivas Analíticas I',
        anio: 2,
        semestre: 4,
        prerequisitos: ['h_moderna_contemporanea_ii'], // Suponiendo
        correlativas: ['historia_rr_latinoamericanas']
    },
    {
        id: 'teoria_politica_i',
        nombre: 'Teoría Política I',
        anio: 2,
        semestre: 4,
        prerequisitos: ['sistematica_ciencia_politica'],
        correlativas: ['teoria_politica_ii']
    },
    {
        id: 'economia_politica_internacional_i',
        nombre: 'Economía Política Internacional I',
        anio: 2,
        semestre: 4,
        prerequisitos: ['economia_politica_ii'],
        correlativas: ['economia_politica_internacional_ii']
    },
    {
        id: 'teoria_rr_iii',
        nombre: 'Teoría de las Relaciones Internacionales II',
        anio: 2,
        semestre: 4,
        prerequisitos: ['teoria_rr_ii'],
        correlativas: ['teoria_rr_iv'] // Suponiendo una IV
    },
    {
        id: 'disenio_modelos',
        nombre: 'Diseño y Formulación de Modelos Prospectivos y de Investigación',
        anio: 2,
        semestre: 4,
        prerequisitos: ['metodos_tecnicas_aplicados'],
        correlativas: ['seminario_tf_i']
    },

    // --- TERCER AÑO ---
    {
        id: 'economia_politica_internacional_ii',
        nombre: 'Economía Política Internacional II',
        anio: 3,
        semestre: 5,
        prerequisitos: ['economia_politica_internacional_i'],
        correlativas: ['economia_politica_internacional_iii'] // Para mención
    },
    {
        id: 'historia_rr_latinoamericanas',
        nombre: 'Historia de las Relaciones Internacionales Latinoamericanas',
        anio: 3,
        semestre: 5,
        prerequisitos: ['historia_rr_ii'],
        correlativas: ['procesos_integracion_americanos']
    },
    {
        id: 'teoria_politica_ii',
        nombre: 'Teoría Política II',
        anio: 3,
        semestre: 5,
        prerequisitos: ['teoria_politica_i'],
        correlativas: ['sistemas_politicos_comparados']
    },
    {
        id: 'politica_exterior_argentina',
        nombre: 'Política Exterior Argentina',
        anio: 3,
        semestre: 5,
        prerequisitos: ['h_argentina_ii', 'intro_relaciones_internacionales'],
        correlativas: []
    },
    {
        id: 'historia_rr_perspectivas_analiticas_ii',
        nombre: 'Historia de las Relaciones Internacionales y Perspectivas Analíticas II',
        anio: 3,
        semestre: 5,
        prerequisitos: ['historia_rr_ii'],
        correlativas: []
    },
    {
        id: 'instituciones_internacionales',
        nombre: 'Instituciones Internacionales',
        anio: 3,
        semestre: 6,
        prerequisitos: ['teoria_rr_ii'],
        correlativas: []
    },
    {
        id: 'agenda_internacional',
        nombre: 'Agenda Internacional',
        anio: 3,
        semestre: 6,
        prerequisitos: ['politica_internacional_contemporanea'],
        correlativas: []
    },
    {
        id: 'sistemas_politicos_comparados',
        nombre: 'Sistemas Políticos Comparados',
        anio: 3,
        semestre: 6,
        prerequisitos: ['teoria_politica_ii'],
        correlativas: ['sistemas_politicos_latinoamericanos_comparados'] // Para mención
    },
    {
        id: 'politica_internacional_derechos_humanos',
        nombre: 'Política Internacional y Derechos Humanos',
        anio: 3,
        semestre: 6,
        prerequisitos: ['teoria_rr_ii'],
        correlativas: []
    },
    {
        id: 'teoria_rr_iv', // Asumido, ya que hay Teoría RRII III en la descripción de la UNLa
        nombre: 'Teoría de las Relaciones Internacionales III',
        anio: 3,
        semestre: 6,
        prerequisitos: ['teoria_rr_iii'],
        correlativas: []
    },


    // --- CUARTO AÑO ---
    {
        id: 'procesos_integracion_americanos',
        nombre: 'Procesos de Integración Americanos',
        anio: 4,
        semestre: 7,
        prerequisitos: ['historia_rr_latinoamericanas'],
        correlativas: ['teoria_integracion', 'derecho_integracion'] // Para mención
    },
    {
        id: 'seminario_tf_i',
        nombre: 'Seminario de Elaboración de Trabajo Final I',
        anio: 4,
        semestre: 7,
        prerequisitos: ['disenio_modelos'], // Por ser el último nivel de metodología
        correlativas: ['seminario_tf_ii']
    },
    // --- Mención en Asuntos Latinoamericanos ---
    {
        id: 'sistemas_politicos_latinoamericanos_comparados',
        nombre: 'Sistemas Políticos Latinoamericanos Comparados (Mención)',
        anio: 4,
        semestre: 7,
        prerequisitos: ['sistemas_politicos_comparados'],
        correlativas: ['politicas_exteriores_latinoamericanas_comparadas'],
        mencion: 'Asuntos Latinoamericanos'
    },
    {
        id: 'politicas_exteriores_latinoamericanas_comparadas',
        nombre: 'Políticas Exteriores Latinoamericanas Comparadas (Mención)',
        anio: 4,
        semestre: 8,
        prerequisitos: ['sistemas_politicos_latinoamericanos_comparados', 'politica_exterior_argentina'],
        correlativas: [],
        mencion: 'Asuntos Latinoamericanos'
    },
    {
        id: 'politica_domestica_externa_brasilena',
        nombre: 'Política Doméstica y Externa Brasileña (Mención)',
        anio: 4,
        semestre: 8,
        prerequisitos: ['procesos_integracion_americanos'], // Suponiendo
        correlativas: [],
        mencion: 'Asuntos Latinoamericanos'
    },
    // --- Mención en Procesos de Integración y Relaciones Comerciales Internacionales ---
    {
        id: 'teoria_integracion',
        nombre: 'Teoría de la Integración (Mención)',
        anio: 4,
        semestre: 7,
        prerequisitos: ['procesos_integracion_americanos'],
        correlativas: ['derecho_integracion'],
        mencion: 'Integración y Comercio'
    },
    {
        id: 'economia_politica_internacional_iii',
        nombre: 'Economía Política Internacional III (Mención)',
        anio: 4,
        semestre: 7,
        prerequisitos: ['economia_politica_internacional_ii'],
        correlativas: [],
        mencion: 'Integración y Comercio'
    },
    {
        id: 'derecho_integracion',
        nombre: 'Derecho de la Integración (Mención)',
        anio: 4,
        semestre: 8,
        prerequisitos: ['teoria_integracion'],
        correlativas: [],
        mencion: 'Integración y Comercio'
    },

    {
        id: 'seminario_tf_ii',
        nombre: 'Seminario de Elaboración de Trabajo Final II',
        anio: 4,
        semestre: 8,
        prerequisitos: ['seminario_tf_i'],
        correlativas: ['trabajo_final']
    },
    {
        id: 'practica_pre_profesional',
        nombre: 'Práctica Pre-Profesional',
        anio: 4,
        semestre: 8,
        prerequisitos: ['seminario_tf_i'], // Después de cierto avance
        correlativas: []
    },

    // --- REQUISITOS ADICIONALES ---
    {
        id: 'idioma_ingles',
        nombre: 'Cinco Niveles de Idioma Inglés',
        anio: 0, // 0 para requisitos transversales
        semestre: 0,
        prerequisitos: [],
        correlativas: [],
        tipo: 'requisito_adicional'
    },
    {
        id: 'idioma_portugues',
        nombre: 'Tres Niveles de Idioma Portugués',
        anio: 0,
        semestre: 0,
        prerequisitos: [],
        correlativas: [],
        tipo: 'requisito_adicional'
    },
    {
        id: 'informatica',
        nombre: 'Tres Niveles de Informática',
        anio: 0,
        semestre: 0,
        prerequisitos: [],
        correlativas: [],
        tipo: 'requisito_adicional'
    },
    {
        id: 'trabajo_final',
        nombre: 'Trabajo Final de Grado',
        anio: 0,
        semestre: 0,
        prerequisitos: ['seminario_tf_ii', 'idioma_ingles', 'idioma_portugues', 'informatica'], // Todos los requisitos cumplidos
        correlativas: [],
        tipo: 'requisito_adicional'
    }
];
