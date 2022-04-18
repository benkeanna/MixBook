import { useContext } from "react";
import { FilterContext } from "../../contexts/filter.context";

import "./filter-area-button.styles.scss";

const FilterAreaButton = () => {
  const { showFilter, setShowFilter } = useContext(FilterContext);
  return (
    <div className="filter-area-button">
      <button
        onClick={() => {
          setShowFilter((prevState) => !prevState);
        }}
      >
        {showFilter ? "Hide" : "Show"} Filter
      </button>
    </div>
  );
};

export default FilterAreaButton;
