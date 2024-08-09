import { useSwiper } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "./componentStyle.css";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button
        className="btn me-4 nav-btn-custom"
        onClick={() => swiper.slidePrev()}
      >
        <FaArrowLeft className="fw-lighter" />
      </button>
      <button className="btn nav-btn-custom" onClick={() => swiper.slideNext()}>
        <FaArrowRight className="fw-lighter" />
      </button>
    </div>
  );
};
