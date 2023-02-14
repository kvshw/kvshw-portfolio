import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import resume from '../../assets/Kavishwa Wendakoon Resume.pdf'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        // <div className='kvshw__navbar'>
        //     <div className="kvshw__navbar-logo_container">
        //         <Link to="/"><img src={logo} alt="" srcset="" /></Link>
        //     </div>
        //     <div className="kvshw__navbar-links_container">
        //         <p><Link to="/about-me" >About me</Link></p>
        //         <p><a href='#'>Portfolio</a></p>
        //         <p><a href='#'>Blog</a></p>
        //         <p><a href='#'>Contact me</a></p>
        //         <a href={resume} download="Kavishwa Wendakoon Resume"><button className='resume'>Download Resume</button></a>
        //     </div>

        // </div>
        <div className='flex justify-between items-center mx-8 my-4'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex text-white text-sm'>
                <p className='mx-6'><Link to="/about-me" >About me</Link></p>
                <p className='mx-6'><a href='#'>Portfolio</a></p>
                <p className='mx-6'><a href='#'>Blog</a></p>
                <p className='mx-6'><a href='#'>Contact me</a></p>
                <a href={resume} download="Kavishwa Wendakoon Resume"><button className='resume'>Download Resume</button></a>
            </div>
        </div>
    )
}

export default Navbar