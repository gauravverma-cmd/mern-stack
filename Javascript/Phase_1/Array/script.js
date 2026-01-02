// Array is used to store multiple data in a single bracket. In js we can store multiple data type in a single array like we can store String, number, bollean,and etc. But in other language we can not do like that, in other language we can store only a single type of data weather its string or number and the counting of array start from 0th.

let marks = [85, 78, 46, 89, 56];
console.log(marks[3]); // Access of array

// TO modify the Array

let arr = [1, 2, 3, 4, 5, 6];
arr[2] = 9;
console.log(arr);

// Methods
let arrr = [5, 6, 7, 8, 9, 1, 2, 3, 4];
arrr.push(300); // to add value form last
arrr.pop(); // to remove the value from last
arrr.shift(); // to remove the first value
arrr.unshift(33); // to add the value in the start
arrr.splice(3, 1); // it remove the value that kha se kitni value hta ni hai. jaise 3rd index pr se 1 value hta hai
let newarr = arrr.slice(0, 4); // it make a new array and does not change in the main array
arrr.reverse(); // it reverse the array.
console.log(arrr);
console.log(newarr);
 
// >> Sorting of array if there is number. We should have to give a compare function in numerically phase 

let ar = [23, 32, 4, 5];

let sr = ar.sort(function (a, b) {
  return a - b; // ascending order
  // return b - a  // decending order
});
console.log(sr);

// >> forEach -- forEach ek loop hai jo hr ek value pr jakr function chlata hai

ar.forEach(function (val) {
  // forEach- har ek value pr function chlta hai
  console.log(val + 5);
});

//  >> Map - it is also same like forEach but ye ek nya array bnata hai pichle array k data k base pr aur ye same number ka hi rheta hai  aur ye hmesa ek value return krega

let newarray = ar.map(function (val) {
  if (val > 4) return val;
});
console.log(newarray);

//  >>Filter  it is almost same like map but it return true and false . it make new array

let newflarr = ar.filter(function (val) {
  if (val > 5) return true;
});

console.log(newflarr);

// >> reduce - it reduce all the value of aaray and convert them in a single array

let ary = [1, 2, 3, 4, 5, 6];

let ans = ary.reduce(function (accumulator, val) {
  return accumulator + val;
}, 0);
console.log(ans);

// >> find - it is method to find something in our code

let ansfind = ary.find(function (val) {
  return val === 5; // so ye hum 5 show kr dega
});

console.log(ansfind);

//    >> Some - agar hmari dyi hui condition match hogi array se to ye hme true show kr dega wrna to false show kr dega

let anssome = ary.some(function (val) {
  return val > 5;
});

console.log(anssome);

//  >> Every - just opposite to some isme sari condition check hogi. Agar pura array 4 se bda hai to hi true print hoga wrna false hoga

let eve = ary.every(function (val) {
  return val > 4;
});

console.log(eve);


//  >>Desturing in array - it means find the array data with the help of variable. 

let arrray = [1,3,4,5,6,7,8]

let [a,b, ,c] = arrray;       // It will show us
console.log(a,b,c) 

// >> Spread operater- it is operater which help us to make a copy of a array. And if make any changes in our copy array, it will not effect the original(main) arrray. The main array will be remain unchanged. 
let mainarray = [1,2,3,4,5,6,7,8,9]
let copyarray = [...mainarray]
console.log(mainarray)
copyarray.pop();
console.log(copyarray);
