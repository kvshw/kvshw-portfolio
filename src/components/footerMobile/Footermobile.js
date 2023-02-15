import React from 'react'
import './footermobile.css'
import AboutMeImage from '../../assets/user.png'
import PortfolioImage from '../../assets/briefcase.png'
import BlogImage from '../../assets/edit.png'
import ContactImage from '../../assets/contact-mail.png'

const Footermobile = () => {
    return (
        <div className='flex w-screen h-[7vh] justify-between px-6 py-4 sm:h-[8vh] md:hidden bg-gradient-to-r from-[#32082b] to-[#110f36]'>
            <img className='h-[26px]' src={AboutMeImage} />
            <img className='h-[26px]' src={PortfolioImage} />
            <img className='h-[26px]' src={BlogImage} />
            <img className='h-[26px]' src={ContactImage} />
        </div>
    )
}

export default Footermobile