function Car(make,model,year){
    this.make = make,
    this.model = model,
    this.year = year,
    this.drive = function(){console.log(`you are driving ${this.model}`)}
}

const car1 = new Car("Ford","Mustang","2010");

const car2 = new Car("Toyato","Supra","2016")

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);