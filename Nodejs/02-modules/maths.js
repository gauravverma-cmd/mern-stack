
function add (a, b){
    return a+b
}

function sub(a, b){
    return a-b
}

module.exports = {
    addfnc : add,
    subfnc : sub
}

// So what we done in this file that first we made two functions add and sub. 
// Then we export them by using module.export 
// Though we have to export multiple functions we used a object method to export them  