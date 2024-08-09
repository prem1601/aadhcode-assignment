import { FaArrowRight } from "react-icons/fa6";
import SecondaryButton from "./SecondaryButton";

const openPositions = [
  {
    id: 1,
    name: "Software Developer",
    availablePositions: 2,
    location: "India",
    experience: "7-10 years",
  },
  {
    id: 2,
    name: "Junior Developer",
    availablePositions: 3,
    location: "India",
    experience: "1-3 years",
  },
];


const Hiring = () => {
  const handleRedirect = (id) => {
    window.location.href = `/#careers?id=${id}`;
  };

  return (
    <div className="container my-5" id="careers">
      {/* Headings  */}
      <div className="text-center mb-5">
        <p className="small mb-2">HIRING</p>
        <h2>Let’s build something great together!</h2>
      </div>

      {/* Content  */}
      {openPositions.map((position) => (
        <div className="position-card my-4" key={position.id}>
          <div className="d-flex flex-wrap justify-content-between align-items-center p-5">
            <div>
              <h5 className="mb-1">
                {position.name}{" "}
                <span className="px-2 py-1 small fw-lighter rounded rounded-circle bg-light bg-opacity-25">
                  {position.availablePositions}
                </span>
              </h5>
              <p className="mb-0">
                <span>{position.location}</span> ·{" "}
                <span>{position.experience}</span>
              </p>
            </div>
            <div
              onClick={() => handleRedirect(position.id)}
              className="cursor-pointer"
            >
              <FaArrowRight className="fw-lighter" size={25} />
            </div>
          </div>

          <div className="absolute-gradient" />
        </div>
      ))}

      <div className="text-center my-5">
        <SecondaryButton
          name={"VIEW ALL"}
          onClick={() => {
            window.location.href = "/#careers";
          }}
        />
      </div>
    </div>
  );
};

export default Hiring;
