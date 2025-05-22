function agregarDatos(){
    //Recolectar Informacion
    let nombre =prompt("Ingresa tu Nombre");
    let edad =prompt("Ingresa tu Edad");
   //apuntar a la tabla creada a traves de in ID
   let tabla  =document.getElementById("tablaPersonas");
   //crear una nueva fila (tr)
   let fila=""
         // asignar texto de tablas
   fila+=`
   <tr><td>${nombre}</td><td>${edad}</td><tr>`;
   tabla.innerHTML+=fila;
  

}