import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      
      <Card user="Malina" age={23} img="https://images.unsplash.com/photo-1633153010796-6cf54b5daebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fDNkJTIwcmVuZGVyfGVufDB8fDB8fHww" details=" I am Melina, i am from Switzerland And I am a designer"/>
      <Card user="Anlip" age={45} img="https://images.unsplash.com/photo-1630857453903-0386bfb0d990?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" details=" I am Anlip, i am from South Asia And I'm a data analyst"/>
      <Card user="George" age={37} img="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHwzZCUyMHJlbmRlcnxlbnwwfHwwfHx8MA%3D%3D" details=" I am George , i am from Hamilton And I am a software developer"/>
    </div>
  )
}

export default App