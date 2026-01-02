// Make a BMI caluculator.. 

function bmi(weight, height){
    return weight / (height * height)
}
console.log(bmi(70, 1.829).toFixed(2))

// Make a reusable calculator which give us discount

function discountCalculate(discount){
    return function(price){
         return price - price * (discount/100);
    }
}

let ten = discountCalculate(10);
let twenty = discountCalculate(20);

console.log(ten(1200));
console.log(twenty(1200));


// Make a counter by using the closures ..........
function counter(){
    let count = 0;        
      return function(){       // this is a closures jo ki function k ander bhar wale varibale a use kr rha    
        count++;                // hai, aur ynha varibale count hai....
          return count;
      }
}
let c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());   

let d = counter();
console.log(d())
console.log(d())
console.log(d())


// Use IIFE to make a isolate varibale 
(function () {
    const password  = "secret password";
    // console.log(password); 
})();