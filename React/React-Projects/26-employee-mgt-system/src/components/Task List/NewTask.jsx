import React from 'react'

const NewTask = () => {
  return (
      <div className="h-full w-95 p-7 shrink-0 rounded-2xl bg-emerald-900 flex flex-col justify-between gap-4">
        <div>

        <div className="flex items-center justify-between">
          <h3 className="bg-yellow-600 px-3 py-1 rounded">New Task</h3>
          <h4>6 Feb 2026</h4>
        </div>
        <h2 className="text-3xl font-semibold mt-13">Fix dashboard bugs</h2>
        <p className="mt-3 text-lg">Resolve UI and responsiveness issues.</p>
        </div>
        <div>
            <button className='px-2 py-1 bg-amber-900'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask