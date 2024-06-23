import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6"; 
import { FaLocationDot } from "react-icons/fa6";

import backgroundImage1 from '../assects/my/body1.jpg';
import backgroundImage3 from '../assects/my/bg3.jpeg';
import backgroundImage4 from '../assects/my/body3.jpg';
import backgroundImage5 from '../assects/my/body4.webp';

const email = 'mosesnirupan@gmail.com';
const phoneNumber = '+94779549474';

const Home = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgroundImages = [backgroundImage1, backgroundImage3,backgroundImage4,backgroundImage5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div id='home'>
      <div
        className="bg-cover bg-center text-white w-auto h-auto"
        style={{ backgroundImage: `url(${backgroundImages[currentBgIndex]})` }}
      >
        <div className='pl-6 pr-6 md:flex-col lg:justify-between lg:grid lg:grid-cols-2 md:pr-24 md:pl-24'>
          <div className=''>
            <div className='text-3xl font-bold md:text-5xl pt-24 md:pt-44'>Join Us in Exploring Nature</div>
            <div className='bg-gradient-to-r from-orange-400 to-pink-600 text-transparent bg-clip-text text-[27px] md:text-6xl font-bold lg:pt-5 pt-2'>
              <TypeAnimation
                sequence={[
                  'Kumana Safari',
                  1000,
                  'Lagoon Safari',
                  1000,
                  'Tuk Tuk Safari & Rent',
                  1000,
                  'Scooty Rental',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>
            <p className='text-[17px] pt-2 md:text-[28px] text-bold md:pt-6 md:pb-3'>
              Welcome to A to Z Travels! Enjoy your trip with unbeatable prices and excellent services. Let us help you discover the beauty of nature like never before.
            </p>
            <div className='flex gap-2 md:gap-6 md:pt-6 pt-4 md:pb-44 pb-16'>
              <a href="https://web.facebook.com/people/Kumuna-Safari/100085533923355/?mibextid=ZbWKwL">
                <FaSquareFacebook className='border border-gray-400 w-8 h-6 md:w-12 md:h-10 md:pt-1 md:pb-1 rounded shadow-md shadow-orange-400 fill-current hover:bg-gradient-to-r from-orange-400 to-pink-600' />
              </a>
              <a href="https://www.instagram.com/kumuna_safari?igsh=ZGUzMzM3NWJiOQ==">
                <FaSquareInstagram  className='border border-gray-400 w-8 h-6 md:w-12 md:h-10 md:pt-1 md:pb-1 rounded shadow-md shadow-orange-400 hover:bg-gradient-to-r from-orange-400 to-pink-600' />
              </a>
              <a href={`https://wa.me/${phoneNumber}`} target='_blank' rel='noopener noreferrer'>
                <FaWhatsapp className='border border-gray-400 w-8 h-6 md:w-12 md:h-10 md:pt-1 md:pb-1 rounded shadow-md shadow-orange-400 hover:bg-gradient-to-r from-orange-400 to-pink-600' />
              </a>
              <a href='https://maps.app.goo.gl/sZquw1GYvKmDXGpE9'>
                <FaLocationDot className='border border-gray-400 w-8 h-6 md:w-12 md:h-10 md:pt-1 md:pb-1 rounded shadow-md shadow-orange-400 hover:bg-gradient-to-r from-orange-400 to-pink-600' />
              </a>
              <a href={`mailto:${email}`}>
  <SiGmail className='border border-gray-400 w-8 h-6 md:w-12 md:h-10 md:pt-1 md:pb-1 rounded shadow-md shadow-orange-400 hover:bg-gradient-to-r from-orange-400 to-pink-600' />
  </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
