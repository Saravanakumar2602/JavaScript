// .map() is similar to foreach but it return the elements in new array

const num = [1,2,3,4,5];

const squares = num.map(square);

function square(element){
    return Math.pow(element,2);
}

console.log(num);
console.log(squares);