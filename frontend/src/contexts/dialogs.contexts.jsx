import { createContext, useState } from "react";

export const DialogsContext = createContext({
  showAddRecipeDialog: false,
  setShowAddRecipeDialog: () => {},
  showAddIngredientDialog: false,
  setShowAddIngredientDialog: () => {},
});

export const DialogsProvider = ({ children }) => {
  const [showAddRecipeDialog, setShowAddRecipeDialog] = useState(false);
  const [showAddIngredientDialog, setShowAddIngredientDialog] = useState(false);
  return (
    <DialogsContext.Provider
      value={{
        showAddRecipeDialog,
        setShowAddRecipeDialog,
        showAddIngredientDialog,
        setShowAddIngredientDialog,
      }}
    >
      {children}
    </DialogsContext.Provider>
  );
};
