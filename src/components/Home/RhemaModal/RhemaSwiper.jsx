import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCreative } from 'swiper/modules';
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
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          }
        }}
        className="MySwiper"
      >
        {rhemas.map((rhema, index) => (
          <SwiperSlide
            key={index}
            className="relative z-3 p-7 text-md sm:text-lg text-center leading-6"
          >
            <div className="relative z-10 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100  [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full ">
              {rhema.qoute.split("\n\n").map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} className=" mb-3">
                  {paragraph}
                </p>
              ))}
              {rhema.Author && (
                <p className="relative z-10 mt-3 font-semibold text-right">
                  -{rhema.Author}
                </p>
              )}
            </div>
            <div className="bg-gradient-to-b from-primary/15 via-black/30 to-secondary/30  absolute z-0 w-full h-full "></div>
          </SwiperSlide>
          
        ))}

      
      </Swiper>
    </>
  );
};

export default RhemaSwiper;
