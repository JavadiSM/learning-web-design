class Person {

    constructor(name, age, job, isEmployed) {
        this.name = name,
            this.age = age,
            this.job = job,
            this.isEmployed = isEmployed
    }

    show() {
        console.log(`name = ${this.name}\nage = ${this.age}\njob = ${this.job}`)
    }
}

let david = new Person("David", 23, "unemployed", false);
let ali = new Person("Ali", 19, "driver", true);
console.log(david);
console.log(ali);
david.show();

function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
