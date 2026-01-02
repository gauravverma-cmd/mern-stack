// Variable -- Container which store data in it for a long period of time and we can use it any time.
// There are three types of variable keywords -- Var, let, Const

var d;
let a = 12;
var c = 12;           //These all are variables 
const b = 11;


// VAR 
//Ye function scoped hai, es5 model pr ban hua hai, ek hi naam se muliple variable decleared ho skte hai

function abcd(){
    if(true){
        var a = 32       // This is an exmaple of function scoped hai,  
    }                   // abb ye varibale pure function me khi abhi use ho skta hai.   
}

// LET 
//Ye bhi ek keyword hai jisse hum variable decleared kr skte hai, aur mostle hum isse hi use krenge ye ES6 model pr based hai, ye ek block scoped varibable function hai. We cann't decleared the multiple variable by the same name

let dam = "underWater";

function gapy(){
 if(true){
    let waterPhLevel = 7;
    console.log(waterPhLevel)     //this can be only define in the curly braces
}
}
console.log(dam)
gapy(); // calling the function


// CONST..... Once the value is define it can not be changed....
const pi = 3.14;

// TEMPORAL DEAD ZONE 
// Aisa area jisme js ko pta hai ki vairable hai pr js uski value show nahi krta

console.log(m);

// this area is knowns as TDJ 

let m = 12;

//  Impact of Hoist on all the variable keyword

// var -> Hoist -> undefined
// let -> Hoist -> refrence error
// const -> Hoist -> refrence error 

// Some practice question 

let db = 10; 
{
    let e = 20;
    console.log("Inside:", e)     
}

console.log("outside", db);