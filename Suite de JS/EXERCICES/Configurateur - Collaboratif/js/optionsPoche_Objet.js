class OptionPoche {
    constructor(couleur, code, image, price) {
        this.couleur = couleur;
        this.code = code;
        this.image = image;
        this.price = price;
        this.html = document.createElement("div");
        this.html.addEventListener("click", () => {
            pocheImage.src = this.image;
            document.querySelector("#displayPoche").textContent = this.couleur;
            selectedPoche = this;
            document.querySelectorAll("#optionPoche > div").forEach((element) => {
                element.classList.remove("selectedColor");

            })
            this.html.classList.add("selectedColor");

            repricing();

        }

        )
    }
    get getHtml() {
        this.html.classList.add("ColorRound");
        if (this.couleur == selectedPoche) {
            this.html.classList.add("selectedColor");

        }
        this.html.style.backgroundColor = this.code;
        return this.html;
    }
};