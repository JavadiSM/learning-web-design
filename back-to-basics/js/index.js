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

let numbers = [1, 2, 3, 4, 5, 23, 1, 7, 34, 12, 11, 1, 3, 7, 8, 5, 6];
console.log(numbers.map((element) => {
    return Math.pow(element, 3);
}));
console.log(numbers.map((element) => {
    return Math.pow(element, 2);
}));
console.log(numbers.filter((element) => {
    return element % 2 === 0;
}));

setTimeout(() => console.log("hello"), 3000);
const hello = (name) => console.log(`hello ${name}`);