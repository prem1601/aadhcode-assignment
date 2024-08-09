import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import SlideImage1 from "../assets/Process/sllider-1.png";
import SlideImage2 from "../assets/Process/sllider-2.png";
import SlideImage3 from "../assets/Process/sllider-3.png";
import SlideImage4 from "../assets/Process/sllider-4.png";

const processes = [
  {
    id: 1,
    title: "discovery",
    image: SlideImage1,
    text: "We shape and elevate brands with rigorous research, constantly challenging IT consulting assumptions",
  },
  {
    id: 2,
    title: "design",
    image: SlideImage2,
    text: "Our design philosophy revolves around simplicity, crafting user-friendly, unmatched solutions.",
  },
  {
    id: 3,
    title: "built",
    image: SlideImage3,
    text: "We harness cutting-edge tech to craft resilient, scalable, and business-centric IT solutions with expertise.",
  },
  {
    id: 4,
    title: "delivery",
    image: SlideImage4,
    text: "We adopt an iterative approach, always exploring new techniques to refine our craft..",
  },
];

const OurProcess = () => {
  return (
    <div className="container my-5">
      <div className="d-md-none">
        <hr className=" mb-5" />
        <hr />
      </div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop
        className="py-md-5"
      >
        {processes.map(({ id, text, title, image }) => (
          <SwiperSlide key={id} className="slidee background-image-basic">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="col-md-6 col-12 p-4 d-none d-md-block">
                <img
                  src={image}
                  alt={"Slide " + id}
                  className="w-100 h-100 rounded rounded-5"
                />
              </div>
              <div className="col-md-4 col-12">
                <div className="pe-5">
                  <p className="small mb-1">OUR PROCESS</p>
                  <h2 className="fw-normal">
                    We bring your ideas to life through <b>{title}</b>
                  </h2>
                </div>
                <hr className="mt-5 mb-1 d-none d-md-block" />
                <div className="col-md-6 col-12 py-3 d-md-none">
                  <img
                    src={image}
                    alt={"Slide " + id}
                    className="w-100 h-100 rounded rounded-5"
                  />
                </div>
                <div className="pe-1">
                  <p className="fs-1">
                    0{id}
                    <span className="fs-6 fw-light"> / 04</span>
                  </p>
                  <p>{text}</p>
                </div>
                <hr className="mt-5 d-none d-md-block" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="d-md-none">
        <hr className=" mb-5" />
        <hr />
      </div>
    </div>
  );
};

export default OurProcess;
