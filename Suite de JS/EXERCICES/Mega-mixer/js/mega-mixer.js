const ListeApprenants = ["BAALI Ike-David","DETHIER Maxime","DOMERGUE Jonathan","FALCONIER Franck","OZMANOV Alik","PENTEADO Anthony","PETIT Wilfrid","PICHOFF Brandon","TRAVASSOS Carl-Antoine"];
BoutonReinit = document.querySelector("#BoutonInitialiser");
BoutonPlacer = document.querySelector("#BoutonPlacer");
numberSelect = document.querySelector("#numberSelect");

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
    for (let i = 0; i < ListeApprenants.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'flipcard h');
        div.id = "place-"+i;
        div.innerHTML = `
       <div class="front interrogation">
                ?
            </div>
            <div class="back smiley">
                <div class="prenom">XXXX</div>
                <div class="nom">XXXX</div>
            </div>
    `;
        document.getElementById('sizer').appendChild(div);
    }
})


function resizer(dimension) {
    document.getElementById("sizer").style.width = dimension + 'px';
}

function placerApprenants() {
    numberSelect.disabled = true;
    let megaMixer = _.shuffle(ListeApprenants);
    for (let i = 0; i < megaMixer.length; i++) {
        document.getElementsByClassName("prenom")[i].textContent = megaMixer[i].split(" ")[1];
        document.getElementsByClassName("nom")[i].textContent = megaMixer[i].split(" ")[0];
        document.getElementsByClassName("smiley")[i].style.backgroundImage = "url('images/smiley/smiley-" + (Math.floor(Math.random() * 15) + 1) + ".png')";

            setTimeout(() => {
                document.querySelector("#place-" + i).classList.toggle('flip');
            }, 100 * i);
 
    }

    BoutonPlacer.disabled = true;
    setTimeout(function () {
        BoutonReinit.disabled = false;
    }, 1500);
}

function reinitialiser() {
    for (let j = 0 ; j < ListeApprenants.length; j++) {
        console.log(j)
        document.querySelector("#place-" + j).classList.toggle('flip');
    }
    BoutonReinit.disabled = true;
    setTimeout(() => {
        BoutonPlacer.disabled = false;
        numberSelect.disabled = false;
    }, 1500);
}
