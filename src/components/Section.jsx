import React from 'react'

const Section = () => {
    return (
        <div className='bg-amber-200 bg-opacity-80'>
            <div className='mx-4'>
                <div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 justify-items-center">
                    <div class="py-10">
                        <div class="rounded-md overflow-hidden shadow-lg max-w-2xl">
                            <img src="https://picsum.photos/500/500" alt="DJ photo" class="w-full" />
                        </div>
                    </div>
                    <div class="py-10">
                        <div class="rounded-md overflow-hidden shadow-lg max-w-2xl">
                            <img src="https://picsum.photos/500/500" alt="Pic of live music singer" class="w-full" />
                        </div>
                    </div>
                    <div class="py-10">
                        <div class="rounded-md overflow-hidden shadow-lg max-w-2xl">
                            <img src="https://picsum.photos/500/500" alt="Past event Dance Photo" class="w-full" />
                        </div>
                    </div>
                    <div class="py-10">
                        <div class="rounded-md overflow-hidden shadow-lg max-w-2xl">
                            <img src="https://picsum.photos/500/500" alt="Past event Party Photo" class="w-full" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section
