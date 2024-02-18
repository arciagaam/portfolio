import React from 'react'

const AboutMeSection = () => {
    return (
        <div id='about-me' className="flex flex-col gap-5 px-28 scroll-mt-10">
            <h2 className='text-6xl font-mograch text-accent'>About Me</h2>
            <p className='text-off-white/50 text-6xl font-medium'>I am a
                <span className='text-off-white'> web developer</span> that
                <span className='text-off-white'> loves to turn designs into reality.</span> I can do both
                <span className='text-off-white'> front-end development</span> and 
                <span className='text-off-white'> back-end development</span> allowing me to
                <span className='text-off-white'> build dynamic and responsive web applications.</span>
            </p>
        </div>
    )
}

export { AboutMeSection }