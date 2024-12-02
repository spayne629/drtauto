import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useTheme } from '../context/ThemeContext';

import 'swiper/css/bundle';

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/bNs.jpg';
import img3 from '../assets/images/carinlane.jpg';
import img4 from '../assets/images/cel.jpg';
import img5 from '../assets/images/cooling.jpg';
import img6 from '../assets/images/electrical.jpg';
import img7 from '../assets/images/engine.jpg';
import img8 from '../assets/images/excellence.jpg';
import img9 from '../assets/images/trust.jpg';

const CarouselSwiper = () => {
    const { theme } = useTheme();

    return (
        <div className="swiper-container">
            <Swiper
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className="mySlides" id="slide1">
                    <img src={img1} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide className="mySlides" id="slide2">
                    <img src={img2} alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide className="mySlides" id="slide3">
                    <img src={img3} alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide className="mySlides" id="slide4">
                    <img src={img4} alt="Slide 4" />
                </SwiperSlide>
                <SwiperSlide className="mySlides" id="slide5">
                    <img src={img5} alt="Slide 5" />
                </SwiperSlide>
                <SwiperSlide className="mySlides" id="slide6">
                    <img src={img6} alt="Slide 6" />
                </SwiperSlide>
                <SwiperSlide className="mySlides" id="slide7">
                    <img src={img7} alt="Slide 7" />
                </SwiperSlide>
                <SwiperSlide className="mySlides" id="slide8">
                    <img src={img8} alt="Slide 8" />
                </SwiperSlide>
                <SwiperSlide className="mySlides" id="slide9">
                    <img src={img9} alt="Slide 9" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CarouselSwiper;