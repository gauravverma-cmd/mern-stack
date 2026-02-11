import React from 'react'

const LeftHero = () => {
  return (
    <div className=' w-1/2'>
        <div className=' ml-32 mt-14'>
            <h1 className='text-8xl uppercase tracking-wide font-bold leading-[1.1]'>your feet <br /> deserve <br />the best</h1>
           <div className='mt-5 text-md w-[50vh] text-gray-700'><p>Your feet deserve the best, and that’s why our sports shoes are crafted for all-day comfort and performance. With a perfect balance of durability, grip, and lightweight design, they help you move confidently and effortlessly every day.</p> 
           </div> 
           <div className='flex gap-5 mt-5'>
            <button className='bg-red-600 text-white px-5 py-1 rounded font-bold text-lg active:scale-95'>Shop Now</button>
            <button className='border border-gray-500 border-2 px-5 py-1 rounded font-bold text-lg text-gray-500 active:scale-95'>Cateogry</button>
           </div>
           <h4 className='capitalize text-md text-gray-500 mt-6'>also avilable on </h4>
          <div className='flex gap-5 mt-4 items-center'>
            <img src="\public\images\flipkart.png" alt="" />
            <img src="\public\images\amazon.png" alt="" />
          </div>
     </div>
    </div>
  )
}

export default LeftHero