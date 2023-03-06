import React from 'react'
import LinkedIn from '../../assets/linkedin 1.png';
import GitHub from '../../assets/github 1.png';
import FaceBook from '../../assets/facebook 1.png';
import ReactLogo from '../../assets/React.png'
import FlutterLogo from '../../assets/Flutter.png'
import TypeScriptLogo from '../../assets/TS.png'
import JavaScriptLogo from '../../assets/JS.png'
import ReactNativeLogo from '../../assets/ReactNative.png'
import HTMLLogo from '../../assets/HTML.png'
import CSSLogo from '../../assets/CSS.png'
import TailwindLogo from '../../assets/Tailwind.png'

const Skills = () => {
    return (
        <>
            <div className='h-screen bg-skills  bg-no-repeat flex flex-col justify-center  items-center bg-center bg-cover md:hidden sm:hidden'>
                <div className='pl-10 pr-8 w-full'>
                    <h1 className='text-5xl text-white font-semibold'>Skills</h1>

                    <div className='bg-cover grid grid-cols-4 gap-4 my-6 min-h-[20vh] p-6 justify-items-center bg-white bg-opacity-20 flex-col justify-center items-center px-4 pb-1 text-center backdrop-blur-lg rounded-xl drop-shadow-xl border-[#9D9D9D] border'>
                        <div>
                            <img className='w-[50px]' src={ReactLogo} alt="" />
                        </div>
                        <div>
                            <img className='w-[50px]' src={FlutterLogo} alt="" />
                        </div>
                        <div>
                            <img className='w-[50px]' src={TypeScriptLogo} alt="" />
                        </div>
                        <div>
                            <img className='w-[50px]' src={JavaScriptLogo} alt="" />
                        </div>
                        <div>
                            <img className='w-[50px]' src={ReactNativeLogo} alt="" />
                        </div>
                        <div>
                            <img className='w-[50px]' src={HTMLLogo} alt="" />
                        </div>
                        <div>
                            <img className='w-[50px]' src={CSSLogo} alt="" />
                        </div>
                        <div>
                            <img className='w-[50px]' src={TailwindLogo} alt="" />
                        </div>
                    </div>
                    <div className='bg-cover grid grid-cols-1  my-6 min-h-[40px] w-full  justify-items-center bg-white bg-opacity-20 flex-col justify-center items-center  text-center backdrop-blur-lg rounded-xl drop-shadow-xl border-[#9D9D9D] border'>
                        <h3 className='text-white'>Front-End Development</h3>
                    </div>
                    {/* <p className='text-sm text-white font-thin mt-[1vh] text-center px-3'>Hi there! I’m Kavishwa and I am a skilled software engineer and social media marketer with over 3 years of experience in the industry. I have a strong background in both front-end and back-end development, social media marketing and copywriting.</p> */}
                    <div className='text-center'>
                        <button className='text-black px-8 py-2 bg-white rounded-3xl text-xs mt-[1vh]'>Download Resume</button>
                    </div>
                </div>
                <div className='bottom-end flex flex-row justify-between w-full absolute bottom-[-200vh] h-[100px] items-end'>
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

export default Skills