// On commence par déclarer un objet info en allant chercher l'ID "titre" dans le HTML
let info = document.getElementById("titre");
// On va chercher l'ID "rejouer" qui se trouve à la fin du code en HTML pour ne pas l'afficher dans un premier temps
document.getElementById("rejouer").style.display = "none";
// On injecte ensuite du texte dans l'objet info que l'on a créé pour lui donner son titre
info.textContent = "Super Morpion";

// Ici on demande à la fenêtre l'évènement chargement qui permet la mise en place du jeu pour l'utilisateur
window.addEventListener('load', (event) => {
    // On prend toutes les cellules du tableau créé grâce à la balise HTML "td" pour en faire des valeurs dans un tableau en JS, nommé alors "getALLCells"
    let getAllCells = Array.from(document.querySelectorAll('td'));
    // Pour chaque valeur du tableau créé...
    getAllCells.forEach(cell => {
        // .. On créé un évènement au click en appelant en paramètre une fonction que l'on va appeler ensuite "jouer" qui va aller chercher chaque cellule et chaque ID
        cell.addEventListener("click", function () {
            jouer(cell.id);
        })
    })
});
//Ici on va chercher l'ID "boutonRejouer" et lui ajouter un évènement au click avec une fonction au paramètre
document.querySelector("#boutonRejouer").addEventListener("click", function () {
    // On va chercher l'ID "rejouer" et ne pas l'afficher comme on l'a fait plus haut, mais cette fois ci dans l'évènement
    document.getElementById("rejouer").style.display = "none";
    // On injecte ensuite le contenu du titre dans l'évènement
    info.textContent = "Super Morpion";
    // On crée ensuite un tableau nommé getAllCells grâce au tableau déclaré en HTML
    let getAllCells = Array.from(document.querySelectorAll('td'));
    // On passe alors dans ce tableau pour donner à chaque case les propriétés de l'image du morpion, à savoir qu'elle soit vide et interactive avec le pointeur de la souris
    getAllCells.forEach(cell => {
        cell.style.backgroundPosition = "left";
        cell.style.pointerEvents = 'auto';
        // On va aller ensuite sur toutes les cases du tableau pour en effacer les données dans l'initialisation à chaque passage de boucle
        delete cell.dataset.played;
    })
})

// On déclare la fonction jouer par rapport à l'élément zone
function jouer(zone) {
    // On déclare ensuite un nouveau tableau appelé elements depuis le tableau [date-played]
    let elements = Array.from(document.querySelectorAll('[data-played]'));
    // On déclare que chaque ID zone représente une variable appelée maintenant "carre"
    let carre = document.getElementById(zone);
    // Si le modulo de 2 de la taille du tableau elements déclaré plus haut est strictement égal à 1
    if (elements.length % 2 === 1) {
        // Alors c'est au tour des croix de s'afficher et d'être considérées comme ayant joué
        carre.style.backgroundPosition = "center";
        carre.dataset.played = "croix";
        // Sinon, c'est au tour des rond
    } else {
        carre.style.backgroundPosition = "right";
        carre.dataset.played = "rond";
    }
    // Ici on empeche le pointeur d'être interactif 
    carre.style.pointerEvents = 'none';
    // Si la fonction checkWin ne s'execute pas et que les 9 cases ont été jouées, alors on affiche qu'il y a égalité et donc "Pas de gagnant", ainsi que l'affichage du bouton rejouer qui permet de réinitialiser la partie
    if (!checkWin() && Array.from(document.querySelectorAll('[data-played]')).length === 9) {
        document.getElementById("titre").textContent = "Pas de gagnant";
        document.getElementById("rejouer").style.display = "initial";
    }

}
// Ici on définit les instructions de la propriété checkWin, qui vérifie à chaque coup si la partie est finie car il y a un gagnant qui a complété l'une des lignes
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
// Ici on définit la fonction verifEgalite qui vérifie à chaque coup que la partie continue tant qu'il n'y a pas de gagnant
function verifEgalite(zone1, zone2, zone3) {
    // Ici, on indique que les croix ou les rond ont gagné en fonction des cases similaires ou non
    if (zone1 === zone2 && zone1 === zone3 && zone1 != undefined) {
        info.textContent = `Les ${zone1} ont gagné`;
        // Lorsque la partie est gagnée, on affiche alors également le bouton "rejouer" et on réinitialise la grille du morpion pour qu'elle ne soit plus interactive lorsqu'un joueur a dejà gagné
        document.getElementById("rejouer").style.display = "initial";
        let getAllCells = Array.from(document.querySelectorAll('td'));
        for (let i = 0; i < getAllCells.length; i++) {
            getAllCells[i].style.pointerEvents = 'none';

        }
        return true;
    } else {
        return false;
    }
}