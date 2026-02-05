import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium capitalize'>hello <br /> <span className='text-3xl font-semibold capitalize'>gaurav 👋🏻</span></h1>
        <button className='bg-red-600 rounded px-5 py-2 font-medium active:scale-95 text-white text-lg'>log out</button>
    </div>
  )
}

export default Header