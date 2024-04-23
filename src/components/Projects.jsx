
import React from 'react'
import img from '../assects/project/mini.png';
import img1 from '../assects/project/Stupack.jpeg';
import img2 from '../assects/project/bus.jpeg';

const Projects = () => {
  return (
    <div className=' md:pt-10 pt-6 ' id='Projects'>
        
          <h2 className='text-center font-bold text-4xl     bg-gradient-to-r from-orange-400 to-pink-600  text-transparent bg-clip-text  pb-6 lg:text-5xl'>Our Projects</h2>
    
          <div className='md:grid md:grid-cols-3 md:gap-16 my-3 md:mx-auto md:w-5/6 pl-8 pr-8'>

         <div className='rounded-md gap-8 shadow-lg text-center my-6 md:my-2 hover:shadow-orange-400 md:w-[360px] w-auto md:h-[500px] h-auto  bg-cover bg-center' >
          <div className='bg-cover' style={{backgroundImage: `url(${img})`, width: 'auto', height: '180px'}}></div>
         <div>
         <h3 className=' text-xl font-semibold pt-4 '>Mini E-commerce Website</h3>

         <p className='text-md  pl-2 pt-3 '>
          Explore a variety of products, search projects, and get detailed information with just a click. Our MERN stack-based website ensures a hassle-free shopping experience, powered by React.js, MongoDB, Express.js, Node.js, and styled with Bootstrap. 
        </p>
        <p className='pl-2 pt-1 font-semibold text-gray-800'>
        Visit the link below to check it out!
        </p >
        <a href='https://ecommerce-new-frontend.onrender.com/'><p className='text-blue-500 hover:text-blue-700 underline pl-2  md:text-normal text-sm'>https://ecommerce-new-frontend.onrender.com/
        </p>
        </a>

        <div className='text-20px font-bold mr-4 text-center pt-4 pb-4 '> <a href='https://www.linkedin.com/feed/update/urn:li:activity:7172301865894838273/'>
        <button  className='  w-32 h-10 rounded-md   bg-cover hover:text-white bg-gradient-to-r from-orange-400 to-pink-600 shadow-orange-400 shadow-md '>More Details</button> </a>
        </div>


         </div>
        </div>

        <div className='rounded-md gap-8 shadow-lg text-center my-6 md:my-2 hover:shadow-orange-400 md:w-[360px] w-auto md:h-[500px] h-auto bg-cover bg-center ' >
          <div className='bg-cover' style={{backgroundImage: `url(${img1})`, width: 'auto', height: '180px'}}></div>
         <div>
         <h3 className='text-xl font-semibold pt-4'>FOT Stupack Website</h3>
         
         <p className='text-md  pl-2 pt-3 '>
          
          Introducing the STUpack website - your go-to hub for academic success! Crafted with care by our team, it's tailored for students, offering easy access to grades and GPA insights. With sleek design and seamless navigation powered by Bootstrap and PHP, it's your key to a hassle-free academic journey. 

        </p>
       

        <div className='text-20px font-bold mr-4 text-center  pt-10  pb-4'> <a href='https://www.linkedin.com/feed/update/urn:li:activity:7151182596595433472/'>
        <button  className='  w-32 h-10 rounded-md   bg-cover hover:text-white bg-gradient-to-r from-orange-400 to-pink-600 shadow-orange-400 shadow-md 3'>More Details</button> </a>
        </div>


         </div>
        </div>

        <div className='rounded-md gap-8 shadow-lg text-center my-6 md:my-2 hover:shadow-orange-400 md:w-[360px] w-auto md:h-[500px] h-auto  bg-cover bg-center' >
          <div className='bg-cover bg-center' style={{backgroundImage: `url(${img2})`, width: 'auto', height: '180px'}}></div>
         <div>
         <h3 className='text-xl font-semibold pt-4'>School Bus Tracking System</h3>
         
         <p className='text-md  pl-2 pt-3 '>
         Introducing our School Bus Tracking System: a robust solution for ensuring safe school journeys. Developed by us, this system offers real-time bus location tracking via SMS or our app. Designed with reliability and efficiency in mind, it empowers parents with peace of mind. 
        </p>
        
       

        <div className='text-20px font-bold mr-4 text-center  pt-10 md:pt-16 pb-4 '> <a href='https://www.linkedin.com/posts/shankaran-giritharan-31029a273_myra-ensuring-safe-school-journeys-with-activity-7133768929121898496-yF0i?utm_source=share&utm_medium=member_desktop'>
        <button  className='  w-32 h-10 rounded-md   bg-cover hover:text-white bg-gradient-to-r from-orange-400 to-pink-600 shadow-orange-400 shadow-md'>More Details</button> </a>
        </div>

         
         </div>
        </div>


  






</div> 













</div>
    
    
    
  )
}

export default Projects