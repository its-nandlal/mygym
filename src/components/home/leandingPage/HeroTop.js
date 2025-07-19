'use client';


export default function HeroTop() {

      const handleScroll = () => {
    window.scrollTo({
      top: window.innerWidth < 768 ? 5500 : (600 * window.innerHeight / 100),      
      behavior: "smooth",
    });
  };

  return (
    <div
      className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-20 bg-zinc-900/70"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% 30%, 100% 70%, 100% 92%, 25% 100%, 0 100%, 0% 30%)",
      }}
    >
      <div>
        <h1
          className="max-md:text-[4.5vw] md:text-[3.5vw] text-center font-['f3'] font-[600] leading-[1] tracking-wide uppercase scale-x-[1.4] scale-y-[2]"
        >
          UNLEASH YOUR STRENGTH,
          <br />
          REDEFINE YOUR LIMITS.
        </h1>
      </div>

      <div>
        <div onClick={handleScroll} className="px-6 py-4 bg-zinc-500/30 max-md:-mt-10 max-md:text-[3.5vw] md:text-[1.3vw] font-['f2'] font-[900] uppercaseleading-[1] tracking-wider border border-white backdrop-blur-xs rounded-md cursor-pointer hover:bg-green-500/30 hover:text-zinc-200 ease-in-out duration-200">
          join membership
        </div>
      </div>
    </div>
  );
}
