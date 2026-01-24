import React from 'react'

const Nav2 = (props) => {
  return (
    <div className='nav2'>
        <h2>Home</h2>
        <h2>Contact</h2>
        <h2>About</h2>
        <h2>Product</h2>
        <h2>{props.theme}</h2>
    </div>
  )
}

export default Nav2