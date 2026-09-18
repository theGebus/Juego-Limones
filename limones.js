// Canvas
const canvas = document.getElementById("areaJuego");
const ctx = canvas.getContext("2d");

// Tamaños
const alturaSuelo = 25;
const altura_Personaje = 35;
const ancho_Personaje = 20;
const ancho_Limon = 20;
const alto_Limon = 20;

// Posición del personaje
let personajeX = canvas.width / 2;
let personajeY = canvas.height;

// Posición del limón
let limonX = canvas.width / 2;
let limonY = 0;

// Iniciar el juego
function iniciarJuego() {
    colocarLimonArriba();
    actualizarPantalla();
}

// Limpiar y dibujar todos los elementos
function actualizarPantalla() {
    limpiarCanvas();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

// Borrar el contenido del canvas
function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Dibujar el suelo
function dibujarSuelo() {
    ctx.fillStyle = "green";
    ctx.fillRect(
        0,
        canvas.height - alturaSuelo,
        canvas.width,
        alturaSuelo
    );
}

// Dibujar el personaje
function dibujarPersonaje() {
    ctx.fillStyle = "red";
    ctx.fillRect(
        personajeX,
        personajeY - (alturaSuelo + altura_Personaje),
        ancho_Personaje,
        altura_Personaje
    );
}

// Dibujar el limón
function dibujarLimon() {
    ctx.fillStyle = "green";
    ctx.fillRect(limonX, limonY, ancho_Limon, alto_Limon);
}

// Mover el personaje hacia la izquierda
function moverPersonajeIzquierda() {
    personajeX = Math.max(0, personajeX - 10);

    comprobarColisionConLimon();
    actualizarPantalla();
}

// Mover el personaje hacia la derecha
function moverPersonajeDerecha() {
    personajeX = Math.min(
        canvas.width - ancho_Personaje,
        personajeX + 10
    );

    comprobarColisionConLimon();
    actualizarPantalla();
}

// Hacer que el limón baje
function bajarLimon() {
    limonY += 30;

    comprobarColisionConLimon();

    if (limonY + alto_Limon >= canvas.height - alturaSuelo) {
        colocarLimonArriba();
    }

    actualizarPantalla();
}

// Comprobar si el limón toca al personaje
function comprobarColisionConLimon() {
    const personajeArriba =
        personajeY - (alturaSuelo + altura_Personaje);

    if (
        limonX + ancho_Limon > personajeX &&
        limonX < personajeX + ancho_Personaje &&
        limonY + alto_Limon > personajeArriba &&
        limonY < personajeArriba + altura_Personaje
    ) {
        colocarLimonArriba();
    }
}

// Colocar el limón arriba en una posición horizontal aleatoria
function colocarLimonArriba() {
    // Esta función está definida en utils.js
    limonX = generarAleatorio(0, canvas.width - ancho_Limon);
    limonY = 0;
}

// Mostrar un número aleatorio en la consola
function probarNumeroAleatorio() {
    console.log(generarAleatorio(10, 100));
}

// Ejecutar al cargar el archivo
iniciarJuego();