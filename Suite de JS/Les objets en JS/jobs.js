const patate = new Legume("Patates normandes", 1.90);
const carotte = new Legume("Carottes landaises", 2.50);
const poireau = new Legume("Poireau du Nord", 2.70);

document.querySelector("body").append(patate.getHtml, carotte.getHtml, poireau.getHtml);