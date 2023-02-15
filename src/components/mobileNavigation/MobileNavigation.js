import React, { useState } from 'react';
import './mobilenavigation.css';
import Hamburger from '../../assets/hambergur.png';
import Close from '../../assets/close.png';
import logo from '../../assets/logo.svg';

const MobileNavigation = () => {

    return (
        <>
            <div className="flex justify-center px-4 h-[9vh] items-center sm:h-[10vh] md:hidden">

                <img className="h-[36px]" src={logo} alt="Logo" />
            </div>

        </>
    );
};

export default MobileNavigation;
