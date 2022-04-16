import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { RecipesProvider } from "./contexts/recipes.context";
import { FilterProvider } from "./contexts/filter.context";
import { SearchProvider } from "./contexts/search.context";

ReactDOM.render(
  <React.StrictMode>
    <RecipesProvider>
      <FilterProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </FilterProvider>
    </RecipesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
