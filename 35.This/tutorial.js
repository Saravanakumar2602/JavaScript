const person1 = {
    Name: "Saravana",
    Class: "BTech IT",
    Age: 18,
    Greetings: function() {
        console.log(`Hello ${this.Name}`);
    }
}

const person2 = {
    Name: "Angel",
    Class: "BE CCE",
    Age: 18,
    Greetings: () => {
        console.log(`Hello ${this.Name}`);  // this keyword doesn't work with arrow function
    }
}

console.log(person1.Name);
console.log(person1.Class);
console.log(person1.Age);
person1.Greetings();

console.log(person2.Name);
console.log(person2.Class);
console.log(person2.Age);
person2.Greetings();

