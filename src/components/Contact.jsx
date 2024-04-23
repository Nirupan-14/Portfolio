import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const email = 'mosesnirupan@gmail.com';
const phoneNumber = '+94773706824';

export const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c5fu26b', 'template_w69hipp', form.current, {
        publicKey: 'Criw2AmfqfyxSKPmk',
      })
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          setSent(true);
          showMessage("Message sent successfully!");
          // Clear input fields
          form.current.reset();
          // Hide message after 5 seconds
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        },
        (error) => {
          console.log('Failed to send email:', error);
          showMessage("Failed to send email. Please try again later.");
        }
      );
  };

  const showMessage = (text) => {
    setMessage(text);
    // Hide message after 5 seconds
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  return (
    <div className='md:pt-10 pt-6 ' id='Contact'>
      <h2 className='flex justify-center font-bold text-4xl bg-gradient-to-r from-orange-400 to-pink-600 text-transparent bg-clip-text pb-5 lg:text-5xl'>Contact Me</h2>
      <div className='pl-8 pr-8 md:pl-36 md:pr-36 '>
        <div className='md:flex md:justify-between bg-slate-100 rounded-md shadow-lg hover:shadow-orange-400 mb-6 h-auto'>
          <div className='md:grid md:grid-cols-2'>
            <div>
              <p className='md:text-[19px] pl-2 pb-2 md:pt-12 md:pl-14 font-semibold mb-3 pt-4'>If you'd like to reach out to me, feel free to contact me through any of the following channels: via email, connect with me on LinkedIn, message me on WhatsApp, or check out my projects on GitHub. I'm looking forward to hearing from you!</p>
              <div className='flex-col md:pl-24 pl-5'>
                <a href='https://www.linkedin.com/in/moses-nirupan-786979299/'>
                  <div className="flex items-center pb-2 md:pb-4 md:font-bold md:text-lg">
                    <FaLinkedinIn className='border border-gray-400 w-8 h-6 rounded shadow-md shadow-orange-400 fill-current hover:bg-gradient-to-r from-orange-400 to-pink-600' />
                    <p className="ml-2 hover:text-orange-400 font-bold">moses-nirupan</p>
                  </div>
                </a>
                <a href='https://github.com/Nirupan-14'>
                  <div className="flex items-center pb-2 md:pb-4 md:font-bold md:text-lg">
                    <FaGithub className='border border-gray-400 w-8 h-6 rounded shadow-md shadow-orange-400 hover:bg-gradient-to-r from-orange-400 to-pink-600' />
                    <p className="ml-2 hover:text-orange-400 font-bold">Nirupan-14</p>
                  </div>
                </a>
                <a href={`https://wa.me/${phoneNumber}`} target='_blank' rel='noopener noreferrer'>
                  <div className="flex items-center pb-2 md:pb-4 md:font-bold md:text-lg">
                    <FaWhatsapp className='border border-gray-400 w-8 h-6 rounded shadow-md shadow-orange-400 hover:bg-gradient-to-r from-orange-400 to-pink-600' />
                    <p className="ml-2 hover:text-orange-400 font-bold">{phoneNumber}</p>
                  </div>
                </a>
                <a href={`mailto:${email}`}>
                  <div className="flex items-center  md: md:pb-14 pb-4  md:font-bold md:text-lg">
                    <SiGmail className='border border-gray-400 w-8 h-6 rounded shadow-md shadow-orange-400 hover:bg-gradient-to-r from-orange-400 to-pink-600' />
                    <p className="ml-2 hover:text-orange-400 font-bold ">{email}</p>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className='bg-slate-200 rounded-md shadow-lg p-8 hover:shadow-orange-400 w-auto h-auto md:h-auto md:w-auto md:mt-6 md:mb-6 md:mr-6 md:ml-10 ml-2 mr-2 pb-2 mt-3'>
                <form className='flex flex-col space-y-4' onSubmit={sendEmail} ref={form}>
                  <div>
                    <label htmlFor="to_name" className='text-sm text-gray-800 font-semibold'>Your Name</label>
                    <input id="to_name" type='text' name='to_name' placeholder='Enter your Name' className='w-full rounded-md px-4 py-2 outline-none focus:ring-1 focus:ring-[#de4646]' />
                  </div>
                  <div>
                    <label htmlFor="to-email" className='text-sm text-gray-800 font-semibold'>E-mail Address</label>
                    <input id="to_email" type='email' name='to_email' placeholder='Enter your Email' className='w-full rounded-md px-4 py-2 outline-none focus:ring-1 focus:ring-[#de4646]' />
                  </div>
                  <div>
                    <label htmlFor="message" className='text-sm text-gray-800 font-semibold'>Message</label>
                    <textarea id="message" rows={4} name='message' placeholder='Enter your Message' className='w-full rounded-md px-4 py-2 outline-none focus:ring-1 focus:ring-[#de4646]' />
                  </div>
                  <div className='text-20px font-bold text-center'>
                    <button type="submit" className='w-32 h-10 rounded-md mb-2 bg-cover hover:text-white bg-gradient-to-r from-orange-400 to-pink-600 shadow-orange-400 shadow-md'>Submit</button>
                    {message && (
                      <div className="bg-green-200 p-2 text-green-800 text-center">
                        {message}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
