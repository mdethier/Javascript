let info = document.getElementById("titre");
document.getElementById("rejouer").style.display = "none";
info.textContent = "Super Morpion";

window.addEventListener('load', (event) => {
    let getAllCells = Array.from(document.querySelectorAll('td'));
    getAllCells.forEach(cell => {
        cell.addEventListener("click", function () {
            jouer(cell.id);
        })
    })
});
document.querySelector("#boutonRejouer").addEventListener("click", function () {
    document.getElementById("rejouer").style.display = "none";
    info.textContent = "Super Morpion";
    let getAllCells = Array.from(document.querySelectorAll('td'));
    getAllCells.forEach(cell => {
        cell.style.backgroundPosition = "left";
        cell.style.pointerEvents = 'auto';
        delete cell.dataset.played;
    })
})


function jouer(zone) {
    let elements = Array.from(document.querySelectorAll('[data-played]'));
    let carre = document.getElementById(zone);
    if (elements.length % 2 === 1) {
        carre.style.backgroundPosition = "center";
        carre.dataset.played = "croix";
    } else {
        carre.style.backgroundPosition = "right";
        carre.dataset.played = "rond";
    }
    carre.style.pointerEvents = 'none';
    if (!checkWin() && Array.from(document.querySelectorAll('[data-played]')).length === 9) {
        document.getElementById("titre").textContent = "Pas de gagnant";
        document.getElementById("rejouer").style.display = "initial";
    }

}

function checkWin() {
    if (
        verifEgalite(document.getElementById("Zonea1").dataset.played, document.getElementById("Zonea2").dataset.played, document.getElementById("Zonea3").dataset.played)
        ||
        verifEgalite(document.getElementById("Zoneb1").dataset.played, document.getElementById("Zoneb2").dataset.played, document.getElementById("Zoneb3").dataset.played)
        ||
        verifEgalite(document.getElementById("Zonec1").dataset.played, document.getElementById("Zonec2").dataset.played, document.getElementById("Zonec3").dataset.played)
        ||
        verifEgalite(document.getElementById("Zonea1").dataset.played, document.getElementById("Zoneb1").dataset.played, document.getElementById("Zonec1").dataset.played)
        ||
        verifEgalite(document.getElementById("Zonea2").dataset.played, document.getElementById("Zoneb2").dataset.played, document.getElementById("Zonec2").dataset.played)
        ||
        verifEgalite(document.getElementById("Zonea3").dataset.played, document.getElementById("Zoneb3").dataset.played, document.getElementById("Zonec3").dataset.played)
        ||
        verifEgalite(document.getElementById("Zonea1").dataset.played, document.getElementById("Zoneb2").dataset.played, document.getElementById("Zonec3").dataset.played)
        ||
        verifEgalite(document.getElementById("Zonea3").dataset.played, document.getElementById("Zoneb2").dataset.played, document.getElementById("Zonec1").dataset.played)
    ) {
        return true;
    } else {
        return false;
    }
}

function verifEgalite(zone1, zone2, zone3) {
    console.log(zone1 + zone2 + zone3);
    if (zone1 === zone2 && zone1 === zone3 && zone1 !== undefined) {

        info.textContent = `Les ${zone1} ont gagné`;
        document.getElementById("rejouer").style.display = "initial";
        let getAllCells = Array.from(document.querySelectorAll('td'));
        for (let i = 0; i < getAllCells.length; i++) {
            getAllCells[i].style.pointerEvents = 'none';
        }
    }
}