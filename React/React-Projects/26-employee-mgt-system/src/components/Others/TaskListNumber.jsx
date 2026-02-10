import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex  mt-10 justify-between gap-5'>
        <div className='bg-red-400 rounded-2xl w-[45%] px-9 py-6'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h1 className='text-2xl font-medium'>New Task</h1>
        </div>
        <div className='bg-amber-400 rounded-2xl w-[45%] px-9 py-6'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h1 className='text-2xl font-medium'>New Task</h1>
        </div>
        <div className='bg-blue-400 rounded-2xl w-[45%] px-9 py-6'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h1 className='text-2xl font-medium'>New Task</h1>
        </div>
        <div className='bg-green-400 rounded-2xl w-[45%] px-9 py-6'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h1 className='text-2xl font-medium'>New Task</h1>
        </div>
    </div>
  )
}

export default TaskListNumber