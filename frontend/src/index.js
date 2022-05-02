import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { RecipesProvider } from "./contexts/recipes.context";
import { FilterProvider } from "./contexts/filter.context";
import { SearchProvider } from "./contexts/search.context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RecipesProvider>
        <FilterProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </FilterProvider>
      </RecipesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
