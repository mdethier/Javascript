// CODE FOURNI // 
// const uniqueNumbers = [];
// while (uniqueNumbers.length < 5) {
//     let newNumber = Math.ceil(Math.random() * 50);
//     if (uniqueNumbers.indexOf(newNumber) == -1) {
//         uniqueNumbers.push(newNumber);
//     }
// }
// console.log(uniqueNumbers);

// ----------------- //

// CODE PERSO // 


 window.addEventListener("load", (event) => {
    

const uniqueNumbers = [];
while (uniqueNumbers.length < 5) {
    let newNumber = Math.ceil(Math.random() * 50);
    if (uniqueNumbers.indexOf(newNumber) == -1) {
        uniqueNumbers.push(newNumber);
    }
}
console.log(uniqueNumbers);

const numbersStars = [];
while(numbersStars.length < 2) {
    let starNumber = Math.ceil(Math.random() * 12);
    if (numbersStars.indexOf(starNumber) == -1) {
        numbersStars.push(starNumber);
    }
}

// CREATION DES DIV HTML EN JS //

const containerEuro = document.getElementById("container");

uniqueNumbers.forEach((circle, index) => {
    const round = document.createElement("div");
    round.classList.add("flex", "rond");
    round.textContent = circle;
    setTimeout(() => {
        round.style.visibility = "visible";
    }, 1000*index);
    containerEuro.append(round);
});
console.log(numbersStars)

numbersStars.forEach((star, index) => {
    const starContainer = document.createElement("div");
    starContainer.classList.add("flex", "etoile");
    starContainer.textContent = star;
    containerEuro.append(starContainer);
    setTimeout(() => {
        starContainer.style.visibility = "visible";
    }, 5000+ 1000*index)
})

 });