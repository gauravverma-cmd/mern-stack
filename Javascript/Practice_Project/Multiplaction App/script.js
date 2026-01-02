  const num1 = Math.floor(Math.random()*10);
  const num2 = Math.floor(Math.random()*10);


  const questionEl = document.querySelector("#question")
  const inputEL = document.querySelector("#input")
  const formEl = document.querySelector("#form")
  const scoreEl = document.querySelector("#score");

  let score = JSON.parse(localStorage.getItem("score"));
  
  if(!score){
  score = 0;
 }

  scoreEl.textContent = `score: ${score}`
 
  questionEl.textContent = `What is ${num1} multilply by ${num2}`;
  

  const answerEL = num1 * num2; 

  formEl.addEventListener("submit",()=> {
      const userAns = +inputEL.value;
    if(userAns === answerEL){
        score++;
        updateLocalStorage();
    }  else{
      score--;
      updateLocalStorage();
    }

  })

  function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
  }