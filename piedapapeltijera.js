// Piedra es 1, Papel es 2, Tijera es 3
let player = 0;
let pc = 0;

let PIEDRA = 1;
let PAPEL = 2;
let TIJERA = 3;

Jugador1 = prompt("Cuál es tu nombre?")
alert("Bienvenido " + Jugador1);

jugador2 = prompt("Cuál es tu nombre?")
alert("Bienvenido " + jugador2);

player = prompt(Jugador1 + " elige: \n 1. Piedra \n 2. Papel \n 3. Tijera");

if (player == PIEDRA) {
    alert("Elegiste piedra")
} else if (player == PAPEL) {
    alert("Elegiste papel")
} else if (player == TIJERA) {
    alert("Elegiste tijera")
} else {
    alert("Elegiste una opción incorrecta")
}

pc = prompt(jugador2 + " elige: \n 1. Piedra \n 2. Papel \n 3. Tijera");

if (pc == PIEDRA) {
    alert("Elegiste piedra")
} else if (pc == PAPEL) {
    alert("Elegiste papel")
} else if (pc == TIJERA) {
    alert("Elegiste tijera")
} else {
    alert("Elegiste una opción incorrecta")
}

if (player == pc) {
    alert("Hubo un empate");
} else if(player == PIEDRA && pc == TIJERA) {
    alert("El ganador es " + Jugador1);
} else if (player == PAPEL && pc == PIEDRA) {
    alert("El ganador es " + Jugador1);
} else if (player == TIJERA && pc == PAPEL) {
    alert("El ganador es " + Jugador1);
} else {
    alert("El ganador es " + Jugador2);
}