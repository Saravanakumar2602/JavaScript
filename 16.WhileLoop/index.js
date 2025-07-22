let username = "";

//while(username=="" || username==null){
//    username = window.prompt("Enter Your UserName");
//}

do{
    username = window.prompt("Enter Your UserName");
}while(username=="" || username==null);

console.log(`Hello ${username}`);