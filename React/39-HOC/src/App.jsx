import React from 'react'
import withCardLook from './withCardLook'
import Alpha from './components/Alpha'
import Beta from './components/Beta'

const AlphaWithCardLook =  withCardLook(Alpha)
const BetaWithCardLook =  withCardLook(Beta)
const App = () => {
  // ReUse complex logic and complex UI
  return (
     <>
     <AlphaWithCardLook />
     <BetaWithCardLook />
     </>  
  )
}

export default App