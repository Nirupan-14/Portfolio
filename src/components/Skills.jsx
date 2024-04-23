import React from 'react'
import html from '../assects/icons/html.png';
import tailwindcss from '../assects/icons/tailwindcss.png';
import js from '../assects/icons/js.png';
import react from '../assects/icons/react.png';
import mdb from '../assects/icons/mdb.png';
import python from '../assects/icons/python.png';
import java from '../assects/icons/java.png';
import c from '../assects/icons/c.png';
import c1 from '../assects/icons/c#.jpg';
import mysql from '../assects/icons/mysql.png';
import github from '../assects/icons/github.png';




const Skills = () => {
  return (
    <div className='pl-8 pr-8 md:pt-10 pt-6 md:pl-24 md:pr-24' id='Skills'>
        <h2 className='text-center font-bold text-4xl     bg-gradient-to-r from-orange-400 to-pink-600  text-transparent bg-clip-text  pb-6 lg:text-5xl'>My Skills</h2>
        <div>
      <div className='grid grid-cols-3 gap-4 gap-y-4 md:gap-14 md:gap-y-14 md:text-4xl hover:shadow-orange-400 '>
       
       <div className='rounded-md shadow-md w-auto h-50  hover:shadow-orange-400 hover:bg-slate-100  '>
        <center><img   src={html} alt='html'  className='w-35 h-35 0bject-center  '/></center> 
         <p className='text-md  font-bold text-center pt-2'>HTML</p>
      </div>

      <div className='rounded-md shadow-md w-auto h-50 hover:shadow-orange-400 hover:bg-slate-100  '>
         <center><img   src={tailwindcss} alt='html'  className='w-35 h-35 0bject-cover '/></center>
         <p className='text-md font-bold text-center pt-2 md:pt-8'>Tailwind CSS</p>
      </div>

      <div className='rounded-md shadow-md w-auto h-50 hover:shadow-orange-400 hover:bg-slate-100  '>
        <center><img   src={js} alt='html'  className='w-35 h-35 0bject-cover'/></center> 
         <p className='text-md font-bold text-center pt-2 md:pt-8'>JS</p>
      </div>

      <div className='rounded-md shadow-md w-auto h-50 hover:shadow-orange-400 hover:bg-slate-100  '>
         <center><img   src={react} alt='html'  className='w-35 h-35 0bject-cover'/> </center>
         <p className='text-md font-bold text-center pt-2 md:pt-6'>React</p>
      </div>

      <div className='rounded-md shadow-md w-auto h-50 hover:shadow-orange-400 hover:bg-slate-100  '>
        <center> <img   src={mdb} alt='html'  className='w-35 h-35 0bject-cover'/> </center>
         <p className='text-md font-bold text-center pt-2 md:pt-10'>MongoDB</p>
      </div>

    
      <div className='rounded-md shadow-md w-auto h-50 hover:shadow-orange-400 hover:bg-slate-100 '>
         <center><img   src={python} alt='html'  className='w-35 h-35 0bject-cover'/> </center>
         <p className='text-md font-bold text-center pt-2 '>Python</p>
      </div>

      <div className='rounded-md shadow-md w-auto h-50 hover:shadow-orange-400 hover:bg-slate-100 '>
         <center><img   src={java} alt='html'  className='w-35 h-45 0bject-cover'/></center>
         <p className='text-md font-bold text-center  pt-6 '>java</p>
      </div>

      <div className='rounded-md shadow-md w-auto h-50 hover:shadow-orange-400 hover:bg-slate-100 '>
         <center><img   src={c} alt='html'  className='w-35 h-35 0bject-cover'/></center>
         <p className='text-md font-bold text-center pt-2 '>C</p>
      </div>

      <div className='rounded-md shadow-md w-auto h-50 hover:shadow-orange-400 hover:bg-slate-100 '>
      <center> <img   src={c1} alt='html'  className='w-35 h-35 0bject-cover'/></center>
         <p className='text-md font-bold text-center  pt-4 '>C#</p>
      </div>

      <div className='rounded-md shadow-md w-auto h- hover:shadow-orange-400 hover:bg-slate-100 '>
      <center> <img   src={mysql} alt='html'  className='w-35 h-35 0bject-cover'/></center>
         <p className='text-md font-bold text-center pt-2 '> MySQL</p>
      </div>

      <div className='rounded-md shadow-md w-auto h-auto hover:shadow-orange-400 hover:bg-slate-100 '>
      <center><img   src={github} alt='html'  className='w-35 h-35 0bject-cover'/></center>
         <p className='text-md font-bold text-center pt-2 '>GitHub</p>
      </div>

      </div>
     </div>

    </div>
    
  )
}

export default Skills