document.addEventListener('DOMContentLoaded', () => {
    // Verificar que materiasData exista y sea un array
    if (typeof materiasData === 'undefined' || !Array.isArray(materiasData)) {
        console.error("Error: materiasData no está definida o no es un array. Asegúrate de que data.js se cargue antes que script.js y que materiasData esté correctamente definida.");
        alert("Lo sentimos, no se pudieron cargar los datos de las materias. Por favor, revisa la consola para más detalles.");
        return; // Detener la ejecución si no hay datos
    }

    const mallaContainer = document.getElementById('malla-container');
    const resetButton = document.getElementById('reset-button');

    // Cargar el estado de las materias aprobadas desde localStorage
    let materiasAprobadas = new Set(JSON.parse(localStorage.getItem('materiasAprobadas')) || []);

    // Función para verificar si una materia tiene todos sus prerrequisitos aprobados
    function tienePrerrequisitosCompletos(materiaId) {
        const materia = materiasData.find(m => m.id === materiaId);
        
        // Si la materia no se encuentra en materiasData, no tiene prerrequisitos o su array de prerrequisitos está vacío
        // (¡aquí era donde ocurría el error si 'materia' era undefined!)
        if (!materia) {
            console.warn(`Materia con ID "${materiaId}" no encontrada en materiasData.`);
            return false; // Si la materia no existe, no puede tener prerrequisitos completos
        }
        
        if (!materia.prerequisitos || materia.prerrequisitos.length === 0) {
            return true; // No tiene prerrequisitos, siempre disponible
        }
        
        // Comprueba si CADA prerrequisito está en el conjunto de materias aprobadas
        return materia.prerrequisitos.every(prereqId => materiasAprobadas.has(prereqId));
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
                
                // Mostrar título de semestre solo si el año no es 0 (para los requisitos adicionales no tiene sentido)
                if (anio !== '0') {
                    semestreGroupDiv.innerHTML = `<h4>Semestre ${semestre}</h4>`;
                }

                // Ordenar materias dentro de cada semestre por nombre (o por otro criterio si prefieres)
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
                            // Opcional: alerta si intentan seleccionar una materia no disponible
                            // alert('No puedes seleccionar esta materia. Primero debes aprobar sus prerrequisitos.');
                            // Para no ser intrusivo, podemos solo hacer un console.log
                            console.log(`Intento de seleccionar "${materia.nombre}" sin prerrequisitos completos.`);
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
            // Consideración: Desmarcar una materia podría "desaprobar" otras que la tienen como prerrequisito.
            // Este enfoque actual no desaprueba en cascada, solo la quita de la lista de 'aprobadas'.
            // Si quieres lógica de cascada, sería más compleja. Por ahora, solo elimina.
            materiasAprobadas.delete(idMateria);
        } else {
            // Si no está aprobada y cumple sus prerrequisitos, la marcamos como aprobada.
            if (tienePrerrequisitosCompletos(idMateria)) {
                materiasAprobadas.add(idMateria);
            } else {
                // Esta parte del código no debería ejecutarse si el `if` del `addEventListener` funciona correctamente,
                // pero se mantiene como una capa de seguridad.
                alert('ERROR: Esta materia no puede ser aprobada, faltan prerrequisitos.');
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
