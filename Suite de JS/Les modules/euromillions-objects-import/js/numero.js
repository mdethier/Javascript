export class Numero {
    constructor(number, type) {
        this.number = number;
        this.type = type;
        this.html = document.createElement("div");
    }

    static numbersRandomGenerator(maxNumber, elementNumber) {
        const arrayNumbers = [];
        while (arrayNumbers.length < elementNumber) {
            let newNumber = Math.ceil(Math.random() * maxNumber);
            (arrayNumbers.indexOf(newNumber) == -1) ? arrayNumbers.push(newNumber) : null;
        }
        return arrayNumbers;
    }

    getHtml() {
        (this.type == "boule") ? this.html.classList.add("zone", "boule") : this.html.classList.add("zone", "etoile");
        this.html.textContent = this.number;
        return this.html;
    }

    setVisible() {
        this.html.style.opacity = 1;
        this.html.style.visibility = "visible";

    }
    
}