const  toce = document.getElementById("toce");
const  tofe = document.getElementById("tofe");
const p1 = document.getElementById("p1");



function convert(){

    let value =  document.getElementById("textbox").value;
    value = Number(value);

    if(toce.checked){

        let result = (value - 32) * 5/9;
        p1.textContent = `${result.toFixed(2)} °C`;

    }else if(tofe.checked){

        let result = (value * 9/5) + 32;
        p1.textContent = `${result.toFixed(2)} °F`;

    }else{
        p1.textContent = "Click Unit";

    }

}