document.getElementById("registroForm").addEventListener("submit", function (event) {
    // Prevenir el comportamiento predeterminado del formulario (recarga de la página).
    event.preventDefault();

    // Recolectar los datos del formulario en un objeto llamado formData.
    const formData = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        fechaNacimiento: document.getElementById("fechaNacimiento").value
    };

    // Realizar una solicitud HTTP POST a la URL especificada.
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST", // Usar el método POST.
        headers: {
            "Content-Type": "application/json" // Configurar el tipo de contenido de la solicitud como JSON.
        },
        body: JSON.stringify(formData) // Convertir el objeto formData a una cadena JSON y enviarlo como cuerpo de la solicitud.
    })
    .then(response => response.json()) // Manejar la respuesta convirtiendo la respuesta JSON en un objeto JavaScript.
    .then(data => {
        // Mostrar la respuesta JSON en el elemento HTML con el ID "respuesta".
        document.getElementById("respuesta").innerHTML = JSON.stringify(data);

        // Agregar un console.log para mostrar la información en la consola del navegador.
        console.log(data);
    })
    .catch(error => {
        // Manejar cualquier error que ocurra durante la solicitud.
        console.error("Error:", error);
    });
});
