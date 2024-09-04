import React from 'react'
import { Calendar, MapPin } from 'lucide-react';

const UpcomingCard = (props) => {

    return (
        <div className='m-0 p-0 box-border'>
            <div className='bg-[#f5f6f8] border h-[495px] w-[340px] drop-shadow-lg rounded-3xl flex flex-col gap-1 cursor-pointer'>

                {/*Image section*/}
                <div className='h-[60%] w-[100%] rounded-3xl'>
                    <img className='object-cover rounded-t-xl w-full  aspect-square overflow-hidden' src='https://cdn.ticketsanjal.com/images/2024/08/24/105010-website%20banner.jpg' alt="..." />
                </div>

                {/* Date and Price*/}
                <div className='flex h-[1%] w-[90%] m-auto text-[#410066d6] justify-between mt-12' >

                    {/* date */}
                    <div className='text-base flex gap-1 text-[#410066d6]'>

                        <Calendar size={22} color='#410066d6' strokeWidth={1.75} /> 
                        {/* 21 SEP */} 
                        {props.date}

                    </div >

                    {/* price */}
                    <div className='font-bold text-xl'>
                        {/* Rs 500 */}
                        {props.price}
                    </div>

                </div>

                {/* Title and location */}
                <div className='h-[12%] w-[95%] m-auto flex flex-col gap-1 mt-5'>

                    {/* Title */}
                    <div className='font-semibold text-lg'>
                        {/* TASTE The Culture - Music Festival 2081 */}
                        {props.title}
                    </div>

                    {/* location */}
                    <div className='flex text-base overflow-hidden text-[#008080] '>
                        <MapPin />
                        {/* Hyatt Ground, Chuchhepati, Chabahil */}
                        {props.location}
                    </div>
                </div>

                <div className='h-[8%] w-[95%] m-auto flex justify-end mr-6 mb-5'>
                    <button className='bg-[#410066d6] text-white font-semibold py-1 px-3 rounded-lg'>Buy Now </button>
                </div>

            </div>
        </div>
    )
}

export default UpcomingCard;
