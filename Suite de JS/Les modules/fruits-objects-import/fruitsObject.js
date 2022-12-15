import { data,fruits,imageTochange } from "./data.js";
export class Fruit {
    constructor(name, image) {
        this.name = name;
        this.image = image;
        this.html = document.createElement("div");
        this.html.addEventListener('mouseover', (event) => {
            imageTochange.style.backgroundImage = `url(${this.image})`;
        })
        this.html.addEventListener('mouseout', (event) => {
            imageTochange.style.backgroundImage = `url(${data.imageSelected}`;
        });
        this.html.addEventListener('click', (event) => {
            data.imageSelected = this.image;
            imageTochange.style.backgroundImage = `url(${data.imageSelected}`;
            const allFruits = document.querySelectorAll(".boutonFruits");
            allFruits.forEach(fruitDiv => {
                fruitDiv.style.backgroundColor = "";
            })
            this.html.style.backgroundColor = "red";
        });
    }

    get getHtml() {
        this.html.classList.add("boutonFruits");
        this.html.textContent = this.name;
        this.html.style.height = 100 / fruits.length+"vh";
        return this.html;
    }
}