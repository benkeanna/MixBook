import { createContext, useState, useEffect, useContext } from "react";

import getIngredients from "../services/getIngredients.service";
import deleteIngredient from "../services/deleteIngredient.service";
import postIngredient from "../services/postIngredient.service";
import putIngredient from "../services/putIngredient.service";

import { DialogsContext } from "./dialogs.contexts";

export const IngredientsContext = createContext({
  ingredients: [],
  setIngredients: () => {},
  deleteIngredientHandler: () => {},
  addIngredientHandler: () => {},
  editIngredientHandler: () => {},
});

export const IngredientsProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [render, setRender] = useState(false);

  const {
    setShowDeleteIngredientDialog,
    setShowAddIngredientDialog,
    setShowEditIngredientDialog,
  } = useContext(DialogsContext);
  useEffect(() => {
    getIngredients()
      .then((data) => {
        setIngredients(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [render]);

  const deleteIngredientHandler = (id) => {
    setShowDeleteIngredientDialog(false);
    deleteIngredient(id);
    setRender(!render);
  };

  const addIngredientHandler = (ingredient) => {
    setShowAddIngredientDialog(false);
    postIngredient(ingredient).then(() => {
      setRender(!render);
    });
  };

  const editIngredientHandler = (ingredient) => {
    putIngredient(ingredient).then((data) => {
      setRender(!render);
    });
    setShowEditIngredientDialog(false);
  };

  return (
    <IngredientsContext.Provider
      value={{
        ingredients,
        setIngredients,
        deleteIngredientHandler,
        addIngredientHandler,
        editIngredientHandler,
      }}
    >
      {children}
    </IngredientsContext.Provider>
  );
};
