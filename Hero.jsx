import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover  rounded-tr-full '
                 src='https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg'
                 alt='/'
      />
      <div className='bg-black/50 absolute top-0 left-0 w-full h-screen'/>
      <div className='absolute top-0 w-full h-full flex flex-col justify-content text-white'>
      <div className='md:left-[20%] max-w-[1100px] m-auto absolute p-14'>
      <p>All Inclusive</p>
      <h1 className='font-bold text-5xl md:text-7x1 drop-shadow-2x1'>
      Private Beaches & Getaways
      </h1>
      <p className='max-w-[1600px] drop-shadow-2x1 py-2 text-x1'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
      est, id consequuntur sequi ipsum vitae sit non exercitationem.
      </p>
      <button className='bg-black text-white font-bold '> Reserve Now </button>
      </div>
      </div>
      </div>

 );
};

export default Hero;