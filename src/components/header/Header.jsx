import React from 'react';
// import headerImg from '../../assets/kvshw.png'
import './header.css';
import GitHub from '../../assets/github 1.png'
import LinkedIn from '../../assets/linkedin 1.png'
import Facebook from '../../assets/facebook 1.png'
import Twitter from '../../assets/twitter 2.png'

const Header = () => {
    return (
        <div className='kvshw__header' style={{ backgroundImage: 'url(' + require('../../assets/kvshw.png') + ')', height: "90vh", }} >
            <div className='kvshw__header_inner-div'  >
                <div className='kvshw__header_inner-div_left'>
                    <h1>Kavishwa Wendakoon</h1>
                    <h2>Welcome to my Portfolio</h2>
                    <p>My mission is to invoke a change in
                        society using the knowledge I gained throughout
                        last few years </p>
                    <p className='contact_btn'><a href='#'>Contact me &gt; </a></p>
                </div>
                <div className='kvshw__header_inner-div_right'>
                    <div className='kvshw__header_inner-div_social'>
                        <img className='social_icons' src={GitHub} alt="" srcset="" />
                        <img className='social_icons' src={LinkedIn} alt="" srcset="" />
                        <img className='social_icons' src={Facebook} alt="" srcset="" />
                        <img className='social_icons' src={Twitter} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header