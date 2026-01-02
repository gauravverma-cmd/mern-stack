// Question - Create an array with three fruit and print the second fruit 

let fruit = ["Mango", "Apple", "Lichi"]
fruit[1]
console.log(fruit);

// Question - Add pineapple at last and banana at the start 

fruit.push("pineapple")
fruit.unshift("banana")
console.log(fruit);

// Question - Replace pineaplle to kiwi 

fruit.pop()
fruit.push("kiwi")
console.log(fruit);

// Question - Insert "red" and "blue" at index 1 in the given array

let colors = ["green", "yellow"]
colors.splice(1,0,"red" , "blue")   // splice a mtlb hatana hota hai magar iss case me hme first index pe se kuch bhi nahi htaya aur usem baad me colors add kr diye 
console.log(colors);

// Question -  Extract only mmiddle three Element in the given array 

let givenarray = [1,2,3,4,5,6,7,8,9]
givenarray.splice(3,3)
console.log(givenarray);

// Question -  Sort this array alphabetically and then reverse it 

let namearray = ["roahn", "vivek", "arryan" , "brainlara"]
namearray.sort()
namearray.reverse()
console.log(namearray)

// Question - use .map() to square each number 

let numberarray = [2,3,4,5]
let ansarray = numberarray.map(function(val){
    return val * val
}) 
console.log(ansarray)

// Question -  use .filter() to keep number greater than 10; 

let greaterArray = [2,12,45,3,56]
let greaterAns = greaterArray.filter((val) => {   // we also use fat arrow function here
   return val>10
})
console.log(greaterAns)

// Question - Destructure this array to get first and last name 

let fullName = ["gaurav" , "verma"]
let [firstname , lastname] = fullName
console.log(firstname)
console.log(lastname);

// Question - Merge two array with the help of spread operater 

let a = [1,2]
let b = [3,4]

let c = [...a, ...b]
console.log(c)

// Question - add india at the start by using spread operater 
let countries = ["USA", "UK"]
let AddCountries = ["INDIA", ...countries]
console.log(AddCountries);

// Question - clone this array properly without any refrence 
let arr = [1,2,3]
let arr2 = [...arr]
arr2.pop()
console.log(arr);
console.log(arr2);
 
