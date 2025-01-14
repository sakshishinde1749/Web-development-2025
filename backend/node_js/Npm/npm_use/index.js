import generateName from 'sillyname';
import {randomSuperhero} from 'superheroes';

var sillyname = generateName();
var superhero = randomSuperhero();

console.log(`My name is ${sillyname}.`);
console.log(`I am ${superhero}.`)