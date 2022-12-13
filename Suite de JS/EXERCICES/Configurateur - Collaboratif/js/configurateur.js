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
let customText = '';
let selectedTextColor = 'Noir';
let textOption = true;
const prixLettre = 1.80;

window.addEventListener("load", () => {
    // start option tissu
    const tissuOptions = document.getElementById("tissu");
    const tissuImage = document.getElementById("optionTissuImage");
    optionsTissu.forEach(tissu => {
        const newOption = document.createElement("div");
        newOption.classList.add("ColorRound");
        if (tissu.couleur == selectedTissu) {
            newOption.classList.add("selectedColor");
            tissuImage.src = tissu.image;
        }
        newOption.style.backgroundColor = tissu.code;
        newOption.addEventListener("click", () => {
            tissuImage.src = tissu.image;
            document.querySelector("#displayTissu").textContent = tissu.couleur;
            selectedTissu = tissu.couleur;
            document.querySelectorAll("#tissu > div").forEach((element) => {
                element.classList.remove("selectedColor");
            })
            newOption.classList.add("selectedColor");
            repricing();
        })
        tissuOptions.appendChild(newOption);
    });



    // start option poche
    const pocheOptions = document.getElementById("optionPoche");
    const pocheImage = document.getElementById("optionPocheImage");
    optionsPoche.forEach(poche => {
        const newOption = document.createElement("div");
        newOption.classList.add("ColorRound");
        if (poche.couleur == selectedPoche) {
            newOption.classList.add("selectedColor");
            pocheImage.src = poche.image;
        }
        newOption.style.backgroundColor = poche.code;
        newOption.addEventListener("click", () => {
            selectedPoche = poche.couleur;
            document.querySelector("#displayPoche").textContent = poche.couleur;
            document.querySelector("#optionPocheImage").src = poche.image;
            document.querySelectorAll("#optionPoche > div").forEach((element) => {
                element.classList.remove("selectedColor");
            })
            newOption.classList.add("selectedColor");
            repricing();
        })
        pocheOptions.appendChild(newOption);
    });




    // start option couleur texte
    const texteColorOptions = document.getElementById("textColorOptions");
    couleurText.forEach(texteCouleur => {
        const newOption = document.createElement("div");
        newOption.classList.add("ColorRound");
        if (texteCouleur.couleur == selectedTextColor) {
            newOption.classList.add("selectedColor");
        }
        newOption.style.backgroundColor = texteCouleur.code;
        newOption.addEventListener("click", () => {
            selectedTextColor = texteCouleur.couleur;
            document.querySelector(".textePerso").style.color = texteCouleur.code;
            document.querySelectorAll("#textColorOptions > div").forEach((element) => {
                element.classList.remove("selectedColor");
            })
            newOption.classList.add("selectedColor");
            repricing();
        })
        texteColorOptions.appendChild(newOption);
    });
    document.querySelector("#customText").addEventListener("input", (event) => {
        customText = event.target.value;
        document.querySelector(".textePerso").textContent = customText;
        repricing();
    })
    document.querySelectorAll('[name="UseText"]').forEach(element => {
        element.addEventListener("change", event => {
            if(event.target.value === "true") {
                textOption = true;
            } else {
                textOption = false;
            }
           // textOption = event.target.value === "true" ? true : false;
           repricing();
        })
    })
    repricing();
})




function repricing() {
    let calculatedPrice = 0;
    optionsTissu.forEach(tissu => {
        if (tissu.couleur == selectedTissu) {
            calculatedPrice += tissu.price;
        }
    })
   // calculatedPrice += optionsTissu.find(tissu => tissu.couleur == selectedTissu).price;

    optionsPoche.forEach(poche => {
        if (poche.couleur == selectedPoche) {
            calculatedPrice += poche.price;
        }
    })
    // calculatedPrice += optionsPoche.find(poche => poche.couleur == selectedPoche).price;
    if (textOption) {
        calculatedPrice += customText.length * prixLettre;
        document.querySelector("#textColorOptions").style.visibility = document.querySelector("#customText").style.visibility = document.querySelector(".textePerso").style.visibility = "visible";
    } else {
        document.querySelector("#textColorOptions").style.visibility = document.querySelector("#customText").style.visibility = document.querySelector(".textePerso").style.visibility = "hidden";
    }

    document.querySelector(".price").textContent = calculatedPrice.toFixed(2) + " €";

}