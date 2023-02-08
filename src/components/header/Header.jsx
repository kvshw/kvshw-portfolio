import React, { useState } from 'react';
// import headerImg from '../../assets/kvshw.png'
import './header.css';
import GitHub from '../../assets/github 1.png'
import GitHub2 from '../../assets/github 2.png'
import LinkedIn from '../../assets/linkedin 1.png'
import LinkedIn2 from '../../assets/linkedin 2.png'
import Facebook from '../../assets/facebook 1.png'
import Facebook2 from '../../assets/facebook 2.png'
import Twitter from '../../assets/twitter 2.png'
import Twitter2 from '../../assets/twitter 3.png'

const useImageChangeOnHover = (defaultSource, hoverSource) => {
    const [source, setSource] = useState(defaultSource);

    const onMouseOver = () => setSource(hoverSource);
    const onMouseOut = () => setSource(defaultSource);

    return {
        source,
        onMouseOver,
        onMouseOut,
    };
};

const ImageChangeOnHover = ({ defaultSource, hoverSource, link }) => {
    const { source, onMouseOver, onMouseOut } = useImageChangeOnHover(defaultSource, hoverSource);

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img className='social_icons'
                src={source}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                alt="Image change on hover"
            />
        </a>
    );
};

const Header = () => {

    return (
        <div className='kvshw__header' style={{ backgroundImage: 'url(' + require('../../assets/kvshw.png') + ')', height: "90vh", }} >
            <div className='kvshw__header_inner-div'  >
                <div className='kvshw__header_inner-div_left'>
                    <h1>Kavishwa Wendakoon</h1>
                    <h2>Welcome to my Portfolio</h2>
                    <p>My mission is to invoke a change in society using the knowledge I gained throughout last few years </p>
                    <h4 className='contact_btn'><a href='#'>About me &gt; </a></h4>
                </div>
                <div className='right__main'>
                    <div className='upcoming__features'>
                        <h3>Upcoming Additions</h3>
                        <ul>

                            <li>--&gt; GitHub + Netlify &#9989;</li>
                            <li>--&gt; Navigation &#9989;</li>
                            <li>--&gt; Homepage &#9989;</li>
                            <li>--&gt; Cursor change &#9989;</li>
                            <li>--&gt; Resume Downloading <span className='in-progress'>in progress</span></li>
                            <li>--&gt; About Section</li>
                            <li>--&gt; Portfolio Section</li>
                            <li>--&gt; Blog with Prisma</li>
                            <li>--&gt; Contact me Section</li>
                            <li>--&gt; Internal Routing </li>
                            <li>--&gt; Horizontal Scrolling & Parallex</li>
                            <li>--&gt; Admin dashboard/CRM </li>
                        </ul>
                    </div>
                    <div className='kvshw__header_inner-div_right'>
                        <div className='kvshw__header_inner-div_social'>
                            <ImageChangeOnHover defaultSource={GitHub} hoverSource={GitHub2} link={"https://github.com/kvshw"} />
                            <ImageChangeOnHover defaultSource={LinkedIn} hoverSource={LinkedIn2} link={"https://www.linkedin.com/in/kavishwa-bhashitha/"} />
                            <ImageChangeOnHover defaultSource={Facebook} hoverSource={Facebook2} link={"https://www.facebook.com/kavishwa.bhashitha"} />
                            <ImageChangeOnHover defaultSource={Twitter} hoverSource={Twitter2} link={"https://twitter.com/kvshw_"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header