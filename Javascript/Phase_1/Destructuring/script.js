// Destructuring of object, Basic  destructuring
let person = {
    name: "Karan",
    country: "India",
    isMarried : true,
    address : {
        streetAdd: "chandni chok bazar",
        houseNo : "BH2023",
    }
}
let {name, country, isMarried, address :{streetAdd, houseNo}} = person
console.log(name,country,isMarried, streetAdd, houseNo)


// Basic destructuring of array 
let arr = [1,2,3]
let [a,b,c] = arr
console.log(a,b,c)

// Destructureing with rest operator in array 
let array =  [1,2,3,'Saravn', false]
let [ab,bc,cd, ...others] = array
console.log(ab,bc,cd, others)

// Destructureing with rest operator in object

let student = {
    studentName : "Denom",
    course : "MCA",
    studentId : 403483475,
    specialization : "Machine Learning",
}
let {studentName, course, ...restOperator} = student
console.log(studentName,course, restOperator)

// Swapping by destructuring 
let x = 4; 
let y = 5;
[x,y] = [y,x]
console.log(x,y)


// Nested destructring in object 

 
 let employess = {
    empName : "Siddhu",
    salary : 530000,
    age : 32,
    empAddress : {
        pincode : 344355,
        empStreetAdd : "Bhajn vihar",
        empCity : "delhi",
        landmarks : ["Near Metro Station", "Opposite Hanuman Temple"]
    }
};


let { empName, salary, age, empAddress: { pincode, empStreetAdd, empCity, landmarks: [p] } } = employess;

console.log(empName, salary, age, pincode, empStreetAdd, empCity, p);
 
 
 