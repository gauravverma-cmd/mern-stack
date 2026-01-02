// fetch("https://api.thecatapi.com/v1/images/search")
// .then((rawdata)=>{
//  return rawdata.json()
// })
// .then((data)=>{                      // ya to aise likh lo 
// console.log(data[0].id)
// })
// .catch((err)=>{
//     console.log(err)
// })


fetch("https://api.thecatapi.com/v1/images/search")
.then(raw => raw.json())
.then(data => console.log(data[0].id," :this is id"))   // ya aise likh lo 
.catch((err) => {
    console.log(err)
})

fetch("https://randomuser.me/api/")
.then(raw => raw.json())
.then(data => console.log(data.results[0].name.first," :this is username"))   // ya aise likh lo 
.catch((err) => {
    console.log(err)
})