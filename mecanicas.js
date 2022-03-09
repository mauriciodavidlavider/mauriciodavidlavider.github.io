
//Proyectos

const maximoProyectos = 1;
let posicion = 0; 
let img = document.getElementById("proyecto")

//Proyectos

function menos() {
    posicion--;

    if(posicion<0) {
        posicion = maximoProyectos;
    } 

    cambiarFoto();
}

function mas() {
    posicion++;

    if(posicion>maximoProyectos) {
        posicion = 0;
    }

    cambiarFoto();
}

function cambiarFoto() {

    switch(posicion) {
        case 0:
            img.src = "Proyectos/ahorcado.png"
            break;
        case 1:
            img.src = "Proyectos/encriptador.png"
            break;
        default:
            posicion = 0;
    }

}

function goWeb() {

    switch(posicion) {
        case 0:
            window.open("https://juegoahorcadome.web.app");
            break;
        case 1:
            window.open("https://encriptadortextome.web.app");
            break;
    }

}

function goGit() {

    switch(posicion) {
        case 0:
            window.open("https://github.com/mauriciodavidlavider/Challenge-Oracle-ONE-Semana3-4.git");
            break;
        case 1:
            window.open("https://github.com/mauriciodavidlavider/Challenge-Oracle-ONE-Semana1-2.git");
            break;
    }

}

//Proyectos//

let menosVar = document.querySelector("#izqProyectos");
menosVar.onclick = menos;
let masVar = document.querySelector("#derProyectos");
masVar.onclick = mas;

let paginaWeb = document.querySelector("#paginaWeb");
paginaWeb.onclick = goWeb;
let repositorio = document.querySelector("#repositorio");
repositorio.onclick = goGit;

let masVar = document.querySelector("#derProyectos");
masVar.onclick = mas;

//Contacto

let mensajeTexto = document.querySelector("#mensaje");
mensajeTexto.value = "Formulario no disponible";

