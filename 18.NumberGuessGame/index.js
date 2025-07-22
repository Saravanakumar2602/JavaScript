let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random()*100)+1;

let attempts = 0;
let guess;
let isrunning = true;

while(isrunning){

    guess = window.prompt(`Enter a number between ${minNum} - ${maxNum}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("Enter a Valid Number");
    }else if(guess < minNum || guess> maxNum){
        window.alert("Enter a Valid Number");
    }else{
        
        attempts++;
        if(guess>answer){
            window.alert("Too High! Try Again");
        }else if(guess<answer){
            window.alert("Too Low! Try Again");
        }else{
            window.alert(`Correct The Answer is ${answer} , You took ${attempts} attempts`);
            isrunning = false;
        }
    }

}