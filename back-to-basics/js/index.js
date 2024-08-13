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
print(numbers.filter(isEven));
let ages = [16, 16, 17, 18, 16, 17, 18, 16, 17, 18, 17, 19, 17, 11, 11, 23, 345, 11, 43, 64, 23, 34, 23];
print(ages.filter(isAdult))
let words = ["apple", "vva", "longggggg", "asdasd", "asasd"];
print(words.filter(isLong))

function isAdult(element) {
    return element > 17;
}

function isLong(element) {
    return element.length > 5;
}

function print(u) {
    console.log(u)
}

function isEven(element) {
    return element % 2 === 0
}