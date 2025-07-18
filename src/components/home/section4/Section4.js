"use client";

import { BsInstagram } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import VideoCardS4 from "./VideoCardS4";


export default function Section4() {
  return (
    <section>

        <div
        className="w-[100vw] h-fit bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 pt-10 md:pb-52 max-md:pb-36 max-md:px-2 md:px-10 md:rounded-t-[5rem] max-md:rounded-t-3xl">


        <div className="w-full p-4 flex items-center justify-between">
            <div>
               <h3 className="max-md:text-[7vw] lg:text-[4vw] xl:text-[3.5vw] text-nowrap font-['f2'] font-[900] uppercase leading-[1] tracking-wide">Short Content</h3>
            </div>

            <div className="w-fit h-fit">
                <a className="ho1 relative flex items-center gap-3  w-fit h-fit font-['f1'] font-[600] lg:text-[1.5vw] xl:text-[1.2vw] px-8 py-6 border-[1.5px] border-zinc-300 border-dashed rounded-full overflow-hidden cursor-pointer max-md:scale-[.7] max-md:-mr-6
                    before:content-[''] before:absolute before:top-0 before:left-0 before:origin-bottom-left before:w-full before:h-full before:z-[0] before:bg-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-orange-500 hover:before:scale-x-[1] before:scale-x-[0] before:ease-in-out before:duration-200">
                    <div className="flex items-center justify-center gap-3 relative z-[2] w-fit h-fit text-nowrap leading-[1]">
                    View All <span className="block text-[.8em] leading-[1]"><BsInstagram/></span>
                    </div>
                </a>
            </div>
        </div>


        <div className="scrollbar-hide w-full flex max-md:gap-2 md:gap-10 overflow-x-scroll md:rounded-3xl">
            <VideoCardS4 />
            <VideoCardS4 />
            <VideoCardS4 />
            <VideoCardS4 />
            <VideoCardS4 />
            <VideoCardS4 />
            <VideoCardS4 />
        </div>


        <div className="w-full pt-20 flex flex-col gap-16">
            <div>
                <h3 className="max-md:text-[8vw] md:text-[6.5vw] xl:text-[5vw] font-['f2'] font-[900] leading-[.5] max-md:scale-y-[1.3] max-md:leading-[.2]">
                    <span className="block leading-[.1] pl-10 max-md:text-[10vw] md:text-[4.6vw] max-md:!scale-y-[.6]"><MdGroups/></span>
                   # 500+ Members Join
                </h3>
            </div>
            <div className="w-full md:pl-20">
                <h3 className="max-md:text-[8vw] md:text-[6.5vw] xl:text-[5vw] font-['f2'] font-[900] leading-[.5] max-md:scale-y-[1.3] max-md:leading-[.2]">
                    <span className="block leading-[.1] pl-10 max-md:text-[10vw] md:text-[4.6vw] max-md:!scale-y-[.6]"><MdGroups/></span>
                    # 500+ Happy Members
                </h3>
            </div>
            <div className="w-fll md:pl-60">
                <h3 className="max-md:text-[10vw] md:text-[6.5vw] xl:text-[5vw] font-['f2'] font-[900] leading-[1] max-md:scale-y-[1.3] max-md:leading-[.5]">
                    <span className="block leading-[1] pl-10 max-md:text-[10vw] md:text-[4.6vw] max-md:!scale-y-[.6]"><FaCalendarDays/></span>
                   # 365 Day Open GYM
                </h3>
            </div>
        </div>

        </div>
      
    </section>
  )
}
