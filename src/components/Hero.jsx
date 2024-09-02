import React from 'react';
import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


const Hero = () => {

    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },

        {
            url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    //This state variable will help us track whether the user is currently hovering over the carousel or not.

    useEffect(() => {

        let interval;

        const startInterval = () => {
            interval = setInterval(() => {
                const isLastSlide = currentIndex === slides.length - 1;
                const newIndex = isLastSlide ? 0 : currentIndex + 1;
                setCurrentIndex(newIndex);
            }, 3000); // 3 seconds
            // This function encapsulates the logic for setting up the interval that automatically advances the carousel.
        };

        if (!isHovering) {
            startInterval();
            // If isHovering is false, it calls the startInterval() function to set up the timer.
        }

        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
        // The cleanup function remains ensure the interval is cleared when the component is unmounted.

    }, [currentIndex, slides.length, isHovering]);

    // The useEffect hook now checks the value of isHovering before starting the interval.

    const prevSlide = () => {
        setIsHovering(true);
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        setIsHovering(true);
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    // These event handlers update the isHovering state when the user hovers over or out of the carousel.

    return (
        <div>

            <main
                className="p-9 md:mt-16 mt-16"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            // By attaching the onMouseEnter and onMouseLeave handlers to the <main> element, we can capture the hover events for the entire carousel.
            >

                {/* image or Carousel */}
                <div className="w-[100%] h-[70vh] object-cover relative group">

                        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 absolute top-0 bg-slate-900 opacity-40'></div> 

                    <div 
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
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
