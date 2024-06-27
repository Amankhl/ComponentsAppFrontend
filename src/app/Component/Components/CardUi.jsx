import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import { RiShareFill } from "react-icons/ri";
const CardUi = () => {
  return (

          <div className='flex flex-col items-center gap-3 md:w-[25rem] max-md:w-[20rem]  rounded-2xl px-3 py-3 text-white border duration-200 border-[#3c434b] bg-[#1C2025] hover:shadow-md hover:shadow-[#827c8b] cursor-pointer'>
              <div className='flex justify-between items-center w-full text-xl'>
                  <div className='flex items-center gap-3'>
                        <div className='w-[2.5rem] h-[2.5rem] py-1 text-center rounded-full bg-[#e9d1ff] text-[#353535] font-semibold text-2xl'>A</div>
                        <h1 className='text-white'>Adam Michelle</h1>
                  </div>
                  <button><BsThreeDotsVertical /></button>
              </div>
                  <img className='w-full rounded' src="car.png" alt="Element image" />
                  <div>
                    <p className='text-sm text-[#d5d3d6]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente tempore aliquid ex quod dolor id ut facilis, perferendis porro!</p>
                    <div className='text-3xl flex justify-between items-center mt-3'>
                      <button><GoHeartFill /></button>
                      <button><RiShareFill /></button>
                    </div>

                  </div>
          </div>
  )
}

export default CardUi