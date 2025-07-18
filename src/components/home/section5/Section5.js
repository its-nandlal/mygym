"use client";

import React, { useRef, useEffect, useState } from 'react';
import CardS5 from './CardS5';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function Section5() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Sample testimonial data
  const testimonials = [
    {
      name: "John Doe",
      image: "https://res.cloudinary.com/dbbpe98lt/image/upload/v1752853511/t1_tq0xbk.webp"
    },
    {
      name: "Jane Smith",
      image: "https://res.cloudinary.com/dbbpe98lt/image/upload/v1752853511/t1_tq0xbk.webp"
    },
    {
      name: "Mike Johnson",
      image: "https://res.cloudinary.com/dbbpe98lt/image/upload/v1752853511/t1_tq0xbk.webp"
    },
    {
      name: "Sarah Williams",
      image: "https://res.cloudinary.com/dbbpe98lt/image/upload/v1752853511/t1_tq0xbk.webp"
    },
    {
      name: "Chris Brown",
      image: "https://res.cloudinary.com/dbbpe98lt/image/upload/v1752853511/t1_tq0xbk.webp"
    }
  ];

  // Scroll handling
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRight();
        }
      }
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Update button states based on scroll position
  useEffect(() => {
    const updateScrollState = () => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
      }
    };

    const slider = sliderRef.current;
    slider?.addEventListener('scroll', updateScrollState);
    updateScrollState();

    return () => slider?.removeEventListener('scroll', updateScrollState);
  }, []);

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      scrollRight();
    }
    if (touchEndX - touchStartX > 50) {
      scrollLeft();
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
      <div className="w-full h-fit max-md:px-2 md:px-10 pt-10 max-md:pb-[25vw] pb-52 bg-zinc-900/40 backdrop-blur-md rounded-t-[5rem] max-md:rounded-t-3xl">
        <div className="w-full md:py-10 md:pb-20 max-md:pt-2 max-md:pb-10">
          <h1 className="max-md:text-[11vw] lg:text-[6.5vw] xl:text-[5.5vw] text-center font-['f2'] font-[900] leading-[1] uppercase tracking-wide">
            -Trainer-
          </h1>
        </div>

        <div className="relative w-full h-fit">
          <article
          ref={sliderRef}
          itemScope
          itemType="http://schema.org/Person"
            className="w-full flex gap-5 overflow-x-scroll rounded-3xl snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="max-md:w-[70%] md:w-1/3 xl:w-1/4 flex-none snap-start shrink-0">
                <CardS5
                  image={testimonial.image}
                  name={testimonial.name}
                  description={testimonial.description}
                />
              </div>
            ))}
          </article>

          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg cursor-pointer transition-opacity duration-300 ${
              canScrollLeft ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
            }`}
            aria-label="Scroll left"
          >
           <span className='block leading-[1] text-[1.5rem]'><MdOutlineKeyboardArrowLeft /></span>
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg cursor-pointer transition-opacity duration-300 ${
              canScrollRight ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
            }`}
            aria-label="Scroll right"
          >
            <span className='block leading-[1] text-[1.5rem]'><MdOutlineKeyboardArrowRight /></span>
          </button>
        </div>
      </div>
    </section>
  );
}