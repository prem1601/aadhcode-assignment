import "./Footer.css";
import Logo from "../assets/logo.svg";
import Form from "./Form";

const Footer = () => {
  return (
    <div className="footer py-md-5 py-4" id="footer">
      <div className="d-flex flex-wrap px-2">
        <div className="col-md-4 col-12 mx-md-auto">
          <div className="d-flex flex-wrap flex-column h-100 justify-content-between">
            <div>
              <div className="mb-5 d-none d-md-block">
                <img src={Logo} alt="" className="" />
              </div>
              <div>
                <p className="small mb-2">GET IN TOUCH</p>
                <h1>Have a project?</h1>
                <h1>We would love to help</h1>
              </div>
            </div>
            <div className="d-none d-md-block">
              <p className="mb-1">Chicago, USA</p>
              <p className="mb-1">
                <a
                  href="tel:+18054273883"
                  className="text-white text-decoration-none"
                >
                  +1 (805) 427-3883
                </a>
              </p>
              <p className="mb-1">
                <a
                  href="mailto:ceo@sachhsoft.com"
                  className="text-white text-decoration-none"
                >
                  ceo@sachhsoft.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-12 bg-form p-4">
          <Form />
        </div>
      </div>

      {/* for mobile  */}
      <div className="d-md-none px-3">
        <div className="mt-4">
          <div className="mb-2">
            <img src={Logo} alt="" className="" />
          </div>
        </div>
        <div className="mt-3">
          <p className="mb-1">Chicago, USA</p>
          <p className="mb-1">
            <a
              href="tel:+18054273883"
              className="text-white text-decoration-none"
            >
              +1 (805) 427-3883
            </a>
          </p>
          <p className="mb-1">
            <a
              href="mailto:ceo@sachhsoft.com"
              className="text-white text-decoration-none"
            >
              ceo@sachhsoft.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
