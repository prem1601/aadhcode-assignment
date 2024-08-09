import Logo from "../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import PrimaryButton from "./PrimaryButton";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top z-5 header-bg">
      <div className="container py-2">
        <a className="navbar-brand mt-1" href="/">
          <img src={Logo} alt="" className="w-100" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <RxHamburgerMenu className="text-white" size={30} />
        </button>
        <div
          className="collapse navbar-collapse " //d-flex flex-column d-lg-block flex-lg-row text-center
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ps-2 ps-lg-0">
            <li className="nav-item mx-lg-3 dropdown">
              <button
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </button>
              <ul className="dropdown-menu header-bg">
                <li>
                  <a className="dropdown-item" href="#our-vision">
                    Our Vision
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#our-mission">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#about-team">
                    About Team
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-lg-3">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item mx-lg-3">
              <a className="nav-link" href="#blogs">
                Blogs
              </a>
            </li>
            <li className="nav-item mx-lg-3">
              <a className="nav-link" href="#careers">
                Careers
              </a>
            </li>
          </ul>
          <div>
            <PrimaryButton name={"Let’s talk"} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
