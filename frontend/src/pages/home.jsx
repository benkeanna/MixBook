import { useContext } from "react";

import Header from "../components/header/header.component";
import Recipes from "../components/recipes/recipes.component";
import FilterArea from "../components/filter-area/filter-area.component";

/*
  Main page of the application which renders all the components
  uses the showFilter from the FilterContext to show or hide the filter area
*/
import { FilterContext } from "../contexts/filter.context";
const Home = () => {
  const { showFilter } = useContext(FilterContext);
  return (
    <div>
      <Header />
      {showFilter && <FilterArea />}
      <Recipes />
    </div>
  );
};

export default Home;
