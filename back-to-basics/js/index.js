function generateRandomInt(min, max) {
    return Math.floor(Math.random * (max - min + 1)) + min;
}

const array_number = [1, 2, 3];
let max = Math.max(...array_number);
console.log(max, typeof max);

const username = "cool";
let letters = [...username].join('_');
console.log(letters);

let fruits = ["apple","orange","banana"];
let vegetables = ["carrots","cabbage"];
let all = [...fruits,...vegetables,"milk"];
console.log(all)