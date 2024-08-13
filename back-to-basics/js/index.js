const person1 = {
    firstName: "name",
    lastName: "lastname",
    age: 30,
    isLoggedIn: false,
    sayHello: function () {
        console.log(`hello I am ${this.firstName} and my age is ${this.age}`);
    },
    sayGoodBye: (name) => {
        console.log(`bye dear ${name}`);
    },
    test: () => { // this should not work, arrow functions
        console.log(`hello I am ${this.firstName} and my age is ${this.age}`);
    }
}
const person2 = {
    firstName: "another name",
    lastName: "another lastname",
    age: 24,
    isLoggedIn: false,
    sayHello: function () {
        console.log(`hello I am ${this.firstName} and my age is ${this.age}`);
    }
}
console.log(this);
person1.test(); // did as expected
person1.sayHello();
person1.sayGoodBye("david");
person2.sayHello();

function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
