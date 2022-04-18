import React from 'react';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//images slider
import image1 from "../../assets/img/1.jpg"
import image2 from "../../assets/img/2.jpg"
import image3 from "../../assets/img/3.jpg"

//Styles
import styles from "./Slider.module.css";

const Slider = () => {
    return (
        <Swiper className='slider'
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide><img src={image1} className={styles.image} alt="slider" /></SwiperSlide>
        <SwiperSlide><img src={image2} className={styles.image} alt="slider" /></SwiperSlide>
        <SwiperSlide><img src={image3} className={styles.image} alt="slider" /></SwiperSlide>
      </Swiper>
    );
};

export default Slider;