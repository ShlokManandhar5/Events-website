import React from 'react';
import BuyCard from './BuyCard';

const BuyTickets = () => {
    return (
        <div>
            <div className='flex flex-col max-w-[95%] mx-auto min-[80%] gap-5 mt-5' >
                <div class="flex items-center my-2 mt-6">
                    <div class="flex-grow border-t border-[#410066d6]"></div>
                    <span class="mx-4 md:text-4xl text-3xl font-bold text-[#410066d6]">Feature Events</span>
                    <div class="flex-grow border-t border-[#410066d6]"></div>
                </div>

                {/* Buy Now Card */}
                <div className='overflow-x-auto py-4 bg-none'>
                    <div className='grid grid-flow-col auto-cols-max items-center md:mx-auto gap-5 justify-between mb-5'>

                        <BuyCard
                            id="1"
                            date="21 SEP"
                            price="Rs 500"
                            title="TASTE The Culture - Music Festival 2081"
                            location="Hyatt Ground, Chuchhepati, Chabahil"
                        />

                        <BuyCard
                            id="1"
                            date="21 SEP"
                            price="Rs 500"
                            title="TASTE The Culture - Music Festival 2081"
                            location="Hyatt Ground, Chuchhepati, Chabahil"
                        />

                        <BuyCard
                            id="1"
                            date="21 SEP"
                            price="Rs 500"
                            title="TASTE The Culture - Music Festival 2081"
                            location="Hyatt Ground, Chuchhepati, Chabahil"
                        />

                        <BuyCard
                            id="1"
                            date="21 SEP"
                            price="Rs 500"
                            title="TASTE The Culture - Music Festival 2081"
                            location="Hyatt Ground, Chuchhepati, Chabahil"
                        />

                    </div>
                </div>


            </div>
        </div>
    )
}

export default BuyTickets
