import React, { useState } from 'react'
import './socialicons.css'

import GitHub from '../../assets/github 1.png'
import GitHub2 from '../../assets/github 2.png'
import LinkedIn from '../../assets/linkedin 1.png'
import LinkedIn2 from '../../assets/linkedin 2.png'
import Facebook from '../../assets/facebook 1.png'
import Facebook2 from '../../assets/facebook 2.png'
import Twitter from '../../assets/twitter 2.png'
import Twitter2 from '../../assets/twitter 3.png'

const socialIcons = [
    {
        defaultSource: GitHub,
        hoverSource: GitHub2,
        link: "https://github.com/kvshw",
        className: "",
    },
    {
        defaultSource: LinkedIn,
        hoverSource: LinkedIn2,
        link: "https://www.linkedin.com/in/kavishwa-bhashitha/",
        className: "pl-2 md:pl-8",
    },
    {
        defaultSource: Facebook,
        hoverSource: Facebook2,
        link: "https://www.facebook.com/kavishwa.bhashitha",
        className: "pl-2 md:pl-8",
    },
    {
        defaultSource: Twitter,
        hoverSource: Twitter2,
        link: "https://twitter.com/kvshw_",
        className: "pl-2 md:pl-8",
    },
];

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

const ImageChangeOnHover = ({ defaultSource, hoverSource, link, className }) => {
    const { source, onMouseOver, onMouseOut } = useImageChangeOnHover(
        defaultSource,
        hoverSource
    );

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img
                className={className}
                src={source}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                alt="Image change on hover"
            />
        </a>
    );
};

const Socialicons = () => {
    return (
        <div className='flex pt-2'>
            {socialIcons.map((icon, index) => (
                <ImageChangeOnHover
                    key={index}
                    defaultSource={icon.defaultSource}
                    hoverSource={icon.hoverSource}
                    link={icon.link}
                    className={icon.className}
                />

            ))}
        </div>
    );
};

export default Socialicons