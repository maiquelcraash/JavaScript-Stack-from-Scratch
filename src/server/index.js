/**
 * Created by maiquel on 03/02/17.
 */

const Color = require('color');									//require the color library (added by yarn). https://github.com/qix-/color
const str = "ES6";

const Dog = require('../shared/dog');									//import the Dog class (old mode)
import NewDog from '../shared/newDog';									//import the newDog class (ES6 mode)


console.log("Hello World!");
console.log(`Hello $(str)`);

const redHexa = Color({r: 255, g: 0, b: 0}).hex();
console.log(redHexa);

const toby = new Dog("Toby");
console.log(toby.bark());

const toto = new NewDog("Totó");
console.log(toto.bark());
