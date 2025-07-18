"use client";

import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import PropTypes from "prop-types";

export default function CardS7({ image, name, description, rating = 5, jobTitle, company }) {
  return (
    <div
      className="w-full max-w-sm mx-auto max-md:h-[95vw] md:h-[40vh] p-6 bg-zinc-900/60 flex flex-col items-center justify-center gap-6 backdrop-blur-xl rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-zinc-800/50 cursor-pointer"
    >
      <div className="relative w-24 h-24 overflow-hidden rounded-full ring-2 ring-zinc-700/50">
        <Image
          src={image}
          alt={`${name}'s testimonial image`}
          fill
          sizes="(max-width: 768px) 96px, 96px"
          className="object-cover"
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
        {(jobTitle || company) && (
          <p className="text-sm text-zinc-400 mt-1" itemProp="jobTitle">
            {jobTitle} {company && `at ${company}`}
          </p>
        )}
      </div>

      <div
        className="flex gap-1"
        aria-label={`Rating: ${rating} out of 5 stars`}
        itemProp="reviewRating"
        itemScope
        itemType="http://schema.org/Rating"
      >
        <meta itemProp="ratingValue" content={rating} />
        <meta itemProp="bestRating" content="5" />
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-2xl transition-colors duration-200 ${
              index < rating ? "text-yellow-400" : "text-zinc-600"
            }`}
            aria-hidden="true"
          >
            <MdOutlineStarPurple500 />
          </span>
        ))}
      </div>

      <div className="w-full">
        <p
          className="text-zinc-300 text-center text-base leading-relaxed line-clamp-3"
          itemProp="reviewBody"
        >
          {description}
        </p>
      </div>
    </div>
  );
}

CardS7.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number,
  jobTitle: PropTypes.string,
  company: PropTypes.string,
};

CardS7.defaultProps = {
  rating: 5,
  jobTitle: "",
  company: "",
};