import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Cards = ({name, src}) => {
  return (
      <div className='flex flex-col gap-4 lg:w-[21rem] xl:w-[25rem] md:w-[20rem] sm:w-[14rem] max-sm:w-[18rem] rounded-2xl text-[#97969a] border duration-200 border-[#3c434b] bg-[#1C2025] hover:shadow-md hover:shadow-[#827c8b] cursor-pointer'>
          <div className='flex justify-between items-center w-full px-3 pt-3'>
              <h1 className='text-white'>{name}</h1>
              <FaExternalLinkAlt />
          </div>
          <div className='w-full bg-[#131317] rounded-b-2xl'>
              <img className='rounded-b-2xl' src='https://flowbite.com/images/application-ui-pages/email-reply-dark.svg' alt="Element image" />
          </div>
      </div>
       
  )
}

export default Cards