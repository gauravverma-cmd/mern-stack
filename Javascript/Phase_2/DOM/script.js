// >> DOM - It stand for document Object model. By this concept we can easily do chnages in our website. This help us to select the html contant and help us to do styling without using css . 

// >>> DOM manuplation -- Changing in DOM 

        // >> Step 1 - Selection ---- 

// >>> Selecting by id- 
let abcde = document.getElementById("abcde")
console.dir(abcde)   // The { console.dir } help us to console the varibale without showing it's tag and make the varibale in opening format. 

// >>> Selecting by querySelector - 
let abcd = document.querySelectorAll("h2")   // This will give us a array like structure...
console.dir(abcd)


    // >> Step 2 - DO changes

let h2 = document.querySelector("h2")
h2.innerText  = "This is come after changes in JavaScript by doing DOM manuplation"
h2.innerHTML = "<i>HII this us</>"  // We  use innerHTMl when we want to write some HTML code in js 
// h2.hidden = true  // This make the text hidden 

let a = document.querySelector("a")

//    >> setAttribute is to set the value of any Attribute

  a.setAttribute("href" , "https://www.google.com")    // this tag is used to change the attribute of a tag. Attribute kya hai tag k alawa jo bhi cheez usme hai vo sb attributes hai.. Phele wala QUOTATION MARK me hum likhnge ki hum kisme change krna hai aur dusre wale me hum likhnge k ki hume kya  badalna hai..

let img = document.querySelector("img")
img.setAttribute("src", "https://images.unsplash.com/photo-1752867942884-e58115c2cc52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D")


//    >> .getAttribute is to get the Attribute information 

let ancher = document.querySelector("#ancher")
console.log(ancher.getAttribute("href"));


// >> removeAttribute is to remove attribute 

let chat = document.querySelector("#chat")
chat.removeAttribute("href")


    //  >> Step 3 - Create new Element by using js (Dynamically DOM)

let h1 = document.createElement("h1")
h1.textContent = ("This heading is create in the javascript by using createElement in dom manuplation")
document.querySelector("body").prepend(h1);   // So there are 2 term append and prepend. Append means at the bottom and prepend means on the top..  
   

    //  >> Step 4 - Style the content 

    let ab = document.querySelector(".sty")
    ab.style.color = "pink";
    

    // >> Adding the class which has some css property, also we can add any class without the css property 

    let stoins = document.querySelector(".stoins")
    stoins.classList.add("stoins")   // In this their are 3 words { add, remove, togggle}. toggle do that if class is adding in the html and it remove the class from the dom and if their is no class then it will add a class. 



    