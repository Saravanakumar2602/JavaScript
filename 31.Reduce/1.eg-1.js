// .reduce() = reduce the element of an array to a single value

// it has accumulator and element (next element)


const prices = [5,7,3,39,500,20,48];

const total = prices.reduce(sum);

function sum(accumulator,element){
    return accumulator+element;
}

console.log(`$${total}`);