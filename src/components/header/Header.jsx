import React, { useState, useEffect } from 'react';
// import headerImg from '../../assets/kvshw.png'
import './header.css';
import Socialicons from '../socialIcons/Socialicons';
import arrow from '../../assets/down-arrow.png';
import LinkedIn from '../../assets/linkedin 1.png';
import GitHub from '../../assets/github 1.png';
import FaceBook from '../../assets/facebook 1.png';
import Resume from '../../assets/Kavishwa_Wendakoon_CV.pdf'





const Header = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDisplay = () => {
        if (window.scrollY > 100) {
            setIsVisible(!isVisible)
        }
    }

    return (


        <>
            <div className='h-screen bg-mobile-header  bg-no-repeat flex flex-col justify-center  items-center bg-[center_left_-170px] bg-cover md:hidden sm:hidden'>
                <div className='pl-10 pr-8'>
                    <h1 className='text-5xl text-white font-semibold'>Kavishwa Wendakoon</h1>
                    <h3 className='text-xl text-white font-medium mt-[1vh]'>Transforming Complex Ideas into Elegant Code</h3>
                    <p className='text-sm text-white font-thin mt-[1vh]'>From complex ideas to elegant
                        code - with a keen eye for detail
                        and a passion for innovation,
                        I bring your ideas to life one line
                        of code at a time.</p>
                    <div className='self-baseline'>
                        <button className='text-black px-8 py-2 bg-white rounded-3xl text-xs mt-[4vh]' href={Resume} download="Kavishwa Wendakoon CV">Download Resume</button>
                    </div>
                </div>
                <div className='bottom-end flex flex-row justify-between w-full absolute bottom-0 h-[100px] items-end'>
                    <div className=''>
                        <h4 className='text-white text-[10px] rotate-[-90deg] absolute bottom-[110px] left-[-32px]'>SCROLL TO SEE MORE</h4>
                        <img className='absolute left-3 bottom-2' src={arrow} alt="" />
                    </div>
                    <div className='flex flex-col justify-between h-[13vh] relative right-3 bottom-2'>
                        <a href='https://www.linkedin.com/in/kavishwa-bhashitha/' target="_blank"><img src={LinkedIn} alt="" /></a>
                        <a href='https://github.com/kvshw' target="_blank"><img src={GitHub} alt="" /></a>
                        <a href='https://www.facebook.com/kavishwa.bhashitha/' target="_blank"><img src={FaceBook} alt="" /></a>
                    </div>

                </div>
            </div>
        </>



    )
}

export default Header


// bottom-end flex flex-row justify-between w-full absolute bottom-0 h-[25vh] items-end