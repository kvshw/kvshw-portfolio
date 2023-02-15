## Horizontal Scrolling Test

import React, { useState } from 'react'


import './aboutme.css';
import Socialicons from '../socialIcons/Socialicons';

const Aboutus = () => {
    return (
        <>

            <div className='h-[84vh] w-screen grid  bg-[-35vw] bg-no-repeat bg-about-me-mobile sm:h-[82vh] sm:bg-right md:hidden'  >
                <div className='flex flex-col justify-center items-center '>
                    <h1 className='text-transparent text-center bg-gradient-to-r from-[#FF27DD] to-[#433AD1] bg-clip-text text-2xl font-bold sm:text-4xl'>About Me</h1>
                    {/* <h2 className='text-white text-lg sm:text-3xl'>Hey</h2> */}
                    <p className='text-white text-center px-8 py-2 text-sm sm:text-lg'>xyz</p>
                    <Socialicons />
                </div>
            </div>
            <div className='flex'>
                <div className='left  hidden sm:hidden md:grid md:grid-cols-[65%_35%] md:w-screen md:text-white md:bg-about-me md:h-[88vh] md:bg-right md:bg-cover'>
                    <div className='flex flex-col md:justify-center md:pl-[15vw]'>
                        <h1 className='md:text-transparent md:text-left md:bg-gradient-to-r md:from-[#FF27DD] md:to-[#433AD1] md:bg-clip-text md:text-5xl md:font-bold '>About Me</h1>
                        {/* <h2 className='text-white md:text-3xl md:mt-3'>Welcome to my Portfolio</h2> */}
                        <p className='text-white md:text-left  md:text-lg md:w-[35vw] md:mt-3 md:font-light'>xyz</p>
                    </div>
                    <div className='flex flex-col md:justify-end'>
                        <Socialicons />
                    </div>
                </div>
                <div className='right  hidden sm:hidden md:grid md:grid-cols-[65%_35%] md:text-white md:bg-about-me md:h-[88vh] md:bg-right md:bg-cover'>
                    <div className='flex flex-col md:justify-center md:pl-[15vw]'>
                        <h1 className='md:text-transparent md:text-left md:bg-gradient-to-r md:from-[#FF27DD] md:to-[#433AD1] md:bg-clip-text md:text-5xl md:font-bold '>About Me</h1>
                        {/* <h2 className='text-white md:text-3xl md:mt-3'>Welcome to my Portfolio</h2> */}
                        <p className='text-white md:text-left  md:text-lg md:w-[35vw] md:mt-3 md:font-light'>xyz</p>
                    </div>
                    <div className='flex flex-col md:justify-end'>
                        <Socialicons />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus

## End of Testing