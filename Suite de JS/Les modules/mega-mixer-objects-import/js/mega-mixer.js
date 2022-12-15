const ListeApprenants = ["BAALI Ike-David","DETHIER Maxime","DOMERGUE Jonathan","FALCONIER Franck","OZMANOV Alik","PENTEADO Anthony","PETIT Wilfrid","PICHOFF Brandon","TRAVASSOS Carl-Antoine"];


const personnesTab = [];
ListeApprenants.forEach(personne => {
    const newCarte = new Carte(personne.split(" ")[0],personne.split(" ")[1]);
    personnesTab.push(newCarte);
})



const BoutonReinit = document.querySelector("#BoutonInitialiser");
const BoutonPlacer = document.querySelector("#BoutonPlacer");
const numberSelect = document.querySelector("#numberSelect");

BoutonReinit.addEventListener('click', (event) => {
    reinitialiser();
});

BoutonPlacer.addEventListener('click', (event) => {
    placerApprenants();
});


numberSelect.addEventListener('change', (event) => {
    resizer(event.target.value);
});

window.addEventListener("load",() => {
    personnesTab.forEach(carte => {
        document.getElementById('sizer').appendChild(carte.getHtml);
    })
        
  
})


function resizer(dimension) {
    document.getElementById("sizer").style.width = dimension + 'px';
}

function placerApprenants() {
 const mixTab = Carte.melangeur(ListeApprenants); 
    personnesTab.forEach((carte, index) => {
        carte.flipBack();
        carte.setNom = mixTab[index].split(" ")[1];
        carte.setPrenom = mixTab[index].split(" ")[0];
    })
    BoutonReinit.disabled = false;
        BoutonPlacer.disabled = true;
        numberSelect.disabled = true;
}

function reinitialiser() {
    personnesTab.forEach((carte) => {
        carte.flipFront();
    })
    BoutonReinit.disabled = true;
    setTimeout(() => {
        BoutonPlacer.disabled = false;
        numberSelect.disabled = false;
    }, 1500);
}
