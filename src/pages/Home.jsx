import BlogsSlider from "../components/BlogsSlider";
import HeroSection from "../components/HeroSection";
import Hiring from "../components/Hiring";
import OurProcess from "../components/OurProcess";
import Testimonials from "../components/Testimonials";
import ToolSets from "../components/ToolSets";

import "../components/componentStyle.css";

const Home = () => {
  return (
    <div className="my-3 my-lg-5">
      <HeroSection />
      <OurProcess />
      <Testimonials />
      <BlogsSlider />
      <ToolSets />
      <Hiring />
    </div>
  );
};

export default Home;
