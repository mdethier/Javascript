class Fruits {
    constructor(fruit, image) {
        this.fruit = fruit;
        this.image = image;
        this.html = document.createElement("div");

        this.html.addEventListener('mouseover', (event) => {
            imageTochange.style.backgroundImage = `url(${this.image})`;
        })
        this.html.addEventListener('mouseout', (event) => {
            imageTochange.style.backgroundImage = `url(${imageSelected}`;
        });
        this.html.addEventListener('click', (event) => {
            imageSelected = this.image;
            imageTochange.style.backgroundImage = `url(${imageSelected}`;
            const allFruits = document.querySelectorAll(".boutonFruits");
            allFruits.forEach(fruitDiv => {
                fruitDiv.style.backgroundColor = "";
            })
            this.html.style.backgroundColor = "red";
        });
        fruitsHtml.append(this.html);
    }


    get getHtml() {
        this.html.textContent = this.fruit;
        this.html.classList.add("boutonFruits");
        this.html.style.height = 100 / fruits.length + "vh";
        return this.html;
    }
}