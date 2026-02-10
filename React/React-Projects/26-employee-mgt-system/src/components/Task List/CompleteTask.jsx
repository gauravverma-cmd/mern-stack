import React from 'react'

const CompleteTask = () => {
  return (
   <div className="h-full w-95 p-7 shrink-0 rounded-2xl bg-indigo-900 flex flex-col justify-between gap-4v">
   <div>
        <div className="flex items-center justify-between">
          <h3 className="bg-green-600 px-3 py-1 rounded">Completed Task</h3>
          <h4>3 Feb 2026</h4>
        </div>
        <h2 className="text-3xl font-semibold mt-13">API Integration</h2>
        <p className="mt-3 text-lg">Successfully connected backend APIs.</p>
   </div>
   <div>
    <button className='w-full'>Completed</button>
   </div>
      </div>
  )
}

export default CompleteTask