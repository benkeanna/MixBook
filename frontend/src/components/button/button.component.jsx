import "./button.styles.scss";

const Button = ({ type, children }) => {
  return <div className={` button ${type} `}>{children}</div>;
};

export default Button;
