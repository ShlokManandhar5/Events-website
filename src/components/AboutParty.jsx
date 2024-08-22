import React from 'react'

const AboutParty = () => {
    return (
        <div className='mt-10 mx-5'>
            <div class="grid md:grid-cols-2 h-[100%] gap-x-4 md:gap-x-6 lg:gap-x-8 mb-16">
                <div class="flex flex-col gap-y-20 bg-gray-300 rounded p-3 h-[100%] text-center">
                    <h2>Whats Included</h2>
                    <p>Short Description</p>
                </div>
                <div class="flex flex-col gap-y-4 h-[100%]  mt-4 lg:mt-0">
                    <div class="bg-gray-300 text-center h-12 justify-center align-middle p-2">DJ</div>
                    <div class="bg-gray-300 text-center h-12 justify-center align-middle p-2">Live Music</div>
                    <div class="bg-gray-300 text-center h-12 justify-center align-middle p-2">Party</div>
                    <div class="bg-gray-300 text-center h-12 justify-center align-middle p-2">Fire work</div>
                    <div class="bg-gray-300 text-center h-12 justify-center align-middle p-2">Unlimited fun</div>
                </div>
            </div>
            <div class="flex items-center my-8">
                <div class="flex-grow border-t border-white"></div>
                <span class="mx-4 text-2xl font-bold text-white">Event Timeline</span>
                <div class="flex-grow border-t border-white"></div>
            </div>

        </div>
    )
}

export default AboutParty
