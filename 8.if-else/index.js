let num;


document.getElementById("mybutton").onclick=function(){
    num = document.getElementById("ageinput").value;
    if(num>18){
    document.getElementById("mylabel2").textContent = "You Can Vote";
}else{
    document.getElementById("mylabel2").textContent = "You Can't Vote";
}

}

