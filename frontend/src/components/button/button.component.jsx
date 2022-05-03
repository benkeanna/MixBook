import PropTypes from "prop-types";

import "./button.styles.scss";

const Button = ({ type, children, onClick }) => {
  return (
    <button onClick={onClick} className={` button ${type} `}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["add", "remove"]).isRequired,
};

export default Button;
