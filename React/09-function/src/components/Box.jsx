import React from 'react'

const Box = () => {
  return (
    <div>
        <div onMouseMove={(elem)=>{
            console.log(elem.clientX);
            
        }} className='Box'></div>
    </div>
  )
}

export default Box