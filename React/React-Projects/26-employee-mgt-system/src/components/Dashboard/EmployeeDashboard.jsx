import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../Task List/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 h-screen bg-[#1c1c1c]'>
        <Header />
        <TaskListNumber />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard