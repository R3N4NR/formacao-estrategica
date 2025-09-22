import { Swiper, SwiperSlide } from "swiper/react";
import type { Slide } from "./types";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import './Carousel.css'
interface CarouselProps {
  slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  return (
    <div className="carousel">
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
      
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {slide.type === "image" ? (
            <img className="carousel-img" src={slide.src} alt={slide.alt || ""}  />
          ) : (
            <iframe
              src={slide.src}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="carousel-iframe"
            />
          )}
        </SwiperSlide>

      ))}
    </Swiper>
    </div>
  );
};

export default Carousel;
