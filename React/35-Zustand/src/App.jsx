import './App.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {

  return (
    <div>
      <Navbar />
    </div>
  )
}
export default App


{/*


//  so zustand k data store ki jaise kaam krta hai, Ye kisi bhi data ko ek jngha store kr leta hai fir hum uss data ko khi bhi use kr skte hai kisi bhi component me, Just create ans use... Its like similar to contextAPI bs contextAPI me hme create krne k baad provide bhi krna hota hai aur zustand me bs create krne k baad simply hm ise use kr skte hai isme kuch bhi provide nahi krna hota. 

  Global State (Store)

  App
  Navbar
  Home
  About
  Footer
  Card



  Create Store
  Use Store
  
*/}

{/*

  1. create -> use
  2. set karne ke liye --> set(), and get karne ke liye --> get()
  3. subscription is directly dependent to rerender
  4. Pure store ka subscription ek baari me nahi lena hai (performance down ho jaayega)
  5. middlewares use kar skte ho
  6. persist middleware --> to save date into local or session storage
  7. devtools middleware --> visual representation of state and actions
  
*/}