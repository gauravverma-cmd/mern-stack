// >> Events binding --

let h1 = document.querySelector("h1");

h1.addEventListener("click", () => {
  h1.style.color = "red";
});

let p = document.querySelector("p");

let dblclick = () => {
  // here we used a arrow function
  p.style.color = "red";
  p.style.backgroundColor = "white";
};

p.addEventListener("dblclick", dblclick);
p.removeEventListener("dblclick", dblclick); // This is to remove the event on the para

// >> Some common events -

// . Click-

let h2 = document.querySelector("h2");
h2.addEventListener("click", () => {
  h2.style.color = "yellow";
});

// .input-

let inp = document.querySelector("#getinput");
inp.addEventListener("input", (val) => {
  if (val.data !== null) console.log(val.data);
});

// .change-
let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", (val) => {
  device.textContent = `${val.target.value} device is selected`;
});

// >> Submit -

let form = document.querySelector("form");
let inputs = document.querySelectorAll(".setinput");
let main = document.querySelector("#main")
form.addEventListener("submit", (dets) => {
  dets.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img")
  img.setAttribute("src" , inputs[0].value)

  let h3 = document.createElement("h3")
  h3.textContent = inputs[1].value;
  let h5 = document.createElement("h5")
  h5.textContent = inputs[2].value;
  let p = document.createElement("p")
  p.textContent =  inputs[3].value;  

  profile.appendChild(img)
  card.appendChild(profile)

  card.appendChild(h3)
  card.appendChild(h5)
  card.appendChild(p)

  main.appendChild(card);

  inputs.forEach((inp)=>{
    if(inp.type !== "submit"){
      inp.value = "";
    }
  })
});


// >> MouseEvent={ Mouseover, Mouseout, Mousemove} 

let colorDiv = document.querySelector("#changeColor");

colorDiv.addEventListener("mouseover", ()=> {
  colorDiv.style.backgroundColor = "red"
});                                         // This is to chnage the color of a box
colorDiv.addEventListener("mouseout", ()=>{
   colorDiv.style.backgroundColor = "yellow";
});

let moveDiv = document.querySelector("#move");


// window.addEventListener("mousemove",(dets)=>{
//   moveDiv.style.top = dets.clientY + "px";
//   moveDiv.style.left = dets.clientX + "px";    // This is used for when we want to move thr div with the mouse cursor
// });

// >> Event Bubbbling - Event bubbling ka matlab hai Agar kisi Div ke upar hum event listener nahi lagaenge to wo uske parent Wale div ke paas jayega aur uspar event listener dekhega Agar uspar bhi event listener  nahi hoga to phir woh uske parent ke paas jayega aise karte karte woh top par Pauch jayega jaha bhi event listener hamara laga hoga. Aur Agar beach main Kahi bhi event listener Mil Gaya to jab bhi woh(system) to par jayega.

document.querySelector(".nav").addEventListener("click",()=>{
  alert("clicked");   // hmne ynha Event listener Batan Par lagaya hai par Agar hum button pr abhi clicked krnge to  bhi function chalega.
})

// >> Event capturing -- ye bubbling ka reverse hota hai ye top to bottom chalta hai. but to aplly it we have to write the keyword (true) at the end of function....

let button = document.querySelector("#testbtn")
let a  = document.querySelector(".a")
let b = document.querySelector(".b")
let c = document.querySelector(".c")

button.addEventListener("click",()=>{
  console.log("button clicked");
},true)

c.addEventListener("click",()=> {
  console.log("c clicked");  
},true);

b.addEventListener("click",()=> {
  console.log("b clicked");  
},true);

a.addEventListener("click",()=> {
  console.log("a clicked");  
},true);