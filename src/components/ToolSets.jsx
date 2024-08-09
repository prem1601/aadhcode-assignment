import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import SliderImage1 from "../assets/Toolsets/Group 18331.png";
import SliderImage2 from "../assets/Toolsets/Shopify_logo_PNG2.png";
import SliderImage3 from "../assets/Toolsets/WordPress-logotype-wordmark-white.png";
import SliderImage4 from "../assets/Toolsets/pngwing.png";

const tools = [
  SliderImage1,
  SliderImage2,
  SliderImage3,
  SliderImage4,
  SliderImage1,
  SliderImage2,
  SliderImage3,
  SliderImage4,
  SliderImage1,
  SliderImage2,
  SliderImage3,
  SliderImage4,
];

const ToolSets = () => {
  return (
    <div className="container py-5">
      <div className="my-5">
        <p className="small mb-2">TESTIMONIALS</p>
        <h2>Hear from our valued partners</h2>
      </div>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        navigation={{ clickable: true }}
        className="py-4 border-top border-bottom toolsets"
      >
        {tools.map((image, i) => (
          <SwiperSlide key={i}>
            <div className="tool-img">
              <img
                src={image}
                alt={"Img " + i}
                className="rounded rounded-2 w-100 h-100"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ToolSets;
