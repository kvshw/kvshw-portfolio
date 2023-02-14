import React from 'react'
import './mobilenavigation.css'
import Hamburger from '../../assets/hambergur.png'
import logo from '../../assets/logo.svg';

const MobileNavigation = () => {
    return (
        <div className='flex justify-between px-4 h-[9vh] items-center md:hidden'>
            <img className='h-[22px]' src={Hamburger} />
            <img className='h-[36px]' src={logo} />

        </div>
    )
}

export default MobileNavigation