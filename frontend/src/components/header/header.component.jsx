import "./header.styles.scss";

import Button from "../button/button.component";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="title">MixBook</h1>
      <span className="subtitle">(Social) life saver</span>
      <Button type="add">Add recipe</Button>
    </div>
  );
};

export default Header;
