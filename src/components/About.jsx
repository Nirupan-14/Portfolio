import React from 'react'
import img1 from '../assects/my/img-about.png.jpeg';


const About = () => {
  return (
    <div id='About' className='pl-8 pr-8 md:pt-10 pt-6'>

   <h2 className='text-center font-bold text-4xl bg-gradient-to-r from-orange-400 to-pink-600  text-transparent bg-clip-text  pb-6 lg:text-5xl'>About Us</h2>
     <div className='lg:flex-col lg:justify-between md:grid md:grid-cols-2'>
      <div><img src={img1} alt='about' className=' w-full  md:h-[360px]  h-[260px] object-contain'/>

      </div>
      <div className=' '>
        <p className='md:text-[20px] text-[18px] pt-4'>Hello! My name is M. Nirupan, and I'm passionate about being a React Developer. I have always been fascinated by React and Tailwind CSS. Whether it's Full-stack development or backend development,
           I always strive to learn and grow in every aspect of my life. Outside of coding, I enjoy spending time with friends and family, exploring new places, and reading about technology trends. 
          I believe in continuous learning and the power of teamwork in achieving goals. I'm dedicated to making a positive impact in the tech community by contributing to open-source projects and mentoring aspiring developers. I'm excited to connect, learn, and share experiences with like-minded individuals who are also passionate about React and web development. Let's embark on this journey together!</p>
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