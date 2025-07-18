"use client";

import Image from "next/image";
import PropTypes from "prop-types";

export default function CardS5({ image, name }) {
  return (
    <div
      className="w-full max-w-sm mx-auto h-[45vh] pb-5 bg-zinc-900/60 flex flex-col items-center justify-center gap-6 shrink-0 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-zinc-800/50 cursor-pointer"
    >
      <div className="relative w-full h-full overflow-hidden ring-2 ring-zinc-700/50">
        <Image
          src={image}
          alt={`${name}'s testimonial image`}
          fill
          className="w-full h-full object-cover"
          priority={false}
          placeholder="blur"
          blurDataURL="/placeholder-image.jpg"
        />
      </div>

      <div className="w-full text-center">
        <h3
          className="text-2xl font-bold text-white tracking-tight font-['f2']"
          itemProp="author"
          itemScope
          itemType="http://schema.org/Person"
        >
          <span itemProp="name">{name}</span>
        </h3>
      </div>
    </div>
  );
}

CardS5.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
