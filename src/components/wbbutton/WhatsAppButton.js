"use client";
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const WhatsAppButton = () => {
  const phoneNumber = '918209814681'; // Indian country code + provided number
  const message = encodeURIComponent('Hi, I need help with my new gym website!');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className='fixed bottom-5 right-5 z-[999]'>
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 block text-[30px] text-white bg-[#25D366] rounded-full p-4 cursor-pointer hover:bg-[#49a56b] hover:-mt-1 ease-in-out duration-200 shadow-lg"
      aria-label="Contact us on WhatsApp for help with your gym website"
    >
      <BsWhatsapp />
    </a>
    </div>
  );
};

export default WhatsAppButton;

