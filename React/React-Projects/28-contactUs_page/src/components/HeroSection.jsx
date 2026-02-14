import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const HeroSection = () => {
  return (
    <div className='flex justify-between'>
        <LeftSection /> 
        <RightSection />
    </div>
  )
}

export default HeroSection