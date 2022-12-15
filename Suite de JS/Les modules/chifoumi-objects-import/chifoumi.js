export class Chifoumi {
    constructor() {
        this.resultat = "aucun";
        this.chifoumiOptions = ["pierre", "ciseau", "feuille"];
        this.html = document.createElement("section");
    }

    get getHtml() {
        this.html.classList.add("zoneJeu");
        this.html.innerHTML = `<div class="image-resultat"></div><div class="resultat-texte"></div>`
        return this.html;
    }
    get getClickZone() {
        return this.html;
    }

    get getResultat() {
        return this.resultat;
    }

    set setTexte(texte) {
        this.html.querySelector(".resultat-texte").textContent = texte;
    }

    set setCouleur(couleur) {
        this.html.style.backgroundColor = couleur;
    }

    init() {
        this.resultat = "aucun";
        this.html.querySelector(".image-resultat").style.backgroundImage = "url(images-pfc/depart.jpg)";
        this.html.querySelector(".resultat-texte").textContent = "";
        this.html.style.pointerEvents = 'initial';
        this.html.style.backgroundColor = "gray";
    }

    playZone() {
        this.resultat = this.chifoumi();
        this.html.querySelector(".image-resultat").style.backgroundImage = "url(images-pfc/" + this.resultat + ".jpg)";
        this.html.querySelector(".resultat-texte").textContent = this.resultat;
        this.html.style.pointerEvents = 'none';
        this.html.style.backgroundColor = "black";

    }

    chifoumi() {
        return this.chifoumiOptions[Math.floor(Math.random() * this.chifoumiOptions.length)];
    }

    static checkGame(jouerGauche, jouerDroite) {
        if (jouerGauche.getResultat == jouerDroite.getResultat) {
            jouerGauche.setTexte = "Egalité";
            jouerDroite.setTexte = "Egalité";
            return "Egalité, ca craint !!";
        } else if (jouerGauche.getResultat === 'ciseau' && jouerDroite.getResultat === 'pierre') {
            jouerGauche.setTexte = "Perdu";
            jouerDroite.setTexte = "Gagné";
            jouerGauche.setCouleur = "red";
            jouerDroite.setCouleur = "green";
            return "La pierre casse le ciseau";
        }
        else if (jouerGauche.getResultat === 'pierre' && jouerDroite.getResultat === 'ciseau') {
            jouerGauche.setTexte = "Gagné";
            jouerDroite.setTexte = "Perdu";
            jouerGauche.setCouleur = "green";
            jouerDroite.setCouleur = "red";
            return "La pierre casse le ciseau";
        }
        else if (jouerGauche.getResultat === 'feuille' && jouerDroite.getResultat === 'ciseau') {
            jouerGauche.setTexte = "Perdu";
            jouerDroite.setTexte = "Gagné";
            jouerGauche.setCouleur = "red";
            jouerDroite.setCouleur = "green";
            return "Le ciseau coupe la feuille";
        }
        else if (jouerGauche.getResultat === 'ciseau' && jouerDroite.getResultat === 'feuille') {
            jouerGauche.setTexte = "Gagné";
            jouerDroite.setTexte = "Perdu";
            jouerGauche.setCouleur = "green";
            jouerDroite.setCouleur = "red";
            return "Le ciseau coupe la feuille";
        }
        else if (jouerGauche.getResultat === 'feuille' && jouerDroite.getResultat === 'pierre') {
            jouerGauche.setTexte = "Gagné";
            jouerDroite.setTexte = "Perdu";
            jouerGauche.setCouleur = "green";
            jouerDroite.setCouleur = "red";
            return "La feuille enveloppe la pierre";
        }
        else if (jouerGauche.getResultat === 'pierre' && jouerDroite.getResultat === 'feuille') {
            jouerGauche.setTexte = "Perdu";
            jouerDroite.setTexte = "Gagné";
            jouerGauche.setCouleur = "red";
            jouerDroite.setCouleur = "green";
            return "La feuille enveloppe la pierre";
        }
        return false;
    }
}