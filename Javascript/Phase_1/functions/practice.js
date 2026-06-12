// Question -> Use the rest parameter to accept any number of score and return the toatl.

function getScore(...score) {
  let total = 0;
  score.forEach(function (val) {
    total = total + val;
  });
  return total;
}
console.log(getScore(12, 34, 45, 35));

//  Q1. Create a function that returns "Hello World".

function hello() {
  return "hello world";
}
let hww = hello();
console.log(hww);

// Q2. Create a function called greet that takes a name and returns "Hello".

function greet(name) {
  return `hello ${name}`;
}

let message = greet("gaurav");
console.log(message);

// Q3. Create a function that takes two numbers and returns their sum
function sum(a, b) {
  return ` the sum of both digit is -  ${a + b}`;
}
let addition = sum(3, 15);
console.log(addition);

//  Q4. Create a function that checks if a number is even or odd.

function checkNumber(num) {
  if (num % 2 === 0) return "even";
  return "odd";
}
let check = checkNumber(54);
console.log(check);

// Q5. Create a function that takes three numbers and returns the largest one.

function largestNumber(val1, val2, val3) {
  if (val1 >= val2 && val1 >= val3) return "val1";
  if (val2 >= val1 && val2 >= val3) return "val2";
  return "val3";
}
let result = largestNumber(6, 63, 66);
console.log(result);

// Q6. Create a function that returns the length of a given string.

function findLength(str) {
  return str.length;
}
let ress = findLength("javascript");
console.log(ress);

// Q7. Create a function that prints numbers from 1 to 5.
function printNumber() {
  for (let i = 1; i < 6; i++) {
    console.log(i);
  }
}
printNumber();

// Q7. Create a function that returns another function which says "Hello" when called.
function h1() {
  return function h2() {
    console.log("hello world");
  };
}

let rres = h1()
rres();

function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

let counter = createCounter();

console.log(counter()); // ?
console.log(counter()); // ?
console.log(counter()); // ?


function greet(name){
   return function(){
    console.log("hello" + name + "!")
   }
}

let greetjhon = greet("jhon")
let greetjane = greet("jane")

greetjhon()
greetjane()