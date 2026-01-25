import React, { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Button = () => {
   const [theme,setTheme] =  useContext(ThemeDataContext)
  return (
    <div>
        <button onClick={()=> {
            setTheme('dark')
        }} className='btn'>Change Theme</button>
    </div>
  )
}

export default Button