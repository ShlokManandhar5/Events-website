import React from 'react'

const PhotoGallery = () => {
    return (
        <div>
            <div class="mt-8 mx-5">
                <div class="flex items-center my-8">
                    <div class="flex-grow border-t border-[#370554]"></div>
                    <span class="mx-4 text-2xl font-bold text-[#370554]">Photo Galary</span>
                    <div class="flex-grow border-t border-[#370554]"></div>
                </div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 w-full">
                    <div class="relative bg-gray-300">
                        <img src="https://picsum.photos/200/300" alt="image1" class="object-cover w-full h-full" />
                    </div>
                    <div class="relative bg-gray-300">
                        <img src="https://picsum.photos/200/300" alt="image2" class="object-cover w-full h-full" />
                    </div>
                    <div class="relative bg-gray-300">
                        <img src="https://picsum.photos/200/300" alt="image3" class="object-cover w-full h-full" />
                    </div>
                    <div class="relative bg-gray-300">
                        <img src="https://picsum.photos/200/300" alt="image4" class="object-cover w-full h-full" />
                    </div>
                    <div class="relative bg-gray-300">
                        <img src="https://picsum.photos/200/300" alt="image5" class="object-cover w-full h-full" />
                    </div>
                    <div class="relative bg-gray-300">
                        <img src="https://picsum.photos/200/300" alt="image6" class="object-cover w-full h-full" />
                    </div>
                    <div class="relative bg-gray-300">
                        <img src="https://picsum.photos/200/300" alt="image7" class="object-cover w-full h-full" />
                    </div>
                    <div class="relative bg-gray-300">
                        <img src="https://picsum.photos/200/300" alt="image8" class="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoGallery
