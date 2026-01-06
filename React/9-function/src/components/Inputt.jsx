import React from 'react'

const Inputt = () => {
    const aply =(val)=> [
        console.log(val)
    ]
  return (
    <div>
        <input onChange={(elem)=>{
            aply(elem.target.value)
        }} type="text" placeholder='Enter details..' />
    </div>
  )
}

export default Inputt