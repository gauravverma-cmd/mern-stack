document.body.style.background = "black";
document.body.style.color = "white";

// this -  it is a special keyword which change its meaning according to the situation.

// Global Scope -  window hi this ki value hoti hai
console.log(this);

// function  - window hi this ki value hoti hai
function abcd() {
  console.log(this);
}
abcd();

// Method - object hi this is value hoti hai but hme hmesa function ko function keyword likh kr hi banana hoga agar hme arrow function bna diya to this ki value window ho jayegi. Aur agr hmne method k andar ek aur function bna diya to fir hme bs aroow function hi banana pdega wrna this ki value undefind ho jayegi.

//Method banate time → function keyword use karo (normal function), taki this ki value = object ho.
//Method ke andar inner function banate time => arrow function use karo, taki this parent method se capture ho jaye.

let obj = {
  name: "gaurav",
  age: "21",
  makeMethod: function () {      // ye method hai 
    //object k ander k jo function hota hai use method khete hai
    let def = () => {
      console.log(this);
    };
    def();
  },
};
obj.makeMethod();


//Event Handler - hmesa jis pr eventListener lga hua hai vhi this is value hogi
document.querySelector("h1").addEventListener("click", function () {
  console.log(this);    // to this ki value ynha h1 hogi 
});

// Class - isme this ki value blank object hoti hai

class Abcd {
  constructor() {
    console.log("hyhyh");
    this.a = 12;
  }
}
let val = new Abcd();

// use strict - ye thodi security bdha deta hai js ki aur agr hum function ko object k bina call krte hai to ye window ki jangha undefind show krta hai as an output.

("use strict");
function show() {
  console.log(this);
}

show();

// call - hm call ko use kr k object ki value function me bhi pass kr skte hai this keyword ko youse kr k

let obj2 = {
  name: "grv",
};

function callShow() {
  console.log(this);
}

callShow.call(obj2);

// apply - work same like call but it takes only 2 parameter and the second parameter will be array

let obj3 = {
  name: "bherav",
};

function callShow(a, b, c) {
  console.log(this, a, b, c);
}

callShow.apply(obj3, [1, 2, 3]);

// bind - ye ek alag copy function bna deta hai isliye ise chlane ko ek alag variable banana pdta hai

let obj4 = {
  name: "kaiyarana",
};

function callShow(a, b, c) {
  console.log(this, a, b, c);
}

let anotherFunc = callShow.bind(obj4, 1, 2, 3);
anotherFunc();

