// function expessions - a way to define function as values or variables



//Lets take example of reduce method
let grades = [99,75,86,90,97,79,60,81];

//let maximum = grades.reduce(Max);

//function Max(accumulator,element){
//    return Math.max(accumulator,element);       //this is normal function definition
//}
//console.log(maximum);


let maximum = grades.reduce(function(accumulator,element){
    return Math.max(accumulator,element); 
});


console.log(maximum);