import React from 'react'

const Form = () => {
  return (
    <div className='ml-24 w-2/3'>
      <div className='w-full'>
      <div className='flex gap-4 w-full justify-between '>
        <button className='bg-black text-gray-100 px-14 py-2 text-md capitalize rounded'>via support chat</button>
        <button className='bg-black text-gray-100 px-14  py-2 text-md capitalize rounded'>via call chat</button>
      </div>
        <button className='border-2 w-full mt-3 py-2 text-lg font-bold capitalize rounded'>via email form</button>
      </div>
    </div>
  )
}

export default Form