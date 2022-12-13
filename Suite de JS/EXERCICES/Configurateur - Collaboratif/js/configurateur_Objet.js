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
const tissuOptions = document.getElementById("tissu");
const tissuImage = document.getElementById("optionTissuImage");

const pocheOptions = document.getElementById("optionPoche");
const pocheImage = document.getElementById("optionPocheImage");

const texteColorOptions = document.getElementById("textColorOptions");

const priceBlock = document.querySelector(".price");

let nbLettre = 0;

optionsTissu.forEach(tissu => {
    const objetTissu = new OptionTissu(tissu.couleur, tissu.code, tissu.image, tissu.price);
    tissuOptions.append(objetTissu.getHtml)
    if (tissu.couleur == selectedTissu) {
        selectedTissu = objetTissu;
    }
})


optionsPoche.forEach(poche => {
    const objetPoche = new OptionPoche(poche.couleur, poche.code, poche.image, poche.price);
    pocheOptions.append(objetPoche.getHtml)
    if (poche.couleur == selectedPoche) {
        selectedPoche = objetPoche;
    }
})

couleurText.forEach(texte => {
    const objetTexte = new OptionTexte(texte.couleur, texte.code);
    texteColorOptions.append(objetTexte.getHtml)

    document.querySelectorAll('[name="UseText"]').forEach(element => {
        element.addEventListener("change", event => {
            if (event.target.value === "true") {
                textOption = true;
                document.querySelector("#textColorOptions").style.visibility = document.querySelector("#customText").style.visibility = document.querySelector(".textePerso").style.visibility = "visible";

            } else {
                textOption = false;
                document.querySelector("#textColorOptions").style.visibility = document.querySelector("#customText").style.visibility = document.querySelector(".textePerso").style.visibility = "hidden";
            }
            repricing();

        })
    })
    document.querySelector("#customText").addEventListener("input", (event) => {
        customText = event.target.value;
        nbLettre = customText.length;
        document.querySelector(".textePerso").textContent = customText;

        repricing();
    })
    repricing();
})
function repricing() {
    let price = selectedTissu.price + selectedPoche.price;
    if (textOption) {
        price += nbLettre * prixLettre;
    }
    console.log(price.toFixed(2));
    priceBlock.textContent = price.toFixed(2) + " €";
}