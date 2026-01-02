   //  >> Example of call , apply , bind

function greet() {
  console.log(`Hello, ${this.name}`);
}

const user = { name: "Aditi" };

greet.call(user);
greet.apply(user);
const boundGreet = greet.bind(user);
boundGreet();


let person = {
    name : "amit",
    show : function(){
        console.log(this.name)
    }
}

let newFunc = person.show;
newFunc()
