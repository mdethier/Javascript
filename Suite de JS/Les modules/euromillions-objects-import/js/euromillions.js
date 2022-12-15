window.addEventListener('load', () => {
const resultat = document.getElementById("resultat");
const newNumberArray = [];
    Numero.numbersRandomGenerator(50, 5).concat(Numero.numbersRandomGenerator(12, 2)).forEach((uniqueNumber, index) => {
        if (index < 5) {
            const newNum = new Numero(uniqueNumber, "boule");
            newNumberArray.push(newNum);
        } else {
            const newEtoile = new Numero(uniqueNumber, "etoile");
            newNumberArray.push(newEtoile);
        }
    });
    newNumberArray.forEach((numberObject,index) => {
        resultat.append(numberObject.getHtml());
        setTimeout(() => {
                   numberObject.setVisible();
        }, 1000*index + 1000)

    })
});

