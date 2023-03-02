import React from 'react'
import ReactBubble from '../../assets/REact bubble.png'
import FeatherBubble from '../../assets/feather.png'
import FacebookBubble from '../../assets/facebook bubble.png'
import BitcoinBubble from '../../assets/bitcoin bubble.png'

const Blog = () => {
    return (
        <>
            <div className='h-screen bg-blog bg-no-repeat flex flex-col justify-center  items-center bg-center bg-cover md:hidden sm:hidden'>
                <div className='pl-10 pr-8 w-full'>
                    <h1 className='text-5xl text-white font-semibold'>Blog</h1>

                    <div className='bg-cover grid grid-cols-2 gap-8 p-6 justify-items-center items-center'>
                        <div class="w-[100px] h-[100px] bg-white bg-opacity-20 flex flex-col justify-center items-center px-4 pb-1 text-center backdrop-blur-lg rounded-xl drop-shadow-xl border-[#9D9D9D] border">
                            <img className='w-[35px] h-[35px] ' src={ReactBubble} alt="" />
                            <h3 className='text-[10px] pt-2 text-white font-semibold'>Full-Stack Development</h3>
                        </div>
                        <div class="w-[100px] h-[100px] bg-white bg-opacity-20 flex flex-col justify-center items-center px-4 pb-1 text-center backdrop-blur-lg rounded-xl drop-shadow-xl border-[#9D9D9D] border">
                            <img className='w-[35px] h-[35px] ' src={FacebookBubble} alt="" />
                            <h3 className='text-[10px] pt-2 text-white font-semibold'>Social Media Marketing</h3>
                        </div>
                        <div class="w-[100px] h-[100px] bg-white bg-opacity-20 flex flex-col justify-center items-center px-4 pb-1 text-center backdrop-blur-lg rounded-xl drop-shadow-xl border-[#9D9D9D] border">
                            <img className='w-[35px] h-[35px] ' src={FeatherBubble} alt="" />
                            <h3 className='text-[10px] pt-2 text-white font-semibold'>Copywriting</h3>
                        </div>
                        <div class="w-[100px] h-[100px] bg-white bg-opacity-20 flex flex-col justify-center items-center px-4 pb-1 text-center backdrop-blur-lg rounded-xl drop-shadow-xl border-[#9D9D9D] border">
                            <img className='w-[35px] h-[35px] ' src={BitcoinBubble} alt="" />
                            <h3 className='text-[10px] pt-2 text-white font-semibold'>Cryptocurrency</h3>
                        </div>
                    </div>
                    <p className='text-sm text-white font-thin mt-[1vh] text-center px-3'>Hi there! I’m Kavishwa and I am a skilled software engineer and social media marketer with over 3 years of experience in the industry. I have a strong background in both front-end and back-end development, social media marketing and copywriting.</p>
                    <div className='text-center'>
                        <button className='text-black px-8 py-2 bg-white rounded-3xl text-xs mt-[4vh]'>Download Resume</button>
                    </div>
                </div>
                <div className='bottom-end flex flex-row justify-between w-full absolute bottom-[-200vh] h-[100px] items-end'>


                </div>
            </div>
        </>
    )
}

export default Blog