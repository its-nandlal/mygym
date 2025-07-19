import { useState } from 'react';
import { BsWhatsapp, BsX } from 'react-icons/bs';

const DemoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const phoneNumber = '918209814681';
  const message = encodeURIComponent('Hi, I want to create a professional gym website. Please share details.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      role="dialog"
      aria-labelledby="banner-title"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl transform transition-all duration-300">
        <div className="flex justify-between items-center">
          <h2 id="banner-title" className="text-2xl font-semibold text-gray-900">
            Demo Website Notice
          </h2>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700 text-3xl focus:outline-none focus:ring-2 focus:ring-[#25D366] rounded-full"
            aria-label="Close popup"
          >
            <BsX />
          </button>
        </div>
        <p className="mt-4 text-gray-600 leading-relaxed">
          This is a demo website. Contact our experts on WhatsApp to create a professional, SEO-optimized, and engaging website for your gym.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center mt-6 px-6 py-3 bg-[#25D366] text-white font-medium rounded-full hover:bg-[#49a56b] ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
          aria-label="Contact us on WhatsApp for gym website creation"
        >
          <BsWhatsapp className="mr-3 text-xl" />
          Contact Now
        </a>
      </div>
    </section>
  );
};

export default DemoBanner;