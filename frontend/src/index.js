import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.scss";
import App from "./App";
import { RecipesProvider } from "./contexts/recipes.context";
import { FilterProvider } from "./contexts/filter.context";
import { SearchProvider } from "./contexts/search.context";
import { DialogsProvider } from "./contexts/dialogs.contexts";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <RecipesProvider>
        <FilterProvider>
          <SearchProvider>
            <DialogsProvider>
              <App />
            </DialogsProvider>
          </SearchProvider>
        </FilterProvider>
      </RecipesProvider>
    </Router>
  </React.StrictMode>
);
