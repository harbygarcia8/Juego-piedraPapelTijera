'use strict'

let ataqueJugador;
let ataqueEnemigo;

let spanResultadoJuego = document.getElementById('resultadoJuego')

window.addEventListener('load', iniciarJuego);

function iniciarJuego() {
let botonMascotaJugador = document.getElementById('botonSelecionarMascota');
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

let botonAtaqueFuego = document.getElementById('botonAtaqueFuego');
botonAtaqueFuego.addEventListener('click', ataqueFuego);

let botonAtaqueAgua = document.getElementById('botonAtaqueAgua');
botonAtaqueAgua.addEventListener('click', ataqueAgua);

let botonAtaqueTierra = document.getElementById('botonAtaqueTierra');
botonAtaqueTierra.addEventListener('click', ataqueTierra);
}

function aleatorio(min,max) {
    return Math.floor(Math.random()*(max - min + 1)+min);
}

function seleccionarMascotaJugador() {
    let hipodoge = document.getElementById('hipodoge');
    let capipepo = document.getElementById('capipepo')
    let ratigueya = document.getElementById('ratigueya')
    let langostelvis = document.getElementById('langostelvis')
    let tucapalma = document.getElementById('tucapalma')
    let pydos = document.getElementById('pydos');

    let spanMascotaJugador = document.getElementById('nombreMascotaJugador');

    if (hipodoge.checked == true) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if (capipepo.checked == true) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (ratigueya.checked == true) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else if (langostelvis.checked == true) {
        spanMascotaJugador.innerHTML = "Langostelvis"
    } else if (tucapalma.checked == true) {
        spanMascotaJugador.innerHTML = "Tucapalma"
    } else if (pydos.checked == true) {
        spanMascotaJugador.innerHTML = "Pydos"
    } else {
        alert("No seleccionaste ninguna mascota")
    }

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo () {
    let mascotaAleatoria = aleatorio(1,6);
    let spanMascotaEnemigo = document.getElementById('nombreMascotaEnemigo');
    switch (mascotaAleatoria) {
        case 1: spanMascotaEnemigo.innerHTML = "Hipodoge"
        break;
        case 2: spanMascotaEnemigo.innerHTML = "Capipepo"
        break;
        case 3: spanMascotaEnemigo.innerHTML = "Ratigueya"
        break;
        case 4: spanMascotaEnemigo.innerHTML = "Langostelvis"
        break;
        case 5: spanMascotaEnemigo.innerHTML = "Tucapalma"
        break;
        case 6: spanMascotaEnemigo.innerHTML = "Pydos "
        break;
    }

}

function ataqueFuego() {
    let spanResultadoAtaqueJugador = document.getElementById('resultadoAtaqueJugador');
    ataqueJugador = 'TU ATAQUE ES: FUEGO \n';
    spanResultadoAtaqueJugador.innerHTML = 'FUEGO';
    ataqueAleatorioEnemigo();
}

function ataqueAgua() {
    let spanResultadoAtaqueJugador = document.getElementById('resultadoAtaqueJugador');
    ataqueJugador = 'TU ATAQUE ES: AGUA \n';
    spanResultadoAtaqueJugador.innerHTML = 'AGUA';
    ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    let spanResultadoAtaqueJugador = document.getElementById('resultadoAtaqueJugador');
    ataqueJugador = 'TU ATAQUE ES: TIERRA \n';
    spanResultadoAtaqueJugador.innerHTML = 'TIERRA';
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    ataqueEnemigo = aleatorio (1,3);
    let spanResultadoAtaqueEnemigo = document.getElementById('resultadoAtaqueEnemigo');
    switch (ataqueEnemigo) {
        case 1: ataqueEnemigo = 'El ataque enemigo es: FUEGO'; spanResultadoAtaqueEnemigo.innerHTML = "FUEGO";
        break;
        case 2: ataqueEnemigo = 'El ataque enemigo es: AGUA'; spanResultadoAtaqueEnemigo.innerHTML = "AGUA";
        break;
        case 3: ataqueEnemigo = 'El ataque enemigo es: TIERRA'; spanResultadoAtaqueEnemigo.innerHTML = "TIERRA";
        break;
    }
}
