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
            src="/Videos/a.mp4"
            autoPlay
            muted
            loop
            preload="auto"/>

            </div>
            <HeroTop />
        </div>

    </section>
)
}
