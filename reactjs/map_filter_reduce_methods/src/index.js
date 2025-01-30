import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumber = numbers.map(function (num) {
    return (num * 2);
});
console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.
const filteredNumbers = numbers.filter(function (num) {
    return (num > 10);
});
console.log(filteredNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
const newNum = numbers.reduce(function (accumulator, currentNumber) {
    console.log("accumulator: " + accumulator);
    console.log("currentNumber: " + currentNumber);
    return (accumulator + currentNumber);
});

//Find - find the first item that matches from an array.
const findNum = numbers.find(function (num) {
    return (num > 50);
});
console.log(findNum);

//FindIndex - find the index of the first item that matches. 50
const findNumIndex = numbers.findIndex(function (num) {
    return (num > 50);
});
console.log(findNumIndex);


const newEmojipedia = emojipedia.map(function (emojiTerm) {
    return emojiTerm.meaning.substring(100)
});
console.log(newEmojipedia);