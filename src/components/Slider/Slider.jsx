import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../Slider/Slider.css";
import '../Slider/Mobile.css';
import Image_1 from '../../assets/1.jpg';
import Image_2 from '../../assets/2.jpg';
import Image_3 from '../../assets/3.jpg';
import Image_4 from '../../assets/4.jpg';
import Image_5 from '../../assets/5.jpg';
import Image_6 from '../../assets/6.jpg';
import Image_7 from '../../assets/7.jpg';
import Image_8 from '../../assets/8.jpg';
import Image_9 from '../../assets/9.jpg';
import Image_10 from '../../assets/10.jpg';

const Slider = () => {
  return (
    <div className="container">
      <h1>Top 10 Movie </h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <img src={Image_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image_4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image_5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image_6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image_7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image_8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image_9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image_10} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
