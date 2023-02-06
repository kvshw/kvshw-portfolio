import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <div className='kvshw__navbar'>
            <div className="kvshw__navbar-logo_container">
                <img src={logo} alt="" srcset="" />
            </div>
            <div className="kvshw__navbar-links_container">
                <p><a href='#'>About me</a></p>
                <p><a href='#'>Portfolio</a></p>
                <p><a href='#'>Blog</a></p>
                <p><a href='#'>Contact me</a></p>
                <button>Download Resume</button>
            </div>

        </div>
    )
}

export default Navbar