import { useEffect, useState } from "react"

const App = () => {
  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(0)
  const numm1 = () => {
    setnum1(num1 +1)
  }
  const numm2 =() =>{
    setnum2(num2 +10)
  }
  function num1changed(){
    console.log('the value of num1 is changed')
  }

  function num2changed(){
    console.log('the value of num2 is chnaged')
  }
   useEffect(function(){
    num1changed()
   },[num1])

   useEffect(()=>{
    num2changed()
   },[num2])
   
  return (
    <div>
      <div>
        <h1>Num is {num1}</h1>
        <h1>Num is {num2}</h1>
      </div>
      <button onClick={numm1}>Click</button>
      <button onDoubleClick={numm2}>Double click</button>
    </div>
  )
}

export default App