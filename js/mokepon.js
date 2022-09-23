function loadFullScreen() {
let botonMascotaJugador = document.getElementById('botonSelecionarMascota');
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador); 
}
window.addEventListener('load', loadFullScreen);
function aleatorio(min,max) {
    return Math.floor(Math.random()*(max - min + 1)+min);
}


function seleccionarMascotaJugador () {
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

    mascotaEnemigo();
}

function mascotaEnemigo () {
    let ataqueAleatorio = aleatorio(1,6);
    let spanMascotaEnemigo = document.getElementById('nombreMascotaEnemigo');

    switch (ataqueAleatorio) {
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
