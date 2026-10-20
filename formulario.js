const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Obtener los datos del formulario
    const datos = {
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value,
        sexo: document.querySelector('input[name="sexo"]:checked').value,
        correo: document.getElementById("correo").value,
        poblacion: document.getElementById("estado").value,
        descripcion: document.getElementById("descripcion").value,
        recibirInformacion: document.getElementById("info").checked,
        aceptaCondiciones: document.getElementById("condiciones").checked
    };

    // Mostrar los datos en la consola
    console.clear();
    console.log("¡Registro guardado correctamente!");
    console.table(datos);

    // Mensaje de confirmación
    alert("¡Registro guardado en la consola!");
});