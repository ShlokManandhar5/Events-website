import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div>

            <nav className='flex align-center items-center justify-between bg-[#F7F5FB] h-[12vh] max-w-[100%] fixed w-full top-0 lg:px-16 px-6 z-50'>

                <div className='flex justify-between items-center w-full mb-2'>

                    <div className='text-[#410066d6] sm:text-4xl text-3xl font-bold cursor-pointer'>
                        Khatra Events
                    </div>

                    <div className="hidden md:flex gap-12">
                        <ul className="flex flex-row lg:gap-x-12 gap-x-7 align-center lg:font-medium lg:text-xl text-lg">
                            <li><Link to="/" className="text-[#410066d6] font-semibold">Home</Link></li>
                            <li><Link to="/events" className="text-[#410066d6] font-semibold">Events</Link></li>
                            <li><a href="#"  className="text-[#410066d6] font-semibold">About us</a></li>
                            <li><a href="#"  className="text-[#410066d6] font-semibold">Contact us</a></li>
                            <li><a href="#"  className="text-[#410066d6] font-semibold">Blog</a></li>
                        </ul>
                    </div>

                    <button className='md:hidden text-[#410066d6]' onClick={toggleMenu}>
                        {menuOpen ? <X size={32} strokeWidth={1.75} /> : <Menu size={32} strokeWidth={1.75} />}
                    </button>

                </div>

                {menuOpen && (

                    <div className="absolute left-0 top-[9vh] w-[100vw] bg-[#F7F5FB] md:hidden z-50">

                        <div className="flex flex-col gap-y-2 pt-1 max-w-[90%] m-auto">
                            <ul className='text-[#410066d6] text-xl font-semibold'>
                                <li><a href="#" className="block rounded-lg px-2 py-2 align-middle">Home</a></li>
                                <li><a href="#" className="block rounded-lg px-2 py-2 align-middle">Tickets</a></li>
                                <li><a href="#" className="block rounded-lg px-2 py-2 align-middle">Program</a></li>
                                <li><a href="#" className="block rounded-lg px-2 py-2 align-middle">Contact us</a></li>
                                <li><a href="#" className="block rounded-lg px-2 py-2 align-middle">Buy Tickets</a></li>
                            </ul>
                        </div>

                    </div>
                )}

            </nav>

        </div>
    );
}

export default NavBar;
