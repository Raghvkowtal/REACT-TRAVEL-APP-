import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        <div>
          <h6 className='font-bold uppercase pt-2'>Solutions</h6>
          <ul>
            <a href='/'><li className='py-1'>Travel</li></a>
            <a href='/'><li className='py-1'>Booking</li></a>
            <a href='/'><li className='py-1'>Flights</li></a>
            <a href='/'><li className='py-1'>Cruises</li></a>
            <a href='/'><li className='py-1'>Ground</li></a>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Support</h6>
          <ul>
            <a href='/'><li className='py-1'>Pricing</li></a>
            <a href='/'><li className='py-1'>Documentation</li></a>
            <a href='/'><li className='py-1'>Tours</li></a>
            <a href='/'><li className='py-1'>Refunds</li></a>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Company</h6>
          <ul>
            <a href='/'><li className='py-1'>About</li></a>
            <a href='/'><li className='py-1'>Blog</li></a>
            <a href='/'><li className='py-1'>Jobs</li></a>
            <a href='/'><li className='py-1'>Press</li></a>
            <a href='/'><li className='py-1'>Partners</li></a>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2'>Legal</h6>
          <ul>
            <a href='/'><li className='py-1'>Claims</li></a>
            <a href='/'><li className='py-1'>Privacy</li></a>
            <a href='/'><li className='py-1'>Terms</li></a>
            <a href='/'><li className='py-1'>Policies</li></a>
            <a href='/'><li className='py-1'>Conditions</li></a>
          </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletters</p>
          <p className='py-4'>
            The Latest deals, articles and resources sent to your inbox weekly.
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input className='text-black w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter your email..' />
            <button className='p-2 mb-4 rounded-mb'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2022 Experiences, LLC. All rights reserved to Raghavendra</p>
        <div className='flex justify-between sm:w-[300px] pt-4  pl-0 text-2xl'>
          <button><a href='/'><FaFacebook /></a></button>
          <button><a href='/'><FaInstagram /></a></button>
          <button><a href='/'><FaTwitter /></a></button>
           <button><a href='/'><FaLinkedin /></a></button>
          <button><a href='/'><TiSocialPinterest size={30} /></a></button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
