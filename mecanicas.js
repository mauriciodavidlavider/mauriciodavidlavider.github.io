
//Proyectos

const maximoProyectos = 1;
let posicion = 0; 
let img = document.getElementById("proyecto")

//Formulario//

let alertas = [];

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

//Contacto//

function envioFormulario() {
    let completo = true;
    completo &= validarNombre();
    completo &= validarCorreo();
    completo &= validarAsunto();
    completo &= validarTexto();
    if(completo){
        mensajeTexto.value = "";
        mensajeTexto.placeholder = "Formulario inhabilitado";
    }
}

//nombre

function validarNombre() {
    if(nombreContacto.value == ""){
        nombreContacto.value = "";
        nombreContacto.placeholder = "Nombre vacio";
        return false;
    } else if(nombreContacto.value.length > 50){
        nombreContacto.value = "";
        nombreContacto.placeholder = "Debe contener maximo 50 caracteres";
        return false;
    } else return true;
}

//correo

function validarCaracter(elemento){
    let letras = "abcdefghijklmnñoprstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
    for(let i=0; i<letras.length; i++){
        if(elemento==letras[i]){
            return true;
        }
    }
    return false;
}  

function validarCorreo() {
    let nuevoContacto = emailContacto.value;  
    if(nuevoContacto == ""){
        emailContacto.placeholder = "Ingrese e-mail";
        return false;
    }
    let arroba = false;
    arroba = nuevoContacto.indexOf("@");
    if(arroba == -1){
        emailContacto.value = "";
        emailContacto.placeholder = "Falta @"; 
        return false;
    } else {
        nuevoContacto = nuevoContacto.slice(arroba+1, emailContacto.value.length); 
    }
    if(!validarCaracter(nuevoContacto[0])){
        emailContacto.value = "";
        emailContacto.placeholder = "Falta prov1"
        return false;
    }
    let punto = false;
    punto = nuevoContacto.indexOf(".");
    if(punto == -1){
        emailContacto.value = "";
        emailContacto.placeholder = "Falta ."
        return false;
    } else {
        nuevoContacto = nuevoContacto.slice(punto+1, emailContacto.value.length);
    }
    if(!validarCaracter(nuevoContacto[0])){
        emailContacto.value = "";
        emailContacto.placeholder = "Falta prov2"
        return false;
    } else return true;
}

//Asunto

function validarAsunto() {
    if(asuntoContacto.value == ""){
        asuntoContacto.value = "";
        asuntoContacto.placeholder = "Asunto vacio";
        return false;
    } else if(asuntoContacto.value.length > 50){
        asuntoContacto.value = "";
        asuntoContacto.placeholder = "Debe contener maximo 50 caracteres";
        return false;
    } else return true;
}

//Texto

function validarTexto() {
    if(mensajeTexto.value == ""){
        mensajeTexto.value = "";
        mensajeTexto.placeholder = "Mensaje vacio";
        return false;
    } else if(mensajeTexto.value.length > 300){
        mensajeTexto.value = "";
        mensajeTexto.placeholder = "Debe contener maximo 300 caracteres";
        return false;
    } else return true;
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

//Contacto

let nombreContacto = document.getElementById("nombre");
//let nombreContacto = document.querySelector("#nombre");
nombreContacto.placeholder = "";

let emailContacto = document.getElementById("email");
//let nombreContacto = document.querySelector("#nombre");
emailContacto.placeholder = "";

let asuntoContacto = document.getElementById("asunto");
//let nombreContacto = document.querySelector("#nombre");
asuntoContacto.placeholder = "";

let mensajeTexto = document.querySelector("#mensaje");
mensajeTexto.placeholder = "Formulario no disponible.";