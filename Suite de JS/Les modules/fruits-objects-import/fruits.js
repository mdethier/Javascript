import { Fruit } from "./fruitsObject.js";
import { data,fruits,imageTochange } from "./data.js";
export const fruitsHtml = document.querySelector("#fruits");

fruits.forEach(fruit => {
   const fruitObj = new Fruit(fruit.name, fruit.image);
    fruitsHtml.appendChild(fruitObj.getHtml);
});