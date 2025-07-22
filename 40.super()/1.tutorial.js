// super = the parent

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hi, I a-m ${this.name} and I am ${this.age} years old.`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age); 
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`${this.name} runs at ${this.runSpeed} km/h.`);
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age); 
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`${this.name} swims at ${this.swimSpeed} km/h.`);
  }
}

const rabbit = new Rabbit("Saravana", 2, 25);
rabbit.sayHello();
rabbit.run();

const fish = new Fish("Angel", 1, 10);
fish.sayHello();
fish.swim();
