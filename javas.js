// var, let, const

var a = 1;
let b = 2;
const c = 3;        // declare, init

var a = 1;
// let b = 2;       // redeclare, init
// const c = 3; 

a = 1;              // reinit
b = 2;
// c = 3;


check();

function check(){
    var a = 11;
    let b = 12;
    const c = 13; 

    console.log("Inside Function");
    
    console.log(a);
    console.log(b);
    console.log(c);    

}


console.log("Outside Function");
    
console.log(a);
console.log(b);
console.log(c);   
