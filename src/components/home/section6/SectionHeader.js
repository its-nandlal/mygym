"use client";

export default function SectionHeader() {
  return (
    <div className="text-center mb-10 md:mb-12">
      <h2 className="max-md:text-[8vw] lg:text-[4.5vw] xl:text-[4vw] text-center font-['f2'] font-[900] leading-[1] uppercase tracking-wide max-md:scale-x-[1.5] max-md:scale-y-[1.6]">
        Choose Your Membership
      </h2>
      <p className="max-md:text-[4vw] text-sm xl:text-xl text-gray-200 lg:w-[50%] xl:w-[30%] mx-auto max-md:pt-10">
        Unlock your fitness potential with our tailored membership plans designed for every level.
      </p>
    </div>
  );
}