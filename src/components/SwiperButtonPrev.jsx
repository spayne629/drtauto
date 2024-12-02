import React from 'react';
import '../custom.scss';

const SwiperButtonPrev = () => {
    const [slide, setSlide] = useState('');

    const handleClick = () => {
        if(SwiperSlide.id === 'slide1') {
            SwiperButtonPrev.display = none;
        } else {
            SwiperButtonPrev.addEventListener('click', () => {
                setSlide((prev) => prev + 1);
            });
        };
    };

    return (
        <div className="swiper-button-prev" onclick={handleClick} />
    );
};

export default SwiperButtonPrev;
