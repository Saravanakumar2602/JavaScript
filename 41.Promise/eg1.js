// Example of a Promise in JavaScript
function myDisplayer(some) {
    console.log(some);
    }

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    let myNumber = Math.random();
    
    if (myNumber > 0.5) {
        myResolve("Success! The number is: " + myNumber); // when successful
    } else {
        myReject("Error! The number is too low: " + myNumber); // when error
    }
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) { 
        myDisplayer(value); // code if successful
    },
    function(error) { 
        myDisplayer(error); // code if some error
    }
);