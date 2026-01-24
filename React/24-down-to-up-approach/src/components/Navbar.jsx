import React from 'react'

const Navbar = (props) => {
 
 const changeTheme = () => {
    props.setTheme("dark")
 }
  return (
    <div>
        <button onClick={changeTheme}>Change theme</button>
    </div>
  )
}

export default Navbar