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

            <div className='md:grid md:grid-cols-2 md:w-screen md:overflow-x-scroll md:snap-x md:snap-mandatory'>
                <div className=' md:snap-start hidden sm:hidden md:grid md:grid-cols-[65%_35%] w-screen  md:text-white md:bg-about-me md:h-[88vh] md:bg-right md:bg-cover'>
                    <div className='flex flex-col md:justify-center md:pl-[15vw]'>
                        <h1 className='md:text-transparent md:text-left md:bg-gradient-to-r md:from-[#FF27DD] md:to-[#433AD1] md:bg-clip-text md:text-5xl md:font-bold '>About Me</h1>
                        {/* <h2 className='text-white md:text-3xl md:mt-3'>Welcome to my Portfolio</h2> */}
                        <p className='text-white md:text-left  md:text-lg md:w-[35vw] md:mt-3 md:font-light'>Hi there! My name is Kavishwa and I am a skilled software engineer and social media marketer with over 5 years of experience in the industry. I have a strong background in both front-end and back-end development, as well as a deep understanding of social media platforms and how to effectively market products and services on them. I am always seeking new challenges and opportunities to grow my skills and help businesses succeed.</p>
                    </div>
                    <div className='flex flex-col md:justify-end'>

                    </div>
                </div>
                <div className='h md:snap-start hidden sm:hidden md:grid md:grid-cols-[65%_35%] w-screen ml-[50vw] md:text-white md:bg-technology md:h-[88vh] md:bg-right md:bg-cover'>
                    <div className='flex flex-col md:justify-center md:pl-[15vw]'>
                        <h1 className='md:text-transparent md:text-left md:bg-gradient-to-r md:from-[#FF27DD] md:to-[#433AD1] md:bg-clip-text md:text-5xl md:font-bold '>Technologies</h1>
                        <h2 className='text-white md:text-xl md:mt-3'>Front-End Development</h2>
                        <p className='text-white md:text-left  md:text-md md:w-[35vw] md:mt-1 md:font-light'>NextJS | ReactJS | HTML/CSS/JS | Angular | React Native</p>
                        <h2 className='text-white md:text-xl md:mt-3'>Back-End Development</h2>
                        <p className='text-white md:text-left  md:text-md md:w-[35vw] md:mt-1 md:font-light'>Node | Python | C# | Solidity | Remix</p>
                    </div>
                    <div className='flex flex-col md:justify-end'>

                    </div>
                </div>
                <div className='hidden md:block md:absolute md:right-[20vw] md:bottom-[2vh]'>
                    <Socialicons />
                </div>
            </div>
        </>
    )
}

export default Aboutus