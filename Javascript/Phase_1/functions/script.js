// >> Simple function
function sayHello(){    // This is simple way to create function. This is also called function statement.
    console.log("hyy this is a function")
}
                    //function is used to store some data in it to run in future and also we can use it multiple time so that we does not have to write code again for that work. Just like we have to write hello world so we can make a function we will use it multiple times.
sayHello();

// >> Variable function 
// We can make function by declearing variable...

let fun = function(){
    console.log("This is also a function but this time is decleared by the variable");
    //This is also knowns as function EXPRESSSION..
}
fun();

// >> Fat Arrow function -> 

let arrowFunction = () =>{
      console.log("This is an example of arrow function")
}
arrowFunction();

// >> Parametres and arguments in function ->

function language(val){  
    console.log(`${val} is a coding language`) // by giving these parameters we can easily change our value dynamically. 
}

language("javascript");
language("java");
language("python");
language("kotlin");
language("swift");

// Another example of parameter and arguments 

function add(value1 , value2){    // These value1 and value2 are the parameters..
    console.log(value1 + value2)
}
add(4, 6); // So these 4 and 6 are agrument, 


// >> Default parameters -> We can give default value in parameters in case the agrument is not give the code automatically takes the default value => 

    function sum(val1 = 1, val2 =2){
        console.log(val1 + val2)       //So here we did not pass any argument but we give the default value.and if we pass any agrument the itself accept the argument and replace the default value to agrument
    }
    sum();  

//   >> REST parameters->
    //  ... These three dots are rest parameters and these are also spread operator.But in function they are knowns a rest and in array and Object they knowns as spread.. 
    
   function scg(...val){
         console.log(val)
   } 

   scg(1,2,3,4,5,6,7,8,9,10);

//    >> return 

function bhasad(val){
    return 12 + val;       // basically it allocate the value
}
let we = bhasad(23);
console.log(we);



// >> First class function => It means that function can be used as a value. 
let fn = 12;                
let fnb = function(){     // So here we can store a value as well as a function in variable.
}

function as(val){
 val();
}
as(function(){   // So here also it act like a value. We can use function a value in whole js language.
    console.log("hyy this a function in an argument");  
})

// >> Higher order function => Aisa function jo return kre ek function ya fir apne argumants me ek function accept kre ek function

function hof(){   //So now hof() func is a higher order function..
    console.log("hyeheyeheye")
}
hof(function(){      // Ye apne parameter me ek function accept kr rha hai..
})

function rtn(){
    return(function(){
         console.log("weeeeeeeeeee");
         
    })
}
rtn()();   // This double bracket is because in return there is a function 

// >> PURE AND IMPURE FUNCTION 

// >> Pure  function - Har baar same input par same output de, aur
// Function ke bahar ki koi bhi value ya state ko change na kare (no side effects)
// usse hum Pure Function kehte hain.

function pure(){
    return "pure function which does not change any value"
}
let message = pure()
console.log(message)

// >> Impure function-> Jiske use krne se bhar ki value badal jaye 

let i = 13;

function imp(){
    i++;
    console.log(i)
} 
imp();


// >> Closures => ek aisa function jo return kre ek function aur return hone wala function use kre bhar wale function ka varibale. hmesa colsures ko chlane pr bs phela wala hi function chlta hai return function ko chlane k liye hum function ko ek aur function k andar daalna pdta hai....

// Closure ek aisa mechanism hai jisme ek function apne lexical scope ke variables ko yaad rakhta hai, even after uska parent function execute hokar khatam ho chuka ho. Jab inner function create hota hai, to wo sirf apna code hi nahi balki apne surrounding environment ko bhi saath lekar chalta hai. Isliye agar baad mein inner function ko execute kiya jaye, to wo parent function ke variables ko access kar sakta hai, chahe parent function call stack se remove ho chuka ho. Simple words mein, closure ka matlab hai ki function apne creation time ke scope ko "remember" karta hai aur future mein bhi uske variables ko use kar sakta hai.

function cls(){
     let q = 12; 
    return function(){  // Now in this case inner func is used the outer function varibale which is q.
     console.log(q)
    }
}   
cls()();  // Ya to aise chla skte hai function ko 
// let fnc = cls()    ye fir asie chla skte hai 
// fnc()

// >> Lexical scope-> 

//  Lexical Scope ka matlab hai ki JavaScript mein kisi function ko kaunse variables access karne ki permission hai, ye is baat par depend karta hai ki function code mein kahan define hua hai, na ki kahan se call hua hai. Jab koi function create hota hai, tab JavaScript uske surrounding environment ko note kar leti hai. Baad mein jab function execute hota hai aur kisi variable ki need padti hai, to sabse pehle wo apne scope mein us variable ko search karta hai. Agar wahan nahi milta to parent scope mein jata hai, phir uske parent scope mein, aur aise hi global scope tak search karta hai. Isliye hum kehte hain ki JavaScript mein scope lexical hota hai, kyunki variable access function ki location par depend karta hai, function call hone ki location par nahi. Yehi concept aage chal kar closures ko samajhne ka base banta hai.

    function asd(){
        let r = 23;        
        console.log(r);
        function ghj(){   
        let k = 45;   
        console.log(k);
    function jkl(){
        let l = 48;
        console.log(l);
    }
    jkl();  
   }                      // This is the method to call the lexical function. Jise hi ek function khtm hua hum uska 
  ghj();                   // tb tbhi call krna pdega..
}
asd();

// >> IIFE (Immedaitely invoked function) -> iss function me hum function ka koi bhi naam nahi dena pdta but ise curve bracket me daalna pdta hai(wrap with the backets)...
 (function(){
    console.log("hyyyy it's IIFE's magic");
    
 })();  // Directly calling the function without giving name 


//  >> HOISTING -- Function Statement me hoti hai magar function experssion me nahi hoti   


