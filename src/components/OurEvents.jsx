import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import UpcomingCard from './Buy_Tickets/UpcomingCard';

const OurEvents = () => {
    const slides = [
        { title: 'Photography', date: '21 SEP', price: 'Rs 500', location: 'Hyatt Ground, Chuchhepati, Chabahil' },
        { title: 'Photography', date: '22 SEP', price: 'Rs 600', location: 'Hyatt Ground, Chuchhepati, Chabahil' },
        { title: 'Photography', date: '23 SEP', price: 'Rs 700', location: 'Hyatt Ground, Chuchhepati, Chabahil' },
        { title: 'Photography', date: '24 SEP', price: 'Rs 800', location: 'Hyatt Ground, Chuchhepati, Chabahil' },
        { title: 'Photography', date: '25 SEP', price: 'Rs 900', location: 'Hyatt Ground, Chuchhepati, Chabahil' },
        { title: 'Photography', date: '26 SEP', price: 'Rs 1000', location: 'Hyatt Ground, Chuchhepati, Chabahil' },
    ];

    return (
        <div>
            <div>
                <div class="flex items-center bg-[#410066cc] pt-6">
                    <div class="flex-grow border-t border-[#F7F5FB]"></div>
                    <span class="mx-4 text-3xl font-bold text-[#F7F5FB]">Upcoming Events</span>
                    <div class="flex-grow border-t border-[#F7F5FB]"></div>
                </div>

                <section className="h-[80vh]  bg-[#410066cc] flex items-center justify-center">
                    <Swiper
                        modules={[EffectCoverflow, Autoplay]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView="auto"
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        className="w-full max-w-4xl"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className="rounded-3xl overflow-hidden max-w-fit">
                                <UpcomingCard
                                    img={slide.img}
                                    date={slide.date}
                                    price={slide.price}
                                    title={slide.title}
                                    location={slide.location}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </div>
        </div>
    )
}

export default OurEvents;
