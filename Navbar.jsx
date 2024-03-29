import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };

  return (
  <div className='navbar' id='navbar'>
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
      <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={35} />
      <div
        className={
          nav
            ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/50 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <a href='/rooms'><li className='font-bold text-3xl p-8'>Home</li></a>
          <a href='/'><li className='font-bold text-3xl p-8'>Destinations</li></a>
          <a href='/'><li className='font-bold text-3xl p-8'>Reservations</li></a>
          <a href='/'><li className='font-bold text-3xl p-8'>Amenities</li></a>
          <a href='/'><li className='font-bold text-3xl p-8'>Rooms</li></a>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;