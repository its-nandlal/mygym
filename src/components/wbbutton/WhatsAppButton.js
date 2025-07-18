"use client";
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs';

export default function WhatsAppButton() {
  return (
    <div className='fixed bottom-5 right-5 z-[999]'>
        <a className='block text-[30px] text-white bg-[#25D366] rounded-full p-4 cursor-pointer hover:bg-[#49a56b] hover:-mt-4 ease-in-out duration-200'>
          <BsWhatsapp  />
        </a>
    </div>
  )
}
