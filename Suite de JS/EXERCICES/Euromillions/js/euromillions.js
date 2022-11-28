function numbersRandomGenerator(maxNumber, elementNumber) {
    const arrayNumbers = [];
    while (arrayNumbers.length < elementNumber) {
        let newNumber = Math.ceil(Math.random() * maxNumber);
        (arrayNumbers.indexOf(newNumber) == -1) ? arrayNumbers.push(newNumber) : null;
    }
    return arrayNumbers;
}

window.addEventListener('load', () => {
    numbersRandomGenerator(50, 5).concat(numbersRandomGenerator(12, 2)).forEach((uniqueNumber, index) => {
        const numberToAdd = document.createElement("div");
        (index < 5) ? numberToAdd.classList.add("zone", "boule") : numberToAdd.classList.add("zone", "etoile");
        numberToAdd.textContent = uniqueNumber;
        document.getElementById("resultat").append(numberToAdd);
        setTimeout(() => {
            numberToAdd.classList.add("show"); }, 1000 * index + 500);
    })
});

