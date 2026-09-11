let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const alturaSuelo=25;
const altura_Personaje=35;
const ancho_Personaje=20;

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
    ctx.fillRect(canvas.width/2,canvas.height-(alturaSuelo+altura_Personaje ),ancho_Personaje,altura_Personaje)

}