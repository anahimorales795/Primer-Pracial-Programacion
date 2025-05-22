function enviarDatos() {
    let Nombre = document.getElementById('Nombre').value;
    let Apellidos = document.getElementById('Apellidos').value;
    let Email = document.getElementById('Email').value;
    let Asunto = document.getElementById('Asunto').value;
    let Mensaje = document.getElementById('Mensaje').value;

    let tabla = document.getElementById('tablaPersonas'); // Obtener la tabla
    let fila = `
    <tr>
        <td>${Nombre}</td>
        <td>${Apellidos}</td>
        <td>${Email}</td>
        <td>${Asunto}</td>
        <td>${Mensaje}</td>
    </tr>`;

    tabla.innerHTML += fila;  // Agregar la fila a la tabla
}