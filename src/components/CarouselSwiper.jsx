import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../custom.scss';
import { useTheme } from '../context/ThemeContext';
import { EffectCoverflow, Pagination } from 'swiper/modules';

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
        <>
            <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                    <Swiper
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
                    modules={[EffectCoverflow, Pagination]}
                    className={`mySwiper ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}
                    >
                    <SwiperSlide>
                        <img src={img1} alt="Slide 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="Slide 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="Slide 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="Slide 4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="Slide 5" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} alt="Slide 6" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img7} alt="Slide 7" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img8} alt="Slide 8" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img9} alt="Slide 9" />
                    </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </>
    );
};

export default CarouselSwiper;