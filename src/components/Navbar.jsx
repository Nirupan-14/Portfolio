import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  const closeNav = () => {
    setOpen(false);
  };

  return (
    <div className='bg-[#638889] fixed top-0 w-full'>
      <nav className='flex justify-between pl-6 pr-6 h-16 px-12 items-center md:pl-24 md:pr-24'>
        <div className='text-2xl font-bold italic border-2 px-4 py-2 text-[#9DBC98]'>A to Z Travels</div>
        <div className={`lg:flex ${open ? 'block' : 'hidden'}`}>
          <div className='absolute left-0 top-[64px] items-center flex flex-col gap-6 w-full font-semibold text-xl lg:static lg:flex-row lg:justify-between'>
            <ul className='flex flex-col gap-4 lg:flex-row lg:gap-6 font-bold'>
              <a href='
              #home' onClick={closeNav}><li className='hover:text-white'>Home</li></a>
              <a href='#about' onClick={closeNav}><li className='hover:text-white'>About</li></a>
              <a href='#services' onClick={closeNav}><li className='hover:text-white'>Services</li></a>
              <a href='#contact' onClick={closeNav}><li className='hover:text-white'>Contact</li></a>
            </ul>
          </div>
        </div>
        <button onClick={toggleNav} className='lg:hidden'>
          <div><FaBars /></div>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
