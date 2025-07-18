'use client';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (vh) => {
    window.scrollTo({
      top: window.innerHeight * (parseFloat(vh) / 100),
      behavior: 'smooth',
    });
    setIsMenuOpen(false); // Close mobile menu
  };

  const navLinks = [
    { label: 'Home', vh: '0' },
    { label: 'Service', vh: '100' },
    { label: 'Membership', vh: '460' },
    { label: 'Contact', vh: '650' },
    { label: 'Free 7-Day Trial', vh: '650' },
  ];

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-[999] w-full bg-black/40 backdrop-blur-xl px-[1vw]">
      <nav className="flex items-center justify-between py-8 max-md:px-2">
        <div>
          <h1 className="max-md:text-[6vw] md:text-[2.3em] font-sans font-[900] uppercase leading-[1]">
            shredx fitnest
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="max-md:hidden">
          <ul className="flex items-center gap-8">
            {navLinks.slice(0, 4).map((item, i) => (
              <li key={i}>
                <a
                  onClick={() => handleScroll(item.vh)}
                  className="font-sans font-[600] uppercase leading-[1] cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-md:hidden">
          <a
            onClick={() => handleScroll(navLinks[4].vh)}
            className="block w-fit h-fit px-6 py-4 bg-zinc-400 text-black cursor-pointer hover:bg-zinc-800 hover:text-white ease-in-out duration-200"
          >
            <h1 className="font-[900] font-sans uppercase leading-[1]">
              Free 7-Day Trial
            </h1>
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="block w-10 h-[2px] bg-white mb-2"></span>
            <span className="block w-10 h-[2px] bg-white"></span>
          </button>

          {isMenuOpen && (
            <div className="absolute top-full left-0 z-[999] w-full bg-black/80 backdrop-blur-md p-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map((item, i) => (
                  <li key={i}>
                    <a
                      onClick={() => handleScroll(item.vh)}
                      className="font-sans font-[600] uppercase leading-[1] cursor-pointer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
