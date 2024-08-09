import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";
import "./componentStyle.css";

const SecondaryButton = ({ name, ...rest }) => {
  return (
    <button className="btn btn-outline-success" {...rest}>
      <p className="mb-0 d-inline-block me-3">{name}</p>
      <FaArrowRight className="d-inline-block" />
    </button>
  );
};

SecondaryButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SecondaryButton;
