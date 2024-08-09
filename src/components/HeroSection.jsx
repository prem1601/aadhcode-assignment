import PrimaryButton from "./PrimaryButton";
import HeroHamburgerImg from "../assets/HeroSection/hero-hamburger.png";
import HeroServiceTopImg from "../assets/HeroSection/hero-service-top.png";
import BannerTopImg from "../assets/HeroSection/banner-bg-top.png";
import PunjabiGuyImg from "../assets/HeroSection/punjabi-guy.png";
import "./HeroSection.css";

const services = [
  "E-Commerce",
  "Marketing",
  "Enterprise",
  "Development",
  "Digital",
  "Automation",
  "UI/UX Design",
  "Modern Web Services",
  "SEO",
  "Mobility",
  "Project Management",
  "Cloud",
];

const HeroSection = () => {
  return (
    <>
      <div className="container d-md-flex flex-wrap gap-lg-4">
        {/* Hero Text  */}
        <div className="col-md-7 col-11">
          <div className="d-flex flex-column justify-content-between h-100 mb-4 mb-md-0">
            <div>
              <p>AT SACCHSOFT</p>
              <h1 style={{ lineHeight: "1.5" }}>
                We revolutionize your <br className="d-none d-md-block" />{" "}
                technological ideas into reality
              </h1>
              <p className="fw-normal fs-4">
                Expert IT consulting tailored just for empowering
                <br className="d-none d-md-block" /> your technical needs
              </p>
            </div>

            <div className="">
              <PrimaryButton name={"Get in touch"} />
            </div>
          </div>
        </div>

        {/* Service Banner  */}
        <div className="col-md-4 col-12 mx-auto m-md-0 bg-hero-service-banner mobile-class p-4 position-relative">
          <div className="d-flex align-items-center mb-3">
            <img src={HeroHamburgerImg} alt="" className="me-3" />
            <h4 className="mb-1">Our Services</h4>
          </div>
          <div className="d-flex flex-wrap gap-3 align-items-center">
            {services.map((service) => (
              <p
                key={service}
                className="mb-1 me-1 border border-white px-2 py-1 rounded rounded-5"
              >
                {service}
              </p>
            ))}
            <p className="mb-1">+ many other IT Services</p>
          </div>
          <div className=" position-absolute top-0 end-0">
            <img src={HeroServiceTopImg} alt="" />
          </div>
        </div>

        {/* Cards  */}
        <div className="col-md-7 col-6 px-md-2 text-md-end d-none d-md-block">
          <div className="col-md-6 ms-auto bg-team position-relative">
            <div className=" pt-3">
              <div className="d-md-flex justify-content-end align-items-center">
                <div className="col-md-6 col-12 text-start">
                  <p className="mb-0 fs-4">
                    You <span className="fw-bold">dream</span> it, We{" "}
                    <span className="fw-bold">build</span> it.
                  </p>
                  <p className="small my-3">- Team Sacchsoft</p>
                </div>
                <div className="col-md-4 col-12 text-end">
                  <img src={PunjabiGuyImg} alt="" />
                </div>
              </div>
            </div>
            <div className="position-absolute top-0 start-0">
              <img src={BannerTopImg} alt="" />
            </div>
          </div>
        </div>

        <div className="col-md-4 col-6  bg-banner-card text-black d-none d-md-block">
          <div className=" py-4">
            <div className="row justify-content-between px-5">
              <div className="col-md-4 col-12 text-start">
                <h1 className="fw-bolder">10+</h1>
                <p className="small text-uppercase mb-0">INDUSTRY YEARS</p>
              </div>
              <div className="col-md-6 col-12">
                <h1 className="fw-bolder">$10M</h1>
                <p className="small text-uppercase mb-0">
                  revenue Generated for clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-wrap mt-4 d-md-none">
        <div className="col-6 px-2 text-md-end">
          <div className="col-md-6 ms-auto bg-team position-relative px-2">
            <div className=" pt-3">
              <div className="d-md-flex justify-content-end align-items-center">
                <div className="col-md-6 col-12 text-start">
                  <p className="mb-0 fs-4">
                    You <span className="fw-bold">dream</span> it, We{" "}
                    <span className="fw-bold">build</span> it.
                  </p>
                  <p className="small my-3">- Team Sacchsoft</p>
                </div>
                <div className="col-md-4 col-12 text-end">
                  <img src={PunjabiGuyImg} alt="" />
                </div>
              </div>
            </div>
            <div className="position-absolute top-0 start-0">
              <img src={BannerTopImg} alt="" />
            </div>
          </div>
        </div>

        <div className="col-6 px-2 bg-banner-card text-black">
          <div className=" py-4 px-2">
            <div className="row flex-column gap-5 justify-content-between">
              <div className="col-md-4 col-12 text-start">
                <h1 className="fw-bolder">10+</h1>
                <p className="small text-uppercase mb-0">INDUSTRY YEARS</p>
              </div>
              <div className="col-md-6 col-12">
                <h1 className="fw-bolder">$10M</h1>
                <p className="small text-uppercase mb-0">
                  revenue Generated for clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
