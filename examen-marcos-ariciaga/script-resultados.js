document.addEventListener('DOMContentLoaded', function() {
    // Obtener los datos almacenados localmente
    const edad = localStorage.getItem('edad');
    const sexo = localStorage.getItem('sexo');
    const nivelEducacion = localStorage.getItem('nivelEducacion');
    const ocupacion = localStorage.getItem('ocupacion');

    // Mostrar los datos en la página de resultados si están presentes
    const edadResultadoElement = document.getElementById('edadResultado');
    const sexoResultadoElement = document.getElementById('sexoResultado');
    const nivelEducacionResultadoElement = document.getElementById('nivelEducacionResultado');
    const ocupacionResultadoElement = document.getElementById('ocupacionResultado');

    if (edad && sexo && nivelEducacion && ocupacion) {
        // Mostrar los datos ingresados en la encuesta
        // Mostrar los datos ingresados en la encuesta
    edadResultadoElement.textContent = `Edad: ${edad} años`;
    sexoResultadoElement.textContent = `Sexo: ${sexo}`;
    nivelEducacionResultadoElement.textContent = `Nivel de educación: ${nivelEducacion}`;
    ocupacionResultadoElement.textContent = `Ocupación: ${ocupacion}`;

    } else {
        // Si falta algún dato, redirigir a la página principal
        window.location.href = 'encuesta-marcos-ariciaga.html';
    }

    // Limpiar datos almacenados después de mostrarlos
    localStorage.removeItem('edad');
    localStorage.removeItem('sexo');
    localStorage.removeItem('nivelEducacion');
    localStorage.removeItem('ocupacion');
});