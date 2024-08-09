import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "./componentStyle.css";

import { SwiperNavButtons } from "./SwiperNavButtons";
import SecondaryButton from "./SecondaryButton";

const blogs = [
  {
    id: 1,
    title: "Navigating the future with mobility services",
    image:
      "https://images.pexels.com/photos/27601443/pexels-photo-27601443/free-photo-of-arte-brasileira.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    date: "March 20, 2023",
    readTime: "3 mins",
  },
  {
    id: 2,
    title: "Maximising business success: The Power of SEO",
    image:
      "https://images.pexels.com/photos/27305377/pexels-photo-27305377/free-photo-of-woman-posing-among-leaves-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    date: "March 20, 2023",
    readTime: "2 mins",
  },
  {
    id: 3,
    title: "The Impact of IT Industry on E-Commerce",
    image:
      "https://images.pexels.com/photos/27399923/pexels-photo-27399923/free-photo-of-bride-and-groom-embracing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    date: "March 21, 2023",
    readTime: "5 mins",
  },
  {
    id: 4,
    title: "Navigating the future with mobility services",
    image:
      "https://images.pexels.com/photos/27305377/pexels-photo-27305377/free-photo-of-woman-posing-among-leaves-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    date: "March 21, 2023",
    readTime: "2 mins",
  },
  {
    id: 5,
    title: "Maximising business success: The Power of SEO",
    image:
      "https://images.pexels.com/photos/27399923/pexels-photo-27399923/free-photo-of-bride-and-groom-embracing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    date: "March 21, 2023",
    readTime: "2 mins",
  },
];

const BlogsSlider = () => {
  return (
    <div className="container my-5" id="blogs">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={20}
        breakpoints={{
          480: { slidesPerView: 1 },
          767: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        className="py-5 d-flex flex-column-reverse"
      >
        {blogs.map(({ id, image, date, readTime, title }) => (
          <SwiperSlide key={id}>
            <div className="blog-height rounded rounded-3 overflow-hidden position-relative">
              <img src={image} alt="" className="w-100 h-100" />
              <div className="absolute-blogs-content">
                <h4>{title}</h4>
                <p>
                  <span>{date}</span> • <span>{readTime} read</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="mb-5 position-relative">
          <div className="d-flex flex-wrap">
            <div className="col-md-5 col-10 mx-auto text-center">
              <p className="small mb-2">BLOG</p>
              <h2>Explore insights through our knowledge-share blogs</h2>
            </div>
          </div>
          <div className="absolute-navs d-none d-md-block">
            <SwiperNavButtons />
          </div>
        </div>
      </Swiper>

      {/* View All */}
      <div className="mt-md-4 mt-2 text-center">
        <SecondaryButton
          name={"VIEW ALL"}
          onClick={() => {
            window.location.href = "/#blogs";
          }}
        />
      </div>
    </div>
  );
};

export default BlogsSlider;
