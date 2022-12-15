class BulletPoche { 
    constructor(couleur, code, image, price) {
        this.couleur = couleur;
        this.code = code;
        this.image = image;
        this.price = price;
        this.html = document.createElement("div");
        this.html.addEventListener("click", event => {
            variables.selectedPoche = this.couleur;
            bulletPocheArray.forEach(poche => {
                poche.unSelected();
                if (poche.getCouleur == variables.selectedPoche) {
                    poche.selected();
                }
            })
            document.getElementById("optionPocheImage").src = this.image;
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
    get getPrice() {
        return this.price;
    }

}