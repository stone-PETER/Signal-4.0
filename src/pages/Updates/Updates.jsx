import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Updates.css";
import wave from "../../assets/green wave 3.jpg";
import { Navigation } from "swiper/modules";
import UpdateImage3 from "../../assets/UpdateImage3.jpg";
import UpdateImage2 from "../../assets/UpdateImage2.jpg";
import UpdateImage1 from "../../assets/UpdateImage1.jpg";
import UpdateImage4 from "../../assets/UpdateImage4.jpg";
import UpdateImage5 from "../../assets/UpdateImage5.jpg";
import UpdateImage6 from "../../assets/UpdateImage6.jpg";
import UpdateImage7 from "../../assets/UpdateImage7.jpg"
import UpdateImage8 from "../../assets/UpdateImage8.jpg"
import UpdateImage9 from "../../assets/UpdateImage9.jpg"
import UpdateImage10 from "../../assets/UpdateImage10.jpg"
import UpdateImage11 from "../../assets/UpdateImage11.jpg"
import UpdateImage12 from "../../assets/UpdateImage12.jpg"
import UpdateImage13 from "../../assets/UpdateImage13.jpg"

const Updates = () => {
  const images = [
    UpdateImage13,
    UpdateImage12,
    UpdateImage11,
    UpdateImage10,
    UpdateImage9,
    UpdateImage8,
    UpdateImage7,
    UpdateImage6,
    UpdateImage5,
    UpdateImage4,
    UpdateImage3,
    UpdateImage2,
    UpdateImage1,
  ];
  return (
    <div className="updates-page">
      
      <div className="green-wave-container">
        <img src={wave} alt="Wave" className="green-wave" />
        <h2 className="workshop-heading">Updates</h2>
        <span className="loaderUpdate"></span>
      </div>

      {/* Swiper Carousel */}
      <div className="carousel-container">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={1} 
          spaceBetween={20}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 3, 
              spaceBetween: 10, 
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Poster ${index + 1}`}
                className="carousel-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      <img
        src={wave}
        alt="Green Wave"
        className="green-wave-btm"
      />
    </div>
  );
};

export default Updates;
