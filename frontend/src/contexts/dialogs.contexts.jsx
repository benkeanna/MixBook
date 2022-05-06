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
  deleteIngredientId: null,
  showDeleteIngredientDialog: null,
  setShowDeleteIngredientDialog: () => {},
  handleDeleteIngredientDialog: () => {},
});

export const DialogsProvider = ({ children }) => {
  const handleEditIngredientDialog = (ingredient) => {
    setShowEditIngredientDialog(true);
    setEditIngredientObj(ingredient);
  };

  const handleDeleteIngredientDialog = (id) => {
    setDeleteIngredientId(id);
    setShowDeleteIngredientDialog(true);
  };

  const [showAddRecipeDialog, setShowAddRecipeDialog] = useState(false);
  const [showAddIngredientDialog, setShowAddIngredientDialog] = useState(false);
  const [showEditIngredientDialog, setShowEditIngredientDialog] =
    useState(false);
  const [showDeleteIngredientDialog, setShowDeleteIngredientDialog] =
    useState(false);
  const [editIngredientObj, setEditIngredientObj] = useState({});
  const [deleteIngredientId, setDeleteIngredientId] = useState(null);
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
        showDeleteIngredientDialog,
        setShowDeleteIngredientDialog,
        handleDeleteIngredientDialog,
        deleteIngredientId,
      }}
    >
      {children}
    </DialogsContext.Provider>
  );
};
