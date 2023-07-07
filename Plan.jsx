import React from 'react';


const Plan = () => {
  return (
  <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
  <div className='grid grid-cols-2 grid-rows-6 h-[80vh] '>
 <img
          className='row-span-3 object-cover w-full h-full hover:scale-110 p-0 border-4 border-black rounded-tl-full'
          src='https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full  hover:scale-110 p-0 border-4 border-black rounded-tr-full '
          src='https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full  hover:scale-110 p-0 border-4 border-black '
          src='https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80'
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2 rounded-bl-full  hover:scale-110 p-0 border-4 border-black'
          src='https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2 rounded-br-full  hover:scale-110 p-0 border-4 border-black'
          src='https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80'
          alt='/'
        />
        </div>
        {/*Right Side */}
        <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5x1 md:text-6x1 font-bold'>Plan Your Next Trip</h3>
        <p className='text-2x1 py-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
                  nam?
        </p>
        <p className='pb-6'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  voluptates nostrum dolorum reprehenderit error! Doloribus est illo
                  eius saepe? Molestias sapiente perspiciatis doloribus consectetur
                  nihil facilis aliquid eaque vel quisquam.
        </p>
        <div>
        <button className='m-5 '>
        LEARN MORE
        </button>
        <button className='bg-black text-white border-black transform motion-safe:hover:scale-110 sm:motion-safe'>
        Book Your Trip
        </button>
       </div>
      </div>
     </div>
 );
};


export default Plan;