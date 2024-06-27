import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const HomePageComponent = ({name, src}) => {
  return (
    <div className='flex flex-col gap-4 w-[28rem] rounded-2xl text-[#97969a] border duration-200 border-[#3c434b] bg-[#1C2025] hover:shadow-md hover:shadow-[#827c8b] cursor-pointer'>
        <div className='flex justify-between items-center w-full px-3 pt-3'>
            <h1 className='text-white'>{name}</h1>
              <FaExternalLinkAlt />
        </div>
      <div className='w-full bg-[#131317] rounded-b-2xl'>
              <img className='rounded-b-2xl' src={src} alt="Element image" />
        </div>
    </div>
  )
}

export default HomePageComponent