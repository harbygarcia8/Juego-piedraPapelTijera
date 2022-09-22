function loadFullScreen() {
let botonMascotaJugador = document.getElementById('botonSelecionarMascota');
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador); 
}

function seleccionarMascotaJugador () {
    let hipodoge = document.getElementById('hipodoge');
    let capipepo = document.getElementById('capipepo')
    let ratigueya = document.getElementById('ratigueya')
    let langostelvis = document.getElementById('langostelvis')
    let tucapalma = document.getElementById('tucapalma')
    let pydos = document.getElementById('pydos');
    if (hipodoge.checked == true) {
        alert("Seleccionó a Hipodoge"); 
    } else if (capipepo.checked == true) {
        alert("Seleccionó a Capipepo"); 
    } else if (ratigueya.checked == true) {
        alert("Seleccionó a Ratigueya");
    } else if (langostelvis.checked == true) {
        alert("Seleccionó a Langostelvis");
    } else if (tucapalma.checked == true) {
        alert("Seleccionó a Tucapalma");
    } else if (pydos.checked == true) {
        alert("Seleccionó a Pydos");
    } else {
        alert("No seleccionaste ninguna mascota")
    }
}

window.addEventListener('load', loadFullScreen);
