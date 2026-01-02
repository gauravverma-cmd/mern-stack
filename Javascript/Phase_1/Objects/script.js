// >> Object -an object is a composite data type that stores collections of key-value pairs, where keys (called properties) are strings or symbols, and values can be any data type including other objects, functions, primitives, or arrays.

let object = {
    name: "Gaurav",      // here the key is in left which is {name} and the value is on the right side which is {Gaurav}
    age :  21,
    job : "Software developer",
    salary : "1cr/An"
}

object.salary = "2cr/An"     // Access the object data 
object['job'] = "React developer"  // We can also access by this way 


let aa = "name"
object[aa]      // This type of aceess wew will use when we want to use the variable which is not define in the object.  

console.log(object[aa])

// >> Access the value if we want to print any specific key or data value 
let obb = {
    firstname : "grv",
    gender : "male"
}

console.log(obb.firstname)

//  >> Nested object and their calling function 

const user = {
    name : "dev",   
    address: {
      state: "UP",
      city : "Noida",
    location: {
        lang: 45.6,
        lat: 68.7,
    }
  }
}

console.log(user.address.location.lang)   // this is how we can access the keys and values in the nested object.

//  >> Object destructing --  Here we make the variable of the keys and values so that we didn't have to write the same long method to call the nested objects value. Just we write in nested object when we have to call the values 

let {lang, lat} = user.address.location // This we write upto where are vlues and keys are 
console.log(lat)
console.log(lang)


// >> For in loop 

let obj = {
    name: "shard",
    age: 22,
    email: "shardkumar@gmail.com"
}

for(let key in obj){
    console.log(key, obj[key])
}

// >> Spread oprator 

let obj2 = {...obj} // It is a way to copy the object but make sure we don't use this in the nested object. 
console.log(obj2);

// >> Deep clone - We will use this concept when we want to copy the nested object. 

let obj3 = JSON.parse(JSON.stringify(obj)); // This make a clones of an nested object 


// >>optional chaning..- It means that we can apply ? and the end of key to remove the error from console 

const locations = {
    city : "Bhopal",
    cordinate: {
        langi : 757.8,
        longi : 330.5,
    }
}

console.log(locations?.cordinates?.longi)   // here is s in the cordinate but in the object there is no {s} so now without showing any error is shows us undifind in answer...



