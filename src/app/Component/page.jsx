import React from 'react'
import Code from '../components/Code'
import CardUi from './Components/CardUi'
import Cards from './Components/Cards'

const page = () => {
  return (
    <>
    <div className='md:p-7'>
        <h1 className="text-[#ffff] font-bold md:text-[3.5rem] max-md:text-[2.5rem] max-md:text-center max-md:mt-5">CUI components</h1>
          <p className="text-[#9a989c] text-[1rem] max-md:text-center">Every Material UI component available so far.</p>
 
          <div className="flex justify-center mt-5 w-full">
              <div className='flex flex-col items-center gap-3 xl:w-[85%] lg:w-[95%] max-lg:w-[85%] max-md:w-[75%] max-sm:w-[95%] py-5 bg-[#131719] rounded-xl border border-[#20262A] shadow-inner shadow-[#1d2125]'>
                <div className='flex justify-between items-center w-full px-7'>
                  <h1 className='text-[#c5c6c7] text-sm  bg-[#1c2025] py-1 px-1 rounded-lg'>JSX</h1>
                  <button className='text-white text-sm border-[1px] hover:border-[#202529] border-[#4b5763] bg-[#1c2025] hover:bg-[#39414b] transition duration-200 py-[4px] px-[10px] rounded-lg'>Copy Code</button>
                </div>
                  <div className='flex max-lg:flex-col max-lg:gap-6 md:justify-around items-center max-md:flex-col w-full'>
                    <CardUi />
                    <div className='max-md:hidden'>
                    <Code code={
        `<div className='flex flex-col items-center gap-3 w-[25rem] rounded-2xl px-3 py-3 text-white border duration-200 border-[#3c434b] bg-[#1C2025] hover:shadow-md hover:shadow-[#827c8b] cursor-pointer'>
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
                        </div>`}/>
                      </div>
                </div>
              </div>
      </div>
    </div>
    <p className='text-[#9a989c] text-[1rem] max-md:text-[0.8rem] pb-[3rem] md:px-[7rem] text-center border-b-2 border-[#5a5861] max-md:mt-5 max-md:px-5'>CUI aims to provide building blocks for developers to create great user interfaces using the Components Design guidelines as a reference, which we strive to follow where practical. </p>
      
    <div className='text-white w-full flex flex-col items-center pb-5'>
      <div className='p-4'>
        <h1 className='text-[#ffff] font-bold md:text-[2rem] max-md:text-[2rem]'>Inputs</h1>
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6'>
          <Cards name="Name" src="input.png" />
           <Cards name="Name" src="input.png" />
           <Cards name="Name" src="input.png" />
           <Cards name="Name" src="input.png" />
           <Cards name="Name" src="input.png" />
           <Cards name="Name" src="input.png" />
           <Cards name="Name" src="input.png" />
           <Cards name="Name" src="input.png" />
        </div>
    </div>                

      </>
  )
}

export default page