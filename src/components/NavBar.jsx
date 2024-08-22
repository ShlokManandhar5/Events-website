import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <div>
            <nav className='flex align-center items-center justify-between bg-white h-[12vh] max-w-[100%] top-0 sticky md:px-7 px-6'>
                <div className='flex justify-between items-center w-full mb-2'>
                    <div className='text-[#410066d6] sm:text-4xl text-2xl font-bold cursor-pointer'>
                        Khatra Events
                    </div>
                    <div className="hidden md:flex gap-12">
                        <ul className="flex flex-row gap-x-4 align-center lg:font-medium text-base">
                            <li><a href="#" className="bg-[#410066d6] text-white rounded-lg lg:px-4 px-2 py-1 align-middle">Home</a></li>
                            <li><a href="#" className="bg-[#410066d6] text-white rounded-lg lg:px-4 px-2 py-1 align-middle">Tickets</a></li>
                            <li><a href="#" className="bg-[#410066d6] text-white rounded-lg lg:px-4 px-2 py-1 align-middle">Program</a></li>
                            <li><a href="#" className="bg-[#410066d6] text-white rounded-lg lg:px-4 px-2 py-1 align-middle">Contact us</a></li>
                            <li><a href="#" className="bg-[#410066d6] text-white rounded-lg lg:px-4 px-2 py-1 align-middle">Buy Tickets</a></li>
                        </ul>
                    </div>

                    <button className='md:hidden text-[#410066d6]' onClick={toggleMenu}>
                        {menuOpen ? <X size={32} strokeWidth={1.75} /> : <Menu size={32} strokeWidth={1.75} />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="absolute left-0 top-[9vh] w-[100vw] bg-white md:hidden z-50">
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