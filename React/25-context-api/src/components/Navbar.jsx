import React from 'react'
import Nav2 from './Nav2'
import { useState } from 'react'
import { useContext } from 'react'
import { postDataContect } from '../Context/ThemeContext'

const Navbar = (props) => {
   const data =  useContext(postDataContect)
   console.log(data);
   
   return (
    <div className='nav'>
        <h1>{data}</h1>
        <Nav2 theme={props.theme}/>
    </div>
  )
}

export default Navbar