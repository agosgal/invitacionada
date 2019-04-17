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
    // Si eso está ok sigo, porque las otras dos no pueden estar vacías.
    if (nombre.value.length > 0 && edad.value>18) {
        // Defino variables
        var invitado = nombre.value;
        var años = edad.value;
        var i = select.selectedIndex
        var nacionalidad = select.options[i].value;
        // Traigo radio seleccionado
        var estado = "";
        if (soltero_form.checked) {
            estado = "Disponible";
        } else {
            estado = "No disponible"
        }
        // Llamo a la función
        agregarInvitado(invitado, años, estado, nacionalidad)
    }
}

// Función para agregar / sacar / editar invitados 

function agregarInvitado(invitado, años, estado, nacionalidad){
    // Creo un div dentro del div y le pongo estilo
    var minidiv = document.createElement("div");
    minidiv.classList.add("minidiv");
    lista.appendChild(minidiv);
    // Creo un párrafo y lo meto en el minidiv
    var parrafo = document.createElement("p");
        minidiv.appendChild(parrafo);
        // Creo un botón y lo meto en el minidiv
        var boton2 = document.createElement("button");
        boton2.innerText = "BORRAR"
        minidiv.appendChild(boton2);
        // Lo hago borrar
    boton2.addEventListener("click", function(){
    boton2.remove();
    minidiv.remove()
    });
    // Creo otro botón y lo meto en el minidiv
    var boton3 = document.createElement("button");
        boton3.innerText = "EDIT"
        minidiv.appendChild(boton3);
        // Lo hago editar
    boton3.addEventListener("click", function(){
        parrafo.contentEditable =true;
        parrafo.classList.add("editable");
        });
    return parrafo.innerHTML = ("Datos del invitado: " + invitado + " | " + años + " | " + estado + " |  " +select.options[select.selectedIndex].value)
    
}


   





