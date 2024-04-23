import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  const closeNav = () => {
    setOpen(false);
  };



  return (<div className='bg-[#de4646] fixed top-0 w-full' >
    <nav className='flex justify-between pl-6 pr-6 h-16 px-12 items-center md:pl-24 md:pr-24  '>
    <div className='text-2xl font-bold italic border-2 px-4 py-2 '>Niru</div>
   
    <div className={`lg:flex  ${open ? 'block' : 'hidden'}`}>
    <div className='absolute left-0 top-[64px] items-center flex flex-col  gap-6 bg-[#de4646] w-full font-semibold text-xl  lg:static lg:flex-row lg:justify-between ' >
      <ul className='flex flex-col  gap-4 lg:flex-row lg:gap-6 font-bold '>
       <a href='#Home'> <li className='hover:text-white '  onClick={closeNav}>Home</li> </a>
        <a href='#About'><li className='hover:text-white' onClick={closeNav}>About</li></a>
        <a href='#Education'><li className='hover:text-white' onClick={closeNav}>Education</li></a>
        <a href='#Skills'><li className='hover:text-white' onClick={closeNav}>Skills</li></a>
        <a href='#Projects'><li className='hover:text-white' onClick={closeNav}>Projects</li></a>
        <a href='#Contact'><li className='hover:text-white' onClick={closeNav}>Contact</li></a>
      </ul> 
    </div>
    </div>

    <button onClick={toggleNav} className='lg:hidden'>
    <div > <FaBars /></div> 
    </button>

    
  </nav>


     </div>
     
  )
}

export default Navbar