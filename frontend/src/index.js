import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.scss";
import App from "./App";
import { RecipesProvider } from "./contexts/recipes.context";
import { IngredientsProvider } from "./contexts/ingredients.context";
import { FilterProvider } from "./contexts/filter.context";
import { SearchProvider } from "./contexts/search.context";
import { DialogsProvider } from "./contexts/dialogs.contexts";
import { ErrorsProvider } from "./contexts/errors.context";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <RecipesProvider>
        <IngredientsProvider>
          <FilterProvider>
            <SearchProvider>
              <DialogsProvider>
                <ErrorsProvider>
                  <App />
                </ErrorsProvider>
              </DialogsProvider>
            </SearchProvider>
          </FilterProvider>
        </IngredientsProvider>
      </RecipesProvider>
    </Router>
  </React.StrictMode>
);
