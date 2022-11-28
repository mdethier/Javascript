
let joueeGauche = document.getElementById("image-gauche");
let joueeDroite = document.getElementById("image-droite");
let figures = ["pierre", "feuille", "ciseau"];

let aleatoireGauche;
let aleatoireDroite;
let titre = document.getElementById("titre");
let gauche = document.getElementById("gauche");
let droite = document.getElementById("droite");
let rejouer = document.getElementById("boutonRejouer");


rejouer.style.display = "none";
 

joueeGauche.addEventListener("click", (event) => {
    let aleatoire = Math.floor(Math.random() * figures.length);
    joueeGauche.style.backgroundImage = "url(./images-pfc/" + figures[aleatoire] + ".jpg)";
    joueeGauche.style.pointerEvents = "none";
   aleatoireGauche = figures[aleatoire];
   verifEgalite();
   


});
joueeDroite.addEventListener("click", (event) => {
    let aleatoire = Math.floor(Math.random() * figures.length);
    joueeDroite.style.backgroundImage = "url(./images-pfc/" + figures[aleatoire] + ".jpg)";
    joueeDroite.style.pointerEvents = "none";
    aleatoireDroite = figures[aleatoire];
    verifEgalite();
    

   
    
});

function verifEgalite () {
    if (aleatoireGauche == aleatoireDroite) {
        titre.textContent = "Egalité";
        gauche.style.backgroundColor = "purple";
        droite.style.backgroundColor = "purple";
        rejouer.style.display = 'initial';

        
    } else if (aleatoireGauche == "pierre" && aleatoireDroite == "ciseau") {
        
        titre.textContent = "Les pierres ont gagné";
        gauche.style.backgroundColor = "green";
        droite.style.backgroundColor = "red";
        rejouer.style.display = 'initial';

    } else if (aleatoireGauche == "ciseau" && aleatoireDroite == "feuille") {
        
        titre.textContent = "Les ciseaux ont gagné";
        gauche.style.backgroundColor = "green";
        droite.style.backgroundColor = "red";
        rejouer.style.display = 'initial';
    }
    else if (aleatoireGauche == "feuille" && aleatoireDroite == "pierre") {
        
        titre.textContent = "Les feuilles ont gagné";
        gauche.style.backgroundColor = "green";
        droite.style.backgroundColor = "red";
        rejouer.style.display = 'initial';
    }
    else if (aleatoireDroite == "pierre" && aleatoireGauche == "ciseau") {
        
        titre.textContent = "Les pierres ont gagné";
        droite.style.backgroundColor = "green";
        gauche.style.backgroundColor = "red";
        rejouer.style.display = 'initial';

    } else if (aleatoireDroite == "ciseau" && aleatoireGauche == "feuille") {
        
        titre.textContent = "Les ciseaux ont gagné";
        droite.style.backgroundColor = "green";
        gauche.style.backgroundColor = "red";
        rejouer.style.display = 'initial';

     } else if (aleatoireDroite == "feuille" && aleatoireGauche == "pierre") {
        
            titre.textContent = "Les feuilles ont gagné";
            droite.style.backgroundColor = "green";
            gauche.style.backgroundColor = "red";
            rejouer.style.display = 'initial';
        }
        
    };
    rejouer.addEventListener('click', (event) => {
        initialisation();

    });
    function initialisation() {
        joueeGauche.style.backgroundImage = "url(./images-pfc/depart.jpg)";
        joueeDroite.style.backgroundImage = "url(./images-pfc/depart.jpg)";
        rejouer.style.display = "none";
        titre.textContent = "Chifoumi";
        gauche.style.backgroundColor = "white";
        droite.style.backgroundColor = "white";
        joueeGauche.style.pointerEvents = "initial";
        joueeDroite.style.pointerEvents = "initial";
        aleatoireGauche = "";
        aleatoireDroite = "";
        

    }
    
