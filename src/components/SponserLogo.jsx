import React from 'react'
import logo from '../assets/KhatraDokan.png';

const SponserLogo = () => {
    return (
        <div className=''>
            <div class="flex items-center mt-8 mb-4">
                <div class="flex-grow border-t border-[#370554]"></div>
                <span class="mx-4 text-2xl font-bold text-[#370554]">Our Sponsers</span>
                <div class="flex-grow border-t border-[#370554]"></div>
            </div>
            <div class="grid md:grid-cols-6 grid-cols-3 mb-4 w-[70%] h-[100%] m-auto gap-9">
                    <img className='grayscale hover:grayscale-0 ' src={logo} alt="KhatraDokhan" />
                    <img className='grayscale hover:grayscale-0 ' src={logo} alt="KhatraDokhan" />
                    <img className='grayscale hover:grayscale-0 ' src={logo} alt="KhatraDokhan" />
                    <img className='grayscale hover:grayscale-0 ' src={logo} alt="KhatraDokhan" />
                    <img className='grayscale hover:grayscale-0 ' src={logo} alt="KhatraDokhan" />
                    <img className='grayscale hover:grayscale-0 ' src={logo} alt="KhatraDokhan" />
                </div>

        </div>
    )
}

export default SponserLogo
