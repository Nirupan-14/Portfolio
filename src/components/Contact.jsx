import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const email = 'Kepirasath@gmail.com';
const phoneNumber = '+94779549474';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c5fu26b', 'template_w69hipp', form.current, 'Criw2AmfqfyxSKPmk')
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          showMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log('Failed to send email:', error);
          showMessage("Failed to send email. Please try again later.");
        }
      );
  };

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  return (
    <div className='md:pt-24 pt-6' id='contact'>
      <h2 className='flex justify-center font-bold text-4xl text-[#638889] pb-8 lg:text-5xl'>Contact Us</h2>
      <div className='pl-8 pr-8 lg:px-[300px] md:px-[74px]'>
        <div className='bg-slate-100 rounded-md shadow-lg hover:shadow-orange-400 mb-6 h-auto'>
          <div>
            <p className='md:text-[19px] pl-2 pb-2 md:pl-14 font-semibold mb-3 md:pt-8 pt-4'>
              For more inquiries and detailed information about A to Z Travels, please reach out to us. We're here to help you plan the perfect journey.
            </p>
            <p className='text-start text-2xl font-bold md:pl-24 pl-5'>Place your order</p>
            <p className='text-start md:text-[19px] font-semibold md:pl-14 pl-2 pt-2 pb-3'>
              Ready to embark on an unforgettable adventure? Place your order today and let us take care of the rest.
            </p>
            <div className='flex-col md:pl-24 pl-5 text-center'>
              <p className='text-start text-2xl font-bold pb-2'>Contact Us</p>
              <a href={`https://wa.me/${phoneNumber}`} target='_blank' rel='noopener noreferrer'>
                <div className="flex items-center pb-2 md:pb-4 md:font-bold md:text-lg">
                  <FaWhatsapp className='border border-gray-400 w-8 h-6 rounded shadow-md shadow-orange-400 hover:bg-gradient-to-r from-orange-400 to-pink-600' />
                  <p className="ml-2 hover:text-orange-400 font-bold">{phoneNumber}</p>
                </div>
              </a>
              <a href={`mailto:${email}`}>
                <div className="flex items-center pb-4 md:font-bold md:text-lg">
                  <SiGmail className='border border-gray-400 w-8 h-6 rounded shadow-md shadow-orange-400 hover:bg-gradient-to-r from-orange-400 to-pink-600' />
                  <p className="ml-2 hover:text-orange-400 font-bold">{email}</p>
                </div>
              </a>
            </div>
            <p className='md:text-[19px] pl-2 pb-2 text-xl md:pl-14 mb-3 pt-4 font-bold'>
              Experience the difference with A to Z Travels!
            </p>
          </div>
        </div>
        {message && <div className="text-center font-bold text-red-500">{message}</div>}
      </div>
    </div>
  );
};

export default Contact;
