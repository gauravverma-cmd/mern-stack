import React from 'react'

const Dice_Container = () => {
  return (
    <div className='flex justify-center mt-5'>
        <div className='flex flex-col gap-4 items-center'>
        <div className='cursor-pointer'><img src="\public\images\dice_1.png" alt="" /></div>
        <p className='text-2xl font-bold capitalize'>click on the dice to roll</p>
        <div className='flex flex-col gap-2 w-full mt-3'>
        <button className='w-full bg-transparent text-black border-2 rounded active:scale-95 cursor-pointer  font-bold text-lg py-3 capitalize'>reset score</button>
        <button className='w-full bg-black text-white border-2 rounded font-bold active:scale-95 cursor-pointer  text-lg py-3 capitalize'>show rules</button>
        </div>
        </div>
    </div>
  )
}

export default Dice_Container