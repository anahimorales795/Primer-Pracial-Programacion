function enviar() {

    const nombreCompleto = document.getElementById('nombre_completo').value;
    const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    const telefono = document.getElementById('telefono').value;
    const correoElectronico = document.getElementById('correo_electronico').value;
    const nacionalidad = document.getElementById('nacionalidad').value;


    if (!nombreCompleto || !fechaNacimiento || !telefono || !correoElectronico || !nacionalidad) {
        alert("Por favor, complete todos los campos.");

    }

 
    console.log("Nombre Completo: ", nombreCompleto);
    console.log("Fecha de Nacimiento: ", fechaNacimiento);
    console.log("Teléfono: ", telefono);
    console.log("Correo Electrónico:", correoElectronico);
    console.log("Nacionalidad:", nacionalidad);


    alert("Formulario enviado correctamente.");
}