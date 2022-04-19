import { useContext } from "react";

import { SearchContext } from "../../contexts/search.context";

import "./search-box.styles.scss";

const SearchBox = () => {
  const { searchRecipes } = useContext(SearchContext);

  const handleChange = (e) => {
    const { value } = e.target;
    searchRecipes(value);
  };
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search a recipe"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
