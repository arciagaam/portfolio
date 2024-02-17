import React from 'react'
import { IoChevronDown } from "react-icons/io5";
const HeroSection = () => {
    return (
        <div className='min-h-screen flex flex-col p-28 text-off-white relative overflow-hidden'>

            <div className="right-0 bottom-0 absolute min-h-[45vw] aspect-square !bg-cover grayscale rotate-[30deg] opacity-50" style={{ background: 'url(images/profile1.png)' }}>

                <div className='h-full w-full radial-gradient' ></div>


            </div>

            <div className="flex flex-col gap-1 z-10 text-lg">
                <p>Hi, I'm Miguel Arciaga and I'm a</p>
                <h1 className='font-mograch text-accent text-[14rem] leading-none'>web developer</h1>
            </div>


            <div className="flex gap-2 items-center fill-off-white mt-auto text-lg">
                Keep scrolling
                <IoChevronDown />
            </div>


        </div>
    )
}

export { HeroSection }