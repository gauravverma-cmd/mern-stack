import React from 'react'
import Data from './Data'

const Card = ({phoneDetails}) => {
  return (
    
      <div className='flex bg-[#282828] rounded-lg p-4'>
              {/* image */}
              <div className='w-1/4 flex items-center justify-center'>
              <img className="max-w-full h-auto" src={phoneDetails.image} alt={phoneDetails.title} /></div>
               {/* phone details */}
                <Data phoneDetails={phoneDetails}/>
                {/* phone price  */}
              <div className='flex flex-col justify-center mr-5 items-end'>
                <h1 className='text-2xl'>
                  {phoneDetails.price}
                  </h1>
                  <p className='text-gray-400 text-md line-through'>{phoneDetails.originalPrice}</p>
                  <p className='text-green-500 text-lg'>{phoneDetails.discount}</p>
                </div>
          </div>
    
  )
}

export default Card