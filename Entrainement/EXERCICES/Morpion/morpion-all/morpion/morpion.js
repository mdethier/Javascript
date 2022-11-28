// On commence par déclarer les variables suivantes : le nombre de coups, l'emplacement où l'on peut jouer, le cas où l'on obtient un gagnant.
let nombreCoup;
let emplacement;
let gagnant;
// On va ensuite chercher le tableau de données en HTML par son ID, ainsi que les cellules du tableau de données par leur balise, à savoir ici td.
let table = document.getElementById("center");
let cells = table.getElementsByTagName("td");

// Ici on appelle un évènement défini sur le chargement de la page, dans lequel on déclare l'initialisation.
window.addEventListener('load', (event) => {
    initialisation();
});
// On définit ici la foncion initialisation déclarée précédemment avec les instructions suivantes: 
function initialisation() {
    // On va d'abord chercher la DIV qui contient le bouton définie par l'ID "rejouer" et on lui applique un style CSS pour qu'elle n'apparaisse pas tant que le jeu n'est pas terminé).
    document.getElementById("rejouer").style.display = "none";
    // On va ensuite chercher le titre par son ID, et on lui donne le titre du jeu comme contenu de texte.
    document.getElementById("titre").textContent = "Super Morpion";
    // On définit ensuite la variable nombre de coups déclarée au début en la définissant sur 0.
    nombreCoup = 0;
    // On définit l'objet "emplacement" déclaré plus tôt en allant chercher dans le HTML les cases de zone qui correspondent aux cellules du tableau, et on leur attribut la chaine de caractères "vide".
    emplacement = {
        Zonea1: "vide",
        Zonea2: "vide",
        Zonea3: "vide",
        Zoneb1: "vide",
        Zoneb2: "vide",
        Zoneb3: "vide",
        Zonec1: "vide",
        Zonec2: "vide",
        Zonec3: "vide"
    };
    // On crée ici une boucle ayant comme paramètre de départ l'indice 0, le paramètre d'arrivée aura pour valeur la longueur du tableau des cellules de données, et une incrémentation de +1 à chaque itération.
    for (let i = 0; i < cells.length; i++) {
        // Pour chaque tour de boucle, on va incrémenter et parcourir tous les éléments du tableau
        let cell = cells[i];
        // On applique ensuite pour chaque cellule du CSS qui permet d'aller chercher l'image contenant l'espace blanc, la croix rouge et le rond vert : ici avec left on prend l'espace blanc 
        cell.style.backgroundPosition = "left";
        // On applique ensuite une propriété CSS qui permet au curseur de la souris de changer et d'interagir avec les cellules 
        cell.style.pointerEvents = 'auto';
    }
}

// Ici, on définit une fonction appelée "jouer" en prenant le paramètre "zone" qui comprend les conditions quivantes : 
function jouer(zone) {
    // Si le modulo de 2 est strictement égal à 1, alors c'est aux croix de jouer
    if (nombreCoup % 2 === 1) {
        // Alors, on va chercher l'ID "zone" déclaré précédemment dans la fonction "jouer" et appliquer à la position de l'image la valeur "center" qui représente la croix sur l'image
        document.getElementById(zone).style.backgroundPosition = "center";
        emplacement[zone] = "croix";
        // Sinon, si le modulo de 2 est autre, alors on va chercher l'ID "zone" et on lui applique une position d'image sur la valeur "right", qui représente le rond sur l'image
    } else {
        document.getElementById(zone).style.backgroundPosition = "right";
        emplacement[zone] = "rond";
    }
    // Ici, on fait en sorte que le pointeur reprenne son rôle initial, et ne puisse donc plus interagir avec les cases
    document.getElementById(zone).style.pointerEvents = 'none';
    // On incrémente ensuite le nombre de coups de +1
    nombreCoup++;
    // On execute ensuite la fonction "checkWin" pour vérifier s'il y a un gagnant grâce à la condition qui suit
    checkWin();
    // Si le nombre de coups est strictement égal à 9 ET que la variable "gagnant" est interprétée comme indéfinie, 
    if (nombreCoup === 9 && typeof gagnant === 'undefined') {
        // Alors le titre "Super Morpion" change de contenu texte pour afficher "Pas de gagnant"
        document.getElementById("titre").textContent = "Pas de gagnant";
        // Et le bouton contenu dans la DIV portant l'ID "rejouer" réapparait et revient à son état d'affichage initial.
        document.getElementById("rejouer").style.display = "initial";
    }
}
// Ici, on définit les instructions de la fonction "checkWin" déclarée un peu plus haut qui vérifie les coordonnées de chaque case pour comparer leur égalité ou non
function checkWin() {
    // On appelle ici la fonction qui se rapporte au checkWin en appelant une fonction verifEgalite qui compare toutes les lignes qui provoquent une victoire, à savoir les 3 lignes horizontales, les trois lignes verticales et les deux diagonales.
    if (verifEgalite(emplacement["Zonea1"], emplacement["Zonea2"], emplacement["Zonea3"]) || verifEgalite(emplacement["Zoneb1"], emplacement["Zoneb2"], emplacement["Zoneb3"]) || verifEgalite(emplacement["Zonec1"], emplacement["Zonec2"], emplacement["Zonec3"]) || verifEgalite(emplacement["Zonea1"], emplacement["Zoneb1"], emplacement["Zonec1"]) || verifEgalite(emplacement["Zonea2"], emplacement["Zoneb2"], emplacement["Zonec2"]) || verifEgalite(emplacement["Zonea3"], emplacement["Zoneb3"], emplacement["Zonec3"]) || verifEgalite(emplacement["Zonea1"], emplacement["Zoneb2"], emplacement["Zonec3"]) || verifEgalite(emplacement["Zonea3"], emplacement["Zoneb2"], emplacement["Zonec1"])) {
        // Dans le cas où les croix remplissent la condition précédente, on affiche que les croix ont gagné
        if (gagnant === 'croix') {
            document.getElementById("titre").textContent = "Les croix ont gagné";
            // Ou bien que les ronds ont gagné
        } else {
            document.getElementById("titre").textContent = "Les ronds ont gagné";
        }
        // A la fin de la partie, on affiche alors le bouton rejouer qui permet de réinitialiser la partie
        document.getElementById("rejouer").style.display = "initial";
        // Dans ce cas, on désactive alors le pointeur qui permettait de cliquer sur une case
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.pointerEvents = 'none';
        }
    }
}
// Ici on donne les instructions à la fonction verifEgalite que l'on a appelée précédemment : si la zone 1 est égale à la zone 2 et à la zone 3 ET que la zone 1 n'est pas vide, alors il y a un gagnant dans ce cas là, sinon la condition n'est pas remplie.
function verifEgalite(zone1, zone2, zone3) {
    if (zone1 === zone2 && zone1 === zone3 && zone1 !== 'vide') {
        gagnant = zone1;
        return true;
    } else {
        return false;
    }
}