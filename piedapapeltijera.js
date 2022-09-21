function aleatorio(min,max) {
    return Math.floor(Math.random()*(max - min + 1)+min);
}

function eleccionJuego(jugada) {
    let resultado = "";
    if (jugada == PIEDRA) {
        resultado = "Piedra"
    } else if (jugada == PAPEL) {
        resultado = "Papel";
    } else if (jugada == TIJERA) {
        resultado = "Tijera";
    } else {
        resultado = "piedra";
    }
    return resultado;
}

// Piedra es 1, Papel es 2, Tijera es 3
let player = 0;
let pc = 0; 
let triunfos = 0;
let perdidas = 0;

jugador1 = prompt("Cuál es tu nombre?")
alert("Bienvenido " + jugador1);

let PIEDRA = 1;
let PAPEL = 2;
let TIJERA = 3;

while(triunfos < 3 && perdidas < 3 ) {

    pc = aleatorio(1,3);  
    player = prompt(jugador1 + " elige: \n 1. Piedra \n 2. Papel \n 3. Tijera");
    
    alert(jugador1 + " eligió " + eleccionJuego(player));
    alert("Máquina eligió " + eleccionJuego(pc));
    
    if (player == pc) {
        alert("Hubo un empate");
    } else if(player == PIEDRA && pc == TIJERA || player == PAPEL && pc == PIEDRA  || player == TIJERA && pc == PAPEL) {
        alert("El ganador es " + jugador1);
        triunfos++;
    } else {
        perdidas++
        alert("El ganador es la Máquina");
    }

    alert("Resultado parcial: " + triunfos + " triunfos y " + perdidas + " perdidas.")
}

alert(jugador1 + ": \n Ganaste " + triunfos + " veces  \n Perdiste " + perdidas + " veces");
