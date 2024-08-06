function generateRandomInt(min, max) {
    return Math.floor(Math.random * (max - min + 1)) + min;
}

function printFoods(...foods) {
    console.log(foods);
}

function createArray(...array) {
    return array
}

function sum(...array) {
    let sum = 0;
    for (let element of array) {
        sum += element;
    }
    return sum;
}

function average(...array) {
    return sum(...array) / array.length;
}

function combineStrings(...array) {
    return array.join("<->")
}

const food1 = "a";
const food2 = "b";
const food3 = "c";
const food4 = "d";
printFoods(food1, food2, food3, food4);
console.log(createArray(food1, food2, food3, food4));
console.log(sum(1, 3, 53, 2));
console.log(average(1, 3, 53, 2));
console.log(combineStrings("aa","bb","aa"));