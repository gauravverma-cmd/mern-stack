import { useState } from "react"

export const useCounter = (initialvalue) => {
   const [count, setCount] = useState(initialvalue)
    const increment =()=> {
      setCount(count+1)
  }
  const decrement = ()=> {
    setCount(count-1)
  }
  const setByValue = (val) => {
    setCount(val+count)
  }
  
  return {
      count,
      increment,
      decrement,
      setByValue, 
    }
}