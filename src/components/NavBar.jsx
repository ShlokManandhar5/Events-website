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
            <nav className='flex align-center items-center justify-between bg-white h-[12vh] max-w-[90%] m-auto relative'>
                <div className='flex justify-between items-center w-full'>
                    <div className='text-purple-900 text-3xl font-bold cursor-pointer'>
                        Khatra Events
                    </div>
                    <div className="hidden md:flex gap-12 mt-4">
                        <ul className="flex flex-row gap-x-4 align-center lg:font-medium text-base">
                            <li><a href="#" className="bg-purple-900 text-white rounded-lg lg:px-4 px-2 py-1 align-middle">Home</a></li>
                            <li><a href="#" className="bg-purple-900 text-white rounded-lg lg:px-4 px-2 py-1 align-middle">Tickets</a></li>
                            <li><a href="#" className="bg-purple-900 text-white rounded-lg lg:px-4 px-2 py-1 align-middle">Program</a></li>
                            <li><a href="#" className="bg-purple-900 text-white rounded-lg lg:px-4 px-2 py-1 align-middle">Contact us</a></li>
                            <li><a href="#" className="bg-purple-900 text-white rounded-lg lg:px-4 px-2 py-1 align-middle">Buy Tickets</a></li>
                        </ul>
                    </div>

                    <button className='md:hidden text-purple-900' onClick={toggleMenu}>
                        {menuOpen ? <X size={32} strokeWidth={1.75} /> : <Menu size={32} strokeWidth={1.75} />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="dropdown-menu flex flex-col gap-y-4 bg-white pt-4 md:hidden z-50 absolute left-0 top-[9vh] w-full">
                        <ul className='text-purple-900 text-xl font-semibold '>
                            <li><a href="#" className="block rounded-lg px-2 py-2 align-middle">Home</a></li>
                            <li><a href="#" className="block rounded-lg px-2 py-2 align-middle">Tickets</a></li>
                            <li><a href="#" className="block rounded-lg px-2 py-2 align-middle">Program</a></li>
                            <li><a href="#" className="block rounded-lg px-2 py-2 align-middle">Contact us</a></li>
                            <li><a href="#" className="block rounded-lg px-2 py-2 align-middle">Buy Tickets</a></li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default NavBar;
