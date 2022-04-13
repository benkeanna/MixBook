import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { RecipesProvider } from "./contexts/recipes.context";
import { FilterProvider } from "./contexts/filter.context";

ReactDOM.render(
  <React.StrictMode>
    <RecipesProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </RecipesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
