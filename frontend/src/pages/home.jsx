import { useContext } from "react";

import Header from "../components/header/header.component";
import Recipes from "../components/recipes/recipes.component";
import FilterArea from "../components/filter-area/filter-area.component";

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
