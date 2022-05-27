import { createContext, useState, useEffect, useContext } from "react";

import getIngredients from "../services/getIngredients.service";
import deleteIngredient from "../services/deleteIngredient.service";
import postIngredient from "../services/postIngredient.service";

import { ErrorsContext } from "./errors.context";
import { DialogsContext } from "./dialogs.contexts";

export const IngredientsContext = createContext({
  ingredients: [],
  setIngredients: () => {},
  deleteIngredientHandler: () => {},
  addIngredientHandler: () => {},
});

export const IngredientsProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);

  const { getErrorHandler } = useContext(ErrorsContext);
  const { setShowDeleteIngredientDialog, setShowAddIngredientDialog } =
    useContext(DialogsContext);
  useEffect(() => {
    getIngredients()
      .then((data) => {
        setIngredients(data);
      })
      .catch((err) => {
        getErrorHandler(err.message);
      });
  }, [ingredients]);

  const deleteIngredientHandler = (id) => {
    setShowDeleteIngredientDialog(false);
    deleteIngredient(id);
  };

  const addIngredientHandler = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
    setShowAddIngredientDialog(false);
    postIngredient(ingredient).then(data => {console.log("ok");)
  };
  return (
    <IngredientsContext.Provider
      value={{
        ingredients,
        setIngredients,
        deleteIngredientHandler,
        addIngredientHandler,
      }}
    >
      {children}
    </IngredientsContext.Provider>
  );
};
