// Data can be anything it can be 12, grv, {}, [], NaN, undefined, etc 

// So data is divided into two type -->>

//      1. Primitive -> Aisi value jise copy krne pr hme ek real copy mil jaye. 
//           Ex-> String, Number, Boolean, null, undefined, Symbol, BigInt.. 

//      2. Refrence -> Inko copy krne pr aapko copy nahi miegi balki refrence milega parents ka. 
                    // Refernce me bracket hote hai.   
//        Ex -> Array, Object, functions.
             //  []  ,   {}  ,  ()  

let a = 12;
b  = a;       // so these are primitive 


// String = "Gaurav"  // This is an example of String 
// Number = 12;  // This is an example of number 
let ab = true;
let ba = false;  // This is an of boolean 

let selectedStudent = null; // Null ka mtlb hai jb hum jaan bhoojh kr koi bhi value na de ya fir jb hum starting value na pta ho aur baad me hme null ki value deni ho, tb hum null ka use krte hai..

// Symbol -> we can create unique values and put theme anywhere to protect our code.

let obj = {
    uid: 1,
    name: "Gaurav",
    email: "tester.test.com",
    age: 21,
};

let u1 = Symbol("uid")
obj[u1]= "001";

// BigInt -> hmu ek limit tk hi number likh skte hai js me jo ki hai -> 9007199254740991 pr agar hme iske baad me koi number add krna hai to hum BigInt ka use krte hai. 

let s = 9007199254740991n
s + 10n;  // it will give us additon value 

// REFRENCE - ARRAY , Object, Function => 
    // Array ->
   
 let arr = [1,2,3];

    //  Object 

let objj = {
    name: "Raghav",
    age: 32,
}    

//   Function

function greet(){
    console.log("hii this is a function")
}

greet();     // calling the function.

// Dyanamic Typing - It means that we can change the data types of any data on the go. 

let p = 12;
 p = "grv";
 p = {}                   // So we can change it time time according to our demand
 p = []
 p = null;

//  typeof - it is word that help us to find that what kind of our data is, whether it's a number or it's a string or anythihng else..


// Type coercion (== & ===) -> :Ye ek aisa type hai type hai jisme ek type dusre type convert ho jayega
   let tc = "5" + 2 // so it will shows us 52. No matter 5 is a string and 2 is a number.
   
 
//    Truthy and falsy value =>
    
    // 0 , false, "", null, undefined, NaN, document.all -- ALL THESE VALUES MEANS THEY ARE FALSE. -- WE CAN CHECK THESE BY (!!0) LIKE THAT


    // Question - Why is NaN is a Number?
    // Answer - Because NaN is a failed Number operation and when a failed Number, it will became NaN
    //    eg -> 2 * "gaurav", It will shows us NaN as a result 