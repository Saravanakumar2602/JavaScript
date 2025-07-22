function isemail(email){
    if(email.includes("@")){
        console.log("This is an valid email");
    }else{
        console.log("It is not an valid email");
    }
}


let email1 = "saravana@gmail.com";
let email2 = "srvn$fake.com";


isemail(email1);
isemail(email2);
