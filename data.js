const materiasData = [
    // --- PRIMER AÑO ---
    {
        id: '1-1-historia-moderna-i',
        nombre: 'Historia Moderna y Contemporánea I',
        anio: 1,
        semestre: 1,
        prerequisitos: [],
        correlativas: ['1-2-historia-moderna-ii']
    },
    {
        id: '1-1-historia-argentina-i',
        nombre: 'Historia Argentina I',
        anio: 1,
        semestre: 1,
        prerequisitos: [],
        correlativas: ['1-2-historia-argentina-ii']
    },
    {
        id: '1-1-logica-epistemologia',
        nombre: 'Lógica y Epistemología de las Ciencias Sociales',
        anio: 1,
        semestre: 1,
        prerequisitos: [],
        correlativas: ['1-2-metodologia-investigacion']
    },
    {
        id: '1-1-intro-relaciones-internacionales',
        nombre: 'Introducción a las Relaciones Internacionales',
        anio: 1,
        semestre: 1,
        prerequisitos: [],
        correlativas: ['2-3-teoria-rr-ii-i']
    },
    {
        id: '1-1-pensamiento-filosofico',
        nombre: 'Pensamiento Filosófico',
        anio: 1,
        semestre: 1,
        prerequisitos: [],
        correlativas: ['1-2-filosofia-moderna']
    },
    {
        id: '1-2-historia-moderna-ii',
        nombre: 'Historia Moderna y Contemporánea II',
        anio: 1,
        semestre: 2,
        prerequisitos: ['1-1-historia-moderna-i'],
        correlativas: ['2-4-historia-rr-ii-i']
    },
    {
        id: '1-2-historia-argentina-ii',
        nombre: 'Historia Argentina II',
        anio: 1,
        semestre: 2,
        prerequisitos: ['1-1-historia-argentina-i'],
        correlativas: ['3-5-politica-exterior-argentina']
    },
    {
        id: '1-2-metodologia-investigacion',
        nombre: 'Metodología de la Investigación en Ciencias Sociales',
        anio: 1,
        semestre: 2,
        prerequisitos: ['1-1-logica-epistemologia'],
        correlativas: ['2-3-metodos-tecnicas-aplicados']
    },
    {
        id: '1-2-filosofia-moderna',
        nombre: 'Filosofía Moderna y Contemporánea',
        anio: 1,
        semestre: 2,
        prerequisitos: ['1-1-pensamiento-filosofico'],
        correlativas: []
    },
    {
        id: '1-2-economia-politica-i',
        nombre: 'Economía Política I',
        anio: 1,
        semestre: 2,
        prerequisitos: [],
        correlativas: ['2-3-economia-politica-ii']
    },

    // --- SEGUNDO AÑO ---
    {
        id: '2-3-teoria-rr-ii-i',
        nombre: 'Teoría de las Relaciones Internacionales I',
        anio: 2,
        semestre: 3,
        prerequisitos: ['1-1-intro-relaciones-internacionales'],
        correlativas: ['2-4-teoria-rr-ii-ii']
    },
    {
        id: '2-3-economia-politica-ii',
        nombre: 'Economía Política II',
        anio: 2,
        semestre: 3,
        prerequisitos: ['1-2-economia-politica-i'],
        correlativas: ['2-4-economia-politica-internacional-i']
    },
    {
        id: '2-3-sistematica-ciencia-politica',
        nombre: 'Sistemática de la Ciencia Política',
        anio: 2,
        semestre: 3,
        prerequisitos: ['1-1-logica-epistemologia'],
        correlativas: ['2-4-teoria-politica-i']
    },
    {
        id: '2-3-metodos-tecnicas-aplicados',
        nombre: 'Métodos y Técnicas de Investigación Aplicados',
        anio: 2,
        semestre: 3,
        prerequisitos: ['1-2-metodologia-investigacion'],
        correlativas: ['2-4-disenio-modelos']
    },
    {
        id: '2-3-politica-internacional-contemporanea',
        nombre: 'Política Internacional Contemporánea',
        anio: 2,
        semestre: 3,
        prerequisitos: ['1-1-intro-relaciones-internacionales'],
        correlativas: ['3-6-agenda-internacional']
    },
    {
        id: '2-4-historia-rr-ii-i',
        nombre: 'Historia de las Relaciones Internacionales y Perspectivas Analíticas I',
        anio: 2,
        semestre: 4,
        prerequisitos: ['1-2-historia-moderna-ii'],
        correlativas: ['3-5-historia-rr-latinoamericanas', '3-5-historia-rr-ii']
    },
    {
        id: '2-4-teoria-politica-i',
        nombre: 'Teoría Política I',
        anio: 2,
        semestre: 4,
        prerequisitos: ['2-3-sistematica-ciencia-politica'],
        correlativas: ['3-5-teoria-politica-ii']
    },
    {
        id: '2-4-economia-politica-internacional-i',
        nombre: 'Economía Política Internacional I',
        anio: 2,
        semestre: 4,
        prerequisitos: ['2-3-economia-politica-ii'],
        correlativas: ['3-5-economia-politica-internacional-ii']
    },
    {
        id: '2-4-teoria-rr-ii-ii',
        nombre: 'Teoría de las Relaciones Internacionales II',
        anio: 2,
        semestre: 4,
        prerequisitos: ['2-3-teoria-rr-ii-i'],
        correlativas: ['3-6-instituciones-internacionales', '3-6-politica-internacional-ddhh', '3-6-teoria-rr-ii-iii']
    },
    {
        id: '2-4-disenio-modelos',
        nombre: 'Diseño y Formulación de Modelos Prospectivos y de Investigación',
        anio: 2,
        semestre: 4,
        prerequisitos: ['2-3-metodos-tecnicas-aplicados'],
        correlativas: ['4-7-seminario-tf-i']
    },

    // --- TERCER AÑO ---
    {
        id: '3-5-economia-politica-internacional-ii',
        nombre: 'Economía Política Internacional II',
        anio: 3,
        semestre: 5,
        prerequisitos: ['2-4-economia-politica-internacional-i'],
        correlativas: ['4-7-economia-politica-internacional-iii']
    },
    {
        id: '3-5-historia-rr-latinoamericanas',
        nombre: 'Historia de las Relaciones Internacionales Latinoamericanas',
        anio: 3,
        semestre: 5,
        prerequisitos: ['2-4-historia-rr-ii-i'],
        correlativas: ['4-7-procesos-integracion-americanos']
    },
    {
        id: '3-5-teoria-politica-ii',
        nombre: 'Teoría Política II',
        anio: 3,
        semestre: 5,
        prerequisitos: ['2-4-teoria-politica-i'],
        correlativas: ['3-6-sistemas-politicos-comparados']
    },
    {
        id: '3-5-politica-exterior-argentina',
        nombre: 'Política Exterior Argentina',
        anio: 3,
        semestre: 5,
        prerequisitos: ['1-2-historia-argentina-ii', '1-1-intro-relaciones-internacionales'],
        correlativas: ['4-8-politicas-exteriores-latam-comparadas']
    },
    {
        id: '3-5-historia-rr-ii',
        nombre: 'Historia de las Relaciones Internacionales y Perspectivas Analíticas II',
        anio: 3,
        semestre: 5,
        prerequisitos: ['2-4-historia-rr-ii-i'],
        correlativas: []
    },
    {
        id: '3-6-instituciones-internacionales',
        nombre: 'Instituciones Internacionales',
        anio: 3,
        semestre: 6,
        prerequisitos: ['2-4-teoria-rr-ii-ii'],
        correlativas: []
    },
    {
        id: '3-6-agenda-internacional',
        nombre: 'Agenda Internacional',
        anio: 3,
        semestre: 6,
        prerequisitos: ['2-3-politica-internacional-contemporanea'],
        correlativas: []
    },
    {
        id: '3-6-sistemas-politicos-comparados',
        nombre: 'Sistemas Políticos Comparados',
        anio: 3,
        semestre: 6,
        prerequisitos: ['3-5-teoria-politica-ii'],
        correlativas: ['4-7-sistemas-politicos-latam-comparados']
    },
    {
        id: '3-6-politica-internacional-ddhh',
        nombre: 'Política Internacional y Derechos Humanos',
        anio: 3,
        semestre: 6,
        prerequisitos: ['2-4-teoria-rr-ii-ii'],
        correlativas: []
    },
    {
        id: '3-6-teoria-rr-ii-iii',
        nombre: 'Teoría de las Relaciones Internacionales III',
        anio: 3,
        semestre: 6,
        prerequisitos: ['2-4-teoria-rr-ii-ii'],
        correlativas: []
    },

    // --- CUARTO AÑO ---
    {
        id: '4-7-procesos-integracion-americanos',
        nombre: 'Procesos de Integración Americanos',
        anio: 4,
        semestre: 7,
        prerequisitos: ['3-5-historia-rr-latinoamericanas'],
        correlativas: ['4-7-teoria-integracion', '4-8-derecho-integracion']
    },
    {
        id: '4-7-seminario-tf-i',
        nombre: 'Seminario de Elaboración de Trabajo Final I',
        anio: 4,
        semestre: 7,
        prerequisitos: ['2-4-disenio-modelos'],
        correlativas: ['4-8-seminario-tf-ii']
    },
    // --- Mención en Asuntos Latinoamericanos ---
    {
        id: '4-7-sistemas-politicos-latam-comparados',
        nombre: 'Sistemas Políticos Latinoamericanos Comparados (Mención)',
        anio: 4,
        semestre: 7,
        prerequisitos: ['3-6-sistemas-politicos-comparados'],
        correlativas: ['4-8-politicas-exteriores-latam-comparadas'],
        mencion: 'Asuntos Latinoamericanos'
    },
    {
        id: '4-8-politicas-exteriores-latam-comparadas',
        nombre: 'Políticas Exteriores Latinoamericanas Comparadas (Mención)',
        anio: 4,
        semestre: 8,
        prerequisitos: ['4-7-sistemas-politicos-latam-comparados', '3-5-politica-exterior-argentina'],
        correlativas: [],
        mencion: 'Asuntos Latinoamericanos'
    },
    {
        id: '4-8-politica-domestica-externa-brasilena',
        nombre: 'Política Doméstica y Externa Brasileña (Mención)',
        anio: 4,
        semestre: 8,
        prerequisitos: ['4-7-procesos-integracion-americanos'],
        correlativas: [],
        mencion: 'Asuntos Latinoamericanos'
    },
    // --- Mención en Procesos de Integración y Relaciones Comerciales Internacionales ---
    {
        id: '4-7-teoria-integracion',
        nombre: 'Teoría de la Integración (Mención)',
        anio: 4,
        semestre: 7,
        prerequisitos: ['4-7-procesos-integracion-americanos'],
        correlativas: ['4-8-derecho-integracion'],
        mencion: 'Integración y Comercio'
    },
    {
        id: '4-7-economia-politica-internacional-iii',
        nombre: 'Economía Política Internacional III (Mención)',
        anio: 4,
        semestre: 7,
        prerequisitos: ['3-5-economia-politica-internacional-ii'],
        correlativas: [],
        mencion: 'Integración y Comercio'
    },
    {
        id: '4-8-derecho-integracion',
        nombre: 'Derecho de la Integración (Mención)',
        anio: 4,
        semestre: 8,
        prerequisitos: ['4-7-teoria-integracion'],
        correlativas: [],
        mencion: 'Integración y Comercio'
    },

    {
        id: '4-8-seminario-tf-ii',
        nombre: 'Seminario de Elaboración de Trabajo Final II',
        anio: 4,
        semestre: 8,
        prerequisitos: ['4-7-seminario-tf-i'],
        correlativas: ['0-0-trabajo-final']
    },
    {
        id: '4-8-practica-pre-profesional',
        nombre: 'Práctica Pre-Profesional',
        anio: 4,
        semestre: 8,
        prerequisitos: ['4-7-seminario-tf-i'],
        correlativas: []
    },

    // --- REQUISITOS ADICIONALES Y FINALES (ANIO 0) ---
    {
        id: '0-0-idioma-ingles',
        nombre: 'Cinco Niveles de Idioma Inglés',
        anio: 0,
        semestre: 0,
        prerequisitos: [],
        correlativas: ['0-0-trabajo-final'],
        tipo: 'requisito-adicional'
    },
    {
        id: '0-0-idioma-portugues',
        nombre: 'Tres Niveles de Idioma Portugués',
        anio: 0,
        semestre: 0,
        prerequisitos: [],
        correlativas: ['0-0-trabajo-final'],
        tipo: 'requisito-adicional'
    },
    {
        id: '0-0-informatica',
        nombre: 'Tres Niveles de Informática',
        anio: 0,
        semestre: 0,
        prerequisitos: [],
        correlativas: ['0-0-trabajo-final'],
        tipo: 'requisito-adicional'
    },
    {
        id: '0-0-trabajo-final',
        nombre: 'Trabajo Final de Grado',
        anio: 0,
        semestre: 0,
        prerequisitos: ['4-8-seminario-tf-ii', '0-0-idioma-ingles', '0-0-idioma-portugues', '0-0-informatica'],
        correlativas: [],
        tipo: 'requisito-adicional'
    }
];
