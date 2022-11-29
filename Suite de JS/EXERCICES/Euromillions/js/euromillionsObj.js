class Numero {
    constructor(nombre,type) {
        this.nombre = nombre;
        this.type = type;
        this.html = document.createElement("div");
        
        
        
        
        

    }
    get getHtml() {
       this.html.textContent = this.nombre;
       this.html.classList.add(this.type, "zone");
        return this.html;
    }

    displayResult() {
        
            this.html.classList.add("show");
       
            return this.html;
        
        
       
    
    
    }







    static numbersRandomGenerator(maxNumber, elementNumber) {
        const arrayNumbers = [];
        while (arrayNumbers.length < elementNumber) {
            let newNumber = Math.ceil(Math.random() * maxNumber);
            (arrayNumbers.indexOf(newNumber) == -1) ? arrayNumbers.push(newNumber) : null;
        }
        return arrayNumbers;
    };
};