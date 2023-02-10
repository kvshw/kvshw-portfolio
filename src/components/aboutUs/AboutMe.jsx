import React, { useState } from 'react'
import GitHub from '../../assets/github 1.png'
import GitHub2 from '../../assets/github 2.png'
import LinkedIn from '../../assets/linkedin 1.png'
import LinkedIn2 from '../../assets/linkedin 2.png'
import Facebook from '../../assets/facebook 1.png'
import Facebook2 from '../../assets/facebook 2.png'
import Twitter from '../../assets/twitter 2.png'
import Twitter2 from '../../assets/twitter 3.png'

import './aboutme.css';

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
const Aboutus = () => {
    return (
        <div className='kvshw__header' style={{ backgroundImage: 'url(' + require('../../assets/space-about.png') + ')', height: "90vh", backgroundPosition: "right 0%", backgroundRepeat: "no-repeat" }} >
            <div className='kvshw__header_inner-div'  >
                <div className='kvshw__header_inner-div_left'>
                    <h1>About me</h1>
                    {/* <h2>Welcome to my Portfolio</h2> */}
                    <p>Hi there! My name is Kavishwa and I am a skilled software engineer and social media marketer with over 3 years of experience in the industry. I have a strong background in both front-end and back-end development, as well as a deep understanding of social media platforms and how to effectively market products and services on them. I am always seeking new challenges and opportunities to grow my skills and help businesses succeed.</p>
                    {/* <h4 className='contact_btn'><a href='#'>About me &gt; </a></h4> */}
                </div>
                <div className='right__main'>
                    <div className='upcoming__features-about'>

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

export default Aboutus