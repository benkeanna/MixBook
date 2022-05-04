import { createContext, useState } from "react";

export const DialogsContext = createContext({
  showAddRecipeDialog: false,
  setShowAddRecipeDialog: () => {},
  showAddIngredientDialog: false,
  setShowAddIngredientDialog: () => {},
  showEditIngredientDialog: false,
  setShowEditIngredientDialog: () => {},
});

export const DialogsProvider = ({ children }) => {
  const [showAddRecipeDialog, setShowAddRecipeDialog] = useState(false);
  const [showAddIngredientDialog, setShowAddIngredientDialog] = useState(false);
  const [showEditIngredientDialog, setShowEditIngredientDialog] =
    useState(false);
  return (
    <DialogsContext.Provider
      value={{
        showAddRecipeDialog,
        setShowAddRecipeDialog,
        showAddIngredientDialog,
        setShowAddIngredientDialog,
        showEditIngredientDialog,
        setShowEditIngredientDialog,
      }}
    >
      {children}
    </DialogsContext.Provider>
  );
};
