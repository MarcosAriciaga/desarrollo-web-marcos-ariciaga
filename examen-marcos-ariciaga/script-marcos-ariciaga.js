document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('encuestaForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los datos del formulario
        const edad = document.getElementById('edad').value;
        const sexo = document.getElementById('sexo').value;
        const nivelEducacion = document.getElementById('nivel-educacion').value;
        const ocupacion = document.getElementById('ocupacion').value;

        // Verificar que los datos estén presentes
        if (edad && sexo && nivelEducacion && ocupacion) {
            // Almacenar los datos localmente
            localStorage.setItem('edad', edad);
            localStorage.setItem('sexo', sexo);
            localStorage.setItem('nivelEducacion', nivelEducacion);
            localStorage.setItem('ocupacion', ocupacion);

            // Redirigir a la página de resultados
            window.location.href = 'resultado-marcos-ariciaga.html';
        } else {
            // Enviar un mensaje de error o tomar la acción adecuada
            console.error('Faltan datos en el formulario.');
        }
    });
});