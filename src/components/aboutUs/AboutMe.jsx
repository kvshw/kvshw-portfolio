import React, { useState } from 'react'
import arrow from '../../assets/down-arrow.png';
import LinkedIn from '../../assets/linkedin 1.png';
import GitHub from '../../assets/github 1.png';
import FaceBook from '../../assets/facebook 1.png';
import ReactBubble from '../../assets/REact bubble.png'
import FeatherBubble from '../../assets/feather.png'
import FacebookBubble from '../../assets/facebook bubble.png'
import BitcoinBubble from '../../assets/bitcoin bubble.png'


import './aboutme.css';
import Socialicons from '../socialIcons/Socialicons';

const Aboutus = () => {

    const [text, setText] = useState('Hi there! I’m Kavishwa and I am a skilled software engineer and social media marketer with over 3 years of experience in the industry. I have a strong background in both front-end and back-end development, social media marketing and copywriting.');

    const onClickButton1 = () => {
        setText('Full stack development refers to the process of designing, building, and maintaining web applications that involve both front-end and back-end development. A full stack developer is responsible for developing both client-side and server-side software, as well as the database and infrastructure that supports the application.');
    };

    const onClickButton2 = () => {
        setText('Social media marketing is the use of social media platforms to promote a product, service, or brand. It involves creating and sharing content, engaging with followers, and running advertising campaigns on social media platforms such as Facebook, Instagram, Twitter, LinkedIn, and others.');
    };
    const onClickButton3 = () => {
        setText('Copywriting is the process of writing text, known as "copy," for the purpose of advertising or other types of marketing communications. The goal of copywriting is to persuade the reader or viewer to take a specific action, such as buying a product, signing up for a service, or visiting a website.');
    };
    const onClickButton4 = () => {
        setText('Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates independently of a central bank. Unlike traditional currency, cryptocurrency is decentralized, meaning it is not controlled by a single entity or government.');
    };
    const onClickButton5 = () => {
        setText('Hi there! I’m Kavishwa and I am a skilled software engineer and social media marketer with over 3 years of experience in the industry. I have a strong background in both front-end and back-end development, social media marketing and copywriting.');
    };
    return (
        <>
            <div className='h-screen bg-about-me-mobile  bg-no-repeat flex flex-col justify-center  items-center bg-center bg-cover md:hidden sm:hidden'>
                <div className='pl-10 pr-8 w-full'>
                    <h1 className='text-5xl text-white font-semibold' onClick={onClickButton5}>About me</h1>

                    <div className='bg-cover grid grid-cols-2 gap-8 p-6 justify-items-center items-center'>
                        <div onClick={onClickButton1} class="w-[100px] h-[100px] bg-white bg-opacity-20 flex flex-col justify-center items-center px-4 pb-1 text-center backdrop-blur-lg rounded-xl drop-shadow-xl border-[#9D9D9D] border">
                            <img className='w-[35px] h-[35px] ' src={ReactBubble} alt="" />
                            <h3 className='text-[10px] pt-2 text-white font-semibold'>Full-Stack Development</h3>
                        </div>
                        <div onClick={onClickButton2} class="w-[100px] h-[100px] bg-white bg-opacity-20 flex flex-col justify-center items-center px-4 pb-1 text-center backdrop-blur-lg rounded-xl drop-shadow-xl border-[#9D9D9D] border">
                            <img className='w-[35px] h-[35px] ' src={FacebookBubble} alt="" />
                            <h3 className='text-[10px] pt-2 text-white font-semibold'>Social Media Marketing</h3>
                        </div>
                        <div onClick={onClickButton3} class="w-[100px] h-[100px] bg-white bg-opacity-20 flex flex-col justify-center items-center px-4 pb-1 text-center backdrop-blur-lg rounded-xl drop-shadow-xl border-[#9D9D9D] border">
                            <img className='w-[35px] h-[35px] ' src={FeatherBubble} alt="" />
                            <h3 className='text-[10px] pt-2 text-white font-semibold'>Copywriting</h3>
                        </div>
                        <div onClick={onClickButton4} class="w-[100px] h-[100px] bg-white bg-opacity-20 flex flex-col justify-center items-center px-4 pb-1 text-center backdrop-blur-lg rounded-xl drop-shadow-xl border-[#9D9D9D] border">
                            <img className='w-[35px] h-[35px] ' src={BitcoinBubble} alt="" />
                            <h3 className='text-[10px] pt-2 text-white font-semibold'>Cryptocurrency</h3>
                        </div>
                    </div>
                    <p className='text-sm text-white font-thin mt-[1vh] text-center px-3 h-32 min-h-max'>{text}</p>
                    <div className='text-center'>
                        <button className='text-black px-8 py-2 bg-white rounded-3xl text-xs mt-[4vh]'>Download Resume</button>
                    </div>
                </div>
                <div className='bottom-end flex flex-row justify-between w-full absolute bottom-[-100vh] h-[100px] items-end'>
                    <div className=''>
                        {/* <h4 className='text-white text-[10px] rotate-[-90deg] relative bottom-[70px] left-[-37.5px]'>SCROLL TO SEE MORE</h4>
                        <img className='relative left-3 bottom-2' src={arrow} alt="" /> */}
                    </div>
                    <div className='flex flex-col justify-between h-[13vh] relative right-3 bottom-2'>
                        <a href='https://www.linkedin.com/in/kavishwa-bhashitha/' target="_blank"><img src={LinkedIn} alt="" /></a>
                        <a href='https://github.com/kvshw'><img src={GitHub} alt="" /></a>
                        <a href='https://www.facebook.com/kavishwa.bhashitha/' target="_blank"><img src={FaceBook} alt="" /></a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Aboutus