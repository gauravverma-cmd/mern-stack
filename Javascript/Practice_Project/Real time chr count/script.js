const textarea = document.querySelector(".textarea")
const totalCharacter = document.querySelector(".total-character");
const remainingCharacter = document.querySelector(".remaining-character")

textarea.addEventListener("keyup",()=> {
   updateCharacter()
})

   updateCharacter();


function updateCharacter(){
    totalCharacter.textContent=  textarea.value.length;
    remainingCharacter.textContent = textarea.getAttribute("maxlength") -textarea.value.length; 
}

