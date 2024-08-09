import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import TestimonialImg from "../assets/Testimonials/owner.png";
import { SwiperNavButtons } from "./SwiperNavButtons";

const testimonials = [
  {
    id: 1,
    title: "Incredible tech solutions",
    text: "Sacchsoft has truly transformed the way we do business. Fast, reliable, and innovative. They've resolved our tech issues swiftly and efficiently, every time.",
    image: TestimonialImg,
    name: "John Doe",
    position: "CEO, ABC Company",
  },
  {
    id: 2,
    title: "Incredible tech solutions",
    text: "Sacchsoft has truly transformed the way we do business. Fast, reliable, and innovative. They've resolved our tech issues swiftly and efficiently, every time.",
    image: TestimonialImg,
    name: "John Doe",
    position: "CMO, DEF Company",
  },
  {
    id: 3,
    title: "Incredible tech solutions",
    text: "Sacchsoft has truly transformed the way we do business. Fast, reliable, and innovative. They've resolved our tech issues swiftly and efficiently, every time.",
    image: TestimonialImg,
    name: "John Doe",
    position: "CEO, XYZ",
  },
  {
    id: 4,
    title: "Incredible tech solutions",
    text: "Sacchsoft has truly transformed the way we do business. Fast, reliable, and innovative. They've resolved our tech issues swiftly and efficiently, every time.",
    image: TestimonialImg,
    name: "John Doe",
    position: "CEO, Company",
  },
  {
    id: 5,
    title: "Incredible tech solutions",
    text: "Sacchsoft has truly transformed the way we do business. Fast, reliable, and innovative. They've resolved our tech issues swiftly and efficiently, every time.",
    image: TestimonialImg,
    name: "John Doe",
    position: "CFO, XYZ Company",
  },
];

const Testimonials = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        // navigation={{ clickable: true }}
        centeredSlides={true}
        className="py-5 d-flex flex-column-reverse"
      >
        {testimonials.map(({ id, image, name, position, text, title }) => (
          <SwiperSlide key={id}>
            <div className="bg-primary-darker rounded rounded-4 p-4">
              <p>{title}</p>
              <i>{text}</i>
              <div className="mt-4 d-flex flex-wrap gap-3">
                <img
                  src={image}
                  alt={"Img " + id}
                  className="rounded rounded-2"
                />
                <div>
                  <p className="fw-medium mb-0">{name}</p>
                  <p className="mb-0 small">{position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container mb-5">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div>
              <p className="small mb-2">TESTIMONIALS</p>
              <h2>Hear from our valued partners</h2>
            </div>
            <SwiperNavButtons />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
