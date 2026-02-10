import React from 'react'

const AcceptTask = () => {
  return (
<div className="h-full w-95 p-7 shrink-0 rounded-2xl bg-cyan-900 flex flex-col justify-between gap-4">
  <div>
        <div className="flex items-center justify-between">
          <h3 className="bg-red-600 px-3 py-1 rounded">Accept Task</h3>
          <h4>5 Feb 2026</h4>
        </div>
        <h2 className="text-3xl font-semibold mt-13">Complete this project</h2>
        <p className="mt-3 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
  </div>
        <div className='flex justify-between mt-7'>
            <button className='py-1 px-2 text-sm bg-green-700'>Mark as Accpeted</button>
            <button className='py-1 px-2 text-sm bg-red-700'>Mark as Failed</button>
        </div>
      </div>  )
}

export default AcceptTask