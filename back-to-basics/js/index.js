function Person(name, age, job, isEmployed) {
    this.name = name,
        this.age = age,
        this.job = job,
        this.isEmployed = isEmployed,
        this.hire = function () {
            this.isEmployed = true;
        }

}

let david = new Person("David", 23, "unemployed", false);
let ali = new Person("Ali", 19, "driver", true);
console.log(david);
console.log(ali);
david.hire()
console.log(`david is now employed:${david.isEmployed}`);

function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
