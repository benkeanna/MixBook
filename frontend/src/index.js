import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { RecipesProvider } from "./contexts/recipes.context";
import { IngredientsProvider } from "./contexts/ingredients.context";
import { FilterProvider } from "./contexts/filter.context";
import { SearchProvider } from "./contexts/search.context";
import { DialogsProvider } from "./contexts/dialogs.contexts";
import { ErrorsProvider } from "./contexts/errors.context";

import App from "./App";

import "./index.scss";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <DialogsProvider>
        <ErrorsProvider>
          <RecipesProvider>
            <IngredientsProvider>
              <FilterProvider>
                <SearchProvider>
                  <App />
                </SearchProvider>
              </FilterProvider>
            </IngredientsProvider>
          </RecipesProvider>
        </ErrorsProvider>
      </DialogsProvider>
    </Router>
  </React.StrictMode>
);
