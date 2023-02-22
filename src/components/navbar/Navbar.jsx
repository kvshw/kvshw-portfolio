import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/kvshw-logo.png';
import resume from '../../assets/Kavishwa Wendakoon Resume.pdf'






const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)

    }

    return (

        <>
            <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-black/50 fixed w-full">
                <div class="container flex flex-wrap items-center justify-between mx-auto">

                    <img src={logo} class="h-full ml-3 sm:h-9" alt="Flowbite Logo" />
                    {/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Kvshw</span> */}

                    <div class="flex md:order-2 items-center md:hidden">
                        {/* <button type="button" class=" text-black px-8 py-1 bg-white text-xs h-[40px] rounded-3xl mr-2">Download Resume</button> */}
                        <div onClick={handleToggle}>
                            {toggle ? <i className="fa-sharp fa-solid fa-x text-white mr-3 text-[24px]"></i> : <i className="fa-sharp fa-solid fa-bars text-white mr-3 text-[24px]"></i>}

                        </div>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar;
