import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";

import Button from "../button/button.component";
import SearchBox from "../search-box/search-box.component";
import FilterAreaButton from "../filter-area-button/filter-area-button.component";

import { DialogsContext } from "../../contexts/dialogs.contexts";

import "./header.styles.scss";

const Header = ({ type }) => {
  const { setShowAddIngredientDialog, setShowAddRecipeDialog } =
    useContext(DialogsContext);
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
          <Button
            onClick={() => {
              setShowAddIngredientDialog(true);
            }}
            type="add"
          >
            Add ingredient
          </Button>
          <Link to="/">
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
