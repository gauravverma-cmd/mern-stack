// Question 1 => Select all the <li> Element and print their text using loop. 

let lies = document.querySelectorAll("li"); 
lies.forEach(function (val){
   console.log(val.textContent)
});

//  Question 2 => Add a title attribute to a div dynamically 

let title = document.querySelector(".addTitle")
title.setAttribute("title", "this is information")