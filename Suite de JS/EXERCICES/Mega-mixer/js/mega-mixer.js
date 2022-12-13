const ListeApprenants = ["BAALI Ike-David", "DETHIER Maxime", "DOMERGUE Jonathan", "FALCONIER Franck", "OZMANOV Alik", "PENTEADO Anthony", "PETIT Wilfrid", "PICHOFF Brandon", "TRAVASSOS Carl-Antoine"];
BoutonReinit = document.querySelector("#BoutonInitialiser");
BoutonPlacer = document.querySelector("#BoutonPlacer");
numberSelect = document.querySelector("#numberSelect");
const NewAppObjs = [];

BoutonReinit.addEventListener('click', (event) => {
    reinitialiser();
});

BoutonPlacer.addEventListener('click', (event) => {
    placerApprenants();
});


numberSelect.addEventListener('change', (event) => {
    resizer(event.target.value);
});

window.addEventListener("load", () => {
    ListeApprenants.forEach((personne) => {
        const carteApp = new Carte(personne.split(" ")[1], personne.split(" ")[0]);
        NewAppObjs.push(carteApp);

        document.getElementById('sizer').appendChild(carteApp.getHtml);
    }
    );


}
)


function resizer(dimension) {
    document.getElementById("sizer").style.width = dimension + 'px';
}

function placerApprenants() {
    numberSelect.disabled = true;
    let megaMixer = _.shuffle(ListeApprenants);
    NewAppObjs.forEach((carte , index) => {
        carte.setNom = megaMixer[index].split(" ")[1];
        carte.setPrenom = megaMixer[index].split(" ")[0];

    }
    )
    document.getElementsByClassName("prenom")[i].textContent = megaMixer[i].split(" ")[1];
    document.getElementsByClassName("nom")[i].textContent = megaMixer[i];
    document.getElementsByClassName("smiley")[i].style.backgroundImage = "url('images/smiley/smiley-" + (Math.floor(Math.random() * 15) + 1) + ".png')";


    BoutonPlacer.disabled = true;
setTimeout(function () {
    BoutonReinit.disabled = false;
}, 1500);
    setTimeout(() => {
        document.querySelector("#place-" + i).classList.toggle('flip');
    }, 100 * i);

}



function reinitialiser() {
    for (let j = 0; j < ListeApprenants.length; j++) {
        console.log(j)
        document.querySelector("#place-" + j).classList.toggle('flip');
    }
    BoutonReinit.disabled = true;
    setTimeout(() => {
        BoutonPlacer.disabled = false;
        numberSelect.disabled = false;
    }, 1500);
}
