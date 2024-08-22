import React from 'react'

const BuyTickets = () => {
    return (
        <div>
            <div>
                <div class="flex items-center my-8">
                    <div class="flex-grow border-t border-[#2A0440]"></div>
                    <span class="mx-4 text-2xl font-bold text-[#370554]">Get your Tickets</span>
                    <div class="flex-grow border-t border-[#2A0440]"></div>
                </div>
                <div class="py-4 grid md:grid-cols-3 lg:grid-cols-3 h-[70vh] gap-x-4 sm: gap-y-4">
                    <div class="w-[100%] p-4 flex flex-col place-content-end place-items-center h-full bg-no-repeat bg-cover bg-center bg-[url('https://www.eventbookings.com/wp-content/uploads/2023/12/7-ways-to-sell-more-concert-tickets-online-1024x584-1.jpg')]">
                        <button class="bg-purple-900 text-white py-2 px-4 rounded-full hover:bg-purple-800 font-medium">Buy Tickets</button>
                    </div>
                    <div class="w-[100%] object-cover p-4 flex flex-col place-content-end place-items-center h-full bg-no-repeat bg-cover bg-center  bg-[url('https://www.eventbookings.com/wp-content/uploads/2023/12/7-ways-to-sell-more-concert-tickets-online-1024x584-1.jpg')]">
                        <button class="bg-purple-900 text-white py-2 px-4 rounded-full hover:bg-purple-800 font-medium">Buy Tickets</button>
                    </div>
                    <div class="w-[100%] object-cover p-4 flex flex-col place-content-end place-items-center h-full bg-no-repeat bg-cover bg-center  bg-[url('https://www.eventbookings.com/wp-content/uploads/2023/12/7-ways-to-sell-more-concert-tickets-online-1024x584-1.jpg')]">
                        <button class="bg-purple-900 text-white py-2 px-4 rounded-full hover:bg-purple-800 font-medium">Buy Tickets</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyTickets
