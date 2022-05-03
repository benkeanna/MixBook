import PropTypes from "prop-types";

import "./button.styles.scss";

const Button = ({ type, children, clickHandler }) => {
  return <button className={` button ${type} `}>{children}</button>;
};

Button.propTypes = {
  type: PropTypes.oneOf(["add", "remove"]).isRequired,
};

export default Button;
