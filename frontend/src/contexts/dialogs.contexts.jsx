import { createContext, useState } from "react";

export const DialogsContext = createContext({
  showAddRecipeDialog: false,
  setShowAddRecipeDialog: () => {},
  showAddIngredientDialog: false,
  setShowAddIngredientDialog: () => {},
  showEditIngredientDialog: false,
  setShowEditIngredientDialog: () => {},
  editIngredientObj: null,
  setEditIngredientObj: () => {},
  handleEditIngredientDialog: () => {},
});

export const DialogsProvider = ({ children }) => {
  const handleEditIngredientDialog = (ingredient) => {
    setShowEditIngredientDialog(true);
    setEditIngredientObj(ingredient);
  };

  const [showAddRecipeDialog, setShowAddRecipeDialog] = useState(false);
  const [showAddIngredientDialog, setShowAddIngredientDialog] = useState(false);
  const [showEditIngredientDialog, setShowEditIngredientDialog] =
    useState(false);
  const [editIngredientObj, setEditIngredientObj] = useState({});
  return (
    <DialogsContext.Provider
      value={{
        showAddRecipeDialog,
        setShowAddRecipeDialog,
        showAddIngredientDialog,
        setShowAddIngredientDialog,
        showEditIngredientDialog,
        setShowEditIngredientDialog,
        editIngredientObj,
        handleEditIngredientDialog,
      }}
    >
      {children}
    </DialogsContext.Provider>
  );
};
