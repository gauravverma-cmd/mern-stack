import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {
 const [user, setUser] = useState(null)

 const handleLogin = (email,password)=>{
   console.log(email,password);
 }
 handleLogin()
  return (
    <>
      {!user ? <Login /> : " "}  
      {/* <EmployeeDashboard /> */}
     {/* <AdminDashboard /> */}
    </>
  )
}

export default App