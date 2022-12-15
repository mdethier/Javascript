import {textLength} from "./toolsFunctions.js"
export class Velo {
    constructor(marque) {
        this.marque = marque;
    }

    get getMarque() {
        return this.marque;
    }

    get getMarqueLength() {
        return textLength(this.marque);
    }
}

class Car {
    constructor(marque) {
        this.marque = marque;
    }

    get getMarque() {
        return this.marque;
    }

    get getMarqueLength() {
        return textLength(this.marque);
    }
}

export { Car as Voiture };