let grades = [99,75,86,90,97,79,60,81];

let maximum = grades.reduce(Max);

function Max(accumulator,element){
    return Math.max(accumulator,element);  // return maximum element to accumulator and checks to last element of an array
}

console.log(maximum);