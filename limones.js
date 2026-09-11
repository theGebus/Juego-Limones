let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const alturaSuelo=25;
const altura_Personaje=35;
const ancho_Personaje=20;
let personajeX=canvas.width/2;
let personajeY=height; 

function llamarFunciones (){
    dibujarSuelo();
    dibujarPersonaje();
}

function dibujarSuelo (){
    ctx.fillStyle="green";
    ctx.fillRect(0,canvas.height-alturaSuelo ,canvas.width,alturaSuelo);
}

function dibujarPersonaje (){

    ctx.fillStyle="red";
    ctx.fillRect(personajeX,canvas.height-(alturaSuelo+altura_Personaje ),ancho_Personaje,altura_Personaje)

}

//Mover a la Izquierda

function moverIzquierdas (){
    personajeX=personajeX-10
    cleanPersonaje();

}

function cleanPersonaje (){
    limpiarCanva();
    dibujarPersonaje();
    dibujarSuelo();

}

function limpiarCanva (){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

//Mover a la Derecha

function moverDerecha (){
    personajeX=personajeX+10;
    cleanPersonaje();
}