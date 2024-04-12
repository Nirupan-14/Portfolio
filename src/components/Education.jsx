import React from 'react'
import { IoSchoolSharp } from "react-icons/io5";


const Education = () => {
  return (
    <section className='pl-6 pr-6 pt-6 md:pt-10' id='Education'>
        <h2 className='text-center font-bold text-4xl  pb-6    bg-gradient-to-r from-orange-400 to-pink-600  text-transparent bg-clip-text   lg:text-5xl'>Education</h2>
        
        <div className='lg:grid lg:grid-cols-1 lg:gap-8   '>
        <center>
        <div className='rounded-md gap-8 shadow-lg text-center my-2  hover:shadow-orange-400 h-[380px] lg:h-[450px] lg:w-[400px] bg-slate-100'>
        <div class="mb-4">
            <center><IoSchoolSharp className='item-center font-bold size-20  lg:text-7xl ' /></center>
            <p className=' text-3xl font-bold pt-2 lg:pt-5 lg:text-4xl '> BICT Honors</p>
            <p class="text-lg font-semibold pt-2 pb-12 lg:text-2xl lg:pt-3">Specialization in Software Technology</p>
            <p class="text-2xl font-bold pt-6  lg:text-3xl lg:pt-10"> University of SriJayewardenepura</p>
            <p class="text-lg font-bold pt-2 lg:text-2xl lg:pt-3">Duration: [2021] - [2025]</p>
        </div>
        </div>
        </center>
    
        </div>
        
    </section>
  )
}

export default Education