import React, { useState } from 'react'
import axios from "axios";
const App = () => {
  const [userData, setUserData] = useState([])
  const getData = async () =>{
    const response = await axios.get('https://picsum.photos/v2/list?page=4&limit=30')
    setUserData(response.data)      
  }

  let printUserData = <p>No user available</p>
 
   if(userData.length>0){
    printUserData = userData.map((elem,idx)=>{
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
         <div className='h-60 w-70 overflow-hidden rounded-xl'>
         <img className='h-full w-full object-cover' src={elem.download_url}/>
         </div>
         <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
   }

  return (
    <div className='bg-black h-screen overflow-auto text-white p-4'>
       <button onClick={getData} className='bg-green-800 text-white px-17 py-5 rounded active:scale-95 mb-4 font-bold'>Get data</button>
       <div className='flex flex-wrap gap-4'>
        {printUserData}
       </div>
      </div>
)
}

export default App 