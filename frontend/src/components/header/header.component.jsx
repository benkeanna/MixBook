import "./header.styles.scss";

import Button from "../button/button.component";
import SearchBox from "../search-box/search-box.component";
import FilterAreaButton from "../filter-area-button/filter-area-button.component";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="title">MixBook</h1>
      <div className="nav">
        <FilterAreaButton />

        <SearchBox />
        <Button type="add">Add recipe</Button>
      </div>
    </div>
  );
};

export default Header;
