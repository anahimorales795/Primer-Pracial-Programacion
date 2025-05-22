// Esperar a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    cargarInventario();

    document.getElementById("form-productos").addEventListener("submit", agregarProducto);
    document.getElementById("form-entradas").addEventListener("submit", agregarEntrada);
    document.getElementById("form-salidas").addEventListener("submit", agregarSalida);
});

let inventario = JSON.parse(localStorage.getItem("inventario")) || [];
let entradas = JSON.parse(localStorage.getItem("entradas")) || [];
let salidas = JSON.parse(localStorage.getItem("salidas")) || [];

function agregarProducto(e) {
    e.preventDefault();
    let articulo = document.getElementById("articulo").value;
    let codigo = document.getElementById("codigo").value;
    let stockInicial = parseInt(document.getElementById("stock-inicial").value) || 0;

    if (inventario.some(p => p.codigo == codigo)) {
        alert("El código ya existe en el inventario.");
        return;
    }

    inventario.push({ articulo, codigo, entrada: 0, salida: 0, stock: stockInicial });
    guardarInventario();
    actualizarTablas();
    e.target.reset();
}

function agregarEntrada(e) {
    e.preventDefault();
    let codigo = document.getElementById("codigo-entrada").value;
    let articulo = document.getElementById("articulo-entrada").value;
    let fecha = document.getElementById("fecha-entrada").value;
    let cantidad = parseInt(document.getElementById("cantidad-entrada").value);

    let producto = inventario.find(p => p.codigo == codigo);
    if (producto) {
        producto.entrada += cantidad;
        producto.stock += cantidad;
        entradas.push({ articulo, codigo, fecha, cantidad });
        guardarInventario();
        actualizarTablas();
    } else {
        alert("El código ingresado no existe.");
    }
    e.target.reset();
}

function agregarSalida(e) {
    e.preventDefault();
    let codigo = document.getElementById("codigo-salida").value;
    let articulo = document.getElementById("articulo-salida").value;
    let fecha = document.getElementById("fecha-salida").value;
    let cantidad = parseInt(document.getElementById("cantidad-salida").value);

    let producto = inventario.find(p => p.codigo == codigo);
    if (producto) {
        if (producto.stock >= cantidad) {
            producto.salida += cantidad;
            producto.stock -= cantidad;
            salidas.push({ articulo, codigo, fecha, cantidad });
            guardarInventario();
            actualizarTablas();
        } else {
            alert("Stock insuficiente para la salida.");
        }
    } else {
        alert("El código ingresado no existe.");
    }
    e.target.reset();
}

function guardarInventario() {
    localStorage.setItem("inventario", JSON.stringify(inventario));
    localStorage.setItem("entradas", JSON.stringify(entradas));
    localStorage.setItem("salidas", JSON.stringify(salidas));
}

function actualizarTablas() {
    let tablaProductos = document.getElementById("tabla-productos");
    let tablaEntradas = document.getElementById("tabla-entradas");
    let tablaSalidas = document.getElementById("tabla-salidas");

    tablaProductos.innerHTML = "";
    inventario.forEach(({ articulo, codigo, entrada, salida, stock }) => {
        let fila = `<tr>
                        <td>${articulo}</td>
                        <td>${codigo}</td>
                        <td>${entrada}</td>
                        <td>${salida}</td>
                        <td>${stock}</td>
                    </tr>`;
        tablaProductos.innerHTML += fila;
    });

    tablaEntradas.innerHTML = "";
    entradas.forEach(({ articulo, codigo, fecha, cantidad }) => {
        let fila = `<tr>
                        <td>${articulo}</td>
                        <td>${codigo}</td>
                        <td>${fecha}</td>
                        <td>${cantidad}</td>
                    </tr>`;
        tablaEntradas.innerHTML += fila;
    });

    tablaSalidas.innerHTML = "";
    salidas.forEach(({ articulo, codigo, fecha, cantidad }) => {
        let fila = `<tr>
                        <td>${articulo}</td>
                        <td>${codigo}</td>
                        <td>${fecha}</td>
                        <td>${cantidad}</td>
                    </tr>`;
        tablaSalidas.innerHTML += fila;
    });
}

function cargarInventario() {
    actualizarTablas();
}
