import Header from "./components/header/header.component";
import Recipes from "./components/recipes/recipes.component";
import FilterArea from "./components/filter-area/filter-area.component";

function App() {
  return (
    <div>
      <Header />
      <FilterArea />
      <Recipes />
    </div>
  );
}

export default App;
