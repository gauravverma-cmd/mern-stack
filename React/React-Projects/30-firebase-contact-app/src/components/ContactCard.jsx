import React from 'react'

const ContactCard = ({contact}) => {
  return (
    <div className="bg-yellow-700 rounded-2xl m-4 flex items-center justify-between py-3 px-6" key={contact.id}>
      
      <i className="fa-solid fa-user invert text-2xl w-8"></i>
      
      <div className="text-white flex flex-col items-start ml-[40%] font-bold text-center text-lg flex-1 px-4">
        <h2 className="capitalize text-2xl">{contact.name}</h2>
        <h3>{contact.email ? contact.email : "No Email Found"}</h3>
      </div>

      <div className="flex gap-5 text-2xl w-16 justify-end">
        <i className="fa-solid fa-pen-to-square invert active:scale-110 cursor-pointer"></i>
        <i className="fa-solid fa-trash-can invert active:scale-110 cursor-pointer"></i>
      </div>

    </div>
  )
}

export default ContactCard