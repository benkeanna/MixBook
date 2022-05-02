import "./button.styles.scss";

const Button = ({ type, children, clickHandler }) => {
  return <button className={` button ${type} `}>{children}</button>;
};

export default Button;
