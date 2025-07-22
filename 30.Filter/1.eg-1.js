// .filter() = Creates a new array by filtering out the elements

let numbers = [1,2,3,4,5,6,7,8];

let evenNumbers = numbers.filter(iseven);

function iseven(element){
    return element % 2 === 0;
}

console.log(numbers)
console.log(evenNumbers);