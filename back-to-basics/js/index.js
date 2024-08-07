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

sum(display, 1, 2);
sum(displayDOM, 1, 2);

function sum(callback, x, y) {
    let result = x + y;
    callback(result , document.getElementById("H"));
}

function display(toBeDisplayed) {
    console.log(toBeDisplayed)
}

function displayDOM(toBeDisplayed, element) {
    element.textContent = toBeDisplayed;
}
