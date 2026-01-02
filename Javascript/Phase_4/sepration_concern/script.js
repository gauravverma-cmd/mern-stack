    // <!-- Sepration_concern - Dom and Logic code can be write seprately  -->

    const btn  = document.querySelector("button")
    const ul  = document.querySelector("ul")

     function add(n1 , n2){
        return n1+ n2;          // so this is the logical code
     }
  

    btn.addEventListener("click",()=>{
         const num1 = Math.floor(Math.random() * 10);
         const num2 = Math.floor(Math.random() * 10);
        let finalAdd = add(num1, num2)                   // this is a dom code
         let li  = document.createElement("li");
         li.textContent = finalAdd;
         ul.appendChild(li) 
    })