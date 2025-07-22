// ... Spread Operator spread things like each elements in arrary and each character in string etc..,

let num = [1,2,3,4,5];

//we can't find the maximum like this Math.max(fruits) so we use spread operator

console.log(Math.max(...num));
console.log(Math.min(...num));

//for strings

let Name = "Saravana";
//let letters = [...Name]  //output:['S', 'a', 'r','a', 'v', 'a','n', 'a']
let letters = [...Name].join('-');
console.log(letters);


//eg

let fruits = ["Apple","Orange","Mango"];
let vegtables = ["Onion","Tomato","Potato"];

let food = [...fruits,...vegtables,"eggs","milk"];

console.log(food);