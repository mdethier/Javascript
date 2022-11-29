let typeNumber = "";
const resultatFinal = document.getElementById("resultat");


window.addEventListener('load', () => {

    Numero.numbersRandomGenerator(50, 5).concat(Numero.numbersRandomGenerator(12, 2)).forEach((uniqueNumber, index) => {
        
        if (index < 5) {
            typeNumber = "boule"
        }
        else {
            typeNumber = "etoile"
        };
        const result = new Numero(uniqueNumber,typeNumber);
        resultatFinal.append(result.getHtml);

        setTimeout(() => {
        result.displayResult();
        }, 1000 * index);
        
     })
});
