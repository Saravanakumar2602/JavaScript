//element , index ,array are provided

let fruits = ["apple","orange","mango","grapes"];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element , index ,array){  //element , index ,array are provided
    array[index]=element.toUpperCase();
}


function display(element){
    console.log(element);
}