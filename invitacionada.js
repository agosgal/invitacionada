//Declaro variables
var nombre = document.getElementById("nombre");
var edad = document.getElementById("edad");
var form = document.querySelector("form");
var radio = document.getElementsByClassName("container");
var soltero_form = form.elements[2]
var casado_form = form.elements[3];
var select = document.querySelector("select");
var lista = document.getElementById("lista")

form.onsubmit = function(evento) {
    evento.preventDefault();
    // Valido nombre
    if (nombre.value.length == 0) {
        nombre.classList.add("error"),
        nombre.placeholder="   Acordate de escribir tu nombre!"
    }
    // Valido edad
    if (edad.value < 18 || edad.value > 120) {
        edad.classList.add("error"),
        edad.placeholder="  Acordate de escribir tu edad!";
    }
    // Si eso está ok sigo, porque las otras dos no pueden estar vacías
    if (nombre.value.length > 0 && edad.value>18) {
        var invitado = nombre.value;
        var años = edad.value;
        // Traigo radio seleccionado
        var estado = "";
        if (soltero_form.checked) {
            estado = "Disponible";
        } else {
            estado = "No disponible"
        }
        // Creo un párrafo dentro del div
        var parrafo = document.createElement("p");
        // Lo meto en el div
        lista.appendChild(parrafo);
        // Agrego la info
        parrafo.innerHTML = ("Datos del invitado: " + invitado + " | " + años + " | " + estado + " |  " +select.options[select.selectedIndex].value)
    }
}






