let fruits = ["apple","orange","mango"];

console.log(fruits);
console.log(fruits[1]);

//To add an element at the end using push()

fruits.push("pineapple");
console.log(fruits);

//To remove the last element using pop()

fruits.pop();
console.log(fruits);

//To add the elament at the begining using unshift()

fruits.unshift("pineapple");
console.log(fruits);

//To remove the first element using shift()

fruits.shift();
console.log(fruits);

//to get the length using length property

console.log(fruits.length);

//to find the index of a particular element using index() and it return -1 if the element is not found

console.log(fruits.indexOf("apple"));

//To sort the array using sort() method

fruits.sort();

//To sort the array in reverse order using reverse() method

fruits.sort().reverse();

//Using for loop we can access the elements

for(let i=0;i<3;i++){
    console.log(fruits[i]);
}