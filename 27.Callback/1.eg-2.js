//hello();
//goodbye();



/*function hello(){
    setTimeout(function(){
        console.log("Hello!");
    },3000);
      
}*/

function goodbye(){
    console.log("GoodBye!");
}



hello(goodbye);

function hello(callback){
  console.log("Hello!");
  callback();
}