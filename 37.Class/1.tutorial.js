class Product{


    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    display(){

        console.log(`Product : ${this.name} \nPrice : ${this.price}`)

    }

}

const product1 = new Product("Joystick",2000);
product1.display();

const product2 = new Product("Mouse",1000);
product2.display();