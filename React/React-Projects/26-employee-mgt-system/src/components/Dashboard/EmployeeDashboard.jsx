import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../Task List/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 h-screen bg-[#1c1c1c]'>
        <Header data={data}/>
        <TaskListNumber data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard