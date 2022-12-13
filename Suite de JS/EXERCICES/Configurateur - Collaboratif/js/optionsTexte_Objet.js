class OptionTexte {
    constructor (couleur, code) {
        this.couleur = couleur;
        this.code = code;
        this.html = document.createElement("div");
        this.html.addEventListener("click", () => {
            selectedTextColor = this;
            document.querySelector(".textePerso").style.color = this.code;
            document.querySelectorAll("#textColorOptions > div").forEach((element) => {
                element.classList.remove("selectedColor");
            })
            this.html.classList.add("selectedColor");
        });
    }
    get getHtml() {
        this.html.classList.add("ColorRound");
        if (this.couleur == selectedTextColor) {
            this.html.classList.add("selectedColor");

        }
        this.html.style.backgroundColor = this.code;
        return this.html;
    }
}