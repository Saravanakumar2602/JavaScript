// (String,Boolean,Number)

let x=window.prompt("Enter the value of x:");
x+=1;
document.getElementById("myh1").textContent=x;   // Here the output is 51 because it takes input as string

//We need to typecast to Number

x=Number(x);
x+=1;
document.getElementById("myh2").textContent=x; 

//Boolean

x=Boolean(x);
document.getElementById("myh3").textContent=x; 


