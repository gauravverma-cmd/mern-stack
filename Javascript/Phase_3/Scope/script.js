// >> Scope - { 
//        hum apne varibale ko kha tk youse kr sakte hai. {
//     1. functional Scope - Sirf function k ander hi youse kr sakte hai.
//     2. global Scope - Pure code me khi bhi youse kr sakte hai.
//     3. block scope - sirf inhe hum bs { } k ander hi youse kr sakte hai.
// } } 

// 1. functional scope -

function abcd() {
  var greet = "hello";
  console.log(greet);
}

// 2 . global scope -

const alpha = "Nothing";

// 3. block scope -
let a = 10;
b = 10;
if (a === b) {
  console.log("ho gya");
}

// >> Execution Context - {
// Ye ek abstract hai iska mtlb ye ek hypothatical process hai. Jb bhi js me ek function chlate hai tbhi ek box create hota hai aur ye do step me divide hota hai phela phase memory allocation jisme sare vairables or other part of code allocate hota hai aur dusra part hai execution isme sara allocate hua part execute hota hai.
// }

// >> Encapculation  

  function clickLimiter(){
      let click = 0;
      return function(){

        if(click < 5){
          click++;
          console.log(`clicked :${click} times`)
        }
        else{
          console.error("Limit Exceed, Try after some time")
        }
      }
    }

  let fnc =  clickLimiter();
  fnc()
  fnc()
  fnc()
  fnc()
  fnc()
  fnc()
