// This is about oops and constructor function. 
function CreatePencileColor(name, color, price, shape){
    this.name = name;
    this.color = color;
    this.price = price;
    this.shape = shape;
}
CreatePencileColor.prototype.write = function(text){
       let h1 =  document.createElement("h1");
       document.body.style.background = "black"   // By using prototype we can remove the write function from the memory and free some space. The write function will go in the prototype section.  
        h1.textContent = text; 
        h1.style.color = this.color;
        document.body.appendChild(h1)
};
let colorPencil1 = new CreatePencileColor("Doms", "red", "10 rupee", "trianglur") 
// here new means constructor which make an empty array whcih take the value of this keyword in it..
let colorPencil2 = new CreatePencileColor("Natraaj", "yellow", "20 rupee", "octagun")

console.log(colorPencil1);
console.log(colorPencil2);
console.log(colorPencil1.write("hii this doms pencil"));
console.log(colorPencil2.write("and this is natraaj"));


// >> Class - It is a blueprint to create object  

class createpc{
    constructor(name, color, company, price){
      this.name = name;
      this.color = color;
      this.company = company;
      this.price = price;
    }
    erase(){
        document.querySelectorAll("h2").forEach((e)=> {
         if(e.style.color === this.color){
            e.remove()
         }
        })
    }
    write(text){
        let h2 =  document.createElement("h2")
        h2.textContent = text
        h2.style.color = this.color
        document.body.appendChild(h2)
    }
}

let pc1 = new createpc("VivoBook", "aqua", "Asus", "44k") 
let pc2 = new createpc("macBook", "lightsalmon", "Apple", "103k") 

console.log(pc1)
console.log(pc2)
console.log(pc1.write("This is a Asus product"))
console.log(pc2.write("This is a Apple product"))

// console.log(pc1.erase()); // this command will remove the pc1 details

// >> Class extends - share a class property to another class 

class Users {
    constructor(name,address,email, phoneNo,){
       this.name = name;
       this.address = address;
       this.email = email;
       this.phoneNo = phoneNo;
       this.role = "user";
    }
       checkRole(){
          return `you are a ${this.role}`   // ye role btayega sbka {u1.role()}
       }
    write(text){
     let h3 = document.createElement("h3");
      h3.textContent = `${this.name} : ${text}`;
      h3.style.color = "white"      // to write anything { u1.write("hhyhyhy") }
      document.body.appendChild(h3)
    }
}
  class Admin extends Users{
      constructor(name,address,email, phoneNo,){
         super(name,address,email, phoneNo,);       // ye parent class ka constructor ko call krta  hai
           this.role = "admin"
      }
      remove(){
        document.querySelectorAll("h3").forEach(function(elem){
            elem.remove()   // this is to remove evrything  {a1.remove()}
        })
      }

  }

let u1 = new Users("subhas", "bhopal", "hth@hy.com", 233453243)
let u2 = new Users("kaira", "delhi", "ghkj@rfg.com", 578453946)

let a1 = new Admin("admin", "india", "admin@s.s", 556664646)

// >> prototype inheritance - isme hm object se inheritance krte hai 

let coffe =  {
     color: "dark",
     drink: function(){
        console.log("gut gut gut")
     }
}

let aspresso = Object.create(coffe);
aspresso.taste = "bitter";
aspresso.drink()
console.log(aspresso)