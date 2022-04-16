import Header from "./components/header/header.component";
import Recipes from "./components/recipes/recipes.component";
import FilterArea from "./components/filter-area/filter-area.component";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  return (
    <div>
      <Header />
      <FilterArea />
      <SearchBox />
      <Recipes />
    </div>
  );
}

export default App;
