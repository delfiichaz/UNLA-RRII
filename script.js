document.addEventListener('DOMContentLoaded', () => {
    const mallaContainer = document.getElementById('malla-container');
    const resetButton = document.getElementById('reset-button');

    // Cargar el estado de las materias aprobadas desde localStorage
    let materiasAprobadas = new Set(JSON.parse(localStorage.getItem('materiasAprobadas')) || []);

    // Función para verificar si una materia tiene todos sus prerrequisitos aprobados
    function tienePrerrequisitosCompletos(materiaId) {
        const materia = materiasData.find(m => m.id === materiaId);
        if (!materia || !materia.prerequisitos || materia.prerrequisitos.length === 0) {
            return true; // No tiene prerrequisitos, siempre disponible
        }
        return materia.prerequisitos.every(prereqId => materiasAprobadas.has(prereqId));
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
            if (a === '0') return 1; // Mueve el año 0 al final
            if (b === '0') return -1;
            return parseInt(a) - parseInt(b);
        });

        aniosOrdenados.forEach(anio => {
            const yearGroupDiv = document.createElement('div');
            yearGroupDiv.classList.add('year-group');

            if (anio === '0') {
                yearGroupDiv.innerHTML = '<h3>Requisitos Adicionales y Trabajo Final</h3>';
            } else {
                yearGroupDiv.innerHTML = `<h3>Año ${anio}</h3>`;
            }

            const semestresOrdenados = Object.keys(materiasPorAnio[anio]).sort((a, b) => parseInt(a) - parseInt(b));

            semestresOrdenados.forEach(semestre => {
                const semestreGroupDiv = document.createElement('div');
                semestreGroupDiv.classList.add('semestre-group');
                
                // Mostrar título de semestre solo si el año no es 0
                if (anio !== '0') {
                    semestreGroupDiv.innerHTML = `<h4>Semestre ${semestre}</h4>`;
                }

                // Ordenar materias por ID o algún otro criterio si es necesario
                materiasPorAnio[anio][semestre].sort((a, b) => a.nombre.localeCompare(b.nombre)).forEach(materia => {
                    const materiaDiv = document.createElement('div');
                    materiaDiv.classList.add('materia');
                    materiaDiv.setAttribute('data-id', materia.id);

                    // Determinar estado de la materia
                    let isAprobada = materiasAprobadas.has(materia.id);
                    let isDisponible = hasPrerrequisitosCompletos(materia.id);

                    if (isAprobada) {
                        materiaDiv.classList.add('materia-aprobada');
                    } else if (isDisponible) {
                        materiaDiv.classList.add('materia-disponible'); // Nueva clase para disponible
                    } else {
                        materiaDiv.classList.add('materia-no-disponible');
                    }

                    materiaDiv.innerHTML = `
                        <h5>${materia.nombre}</h5>
                        ${materia.mencion ? `<p>Mención: ${materia.mencion}</p>` : ''}
                    `;
                    semestreGroupDiv.appendChild(materiaDiv);

                    // Añadir evento de clic
                    materiaDiv.addEventListener('click', () => {
                        // Solo permitir clic si no es "no disponible" o si ya está aprobada (para deseleccionar)
                        if (isDisponible || isAprobada) {
                            manejarClicMateria(materia.id);
                        }
                    });
                });
                yearGroupDiv.appendChild(semestreGroupDiv);
            });
            mallaContainer.appendChild(yearGroupDiv);
        });
    }

    // Función para manejar el clic en una materia (aprobar/desaprobar)
    function manejarClicMateria(idMateria) {
        if (materiasAprobadas.has(idMateria)) {
            // Si ya está aprobada, la desmarcamos
            materiasAprobadas.delete(idMateria);
        } else {
            // Si no está aprobada y cumple los prerrequisitos, la marcamos
            if (tienePrerrequisitosCompletos(idMateria)) {
                materiasAprobadas.add(idMateria);
            } else {
                alert('No puedes aprobar esta materia porque no cumples con todos sus prerrequisitos.');
                return; // No hacer nada si no cumple prerrequisitos
            }
        }
        
        // Guardar el estado actualizado y volver a renderizar
        localStorage.setItem('materiasAprobadas', JSON.stringify(Array.from(materiasAprobadas)));
        renderMalla();
    }

    // Manejador para el botón de reiniciar
    resetButton.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres reiniciar tu progreso? Se borrarán todas las materias aprobadas.')) {
            materiasAprobadas.clear();
            localStorage.removeItem('materiasAprobadas');
            renderMalla();
        }
    });

    // Renderizar la malla al cargar la página por primera vez
    renderMalla();
});
