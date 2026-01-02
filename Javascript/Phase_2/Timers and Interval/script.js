//>> setTimeout - this is function used to delay the content write in it. It means kuch bhi data jo iss function k ander likha hua hai vo kuch time baad chlega. 


setTimeout(()=>{
    console.log("hyy this is setTimeout function");
},3000)   //This is a time which is write in milisecond 

//>> setInterval - This is also same as setTimeout but it repate it self in certain time period. 

setInterval(() => {
    console.log("this is setInterval");
}, 2000);


//>> clearTimeout -- to clear the setTimeout but in this we have to save our setTimeout in a variable. 

let ct = setTimeout(() => {
    console.log("this is made to show the clearTimeout")
}, 2000); 

clearTimeout(ct)

// >>clearInterval -  to clear the setInterval but in this we have to save our setInterval in a variable. 

let ci  = setInterval(() => {
    console.log("this is made to show the clearinterval")
}, 1000);

clearInterval(ci);
 