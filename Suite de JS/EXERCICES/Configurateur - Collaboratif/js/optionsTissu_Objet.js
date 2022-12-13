class OptionTissu {
    constructor(couleur, code, image, price) {
        this.couleur = couleur;
        this.code = code;
        this.image = image;
        this.price = price;
        this.html = document.createElement("div");
        this.html.addEventListener("click", () => {
            tissuImage.src = this.image;
            document.querySelector("#displayTissu").textContent = this.couleur;
            selectedTissu = this;
            
            document.querySelectorAll("#tissu > div").forEach((element) => {
                element.classList.remove("selectedColor");

            })
            this.html.classList.add("selectedColor");

            repricing();
        }
        

        )
    }
    get getHtml() {
        this.html.classList.add("ColorRound");
        if (this.couleur == selectedTissu) {
            this.html.classList.add("selectedColor");

        }
        this.html.style.backgroundColor = this.code;
        return this.html;
    }
};