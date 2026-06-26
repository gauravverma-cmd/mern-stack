
import { useEffect, useRef, useState } from 'react'

import './App.css'
// useREf is basically to take the refrence and perform some action on it . like in js if we have to chnage something so we select the div by using querySlector then apply some property on it, same here we take the refrence from any div and chnaged its property
// useRef does not Re render when we do chnages in any variable but it persist the value 
// It can be useFull for both dom manuplation and like do chnaeges in value...

function App() {
 const [randomNumber, setRandomNumber] = useState(0);
 const renrenderCount = useRef(0);

 const generateRandomNumber = ()=> {
   const no = Math.floor(Math.random()*100)
   setRandomNumber(no)  
 }           
              // Ok so humne isme kya kra ki koi ek nyi state na bna kr humne useRef ka use kra jo kya krega jb jb state me chnaege hoag to useEfect chlega aur jb jb useEffect chlega tb tb useRef kaam krega jo ki rernder ka count dikhayega ki kitni baar useState rerender hua hai.  
              // ynha hmne useRef ka hi kyu use kra, jbki hum useState ka bhi to istemaal kr skte the, useState does not used bcz agr hum useEffect k ander useState ka use krege to jb jb useState chnaged hogi tb tb useEffect k ander wali useState bhi chnage hogi jo ki chnange hone pr baar baar render hogi aur chlti hi rhegi jisse value increse hoti hi rhegi renrenderCount ki iski vjha se ek loop create ho jaeyga , that's why we use the useRef instead of useState  
 useEffect(()=>{
  console.log("re render ho rha hai")
  renrenderCount.current += 1
 })


  return (
    <>
       <h1>{randomNumber}</h1>
       <h1>{renrenderCount.current}</h1>
       <button  onClick={generateRandomNumber}>Click</button>
    </>
  )
}

export default App
