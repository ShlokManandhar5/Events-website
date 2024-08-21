import React from 'react'

const Hero = () => {

    return (
        <div>
            <main class="bg-amber-200 bg-opacity-80 p-6">
                <div class="w-[100%] h-[70vh] bg-purple-900 object-cover ">
                    <img src="https://picsum.photos/800/800" class="w-full h-[100%] object-cover" alt="hero-section" />
                </div>
                <div class="text-center m-4 p-2 border-4 border-blue-400 bg-gray-100">
                    <h1>Party Program</h1>
                    <p>Short Description</p> 
                </div>
            </main>
        </div>
    )
}

export default Hero
