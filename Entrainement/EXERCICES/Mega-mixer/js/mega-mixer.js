const ListeApprenants = ["BAALI Ike-David", "DETHIER Maxime", "DOMERGUE Jonathan", "FALCONIER Franck", "OZMANOV Alik", "PENTEADO Anthony", "PETIT Wilfrid", "PICHOFF Brandon", "TRAVASSOS Carl-Antoine"];



// CODE PERSO -------------------------------------- //

// On veut afficher le nombre de cartes face cachée par ligne lorsqu'on sélectionne le select "selectNumber", pour une valeur de 2, 3 et 4. Pour ça, on créera sûrement des div de même classe "front interrogation".

// Ensuite, on veut que le bouton "boutonPlacer" se comporte comme le "Bouton Toggle à effacer" et retourne un smiley aleatoire ainsi que chaque nom du tableau de façon aléatoire également parmi la liste d'images fournies et le tableau "listeApprenants", et ce pour chaque carte.

// Pour ça, on définira une fonction aléatoire qui permet le flip de la carte sur l'url source de la classe "back smiley". On remarque que c'est la div "flipcard h" qui devient "flipcard h flip" au retournement de la carte, qui permet l'interaction de retournement, on lui a attribué également l'ID "card" 

// On cherche également à faire en sorte que le "boutonInitialiser" remplisse son rôle, c'est à dire redonner à chaque carte sa position face verso initiale et fasse en sorte qu'il reset le smiley aléatoire qui s'affichera la prochaine fois que l'on utilise le bouton Placer.


// -------------------------------------------------- // 

// On sépare chaque nom et prénom du tableau pour les utiliser plus tard dans deux nouveaux tableaux //



// On appelle d'abord le bloc qui contient les div qui vont être créées ensuite grâce à son iD //

blocSizer = document.getElementById("sizer");

// On crée ensuite une boucle pour chaque élément du tableau, dans lequel on va donner des instructions //

ListeApprenants.forEach(nom => {
// On crée d'abord une div qui servira à selectionner la carte qui va faire un flip en lui donnant un nom de classe défini en CSS
    cardFlip = document.createElement("div");
    cardFlip.classList = "flipcard h";

// On crée ensuite une div avec une classe qui correspondra à la carte face cachée et qui prendra les propriétés CSS attribuées //
    cardReturn = document.createElement("div");
    cardReturn.classList = "front interrogation";
    cardReturn.textContent = "?";

    // On inclut alors la div de classe cardFlip dans le container blocSizer 
    blocSizer.prepend(cardFlip);

    // On crée une div qui correspondra à la carte face dévoilée avec la classe correspondante en CSS pour ses propriétés
    cardFlipped = document.createElement("div");
    cardFlipped.classList = "back smiley";
    // On assigne alors une image pour tester si le Flip va marcher après le prepend quelques lignes plus bas (FACULTATIF car remplacé)
    cardFlipped.style.backgroundImage = "url(./images/smiley/smiley-1.png)";

    // On injecte alors les deux div créées dernièrement dans la première que l'on a créée et non directement dans le container sizer
    cardFlip.prepend(cardReturn, cardFlipped);

    // On crée alors une div nom et une prenom qui vont nous permettre de dissocier chaque nom et prénom du tableau par la suite grâce à la méthode split 
    prenom = document.createElement("div");
    prenom.classList = "prenom";

    nom = document.createElement("div");
    nom.classList = "nom";
// On inclut donc ces deux div dans la div cardFlipped qui est la carte retournée associée au smiley, nom et prénom
    cardFlipped.prepend(prenom, nom);





});
// On appelle ici l'iD du bouton qui servira à lancer le placement des cartes en lui assignant une constante ; la constante qui selectionnera toutes les cartes à la fois grâce au QuerySelectorAll et la méthode shuffle qui permet de mélanger les éléments du tableau
const placerButton = document.getElementById("BoutonPlacer");
const allCards = document.querySelectorAll(".flipcard");
const theMix = _.shuffle(ListeApprenants);

// On crée ensuite un évènement au click qui permettra de : 
// - rendre le bouton placer désactivé après le click sur "Placer" 
// - rendre le bouton de selection du nombre de personnes par groupe désactivé également après le click sur "Placer"
// - rendre le bouton réinitialiser qui est désactivé par défaut actif
placerButton.addEventListener("click", function (event) {
    
    placerButton.disabled = true;
    nbGroupes.disabled = true;
    reinitialiser.disabled = false;




// On lance alors une boucle qui parcourt toutes les cartes et qui pour chaque élément aura comme paramètres la carte et l'index
    allCards.forEach((carte, index) => {
    // On récupère alors la valeur des div prenom et nom pour en donner le contenu grâce au split et au délimiteur " " (l'espace entre le nom et le prénom)
        carte.querySelector(".prenom").textContent = theMix[index].split(" ")[1];
        carte.querySelector(".nom").textContent = theMix[index].split(" ")[0];
// On lance alors un Math random pour les 15 smileys fournis, et on lui ajoute un +1 pour permettre de ne pas tomber sur smiley-0 qui n'existe pas dans les images fournies 
        let smileyMix = Math.floor((Math.random() * 15) + 1)
        // On assigne donc ensuite à la classe smiley une image aléatoire de smiley grâce à la concaténation avec le smileyMix défini
        carte.querySelector(".smiley").style.backgroundImage = "url(./images/smiley/smiley-" + smileyMix + ".png)";
// On permet enfin aux cartes de flip si elles ne le sont pas grâce au toggle
        carte.classList.toggle('flip');

    });
});
// Ici, on s'occupe de rendre les différentes options du select dans le HTML interactives grâce au JS en allant chercher le select 
let nbGroupes = document.getElementById("numberSelect");
// On crée ensuite un évènement change qui va aller chercher la valeur contenue dans la target de chaque option du select
nbGroupes.addEventListener("change", (event) => {
    // Le console log est facultatif mais permet de voir la valeur de la target
    console.log(event.target.value)
    // On donne donc du style CSS pour définir la largeur concaténée avec la mesure en pixels en fonction de la valeur de l'event voulu
    blocSizer.style.width = event.target.value + "px";

})

// En dernier lieu, on va chercher le bouton Réinitialiser grâce à son ID
const reinitialiser = document.getElementById("BoutonInitialiser")
// On lui crée l'évènement qui permettra au click :
reinitialiser.addEventListener("click", (event) => {
// Que la bouton placer qui est désactivé redevienne actif avec un false
    placerButton.disabled = false;
    // Idem pour le selecteur de nombre de groupes
    nbGroupes.disabled = false;
    // On rend au bouton réinitialiser son interaction désactivée comme par défaut après le click dessus
    reinitialiser.disabled = true;
    // Enfin, on fait en sorte que chaque carte flip à nouveau à leur position d'origine , c'est à dire face cachée 
    allCards.forEach((carte) => {
        carte.classList.toggle('flip');
    });
});



