"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function MembershipCard({ membership }) {

    const handleScroll = () => {
    window.scrollTo({
      top: 650 * window.innerHeight / 100, // Convert 650vh to pixels
      behavior: "smooth",
    });
  };

  return (
    <article
      className={`relative w-full bg-black/70 backdrop-blur-2xl rounded-2xl p-6 md:p-8 text-white flex flex-col items-center justify-between transition-all duration-500 ${
        membership.highlight
          ? "scale-[1.03] border-4 border-orange-500 shadow-2xl"
          : "scale-[0.9] shadow-lg hover:scale-[0.98] hover:shadow-xl"
      } hover:-translate-y-2`}
      role="region"
      aria-labelledby={`membership-${membership.name.toLowerCase()}`}
    >
      {membership.highlight && (
        <span className="absolute top-0 -translate-y-1/2 bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <div className="text-center">
        <h3
          id={`membership-${membership.name.toLowerCase()}`}
          className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight font-sans"
        >
          {membership.name}
        </h3>
        <p className="text-xl md:text-2xl font-semibold text-orange-400 mb-6">
          {membership.price}
        </p>
      </div>
      <ul className="flex-1 w-full space-y-3 mb-8">
        {membership.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-base md:text-lg">
            <FaCheckCircle
              className="h-5 w-5 md:h-6 md:w-6 text-green-400 flex-shrink-0"
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
      onClick={handleScroll}
        className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-orange-600 rounded-full font-semibold text-base md:text-lg hover:from-purple-700 hover:to-orange-700 transition-colors duration-300"
        aria-label={`Join ${membership.name} membership`}
      >
        {membership.buttonText}
      </button>
    </article>
  )
}
