// throtteling -> ye hr ek specfic time k baad chlega hi chlega che hum bech me kitne bhi second ka break kyu na lele. aur jb bhi hum pura likh lenge to ye chlna band ho jeyega. 


function throttle(fnc, delay){
    let timer = 0;
    return function(...args) {
         let now = Date.now();
         if(now - timer >= delay){

             timer  = now
             fnc(...args)
            }
        } 
    }

let input = document.querySelector("input")
input.addEventListener("input", throttle(function(){
   console.log("ran")
},1000)
);


console.log(Date.now())