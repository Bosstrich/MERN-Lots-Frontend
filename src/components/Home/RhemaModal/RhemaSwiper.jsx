import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './swiper.css'

const RhemaSwiper = ({ rhemas }) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="MySwiper"
      >
        {rhemas.map((rhema, index) => (
          <SwiperSlide
            key={index}
            className="relative z-3 p-7 text-lg text-justify leading-6"
          >
            {rhema.qoute.split("\n\n").map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className="relative z-10 mb-5">
                {paragraph}
              </p>
            ))}
            {rhema.author && (
              <p className="relative z-10 mt-3 font-semibold text-right">
                -{rhema.author}
              </p>
            )}
            <div className="bg-gradient-to-b from-primary/15 via-black/30 to-secondary/30  absolute z-0 w-full h-full "></div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide className='relative z-3 p-7 text-lg text-justify leading-6'>    
                            <p className="relative z-10 mb-5">{sampleRhema}</p>
                            <div className='bg-gradient-to-b from-primary/15 via-black/30 to-secondary/30  absolute z-0 w-full h-full '></div> 
                        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default RhemaSwiper;
