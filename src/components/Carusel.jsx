import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  { src: "src/assets/carusel-image.png", alt: "Slide 1" },
  { src: "src/assets/carusel-image2.jpg", alt: "Slide 2" },
  { src: "src/assets/carusel-image-3.jpg", alt: "Slide 3" },
];

const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="w-full h-[593px] rounded-xl overflow-hidden"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <motion.img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full p-2 rounded-3xl object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
