let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const alturaSuelo=25;
const altura_Personaje=35;
const ancho_Personaje=20;
const ancho_Limon=20;
const alto_Limon=20;

let personajeX=canvas.width/2;
let personajeY=canvas.height;
let limonX=canvas.width/2;
let limonY=3;

function llamarFunciones (){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimones ();

}

function dibujarSuelo (){
    ctx.fillStyle="green";
    ctx.fillRect(0,canvas.height-alturaSuelo ,canvas.width,alturaSuelo);
}

function dibujarPersonaje (){

    ctx.fillStyle="red";
    ctx.fillRect(personajeX,personajeY-(alturaSuelo+altura_Personaje ),ancho_Personaje,altura_Personaje)

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
    dibujarLimones();

}

function limpiarCanva (){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

//Mover a la Derecha

function moverDerecha (){
    personajeX=personajeX+10;
    cleanPersonaje();
}

//Lluvia de limones

function dibujarLimones (){
    ctx.fillStyle="green";
    ctx.fillRect(limonX,limonY,ancho_Limon,alto_Limon)
}

//Mover limon

function mover_Limon (){
    limonY=limonY +10;
    cleanPersonaje();
}