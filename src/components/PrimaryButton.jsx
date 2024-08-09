import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";
import "./componentStyle.css";

const PrimaryButton = ({ name, ...rest }) => {
  return (
    <button className="btn btn-success" {...rest}>
      <p className="mb-0 d-inline-block me-3">{name}</p>
      <FaArrowRight className="d-inline-block" />
    </button>
  );
};

PrimaryButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PrimaryButton;
