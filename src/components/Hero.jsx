import React from 'react'

const Hero = () => {

    return (
        <div>
            <main class="p-6">
                <div class="w-[100%] h-[70vh] object-cover ">
                    <img src="https://picsum.photos/800/800" class="w-full h-[100%] object-cover" alt="hero-section" />
                </div>
                
                <div class="h-[25vh] text-center mx-4 mt-8 p-2 border-4 border-[#410066d6] bg-gray-100">
                    <h1>Party Program</h1>
                    <p>Short Description</p> 
                </div>
            </main>
        </div>
    )
}

export default Hero
