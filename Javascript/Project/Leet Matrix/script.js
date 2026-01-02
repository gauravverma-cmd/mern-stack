document.addEventListener("DOMContentLoaded",()=> {
    const searchBtn = document.querySelector("#search-btn")
    const userInput = document.querySelector("#user-input")
    const StatsContaoner = document.querySelector(".stats-conatiner")
    const easyProgressCicrcle = document.querySelector(".easy-progress")
    const mediumProgressCircle = document.querySelector(".medium-progress")
    const hardProgressCircle = document.querySelector(".hard-progress")
    const easyLabel = document.querySelector("#easy-label")
    const mediumLabel = document.querySelector("#medium-label")
    const hardLabel = document.querySelector("#hard-label")
    const statsCard = document.querySelector(".stats-card")
  
    function checkvalidateUsername(){
        if(username.trim() === ""){
            alert("Username should not be empty")
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching){
            alert("Invalid username")
        }
        return isMatching;



    } 
     
  async function fetchuserDetails(username){
    
  } 
 
    searchBtn.addEventListener('click',function(){
        const username = userInput.value;
        console.log("you are logged into: ", username)
        if(checkvalidateUsername(username)){
         fetchuserDetails(username);
        }
    })
})

