// // Storage are of three type - {
// //     1 =>  localStorage   ~5mb data can be stored
// //     2 => sessionStorage  ~5mb data can be stored
// //     3 => coockies        ~4kb data can be stored
// // }

// // >> localStorage = this is type of storage which store the data on browser until we remove it manually. It is a database of the browser. We cannot store the arrays and object in localStorage but if we want to do that we will have to make it in (JSON.stringfy) and to make it in the real form we have to use (JSON.parse()) Because JSON.stringify gave us string not array or object -- 
// // >  setItem
// // >  getItem
// // >  removeItem
// // >  clear()
   
        
// localStorage.setItem("name", "gaurav verma") // this is used to set the data into the data base and also to update the value 

// let val = localStorage.getItem("name") // This is used to get the value which we save earlier by using setItem

// localStorage.removeItem("name")  // to remove the value 

// localStorage.setItem("name" ,"gaurav") // This is to set the value 
// localStorage.setItem("name", "George") // Now this is to uptdate the value 

// localStorage.clear() // To clear evrything what we have made.. 


// // >> sessionStorage - To store the data temporarily . It is same as localStorage 
// // >  setItem
// // >  getItem
// // >  removeItem
// // >  clear()

// sessionStorage.setItem("age", "21") // TO set the data

// let dets = sessionStorage.getItem("age")

// sessionStorage.removeItem("age")

// sessionStorage.clear()

// // >> coockies - it store the data in a very small amount the and it can not be deleted untill we delete by ourself.. 

// document.cookie = "email = test@test.com" // TO set the coockies 

// // how to expire a coockie after some time do in future


// // >> set the array by using localStorage . 

// localStorage.setItem("classmate", JSON.stringify(["arrav", "himanshu", "gurpreet"])) // Convert this into a string
// let vl = JSON.parse(localStorage.getItem("classmate"))  // convert this into an array

// console.log(vl);