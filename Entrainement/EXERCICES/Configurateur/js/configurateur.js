const optionsTissu = [
    { couleur: 'Jaune', code: '#e2d047', image: './images/option-1-jaune.png', price: 12.30 },
    { couleur: 'Orange', code: '#f1722f', image: './images/option-1-orange.png', price: 12.00 },
    { couleur: 'Violet', code: '#bd3ad8', image: './images/option-1-violet.png', price: 12.10 }
];
const optionsPoche = [
    { couleur: 'Bleu', code: '#11119e', image: './images/option-2-bleu.png', price: 8.30 },
    { couleur: 'Fuchsia', code: '#991157', image: './images/option-2-fuchsia.png', price: 8.50 },
    { couleur: 'Rouge', code: '#d31431', image: './images/option-2-rouge.png', price: 8.10 },
    { couleur: 'vert', code: '#a1cc16', image: './images/option-2-vert.png', price: 8.75 }
];
const couleurText = [
    { couleur: 'Blanc', code: '#FFFFFF' },
    { couleur: 'Noir', code: '#000000' },
    { couleur: 'Bleu', code: '#11119e' },
    { couleur: 'Fuchsia', code: '#991157' },
    { couleur: 'Rouge', code: '#d31431' },
    { couleur: 'vert', code: '#a1cc16' },
    { couleur: 'Jaune', code: '#e2d047' },
    { couleur: 'Orange', code: '#f1722f' }
];
let selectedTissu = 'Violet';
let selectedPoche = 'Rouge';
let customText = 'Votre texte ici';
let selectedTextColor = 'Noir';
let textOption = true;
const prixLettre = 1.80;

window.addEventListener("load", () => {
    console.log("everything's ready !");

})
// L'idée va être de rajouter en Javascript les différentes options de couleur possibles fournies dans le modèle et en CSS pour le tablier violet par défaut, et la poche rouge par défaut.

// Au changement de couleur choisie, celle ci doit être visible (avec une bordure autour de la couleur selectionnée pour chaque endroit du tablier choisi) avec ses changements sur le tablier au click (ou au change ?).

// Le nom de la couleur du tablier et de la poche doit également être écrit en toutes lettres dans le span Tissu et le span Poche. 

// On veut aussi faire en sorte que lorsque l'option "Texte personnalisé" est cliquée, on puisse entrer du texte qui sera retranscrit sur la zone de texte du tablier et ce, dans la couleur choisie.

// Si le bouton "Texte personnalisé" n'est pas coché, on ne doit pas voir l'encadré input text "Votre texte ici..." ni les couleurs proposées pour la police du texte.

// Il faut également que le prix varie en fonction des options choisies selon les prix pratiqués dans le modèle en HTML.

// Lorsque l'option texte est choisie, le prix augmentera si l'on rajoute cette option et selon le nombre de lettres et les couleurs choisies. Le texte doit également être visible en temps réel lorsque l'utilisateur rentre le texte souhaité, et le prix doit s'afficher en conséquence à chaque fois qu'une lettre est ajoutée par exemple.


// -------------- CODE PERSO ----------------- //


// TABLIER //
// Pour chaque itération du tableau d'objets optionsTissu : 
    // On crée une div couleurTissu qui aura la classe "ColorRound"
    // On applique ensuite une couleur à chaque paramètre tissu qui va chercher dans le tableau le code couleur correspondant
    // On va chercher l'ID tissu pour l'utiliser dans le JS
    // On imbrique ensuite les div "ColorRound" créées dans la div portant l'ID "tissu"
// Dans la boucle, on crée la condition suivante : si le nom de la couleur dans l'objet correspond à selectedTissu déclaré dans l'initialisation, alors on ajoute à la div de classe "ColorRound" la classe "selectedColor", ce qui selectionnera la couleur Violet.
    // On crée dans la boucle (et en dehors du if) l'évènement au click de chaque div ColorRound, c'est à dire chaque couleur possible du tissu 
        // On va chercher les trois div qui correspondent aux 3 couleurs possibles du tissu en ciblant les classes ColorRound contenues dans l'id tissu
      // On fait donc passer ces 3 couleurs dans une boucle qui déselectionne d'abord la classe toujours au click à chaque passage de boucle
      // Puis on sort de la boucle et on ajoute la classe selectedColor lorsqu'une couleur est cliquée ET uniquement dans ce cas là

optionsTissu.forEach(tissu => {

    const couleurTissu = document.createElement("div");
    couleurTissu.classList.add("ColorRound");
    couleurTissu.style.backgroundColor = tissu.code;
    const selectCouleurTissu = document.getElementById("tissu");
    selectCouleurTissu.prepend(couleurTissu);
    if (tissu.couleur == selectedTissu) {
        couleurTissu.classList.add("selectedColor");
        
    

    }
    
    couleurTissu.addEventListener("click", event => {
      const couleursTissu = document.querySelectorAll("#tissu .ColorRound");
      couleursTissu.forEach(couleur => {
        couleur.classList.remove("selectedColor");
        
      });
      couleurTissu.classList.add("selectedColor");
      document.getElementById("displayTissu").textContent = tissu.couleur;
      document.getElementById("optionTissuImage").src = tissu.image;
      
       
        
    });
});



// POCHE //
// Comme dans le cas du tissu, on crée une boucle pour chaque itération du paramètre qu'on nommera poche 
// On crée alors les div en fonction du nombre d'optionsPoche avec la classe ColorRound et on attribue la couleur au code du tableau
    // On inclut alors ces div créées dans la div dont l'ID est optionPoche 
// Comme dans le cas du tissu, on attribue les mêmes conditions pour le selectedColor par défaut qui est ici la couleur Rouge
    // Pareil que pour le tissu, au click on va chercher les div de toutes les couleurs et on supprime le selected, on sort de la boucle et on l'ajoute pour la couleur qui est clickée 

optionsPoche.forEach(poche => {
    const couleurPoche = document.createElement("div");
    couleurPoche.classList.add("ColorRound");
    couleurPoche.style.backgroundColor = poche.code;
    const selectCouleurPoche = document.getElementById("optionPoche");
    selectCouleurPoche.prepend(couleurPoche);
    if (poche.couleur == selectedPoche) {
        couleurPoche.classList.add("selectedColor")

    }
    couleurPoche.addEventListener("click", event => {
        const couleursPoche = document.querySelectorAll("#optionPoche .ColorRound");
        couleursPoche.forEach(couleur => {
                couleur.classList.remove("selectedColor");
              })
        couleurPoche.classList.add("selectedColor");
        document.getElementById("displayPoche").textContent = poche.couleur;
        document.getElementById("optionPocheImage").src = poche.image;
        });
    
});

// TEXTE PERSONNALISE 

// On va aller chercher les couleurs possibles pour la couleur de texte, puis créer les RoundColor comme on a pu faire précédemment, seulement on veut que lorsque la case Oui est coché, les couleurs deviennent clickables ainsi que l'input texte actif
// On veut aussi que lorsque la case Non est cochée, rien de tout cela n'apparaisse
// Il faudra également faire en sorte que le texte écrit soit visible directement sur le tablier
// On s'occupera à la fin de la fonction pour calculer le prix à chaque changement d'option, que ce soit tissu, poche, et nombre de caractères.











