"use client";

export default function VideoCardS4() {
  return (
    <div className="max-md:w-[70%] md:w-1/3 xl:w-1/4 max-md:h-[110vw] md:h-[50vw] xl:h-[42vw] py-1 px-1 border-[2px] border-white border-dashed rounded-3xl shrink-0 overflow-hidden
    bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-orange-500/40 backdrop-blur-lg">
      <video 
      src="https://res.cloudinary.com/dbbpe98lt/video/upload/f_mp4/a_dupjpx.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="w-full h-full object-cover rounded-3xl"/>
    </div>
  )
}
