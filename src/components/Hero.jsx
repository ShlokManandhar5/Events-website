import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import slidesData from './items'; // Importing the slidesData

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let interval;

        const startInterval = () => {
            interval = setInterval(() => {
                const isLastSlide = currentIndex === slidesData.length - 1;
                const newIndex = isLastSlide ? 0 : currentIndex + 1;
                setCurrentIndex(newIndex);
            }, 3000); // 3 seconds
        };

        if (!isHovering) {
            startInterval();
        }

        return () => clearInterval(interval);
    }, [currentIndex, isHovering]);

    const prevSlide = () => {
        setIsHovering(true);
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slidesData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        setIsHovering(true);
        const isLastSlide = currentIndex === slidesData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div>
            <main
                className="p-9 md:mt-16 mt-16"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* image or Carousel */}
                <div className="w-[100%] h-[70vh] object-cover relative group">
                    <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 absolute top-0 bg-slate-900 opacity-40'></div>

                    <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 absolute top-0'>
                        <div className='py-16 px-16 text-white z-10 flex flex-col gap-2 lg:max-w-[40%] md:max-w-[65%] max-w-[100%] text-center md:text-left'>
                            {/* Title */}
                            <div className='lg:text-3xl sm:text-2xl text-xl font-bold'>
                                {slidesData[currentIndex].title}
                            </div>
                            {/* Short Description */}
                            <div className='md:text-base md:block hidden font-medium '>
                                <p>{slidesData[currentIndex].about}</p>
                            </div>
                        </div>

                        {/* Updated Button Position and Text Size */}
                        <div className='absolute right-0 bottom-0 py-16 px-20 flex justify-center md:justify-end sm:justify-center w-full'>
                            <button className='bg-purple-800 text-white z-10 sm:py-2 py-1 sm:px-3 px-2 rounded-xl font-medium outline outline-1 text-sm xs:text-sm'>
                                Buy Tickets
                            </button>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${slidesData[currentIndex].img})` }}
                        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                    ></div>

                    {/* Left side button, on click the image goes to the prevImage */}
                    <div
                        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer"
                        onClick={prevSlide}
                    >
                        <BsChevronCompactLeft size={30} />
                    </div>

                    {/* Right side button, on click the image goes to the nextImage */}
                    <div
                        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer"
                        onClick={nextSlide}
                    >
                        <BsChevronCompactRight size={30} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Hero;
