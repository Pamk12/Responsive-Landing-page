import React from 'react';
import { FaBars } from "react-icons/fa";

function Header() {
    return (
        <div className="flex justify-between">
            <div className="flex items-center">
                <img src="/assets/Logo.svg" alt="Logo" className="h-10 mr-4" />
                <button type='button' className="bg-gradient-to-r from-orange-500 to-red-400 text-white px-4 py-2 rounded">
                    Hosterr is hiring
                </button>
            </div>
            <div >
                <ul className='hidden lg:flex flex-row justify-between gap-3'>
                    <li><a href="#">Plans</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li>Why Hoster?</li>
                </ul>
            </div>
            <div className='hidden lg:flex flex-row lg:justify-between gap-6'>
                <p>Signin..</p>
                <button className="hidden lg:h-13 w-35 p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md lg:flex justify-center items-center transition-colors duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 gap-2">
                Join Waitlist</button>
            </div>
            <div className='lg:hidden'>
                <FaBars className="text-xl cursor-pointer" />
            </div>
        </div>
    );
}

export default Header;
