function passwordgenerator(Length,includeLower,includeUpper,includeNumbers,includeSymbols){

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";
    let password = "";
    let randomtxt ="";

    randomtxt+=includeLower?lower:"";
    randomtxt+=includeUpper?upper:"";
    randomtxt+=includeNumbers?numbers:"";
    randomtxt+=includeSymbols?symbols:"";

    if(Length<=4) return "Length Must Be Greater Than Four";
    if(randomtxt.length === 0) return "Atleast Choose One Type";

    for(let i=0;i<Length;i++){
        let randomindex = Math.floor(Math.random()*randomtxt.length) 
        password += randomtxt[randomindex];
    }


    return password;


}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = passwordgenerator(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);

console.log(`Password : ${password}`);