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
let squares = numbers.map(square)
console.log(squares)
const dates = ["2024-8-13", "2024-8-14", "2024-8-15"];
const  formattedDates = dates.map(formatDate);
console.log(formattedDates)
function formatDate(element) {
    const parts = element.split("-");
    return parts[1] + "/" + parts[2] + "/" + parts[0];
}


function display(element) {
    console.log(element);
}

function square(element) {
    return Math.pow(element, 2)
}