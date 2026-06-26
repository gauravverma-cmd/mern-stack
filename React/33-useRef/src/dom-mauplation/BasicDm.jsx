import { useRef } from 'react'

function App() {
const divRef = useRef()

const clickHandler = ()=> {
 divRef.current.style.backgroundColor = "blue"   
 divRef.current.style.borderRadius = "100%" 
}
  return (
    <>
      <div ref={divRef} className='bg-red-400 w-52 h-52 m-5'></div>
       <button  onClick={clickHandler}>Click</button>
    </>
  )
}

export default App