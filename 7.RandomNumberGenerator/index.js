let random ;
let max=6;
let min =1;

document.getElementById("mybutton").onclick = function(){
    random = Math.floor(Math.random()*max)+min;
    document.getElementById("mylabel").textContent=random;
}