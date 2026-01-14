
const App = () => {
 localStorage.setItem('user','hokin')
 localStorage.setItem('age',32)
 localStorage.setItem('city', 'japan')

 localStorage.removeItem('city' )
//  localStorage.clear()  // TO clear all the details in the local Storage
 const user = localStorage.getItem('user')
 const age = localStorage.getItem('age')
 console.log(user);
 console.log(age);
 
 // Objects 
 const client = {
   username: "Relton",
   age: 32,
   neededJob: "yes"
 }

 localStorage.setItem("client",JSON.stringify(client))
 const endUser = JSON.parse(localStorage.getItem('client'))
 console.log(endUser)
 

 
  return (
    <div>App</div>
  )
}

export default App