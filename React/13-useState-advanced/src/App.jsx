import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({username:'Harhsita', age:23})
  const btnCliked = ()=>{
      const Newuser = {...user}
      Newuser.username = "Sneao";
      Newuser.age = 21;
      setUser(Newuser)
  }

  const [arry, setarry] = useState([10,12,34])
  const chnageArray = ()=> {
    // const newArry = [...arry]
    // newArry.push(87)  when we want to chnage only specific digit or number 
    // setarry(newArry)   
    setarry([3,5,6]) // when we want to change the whole array
  }
  return (
  <div>
       <h1>{user.username},{user.age}</h1>
       <button onClick={btnCliked}>click</button>
       <button onDoubleClick={()=>{
        const latestUser = {...user}
        latestUser.username = "Nimo"
        latestUser.age = 23 
        setUser(latestUser)
       }}>Double click </button>
      <div>


        <h1>{[arry]}</h1>
        <button onClick={chnageArray}>Chnage the array </button>
      </div>
  </div>
  )
};

export default App;
