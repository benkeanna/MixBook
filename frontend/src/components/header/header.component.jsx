import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "../button/button.component";
import SearchBox from "../search-box/search-box.component";
import FilterAreaButton from "../filter-area-button/filter-area-button.component";
import AddIngredient from "../add-ingredient/add-ingredient.component";

import "./header.styles.scss";

const Header = ({ type }) => {
  return (
    <div className="header-container">
      <h1 className="title">MixBook</h1>
      {type === "homepage" && (
        <div className="nav">
          <FilterAreaButton />
          <SearchBox />
          <Button type="add">Add recipe</Button>
          <Link to="/ingredients">
            <Button type="add">Manage ingredients</Button>
          </Link>
        </div>
      )}
      {type === "ingredients" && (
        <div className="nav">
          <Link to="/">
            <Button type="add">Add ingredient</Button>
            <Button type="add">Back to homepage</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  type: PropTypes.oneOf(["homepage", "ingredients"]).isRequired,
};

export default Header;
