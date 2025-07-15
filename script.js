document.addEventListener('DOMContentLoaded', () => {
    const mallaContainer = document.getElementById('malla-container');

    // Función para renderizar las materias agrupadas por año
    function renderMaterias() {
        mallaContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar

        // Agrupar materias por año
        const materiasPorAnio = materiasData.reduce((acc, materia) => {
            if (!acc[materia.anio]) {
                acc[materia.anio] = [];
            }
            acc[materia.anio].push(materia);
            return acc;
        }, {});

        // Ordenar los años (0 para requisitos adicionales, luego 1, 2, 3, 4)
        const aniosOrdenados = Object.keys(materiasPorAnio).sort((a, b) => {
            if (a === '0') return 1; // Mueve el año 0 al final
            if (b === '0') return -1;
            return a - b;
        });

        aniosOrdenados.forEach(anio => {
            const yearGroupDiv = document.createElement('div');
            yearGroupDiv.classList.add('year-group');

            if (anio === '0') {
                yearGroupDiv.innerHTML = '<h3>Requisitos Adicionales y Trabajo Final</h3>';
            } else {
                yearGroupDiv.innerHTML = `<h3>Año ${anio}</h3>`;
            }

            // Ordenar materias dentro de cada año por semestre
            materiasPorAnio[anio].sort((a, b) => a.semestre - b.semestre).forEach(materia => {
                const materiaDiv = document.createElement('div');
                materiaDiv.classList.add('materia');
                materiaDiv.setAttribute('data-id', materia.id); // Usamos un data-id para identificarla
                
                // Mostrar los prerrequisitos en el texto de la materia
                let prereqText = '';
                if (materia.prerequisitos && materia.prerequisitos.length > 0) {
                    const prereqNombres = materia.prerequisitos
                        .map(pId => materiasData.find(m => m.id === pId)?.nombre || pId)
                        .join(', ');
                    prereqText = `<p>Prerrequisitos: ${prereqNombres}</p>`;
                }

                // Mostrar las correlativas en el texto de la materia
                let correlativasText = '';
                if (materia.correlativas && materia.correlativas.length > 0) {
                    const correlativasNombres = materia.correlativas
                        .map(cId => materiasData.find(m => m.id === cId)?.nombre || cId)
                        .join(', ');
                    correlativasText = `<p>Correlativas: ${correlativasNombres}</p>`;
                }

                materiaDiv.innerHTML = `
                    <h4>${materia.nombre}</h4>
                    ${materia.semestre && anio !== '0' ? `<p>Semestre: ${materia.semestre}</p>` : ''}
                    ${materia.mencion ? `<p>Mención: ${materia.mencion}</p>` : ''}
                    ${prereqText}
                    ${correlativasText}
                `;
                yearGroupDiv.appendChild(materiaDiv);

                // Añadir evento de clic
                materiaDiv.addEventListener('click', () => {
                    manejarClicMateria(materia.id);
                });
            });
            mallaContainer.appendChild(yearGroupDiv);
        });
    }

    // Función para manejar el clic en una materia
    function manejarClicMateria(idMateria) {
        // Limpiar resaltados anteriores
        document.querySelectorAll('.materia').forEach(el => {
            el.classList.remove('selected-materia', 'prerequisite-of-selected', 'correlative-of-selected');
        });

        const materiaSeleccionadaDiv = document.querySelector(`.materia[data-id="${idMateria}"]`);
        if (materiaSeleccionadaDiv) {
            materiaSeleccionadaDiv.classList.add('selected-materia'); // Resaltar la materia clicada

            const materiaObj = materiasData.find(m => m.id === idMateria);

            if (materiaObj) {
                // Resaltar prerrequisitos de la materia seleccionada
                if (materiaObj.prerequisitos && materiaObj.prerequisitos.length > 0) {
                    materiaObj.prerequisitos.forEach(prereqId => {
                        const prereqDiv = document.querySelector(`.materia[data-id="${prereqId}"]`);
                        if (prereqDiv) {
                            prereqDiv.classList.add('prerequisite-of-selected');
                        }
                    });
                }

                // Resaltar correlativas (materias que requieren la seleccionada como prerrequisito)
                materiasData.forEach(m => {
                    if (m.prerequisitos && m.prerequisitos.includes(idMateria)) {
                        const correlativaDiv = document.querySelector(`.materia[data-id="${m.id}"]`);
                        if (correlativaDiv) {
                            correlativaDiv.classList.add('correlative-of-selected');
                        }
                    }
                });
            }
        }
    }

    // Renderizar las materias al cargar la página
    renderMaterias();
});
