import React from 'react'
import img1 from '../assects/my/img-about.png.jpeg';


const About = () => {
  return (
    <div id='About' className='pl-8 pr-8 md:pt-10 pt-6  md:pl-24 md:pr-24 '>

   <h2 className='text-center font-bold text-4xl bg-gradient-to-r from-orange-400 to-pink-600  text-transparent bg-clip-text  pb-6 lg:text-5xl'>About Me</h2>
     <div className='lg:flex  lg:justify-between md:gap-14 '>
      <div><img src={img1} alt='about' className=' w-full md:pt-4  md:h-full  md:w-[3000px] h-[260px] object-contain  '/>

      </div>
      <div className=' '>
        <p className='md:text-xl lg:text-[22px] pt-4 md:pt-4  font-normal text-[17px] '>I'm M. Nirupan, a React Developer passionate about continuous learning and growth. I specialize in frontend development using React and Tailwind CSS to create engaging user experiences. I thrive in collaborative environments, prioritizing communication and teamwork. With strong problem-solving skills and time management, I handle challenges with ease. I lead by example, fostering a supportive environment where everyone's contributions are valued. My interests range from frontend to backend development, full-stack development, and machine learning. Currently seeking an internship opportunity to further enhance my skills and contribute to innovative projects. 
        Let's connect and make a positive impact through technology!</p>
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