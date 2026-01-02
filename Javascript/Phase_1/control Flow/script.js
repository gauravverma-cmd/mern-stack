// Condition ->

// if else- if else

let hour = 21;
if (hour < 12) {
  console.log("Good moring");
} 
 else if (hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good night");
}

// Switch =>

switch (2) {
  case 1:
    console.log("yes it's a case 1");
    break;
  case 2:
    console.log("yes it's a case 2");
    break;
  case 3:
    console.log("yes it's a case 3");
    break;
}

// Early return pattern
// In this code we haven't use the block of if and else code we just return the value directly

function getval(val) {
  if (val < 25) return "D";
  else if (val < 50) return "c";
  else if (val < 75) return "B";
  else return "A";
}
console.log(getval(33));

function getgrade(score) {
  if (score >= 90 && score <= 100) {
    return "Your grade is : A";
  } else if (score >= 80 && score <= 89) {
    return "Your grade is : B";
  } else if (score >= 70 && score <= 79) {
    return "Your grade is : C";
  } else if (score >= 60 && score <= 69) {
    return "Your grade is : D";
  } else if (score >= 50 && score <= 33) {
    return "Your grade is : E";
  } else if (score >= 0 && score <= 32) {
    return "Your are Fail";
  } else {
    return "Invalid Marks";
  }
}
console.log(getgrade(96));

// Rock , ppr , scissor game logic ...=> 
    function rps(user , computer){
     if (user === computer) return "draw";
     if(user === "rock" && computer ==="scissor") return "user";
     if(user === "ppr" && computer ==="rock") return "user";
     if(user === "scissor" && computer ==="ppr") return "user";

       return "computer";
    }

    console.log(rps("rock" , "rock"))