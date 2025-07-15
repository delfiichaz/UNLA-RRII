const materiasData = [
    // --- PRIMER AÑO ---
    {
        id: 'h-moderna-contemporanea-i',
        nombre: 'Historia Moderna y Contemporánea I',
        anio: 1,
        semestre: 1,
        prerequisitos: [],
        correlativas: ['h-moderna-contemporanea-ii']
    },
    {
        id: 'h-argentina-i',
        nombre: 'Historia Argentina I',
        anio: 1,
        semestre: 1,
        prerequisitos: [],
        correlativas: ['h-argentina-ii']
    },
    {
        id: 'logica-epistemologia',
        nombre: 'Lógica y Epistemología de las Ciencias Sociales',
        anio: 1,
        semestre: 1,
        prerequisitos: [],
        correlativas: ['metodologia-investigacion']
    },
    {
        id: 'intro-relaciones-internacionales',
        nombre: 'Introducción a las Relaciones Internacionales',
        anio: 1,
        semestre: 1,
        prerequisitos: [],
        correlativas: ['teoria-rr-ii-i'] // Ajustado a Teoria de RRII I
    },
    {
        id: 'pensamiento-filosofico',
        nombre: 'Pensamiento Filosófico',
        anio: 1,
        semestre: 1,
        prerequisitos: [],
        correlativas: ['filosofia-moderna-contemporanea']
    },
    {
        id: 'h-moderna-contemporanea-ii',
        nombre: 'Historia Moderna y Contemporánea II',
        anio: 1,
        semestre: 2,
        prerequisitos: ['h-moderna-contemporanea-i'],
        correlativas: []
    },
    {
        id: 'h-argentina-ii',
        nombre: 'Historia Argentina II',
        anio: 1,
        semestre: 2,
        prerequisitos: ['h-argentina-i'],
        correlativas: []
    },
    {
        id: 'metodologia-investigacion',
        nombre: 'Metodología de la Investigación en Ciencias Sociales',
        anio: 1,
        semestre: 2,
        prerequisitos: ['logica-epistemologia'],
        correlativas: ['metodos-tecnicas-aplicados']
    },
    {
        id: 'filosofia-moderna-contemporanea',
        nombre: 'Filosofía Moderna y Contemporánea',
        anio: 1,
        semestre: 2,
        prerequisitos: ['pensamiento-filosofico'],
        correlativas: []
    },
    {
        id: 'economia-politica-i',
        nombre: 'Economía Política I',
        anio: 1,
        semestre: 2,
        prerequisitos: [],
        correlativas: ['economia-politica-ii']
    },

    // --- SEGUNDO AÑO ---
    {
        id: 'teoria-rr-ii-i',
        nombre: 'Teoría de las Relaciones Internacionales I',
        anio: 2,
        semestre: 3,
        prerequisitos: ['intro-relaciones-internacionales'],
        correlativas: ['teoria-rr-ii-ii'] // Ajustado a Teoria de RRII II
    },
    {
        id: 'economia-politica-ii',
        nombre: 'Economía Política II',
        anio: 2,
        semestre: 3,
        prerequisitos: ['economia-politica-i'],
        correlativas: ['economia-politica-internacional-i']
    },
    {
        id: 'sistematica-ciencia-politica',
        nombre: 'Sistemática de la Ciencia Política',
        anio: 2,
        semestre: 3,
        prerequisitos: ['logica-epistemologia'], // Suponiendo
        correlativas: ['teoria-politica-i']
    },
    {
        id: 'metodos-tecnicas-aplicados',
        nombre: 'Métodos y Técnicas de Investigación Aplicados',
        anio: 2,
        semestre: 3,
        prerequisitos: ['metodologia-investigacion'],
        correlativas: ['disenio-modelos']
    },
    {
        id: 'politica-internacional-contemporanea',
        nombre: 'Política Internacional Contemporánea',
        anio: 2,
        semestre: 3,
        prerequisitos: ['intro-relaciones-internacionales'],
        correlativas: ['agenda-internacional']
    },
    {
        id: 'historia-rr-ii-perspectivas-i',
        nombre: 'Historia de las Relaciones Internacionales y Perspectivas Analíticas I',
        anio: 2,
        semestre: 4,
        prerequisitos: ['h-moderna-contemporanea-ii'], // Suponiendo
        correlativas: ['historia-rr-latinoamericanas']
    },
    {
        id: 'teoria-politica-i',
        nombre: 'Teoría Política I',
        anio: 2,
        semestre: 4,
        prerequisitos: ['sistematica-ciencia-politica'],
        correlativas: ['teoria-politica-ii']
    },
    {
        id: 'economia-politica-internacional-i',
        nombre: 'Economía Política Internacional I',
        anio: 2,
        semestre: 4,
        prerequisitos: ['economia-politica-ii'],
        correlativas: ['economia-politica-internacional-ii']
    },
    {
        id: 'teoria-rr-ii-ii',
        nombre: 'Teoría de las Relaciones Internacionales II',
        anio: 2,
        semestre: 4,
        prerequisitos: ['teoria-rr-ii-i'],
        correlativas: ['teoria-rr-ii-iii'] // Ajustado a Teoria de RRII III
    },
    {
        id: 'disenio-modelos',
        nombre: 'Diseño y Formulación de Modelos Prospectivos y de Investigación',
        anio: 2,
        semestre: 4,
        prerequisitos: ['metodos-tecnicas-aplicados'],
        correlativas: ['seminario-tf-i']
    },

    // --- TERCER AÑO ---
    {
        id: 'economia-politica-internacional-ii',
        nombre: 'Economía Política Internacional II',
        anio: 3,
        semestre: 5,
        prerequisitos: ['economia-politica-internacional-i'],
        correlativas: ['economia-politica-internacional-iii'] // Para mención
    },
    {
        id: 'historia-rr-latinoamericanas',
        nombre: 'Historia de las Relaciones Internacionales Latinoamericanas',
        anio: 3,
        semestre: 5,
        prerequisitos: ['historia-rr-ii-perspectivas-i'],
        correlativas: ['procesos-integracion-americanos']
    },
    {
        id: 'teoria-politica-ii',
        nombre: 'Teoría Política II',
        anio: 3,
        semestre: 5,
        prerequisitos: ['teoria-politica-i'],
        correlativas: ['sistemas-politicos-comparados']
    },
    {
        id: 'politica-exterior-argentina',
        nombre: 'Política Exterior Argentina',
        anio: 3,
        semestre: 5,
        prerequisitos: ['h-argentina-ii', 'intro-relaciones-internacionales'],
        correlativas: []
    },
    {
        id: 'historia-rr-perspectivas-analiticas-ii',
        nombre: 'Historia de las Relaciones Internacionales y Perspectivas Analíticas II',
        anio: 3,
        semestre: 5,
        prerequisitos: ['historia-rr-ii-perspectivas-i'],
        correlativas: []
    },
    {
        id: 'instituciones-internacionales',
        nombre: 'Instituciones Internacionales',
        anio: 3,
        semestre: 6,
        prerequisitos: ['teoria-rr-ii-ii'],
        correlativas: []
    },
    {
        id: 'agenda-internacional',
        nombre: 'Agenda Internacional',
        anio: 3,
        semestre: 6,
        prerequisitos: ['politica-internacional-contemporanea'],
        correlativas: []
    },
    {
        id: 'sistemas-politicos-comparados',
        nombre: 'Sistemas Políticos Comparados',
        anio: 3,
        semestre: 6,
        prerequisitos: ['teoria-politica-ii'],
        correlativas: ['sistemas-politicos-latinoamericanos-comparados'] // Para mención
    },
    {
        id: 'politica-internacional-derechos-humanos',
        nombre: 'Política Internacional y Derechos Humanos',
        anio: 3,
        semestre: 6,
        prerequisitos: ['teoria-rr-ii-ii'],
        correlativas: []
    },
    {
        id: 'teoria-rr-ii-iii',
        nombre: 'Teoría de las Relaciones Internacionales III',
        anio: 3,
        semestre: 6,
        prerequisitos: ['teoria-rr-ii-ii'],
        correlativas: []
    },

    // --- CUARTO AÑO ---
    {
        id: 'procesos-integracion-americanos',
        nombre: 'Procesos de Integración Americanos',
        anio: 4,
        semestre: 7,
        prerequisitos: ['historia-rr-latinoamericanas'],
        correlativas: ['teoria-integracion', 'derecho-integracion'] // Para mención
    },
    {
        id: 'seminario-tf-i',
        nombre: 'Seminario de Elaboración de Trabajo Final I',
        anio: 4,
        semestre: 7,
        prerequisitos: ['disenio-modelos'], // Por ser el último nivel de metodología
        correlativas: ['seminario-tf-ii']
    },
    // --- Mención en Asuntos Latinoamericanos ---
    {
        id: 'sistemas-politicos-latinoamericanos-comparados',
        nombre: 'Sistemas Políticos Latinoamericanos Comparados (Mención)',
        anio: 4,
        semestre: 7,
        prerequisitos: ['sistemas-politicos-comparados'],
        correlativas: ['politicas-exteriores-latinoamericanas-comparadas'],
        mencion: 'Asuntos Latinoamericanos'
    },
    {
        id: 'politicas-exteriores-latinoamericanas-comparadas',
        nombre: 'Políticas Exteriores Latinoamericanas Comparadas (Mención)',
        anio: 4,
        semestre: 8,
        prerequisitos: ['sistemas-politicos-latinoamericanos-comparados', 'politica-exterior-argentina'],
        correlativas: [],
        mencion: 'Asuntos Latinoamericanos'
    },
    {
        id: 'politica-domestica-externa-brasilena',
        nombre: 'Política Doméstica y Externa Brasileña (Mención)',
        anio: 4,
        semestre: 8,
        prerequisitos: ['procesos-integracion-americanos'], // Suponiendo
        correlativas: [],
        mencion: 'Asuntos Latinoamericanos'
    },
    // --- Mención en Procesos de Integración y Relaciones Comerciales Internacionales ---
    {
        id: 'teoria-integracion',
        nombre: 'Teoría de la Integración (Mención)',
        anio: 4,
        semestre: 7,
        prerequisitos: ['procesos-integracion-americanos'],
        correlativas: ['derecho-integracion'],
        mencion: 'Integración y Comercio'
    },
    {
        id: 'economia-politica-internacional-iii',
        nombre: 'Economía Política Internacional III (Mención)',
        anio: 4,
        semestre: 7,
        prerequisitos: ['economia-politica-internacional-ii'],
        correlativas: [],
        mencion: 'Integración y Comercio'
    },
    {
        id: 'derecho-integracion',
        nombre: 'Derecho de la Integración (Mención)',
        anio: 4,
        semestre: 8,
        prerequisitos: ['teoria-integracion'],
        correlativas: [],
        mencion: 'Integración y Comercio'
    },

    {
        id: 'seminario-tf-ii',
        nombre: 'Seminario de Elaboración de Trabajo Final II',
        anio: 4,
        semestre: 8,
        prerequisitos: ['seminario-tf-i'],
        correlativas: ['trabajo-final']
    },
    {
        id: 'practica-pre-profesional',
        nombre: 'Práctica Pre-Profesional',
        anio: 4,
        semestre: 8,
        prerequisitos: ['seminario-tf-i'], // Después de cierto avance en el seminario
        correlativas: []
    },

    // --- REQUISITOS ADICIONALES ---
    {
        id: 'idioma-ingles',
        nombre: 'Cinco Niveles de Idioma Inglés',
        anio: 0, // 0 para requisitos transversales/extra-curriculares
        semestre: 0,
        prerequisitos: [],
        correlativas: ['trabajo-final'], // El trabajo final lo requiere
        tipo: 'requisito-adicional'
    },
    {
        id: 'idioma-portugues',
        nombre: 'Tres Niveles de Idioma Portugués',
        anio: 0,
        semestre: 0,
        prerequisitos: [],
        correlativas: ['trabajo-final'], // El trabajo final lo requiere
        tipo: 'requisito-adicional'
    },
    {
        id: 'informatica',
        nombre: 'Tres Niveles de Informática',
        anio: 0,
        semestre: 0,
        prerequisitos: [],
        correlativas: ['trabajo-final'], // El trabajo final lo requiere
        tipo: 'requisito-adicional'
    },
    {
        id: 'trabajo-final',
        nombre: 'Trabajo Final de Grado',
        anio: 0,
        semestre: 0,
        prerequisitos: ['seminario-tf-ii', 'idioma-ingles', 'idioma-portugues', 'informatica'], // Asumo que todos estos son requisitos finales
        correlativas: [],
        tipo: 'requisito-adicional'
    }
];
