"use client";

import HeroTop from "./HeroTop"

export default function Hero() {
return (
    <section>
        <div className="relative w-full h-screen overflow-x-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 30%, 100% 70%, 100% 92%, 25% 100%, 0 100%, 0% 30%)" }}>
            <div className=" w-full h-full">        
        
            <video
            className="w-full h-full object-cover mix-blend-luminosity"
            src="https://res.cloudinary.com/dbbpe98lt/video/upload/f_mp4/a_dupjpx.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"/>

            </div>
            <HeroTop />
        </div>

    </section>
)
}
