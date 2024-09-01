import React from 'react'

const OurEvents = () => {
    return (
        <div className='bg-[#5f20b2ea]'>
            
            <div className='p-3 pb-10'>

                <div class="flex items-center my-8">
                    <div class="flex-grow border-t border-[#F7F5FB]"></div>
                    <span class="mx-4 text-3xl font-bold text-[#F7F5FB]">Upcoming Events</span>
                    <div class="flex-grow border-t border-[#F7F5FB]"></div>
                </div>

                <div className='mx-6'>
                    <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 justify-items-center h-[100%]">
                        <div class="py-2 h-[100%]">
                            <div class="rounded-md overflow-hidden shadow-lg max-w-2xl h-[100%]">
                                <img src="https://picsum.photos/500/500" alt="DJ photo" class="w-full h-[100%]" />
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="rounded-md overflow-hidden shadow-lg max-w-2xl h-[100%]">
                                <img src="https://picsum.photos/500/500" alt="Pic of live music singer" class="w-full h-[100%]" />
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="rounded-md overflow-hidden shadow-lg max-w-2xl h-[100%]">
                                <img src="https://picsum.photos/500/500" alt="Past event Dance Photo" class="w-full h-[100%]" />
                            </div>
                        </div>
                        <div class="py-2">
                            <div class="rounded-md overflow-hidden shadow-lg max-w-2xl h-[100%]">
                                <img src="https://picsum.photos/500/500" alt="Past event Party Photo" class="w-full h-[100%]" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurEvents;
