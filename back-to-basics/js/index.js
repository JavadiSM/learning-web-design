function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePassword(length, hasLower, hasUpper, hasSpecial, hasNumber) {
    if (length < 1) {
        throw "ERROR: GENERATED PASSWORD LENGTH SHOULD BE GREATER THAN ZERO"
    }
    const lowerCases = "abcdefghijklmnopqrstuvwxyz";
    const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specials = "!@#$%^&*()_=-+";
    const digits = "0123456789";

    let password = "";
    let allowedChars = "";

    allowedChars += hasLower ? lowerCases : "";
    allowedChars += hasUpper ? upperCases : "";
    allowedChars += hasNumber ? digits : "";
    allowedChars += hasSpecial ? specials : "";

    if (allowedChars.length === 0) {
        throw "ERROR: GENERATED PASSWORD SHOULD CONTAIN SOME CHARS";
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = generateRandomInt(1, allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(double);
numbers.forEach(square);
numbers.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}

function display(element) {
    console.log(element);
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2)
}

let fruits = ["apple", "orange", "banana", "tomato"];
fruits.forEach(upperCase);
fruits.forEach(display);
fruits.forEach(lowerCase);
fruits.forEach(cap);
fruits.forEach(display);

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) {
    array[index] = element.toLowerCase();
}

function cap(element, index, array) {
    array[index] = element[0].toUpperCase() + element.slice(1);
}