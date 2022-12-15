import {Chifoumi} from "./chifoumi.js"
window.addEventListener("load", () => {
    const zoneJeux = document.querySelector("#jeu");
    const boutonRejouer = document.querySelector("#boutonRejouer");
    const jouerGauche = new Chifoumi();
    zoneJeux.append(jouerGauche.getHtml);
    const jouerDroite = new Chifoumi();
    zoneJeux.append(jouerDroite.getHtml);

    jouerGauche.getClickZone.addEventListener("click", () => {
        jouerGauche.playZone();
        clickReturn();
    })

    jouerDroite.getClickZone.addEventListener("click", () => {
        jouerDroite.playZone();
        clickReturn();
    })
    
    function clickReturn() {
        let title = Chifoumi.checkGame(jouerGauche, jouerDroite);
        if (title) {
            boutonRejouer.style.display = "initial";
            document.getElementById("title").textContent = title;
        }
    }


    boutonRejouer.addEventListener("click", () => {
        jouerGauche.init();
        jouerDroite.init();
        boutonRejouer.style.display = "none";
        document.getElementById("title").textContent = "Chifoumi";
    })
})





