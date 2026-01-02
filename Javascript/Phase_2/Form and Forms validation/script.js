let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit",(val)=>{
    val.preventDefault();
    if(nm.value.length <= 2){
        document.querySelector("#hide").style.display = "block"
    }
    else {
        document.querySelector("#hide").style.display = "none"

    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // these are the some terms and condition of the email
    let test = emailRegex.test("perrty@test.com")  // to chehck the value is valid or not 
    console.log(test)
})


// create a emial password validator -- to do in future 