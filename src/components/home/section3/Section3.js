'use client'; // Ensure this is a client component if using icons with interactivity

import { IoCall } from 'react-icons/io5';
import { IoLogoWhatsapp } from 'react-icons/io';

export default function Section3() {
  return (
      <section 
      aria-labelledby="free-trial-heading" >
        <div
          className="w-full h-fit text-zinc-200 max-md:py-20 max-md:px-3 md:py-40 flex items-center justify-center"
        >
          <div className="w-full md:w-[75%] max-md:py-5 md:py-28 flex flex-col items-center justify-center gap-8 border border-dashed rounded-2xl">
            <div className='w-full md:px-10'>
              <h2
                id="free-trial-heading"
                className="max-md:text-[7vw] md:text-[2.5rem] xl:text-[3rem] text-center font-['f3'] font-[900] tracking-wide uppercase leading-[1] text-shadow-2xs"
              >
                <span className='block max-md:text-[7vw] md:text-[2.2rem] xl:text-[2.8rem]  scale-x-[1.5] scale-y-[2] leading-[.1] max-md:hidden'>
                First Time With ABCD Fitness? 
                </span>
                <br/>
                <span className='block max-md:hidden'>
                Claim Your Free 7-Day Trial.
                </span>

                <span className='block md:hidden text-[8vw] scale-y-[1.2]'>First Time With ABCD Fitness? Claim Your Free 7-Day Trial.</span>
              </h2>
            </div>

            <div className="w-full flex items-center justify-center gap-10 max-md:flex-col-reverse max-md:gap-2">
              <a
                href="tel:+1234567890" // Replace with actual phone number
                className="px-10 py-5 bg-red-700 rounded-xl scale-[.85] xl:scale-[1] cursor-pointer hover:bg-red-600 ease-in-out duration-200 flex items-center gap-1 font-['f2'] font-[900] uppercase"
                aria-label="Call ABCD Fitness to claim your free trial"
              >
                <span className="block text-[1.3em]">
                  <IoCall aria-hidden="true" />
                </span>
                Call
              </a>
              <a
                href="https://wa.me/1234567890" // Replace with actual WhatsApp number
                className="px-10 py-5 bg-green-700 rounded-xl scale-[.85] xl:scale-[1] cursor-pointer hover:bg-green-600 ease-in-out duration-200 flex items-center gap-1 font-['f2'] font-[900] uppercase"
                aria-label="Contact ABCD Fitness via WhatsApp to claim your free trial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="block text-[1.3em]">
                  <IoLogoWhatsapp aria-hidden="true" />
                </span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}