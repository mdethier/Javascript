import {bulletTexteArray, variables, repricing } from "./variables.js";
export class BulletTexte { 
    constructor(couleur, code) {
        this.couleur = couleur;
        this.code = code;
        this.html = document.createElement("div");
        this.html.addEventListener("click", event => {
            variables.selectedTextColor = this.couleur;
            document.querySelector(".textePerso").style.color = this.code;
            bulletTexteArray.forEach(texteColor => {
                texteColor.unSelected();
                if (texteColor.getCouleur == variables.selectedTextColor) {
                    texteColor.selected();
                }
            })
            repricing();
        })
    }

    selected() {
        this.html.classList.add("selectedColor");
    }
    unSelected() {
        this.html.classList.remove("selectedColor");
    }

    get getHtml() {
        this.html.classList.add("ColorRound");
        this.html.dataset.couleur = this.couleur;
        this.html.style.backgroundColor = this.code;
        return this.html;
    }
    get getCouleur() {
        return this.couleur;
    }

}