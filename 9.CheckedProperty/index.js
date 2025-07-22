const sub = document.getElementById("mych");
const visa = document.getElementById("visa");
const master = document.getElementById("master");
const rupay = document.getElementById("rupay");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");



document.getElementById("mysubmit").onclick = function(){
    
    if(sub.checked){
        p1.textContent="You are Subscribed!";
    }else{
        p1.textContent="You are not Subscribed";
    }

    if(visa.checked){
        p2.textContent="You choose Visa card";
    }else if(master.checked){
        p2.textContent="You choose Master card";
    }else if(rupay.checked){
        p2.textContent="You choose Rupay card";
    }else{
        p2.textContent="You doesn't choose any card";
    }
}