import React from 'react'

const Data = ({phoneDetails}) => {
  return (
    <div className='flex-1'>
                <h1>{phoneDetails.title}</h1>
                <p className='text-gray-400'>⭐{phoneDetails.rating} | {phoneDetails.reviews}</p>
                <ul className='ml-6 mt-5'>
                {phoneDetails.details.map((itmes,index)=>{
                  return (
                    <li key={index} className='list-disc'>{itmes}</li>
                  )
                })}
                </ul>
                <div className='flex flex-col gap-1 mt-3 text-green-500'>
                <p>{phoneDetails.offers.exchangeOffer}</p>
                <p>{phoneDetails.offers.bankOffer}</p>
                </div>
                </div>
  )
}

export default Data