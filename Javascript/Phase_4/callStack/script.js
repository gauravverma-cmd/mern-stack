// callStack - jb ek function ka kaam pura hojayga tb vo stack me se ht jayega.. Aur jb bhi function call hoga to vo stack me aajeyga...

function a(){
    console.log("a")
}
function b(){
    a();
    console.log("b")
}
function c(){
    b();
    console.log("c")
}


c();