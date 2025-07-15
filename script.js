document.addEventListener('DOMContentLoaded', () => {
    // --- VERIFICACIÓN CRÍTICA: Asegurarse de que materiasData exista y sea un array ---
    if (typeof materiasData === 'undefined' || !Array.isArray(materiasData)) {
        console.error("Error: La variable 'materiasData' no está definida o no es un array. Asegúrate de que el archivo 'data.js' esté correctamente cargado ANTES que 'script.js' en tu HTML, y que contenga la definición de 'materiasData'.");
        alert("¡Ups! No se pudo cargar la malla curricular. Por favor, revisa la consola para más detalles (F12).");
        return; // Detener la ejecución si los datos no están disponibles
    }
    // ----------------------------------------------------------------------------------

    const mallaContainer = document.getElementById('malla-container');
    const resetButton = document.getElementById('reset-button');

    // Cargar el estado de las materias aprobadas desde localStorage
    // Si no hay nada guardado, inicializa un Set vacío.
    let materiasAprobadas = new Set(JSON.parse(localStorage.getItem('materiasAprobadas')) || []);

    // Función para verificar si una materia tiene todos sus prerrequisitos aprobados
    function tienePrerrequisitosCompletos(materiaId) {
        const materia = materiasData.find(m => m.id === materiaId);

        // Si la materia no se encuentra en materiasData (ID incorrecto en un prerequisito de otra materia), 
        // se considera que NO tiene prerrequisitos completos.
        if (!materia) {
            console.warn(`[tienePrerrequisitosCompletos]: Materia con ID "${materiaId}" no encontrada en 'materiasData'. Esto puede indicar un ID de prerrequisito incorrecto en alguna otra materia.`);
            return false; 
        }

        // Si la materia existe pero no tiene el array 'prerequisitos' o este está vacío, no tiene requisitos
        if (!materia.prerequisitos || materia.prerrequisitos.length === 0) {
            return true; // No tiene prerrequisitos, siempre disponible
        }

        // Comprueba si CADA prerrequisito está en el conjunto de materias aprobadas
        return materia.prerrequisitos.every(prereqId => {
            if (!materiasData.find(m => m.id === prereqId)) {
                console.warn(`[tienePrerrequisitosCompletos]: El prerrequisito con ID "${prereqId}" (de la materia "${materia.nombre}") no fue encontrado en 'materiasData'.`);
                return false; // Si un prerrequisito referenciado no existe, no se puede cumplir
            }
            return materiasAprobadas.has(prereqId);
        });
    }

    // Función principal para renderizar/actualizar la malla
    function renderMalla() {
        mallaContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar

        // Agrupar materias por año y luego por semestre
        const materiasPorAnio = materiasData.reduce((acc, materia) => {
            if (!acc[materia.anio]) {
                acc[materia.anio] = {};
            }
            if (!acc[materia.anio][materia.semestre]) {
                acc[materia.anio][materia.semestre] = [];
            }
            acc[materia.anio][materia.semestre].push(materia);
            return acc;
        }, {});

        // Ordenar los años (0 para requisitos adicionales, luego 1, 2, 3, 4)
        const aniosOrdenados = Object.keys(materiasPorAnio).sort((a, b) => {
            if (a === '0') return 1; // Mueve el año 0 (requisitos adicionales) al final
            if (b === '0') return -1;
            return parseInt(a) - parseInt(b); // Ordena los demás años numéricamente
        });

        aniosOrdenados.forEach(anio => {
            const yearGroupDiv = document.createElement('div');
            yearGroupDiv.classList.add('year-group');

            if (anio === '0') {
                yearGroupDiv.innerHTML = '<h3>Requisitos Adicionales y Trabajo Final</h3>';
            } else {
                yearGroupDiv.innerHTML = `<h3>Año ${anio}</h3>`;
            }

            // Obtener y ordenar los semestres para el año actual
            const semestresOrdenados = Object.keys(materiasPorAnio[anio]).sort((a, b) => parseInt(a) - parseInt(b));

            semestresOrdenados.forEach(semestre => {
                const semestreGroupDiv = document.createElement('div');
                semestreGroupDiv.classList.add('semestre-group');

                // Mostrar título de semestre solo si el año no es 0
                if (anio !== '0') {
                    semestreGroupDiv.innerHTML = `<h4>Semestre ${semestre}</h4>`;
                }

                // Ordenar materias dentro de cada semestre por nombre
                materiasPorAnio[anio][semestre].sort((a, b) => a.nombre.localeCompare(b.nombre)).forEach(materia => {
                    const materiaDiv = document.createElement('div');
                    materiaDiv.classList.add('materia');
                    materiaDiv.setAttribute('data-id', materia.id); // Asigna el ID como atributo de datos

                    // Determinar el estado visual de la materia
                    let isAprobada = materiasAprobadas.has(materia.id);
                    let isDisponible = tienePrerrequisitosCompletos(materia.id);

                    if (isAprobada) {
                        materiaDiv.classList.add('materia-aprobada');
                    } else if (isDisponible) {
                        materiaDiv.classList.add('materia-disponible');
                    } else {
                        materiaDiv.classList.add('materia-no-disponible');
                    }

                    // Contenido HTML de la tarjeta de la materia
                    materiaDiv.innerHTML = `
                        <h5>${materia.nombre}</h5>
                        ${materia.mencion ? `<p>Mención: ${materia.mencion}</p>` : ''}
                    `;
                    semestreGroupDiv.appendChild(materiaDiv);

                    // Añadir el evento de clic a cada tarjeta de materia
                    materiaDiv.addEventListener('click', () => {
                        // Solo permite hacer clic si la materia está disponible para cursar
                        // O si ya está aprobada (para poder deseleccionarla)
                        if (isDisponible || isAprobada) {
                            manejarClicMateria(materia.id);
                        } else {
                            // Mensaje más discreto en consola en vez de alert
                            console.log(`[Clic no permitido]: "${materia.nombre}" no puede ser seleccionada. Faltan prerrequisitos.`);
                        }
                    });
                });
                yearGroupDiv.appendChild(semestreGroupDiv);
            });
            mallaContainer.appendChild(yearGroupDiv);
        });
    }

    // Función para manejar el clic en una materia (para marcarla como aprobada/desaprobada)
    function manejarClicMateria(idMateria) {
        if (materiasAprobadas.has(idMateria)) {
            // Si la materia ya está aprobada, la desmarcamos.
            materiasAprobadas.delete(idMateria);
        } else {
            // Si no está aprobada y cumple sus prerrequisitos, la marcamos como aprobada.
            if (tienePrerrequisitosCompletos(idMateria)) {
                materiasAprobadas.add(idMateria);
            } else {
                // Esto no debería pasar si el addEventListener previene el clic, pero como seguridad
                console.error(`[Error de Lógica]: Se intentó aprobar "${idMateria}" sin cumplir prerrequisitos.`);
                return;
            }
        }

        // Guardar el estado actualizado en localStorage para que persista
        localStorage.setItem('materiasAprobadas', JSON.stringify(Array.from(materiasAprobadas)));
        // Volver a renderizar la malla para actualizar los estados visuales de todas las materias
        renderMalla();
    }

    // Manejador para el botón de reiniciar la selección
    resetButton.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres reiniciar tu progreso? Esto borrará todas las materias marcadas como aprobadas.')) {
            materiasAprobadas.clear(); // Limpia el conjunto de materias aprobadas
            localStorage.removeItem('materiasAprobadas'); // Elimina el dato del localStorage
            renderMalla(); // Vuelve a renderizar la malla desde cero
        }
    });

    // Iniciar la renderización de la malla cuando el DOM esté completamente cargado
    renderMalla();
});
