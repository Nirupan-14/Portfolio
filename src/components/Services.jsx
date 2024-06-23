import React from 'react';
import safaari from '../assects/my/safaari.jpeg';
import auto from '../assects/my/auto.jpeg';
import lagoon from '../assects/my/lagoon1.jpg';
import scooty from '../assects/my/scooty.jpeg';

const Services = () => {
  return (
    <section className='pl-6 pr-6 pt-8 md:pt-24' id='services'>
      <p className='my-2 text-5xl text-[#638889] font-bold text-center pb-8'>Our Services</p>
      <div className='lg:grid lg:grid-cols-3 lg:gap-12 my-3 md:px-[74px]'>
        
        {/* Kumana Safari */}
        <div className='md:w-auto mb-8 shadow-md hover:shadow-orange-400 hover:bg-[#F9EFDB]'>
          <div className='bg-cover rounded-md w-full' style={{ backgroundImage: `url(${safaari})`, height: '320px' }}></div>
          <div className='pl-2 pr-2 text-center'>
            <div className='pt-6 md:pt-4 md:text-2xl text-3xl font-bold'>Kumana Safari</div>
            <div className='pb-2  pt-4'>
              Experience the thrill of encountering wild animals up close by embarking on a journey through Kumana Safari.
            </div>
            <div className='pb-4 '>
              
              <p className='font-bold'>Only 16,000 from Arugam Bay to Kumana</p>
              <p className='font-bold'>Only 17,000 from Whisky Point to Kumana</p>
            </div>
            <div className='pb-4 lg:pt-6'>
              <a href='#contact'>
                <button className='rounded pb-2 text-white pt-2 pl-10 pr-10 bg-[#638889] font-semibold text-xl transition ease-in-out delay-150 hover:text-black hover:-translate-y-1 hover:scale-110 hover:bg-[#9DBC98] hover:font-bold duration-300' tabIndex='0'>
                  Contact us
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Tuktuk Safari & Rental */}
        <div className='md:w-auto mb-8 shadow-md hover:shadow-orange-400 hover:bg-[#F9EFDB]'>
          <div className='bg-cover rounded-md w-full' style={{ backgroundImage: `url(${auto})`, height: '320px' }}></div>
          <div className='pl-2 pr-2 text-center'>
            <div className='pt-6 md:pt-4 md:text-2xl text-3xl font-bold'>Tuktuk Safari & Rental</div>
            <div className='pb-2  pt-4'>
              Rent a tuk-tuk and explore the beauty of Sri Lanka! Convenient and affordable tuk-tuk rentals available now. Book yours today for an unforgettable adventure!
            </div>
            <div className=' font-bold pb-4 '>
              <p>Rent a tuk-tuk for just 5,000 per day</p>
              <p>Contact us for tuk-tuk services with a driver</p>
            </div>
            <div className='pb-4'>
              <a href='#contact'>
                <button className='rounded pb-2 text-white pt-2 pl-10 pr-10 bg-[#638889] font-semibold text-xl transition ease-in-out delay-150 hover:text-black hover:-translate-y-1 hover:scale-110 hover:bg-[#9DBC98] hover:font-bold duration-300' tabIndex='0'>
                  Contact us
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Lagoon Safari */}
        <div className='md:w-auto mb-8 shadow-md hover:shadow-orange-400 hover:bg-[#F9EFDB]'>
          <div className='bg-cover rounded-md w-full' style={{ backgroundImage: `url(${lagoon})`, height: '320px' }}></div>
          <div className='pl-2 pr-2 text-center'>
            <div className='pt-6 md:pt-4 md:text-2xl text-3xl font-bold pb-6'>Lagoon Safari</div>
            <p className='pb-2'>
              Experience the Beauty of Nature with Our Lagoon Safari!
            </p>
            <p className='font-bold pb-4 '>Only 1500 per person.</p>
            <div className='pb-4 lg:pt-16'>
              <a href='#contact'>
                <button className='rounded pb-2 text-white pt-2 pl-10 pr-10 bg-[#638889] font-semibold text-xl transition ease-in-out delay-150 hover:text-black hover:-translate-y-1 hover:scale-110 hover:bg-[#9DBC98] hover:font-bold duration-300' tabIndex='0'>
                  Contact us
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Bike Rental */}
        <div className='md:w-auto mb-8 shadow-md hover:shadow-orange-400 hover:bg-[#F9EFDB]'>
          <div className='bg-cover rounded-md w-full' style={{ backgroundImage: `url(${scooty})`, height: '320px' }}></div>
          <div className='pl-2 pr-2 text-center'>
            <div className='pt-6 md:pt-4 md:text-2xl text-3xl font-bold'>Bike Rental</div>
            <div className='pb-4 pt-4'>
              Ready to ride your way to adventure? Our bike rentals offer the perfect opportunity to explore Sri Lanka on two wheels. From scenic trails to bustling city streets, there's no limit to where your bike can take you.
            </div>
            <div className='pb-4 font-bold  text-center'>
              
              <p>Rent a bike for only 2,000 per day</p>
            </div>
            <div className='pb-4  pt-4'>
              <a href='#contact'>
                <button className='rounded pb-2 text-white pt-2 pl-10 pr-10 bg-[#638889] font-semibold text-xl transition ease-in-out delay-150 hover:text-black hover:-translate-y-1 hover:scale-110 hover:bg-[#9DBC98] hover:font-bold duration-300' tabIndex='0'>
                  Contact us
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;
