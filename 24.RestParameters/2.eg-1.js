
function getsum(...numbers){
    let result = 0;
    for(let number of numbers){
        result+=number;
    }
    return result;

}

function getavg(...numbers){
    let result = 0;
    for(let number of numbers){
        result+=number;
    }
    return result/numbers.length;

}

let total = getsum(1,2,3,4,5);

let avg = getavg(1,2,3,4);

console.log(total);
console.log(avg);
