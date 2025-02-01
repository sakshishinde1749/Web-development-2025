const animals = [
  { name: "cat",
    sound: "meow", 
    feedingRule: {
        food: 2,
        water: 4
    } 
  },
  { name: "dog", sound: "woof" }
];

const [cat, dog] = animals;

const {name: catName, sound: catSound, feedingRule: {catFood, catWater}} = cat;
const {name: dogName, sound: dogSound} = dog;

console.log(catSound);
console.log(dogName);