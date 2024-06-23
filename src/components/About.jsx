import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assects/my/about.jpeg'; // Corrected 'assects' to 'assets'

const About = () => {
  return (
    <div id='about' className='pl-8 pr-8 md:pt-24 pt-6 md:pl-24 md:pr-24'>
      <h2 className='text-center font-bold text-4xl text-[#638889] pb-6 lg:text-5xl'>About Us</h2>
      <div className='lg:flex lg:justify-between md:gap-14'>
        <div>
          <img src={img1} alt='about' className='w-full md:pt-4 md:h-full md:w-[3000px] h-[260px] object-contain' />
        </div>
        <div>
          <p className='md:text-xl lg:text-[22px] pt-4 md:pt-4 font-normal text-[17px]'>
            Welcome to our safari and rental services! We specialize in offering unforgettable Kumana Safari experiences for wildlife enthusiasts, and Lagoon Safari adventures for those interested in exploring the rich lagoon life. Our services are designed to bring you closer to nature, whether you're with family, friends, or loved ones.
            In addition to our safari tours, we provide convenient auto and bike rentals to enhance your journey through nature. Our aim is to make your outdoor exploration as enjoyable and accessible as possible.
          </p>
          <a href='#contact'>
            <div className='text-20px md:font-bold mr-4 pt-4 md:text-2xl md:pt-8'>
              <button className='rounded pb-2 text-white pt-2 pl-10 pr-10 bg-[#638889] font-semibold text-xl transition ease-in-out delay-150 hover:text-black hover:-translate-y-1 hover:scale-110 hover:bg-[#9DBC98] hover:font-bold duration-300'>Contact Us</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
