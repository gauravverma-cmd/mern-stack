import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-14 py-4'>
        <div className='w-10 h-10 '>
            <img className='w-fit' src="\public\images\contactUsLogo.png" alt="logo-image" />
        </div>
        <div className='flex gap-5 font-medium text-lg'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
    </div>
  )
}

export default Navbar