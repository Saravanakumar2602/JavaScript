class mathutil{
    static pi = 3.14;


    static circum(radius){
        return 2*mathutil.pi*radius;
    }

    static area(radius){
        return this.pi*radius*radius;
    }
}

console.log(mathutil.pi);
console.log(mathutil.circum(5).toFixed(2));
console.log(mathutil.area(10).toFixed(2));




//static variable or methods cannot access by object
