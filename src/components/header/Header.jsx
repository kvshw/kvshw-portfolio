import React, { useState } from 'react';
// import headerImg from '../../assets/kvshw.png'
import './header.css';
import Socialicons from '../socialIcons/Socialicons';






const Header = () => {

    return (
        // <div className='kvshw__header' style={{ backgroundImage: 'url(' + require('../../assets/kvshw.png') + ')', height: "90vh", }} >
        //     <div className='kvshw__header_inner-div'  >
        //         <div className='kvshw__header_inner-div_left '>
        //             <h1>Kavishwa Wendakoon</h1>
        //             <h2>Welcome to my Portfolio</h2>
        //             <p>My mission is to invoke a change in society using the knowledge I gained throughout last few years </p>
        //             <h4 className='contact_btn'><a href='#'>About me &gt; </a></h4>
        //         </div>
        //         <div className='right__main'>
        //             <div className='upcoming__features'>
        //                 <h3>Development Roadmap</h3>
        //                 <ul>

        //                     <li>--&gt; GitHub + Netlify &#9989;</li>
        //                     <li>--&gt; Navigation &#9989;</li>
        //                     <li>--&gt; Homepage &#9989;</li>
        //                     <li>--&gt; Cursor change &#9989;</li>
        //                     <li>--&gt; Resume Downloading &#9989;</li>
        //                     <li>--&gt; About Section &#9989;</li>
        //                     <li>--&gt; Portfolio Section <span className='in-progress'>in progress</span></li>
        //                     <li>--&gt; Blog with Prisma</li>
        //                     <li>--&gt; Contact me Section</li>
        //                     <li>--&gt; Internal Routing </li>
        //                     <li>--&gt; Horizontal Scrolling & Parallex</li>
        //                     <li>--&gt; Admin dashboard/CMS </li>
        //                 </ul>
        //             </div>
        //             <div className='kvshw__header_inner-div_right'>
        //                 <div className='kvshw__header_inner-div_social'>
        //                     <ImageChangeOnHover defaultSource={GitHub} hoverSource={GitHub2} link={"https://github.com/kvshw"} />
        //                     <ImageChangeOnHover defaultSource={LinkedIn} hoverSource={LinkedIn2} link={"https://www.linkedin.com/in/kavishwa-bhashitha/"} />
        //                     <ImageChangeOnHover defaultSource={Facebook} hoverSource={Facebook2} link={"https://www.facebook.com/kavishwa.bhashitha"} />
        //                     <ImageChangeOnHover defaultSource={Twitter} hoverSource={Twitter2} link={"https://twitter.com/kvshw_"} />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <>

            <div className='h-[84vh] w-screen grid  bg-right bg-no-repeat bg-mobile-header sm:h-[82vh] sm:bg-right md:hidden'  >
                <div className='flex flex-col justify-center items-center '>
                    <h1 className='text-transparent text-center bg-gradient-to-r from-[#FF27DD] to-[#433AD1] bg-clip-text text-2xl font-bold sm:text-4xl'>Kavishwa Wendakoon</h1>
                    <h2 className='text-white text-lg sm:text-3xl text-center'>Transforming Complex Ideas into Elegant Code</h2>
                    <p className='text-white text-center px-8 py-2 text-sm sm:text-lg'>From complex ideas to elegant code - with a keen eye for detail and a passion for innovation,
                        Kavishwa brings your ideas to life one line of code at a time.</p>
                    <Socialicons />
                </div>
            </div>
            <div className='hidden sm:hidden md:grid md:grid-cols-[65%_35%] md:text-white md:bg-desktop-header md:h-[88vh] md:bg-right bg-cover'>
                <div className='flex flex-col md:justify-center md:pl-[15vw]'>
                    <h1 className='md:text-transparent md:text-left md:bg-gradient-to-r md:from-[#FF27DD] md:to-[#433AD1] md:bg-clip-text md:text-5xl md:font-bold '>Kavishwa Wendakoon</h1>
                    <h2 className='text-white md:text-3xl md:mt-3'>Transforming Complex Ideas into Elegant Code</h2>
                    <p className='text-white md:text-left  md:text-lg md:w-[35vw] md:mt-3 md:font-light'>From complex ideas to elegant code - with a keen eye for detail and a passion for innovation,
                        Kavishwa brings your ideas to life one line of code at a time.</p>
                </div>
                <div className='flex flex-col md:justify-end'>
                    <Socialicons />
                </div>
            </div>
        </>


    )
}

export default Header