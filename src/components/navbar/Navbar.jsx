import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import resume from '../../assets/Kavishwa Wendakoon Resume.pdf'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className='flex justify-between items-center px-16 mt-[1vh] min-h-[9vh]'>
            <div>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className='flex text-white text-sm items-center md:text-xs'>
                <Link to="/about-me" className={`mx-6 ${location.pathname === '/about-me' ? 'active-link' : ''}`}>
                    About me
                </Link>
                <Link to="/portfolio" className={`mx-6 ${location.pathname === '/portfolio' ? 'active-link' : ''}`}>
                    Portfolio
                </Link>
                <Link to="/blog" className={`mx-6 ${location.pathname === '/blog' ? 'active-link' : ''}`}>
                    Blog
                </Link>
                <Link to="/contact" className={`mx-6 ${location.pathname === '/contact' ? 'active-link' : ''}`}>
                    Contact me
                </Link>
                <a href={resume} download="Kavishwa Wendakoon Resume">
                    <button className='bg-gradient-to-r from-[#FF27DD] to-[#433AD1] py-2 px-6 rounded-md'>
                        Download Resume
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Navbar;
