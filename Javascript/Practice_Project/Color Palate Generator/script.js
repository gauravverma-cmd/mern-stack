const generateBtn = document.querySelector(".generatw-btn");
const palatteContainer = document.querySelector(".palatte-container");
generateBtn.addEventListener("click", generatePalatte);

palatteContainer.addEventListener("click",  function(e){
if( e.target.classList.contains("copy-btn")){
    const hexValue = e.target.previousElementSibling.textContent;

    navigator.clipboard.writeText(hexValue)
    .then(()=> showResult(e.target))
    .catch((err)=> console.log(err))   
} else if(e.target.classList.contains("copy-btn")){
  const hexValue = e.target.nextElementSibling.querySelector(".hexa-value").textContent;
   navigator.clipboard.writeText(hexValue)
    .then(()=> showResult(e.target.nextElementSibling.querySelector(".copy-btn")))
    .catch((err)=> console.log(err))   
}

})
function showResult(element){
    element.classList.remove("far","fa-copy")
    element.classList.add("fas","fa-check")

    element.style.color = "#1CB5DF";

    setTimeout(() => {
        element.classList.remove("fas","fa-check")
        element.classList.add("far","fa-copy")

        element.style.color = "#947e7e"
    }, 1000);
}

function generatePalatte() {
  const colors = [];

  for (let i = 0; i < 5; i++) {
    colors.push(randomColorPalatte());
  }
  updateColorPalatte(colors)
}

function randomColorPalatte() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateColorPalatte(colors){
    const colorBoxes = document.querySelectorAll(".color-box")
    colorBoxes.forEach((box , index)=> {
    const color = colors[index]
    const colorDiv = box.querySelector(".color")
    const hexValue = box.querySelector(".hexa-value")

    colorDiv.style.backgroundColor = color;
    hexValue.textContent = color;
})
}

generatePalatte();