"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function CardS2({ imageSrc, imageAlt, title, plans }) {
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTable = () => {
    setIsTableVisible(!isTableVisible);
  };

  return (
      <article 
      aria-labelledby={`${title.replace(/\s+/g, '-').toLowerCase()}-heading`}
      className="relative max-md:w-[70%] md:w-1/3 xl:w-1/4 h-fit shrink-0 mb-6 bg-zinc-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div
          className="relative w-full max-md:h-[60vw] md:h-[30vw] xl:h-[25vw] transition-all duration-300 ease-in-out"
        >
          <Image
            src={imageSrc}
            fill
            alt={imageAlt}
            className="object-cover transition-transform duration-300 hover:scale-105"
            priority
            sizes="(max-width: 640px) 100vw, 25vw"
          />
        </div>

        <div className="w-full p-6 bg-zinc-900 text-white">
          <h3
            id={`${title.replace(/\s+/g, '-').toLowerCase()}-heading`}
            className="text-[1.5em] text-center font-['f2'] font-bold uppercase tracking-wide max-md:text-nowrap max-md:overflow-hidden max-md:text-ellipsis"
          >
            {title}
          </h3>
        </div>

        <div className="w-full p-6">
          <button
            className="w-full flex items-center justify-between border-b border-zinc-600 py-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={toggleTable}
            aria-expanded={isTableVisible}
            aria-controls="pricing-table"
          >
            <h4 className="text-[1.3em] text-zinc-200 font-['f2'] font-medium">Explore Plans</h4>
            <div
              className={`text-[1.5em] text-zinc-200 transition-transform duration-300 ${
                isTableVisible ? "rotate-180" : ""
              }`}
            >
              <IoIosArrowDown aria-hidden="true" />
            </div>
          </button>

          {isTableVisible && (
            <div
              id="pricing-table"
              className="mt-6 overflow-x-auto animate-fadeIn"
              itemScope
              itemType="http://schema.org/Service"
            >
              <table className="w-full text-zinc-200 border-collapse">
                <caption className="sr-only">{`${title} Pricing Plans`}</caption>
                <thead>
                  <tr className="bg-zinc-700 text-white">
                    <th
                      className="border border-zinc-600 p-3 text-left font-semibold text-[1.1em]"
                      scope="col"
                    >
                      Plan
                    </th>
                    <th
                      className="border border-zinc-600 p-3 text-left font-semibold text-[1.1em]"
                      scope="col"
                    >
                      Features
                    </th>
                    <th
                      className="border border-zinc-600 p-3 text-left font-semibold text-[1.1em]"
                      scope="col"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {plans.map((plan, index) => (
                    <tr
                      key={plan.name}
                      className={`${
                        index % 2 === 0 ? "" : "bg-zinc-800"
                      } hover:bg-zinc-700 transition-colors duration-200`}
                      itemProp="offers"
                      itemScope
                      itemType="http://schema.org/Offer"
                    >
                      <td className="border border-zinc-600 p-3" itemProp="name">
                        {plan.name}
                      </td>
                      <td className="border border-zinc-600 p-3" itemProp="description">
                        {plan.features}
                      </td>
                      <td className="border border-zinc-600 p-3" itemProp="priceSpecification">
                        <span itemProp="price">{plan.price}</span>
                        <meta itemProp="priceCurrency" content="USD" />/month
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </article>
  );
}