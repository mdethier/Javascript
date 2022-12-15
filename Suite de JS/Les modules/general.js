import {aNewName, variableDeux, constanteUn} from './variables.js'
import sayHello from './functions.js'
import {Velo, Voiture} from './objects.js'

console.log(aNewName);

console.log(sayHello());


const Cannondale = new Velo("MBK");

console.log(Cannondale.getMarque);

console.log(Cannondale.getMarqueLength);

const Peugeot = new Voiture("Peugeot");

console.log(Peugeot.getMarque);

console.log(Peugeot.getMarqueLength);

// variableDeux = "un autre texte";