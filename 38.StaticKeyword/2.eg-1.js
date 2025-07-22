class Name{
    static count = 0;

    constructor(username){
        this.username = username;
        Name.count++;

    }
}

const n1 = new Name("Saravanakumar");


console.log(n1.username);
console.log(Name.count);

const n2 = new Name("Angel");

console.log(n2.username);
console.log(Name.count);

