import React from 'react'

const OurTeam = () => {
    return (
        <div>
            <div class="flex items-center my-8">
                <div class="flex-grow border-t border-[#370554]"></div>
                <span class="mx-4 text-2xl font-bold text-[#370554]">Our Team</span>
                <div class="flex-grow border-t border-[#370554]"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-4 mx-5">
                <div class="md:aspect-[3/4] aspect-[5/3] p-4 flex flex-col place-content-end place-items-center bg-no-repeat bg-cover bg-center bg-[url('https://picsum.photos/200/300')]"></div>
                <div class="md:aspect-[3/4] aspect-[5/3] p-4 flex flex-col place-content-end place-items-center bg-no-repeat bg-cover bg-center bg-[url('https://picsum.photos/200/300')]"></div>
                <div class="md:aspect-[3/4] aspect-[4/3] p-4 flex flex-col place-content-end place-items-center bg-no-repeat bg-cover bg-center bg-[url('https://picsum.photos/200/300')]"></div>
                <div class="md:aspect-[3/4] aspect-[5/3] p-4 flex flex-col place-content-end place-items-center bg-no-repeat bg-cover bg-center bg-[url('https://picsum.photos/200/300')]"></div>
                <div class="md:aspect-[3/4] aspect-[5/3] p-4 flex flex-col place-content-end place-items-center bg-no-repeat bg-cover bg-center bg-[url('https://picsum.photos/200/300')]"></div>
            </div>
        </div>
    )
}

export default OurTeam
