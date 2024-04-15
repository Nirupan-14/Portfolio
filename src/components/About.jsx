import React from 'react'
import img1 from '../assects/my/img-about.png.jpeg';


const About = () => {
  return (
    <div id='About' className='pl-8 pr-8 md:pt-10 pt-6'>

   <h2 className='text-center font-bold text-4xl bg-gradient-to-r from-orange-400 to-pink-600  text-transparent bg-clip-text  pb-6 lg:text-5xl'>About Me</h2>
     <div className='lg:flex-col lg:justify-between md:grid md:grid-cols-2'>
      <div><img src={img1} alt='about' className=' w-full  md:h-[360px]  h-[260px] object-contain  '/>

      </div>
      <div className=' '>
        <p className='md:text-xl text-[16px] pt-4 md:pt-0 font-normal'>I'm M. Nirupan, a dedicated React Developer with a passion for continuous learning and growth. 
        My expertise lies in frontend development, where I leverage the power of React and Tailwind CSS to craft engaging user experiences. Beyond coding, I thrive in collaborative environments, valuing strong communication and teamwork. With a knack for problem-solving and time management, I navigate challenges with ease and adaptability. Leading by example, I believe in the importance of fostering a supportive environment where everyone's contributions are valued. My interests span across frontend development, backend development, full-stack development, and machine learning, where I find ample opportunities to innovate and create. Currently, I am actively searching for an internship opportunity to further enhance my skills and contribute to innovative projects.
         Let's connect and embark on this exciting journey together, making a positive impact through technology.</p>
          <a href='#Contact'>
          <div className='text-20px  md:font-bold  mr-4 pt-4  md:text-2xl md:pt-8 text-center '>
           <button className='  w-32 h-10 md:w-44 md:h-14  rounded-md   bg-cover hover:text-white bg-gradient-to-r from-orange-400 to-pink-600 shadow-orange-400 shadow-md'>Contact Me</button>
          </div>
          </a>

      </div>


     </div>

    </div>
  )
}

export default About