"use client";

import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import MapPage from "./MapPage";

export default function Footer() {
  return (
    <footer>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "MyXYZ Fitnest",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "504-505, Morya Estate Commercial PRM LTD, Oshiwara Link Road, Andheri West",
              "addressLocality": "Mumbai Suburban",
              "addressRegion": "Maharashtra",
              "postalCode": "400053",
              "addressCountry": "IN"
            },
            "telephone": "+912266787970",
            "email": "info@myxyz.com",
            "sameAs": [
              "https://www.instagram.com/myxyzfitnest",
              "https://www.facebook.com/myxyzfitnest",
              "https://wa.me/912222220099"
            ]
          }
        `}
      </script>

      <div className="w-full h-fit pt-20 pb-5">
        <div className="w-full py-10 border-t border-b border-zinc-300 px-10 flex items-center justify-between max-md:flex-col max-md:gap-5">
          <div>
            <h2 className="max-md:text-[11vw] md:text-[3.5em] font-['f2'] font-[900] uppercase leading-[1]">
              myxyz fitnest
            </h2>
          </div>

          <div className="flex items-center gap-5 max-md:scale-[.9]">
            <div className="border-r border-dotted border-zinc-300 pr-10">
              <h3 className="max-md:text-[5.5vw] md:text-[2.5em] font-['f2'] font-[900] uppercase leading-[1] scale-x-[1.4]">
                Social
              </h3>
            </div>

            <div className="flex items-center md:gap-3">
              <a
                href="https://www.instagram.com/myxyzfitnest"
                className="block px-4 py-4 border rounded-full leading-[1] cursor-pointer scale-[.9] max-md:scale-[.7] hover:bg-zinc-700 ease-in-out duration-200"
                aria-label="Follow MyXYZ Fitnest on Instagram"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.facebook.com/myxyzfitnest"
                className="block px-4 py-4 border rounded-full leading-[1] cursor-pointer scale-[.9] max-md:scale-[.7] hover:bg-zinc-700 ease-in-out duration-200"
                aria-label="Follow MyXYZ Fitnest on Facebook"
              >
                <BsFacebook />
              </a>
              <a
                href="https://wa.me/912222220099"
                className="block px-4 py-4 border rounded-full leading-[1] cursor-pointer scale-[.9] max-md:scale-[.7] hover:bg-zinc-700 ease-in-out duration-200"
                aria-label="Contact MyXYZ Fitnest on WhatsApp"
              >
                <BsWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full px-10 pt-10 flex justify-between max-md:flex-col max-md:gap-8">
          <div className="w-full md:w-[30%] flex flex-col gap-6 max-md:items-center">
            <p className="max-md:text-center text-[4vw] md:text-[1.2vw]">
              MyXYZ Fitnest - Premier Fitness Center in Andheri West, Mumbai
            </p>
            <p className="max-md:text-center text-[4vw] md:text-[1.2vw]">
              504-505, Morya Estate Commercial PRM LTD, Oshiwara Link Road,
              Andheri West, Mumbai Suburban, Maharashtra - 400053
            </p>

            <div className="flex flex-col gap-3">
              <a href="tel:+912222220099" className="text-[4vw] md:text-[1.2vw] leading-[1]">
                Phone: +9122 2222 0099
              </a>
              <a href="mailto:info@myxyz.com" className="text-[4vw] md:text-[1.2vw] leading-[1]">
                Gmail: info@myxyz.com
              </a>
            </div>
          </div>

          <div className="w-full md:w-[65%] h-[400px] rounded-2xl overflow-hidden">
            <MapPage />
          </div>
        </div>
      </div>
    </footer>
  );
}