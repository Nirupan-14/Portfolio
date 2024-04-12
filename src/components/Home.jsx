import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import cvFile from "../assects/M.Nirupan-CV.pdf"
import img from "../assects/my/img1.png";


const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = cvFile;
  link.setAttribute('download', 'M.Nirupan-CV.pdf'); 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const email = 'mosesnirupan@gmail.com';
const phoneNumber = '+94773706824';

const Home = () => {
  return (
   
  <div className='' id='Home'>
    
    <div className='md:pl-14 pl-6 pr-6 lg:flex-col lg:justify-between md:grid md:grid-cols-2  ' >
     
    <div className=' items-center pt-20  md:pt-32 lg:hidden'>
    <img src={img} alt="Pentagon" width='700px' height='400px' class="   object-contain  lg:h-[540px] lg:w-[800px]" />
    </div>
    

   

   

      <div className=''>
        <div className='text-5xl font-bold md:text-8xl  pt-4 md:pt-44'>I'm a</div>
        
        <div className='  text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600  text-[27px] md:text-6xl font-bold lg:pt-5 pt-2' >
        <TypeAnimation
      sequence={[
       
        'Frondend Developer',
        1000, 
        'React Developer',
        1000,
        'Full-Stack Developer',
        1000,
        'Web Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>

    <p className='text-[15px] pt-2 lg:text-2xl lg:pt-6 lg:pb-3'>
    I am currently pursuing a Bachelor of Information Communication Technology specialized in Software Technology at the University of SriJayewardenepura.
  </p>

  <div className='flex justift-between gap-4  md:pt-6 pt-4 '>
  <a href='https://www.linkedin.com/in/moses-nirupan-786979299/'>
  <FaLinkedinIn className='border border-gray-400 w-8 h-6 md:w-12 md:h-10 rounded  shadow-md shadow-orange-400 fill-current hover:bg-gradient-to-r from-orange-400 to-pink-600' /> 
  </a>
  <a href='https://github.com/Nirupan-14'>
  <FaGithub className='border border-gray-400 w-8 h-6 md:w-12 md:h-10  rounded  shadow-md shadow-orange-400 hover:bg-gradient-to-r from-orange-400 to-pink-600' />
  </a>
  <a href={`https://wa.me/${phoneNumber}`} target='_blank' rel='noopener noreferrer'>
  <FaWhatsapp className='border border-gray-400 w-8 h-6 md:w-12 md:h-10  rounded  shadow-md shadow-orange-400 hover:bg-gradient-to-r from-orange-400 to-pink-600'/>
  </a>
  <a href={`mailto:${email}`}>
  <SiGmail className='border border-gray-400 w-8 h-6 md:w-12 md:h-10  rounded  shadow-md shadow-orange-400 hover:bg-gradient-to-r from-orange-400 to-pink-600' />
  </a>
  </div>
  <div className='text-20px  md:font-bold pt-6 mr-4  md:text-2xl md:pt-12 '>
  <button onClick={handleDownloadCV} className='  w-32 h-10 md:w-44 md:h-14  rounded-md   bg-cover hover:text-white bg-gradient-to-r from-orange-400 to-pink-600 shadow-orange-400 shadow-md'>Dowload CV</button>
  </div>

    </div>
    <div className=' items-center pt-20  md:pt-30 hidden lg:block'>
    <img src={img} alt="Pentagon" width='700px' height='400px' class="   object-contain  lg:h-[540px] lg:w-[800px]" />
    </div>
    </div>
    
    

    </div>

    
  )
}

export default Home
