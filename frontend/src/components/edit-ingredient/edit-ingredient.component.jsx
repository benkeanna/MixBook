import { useState, useContext } from "react";

import { DialogsContext } from "../../contexts/dialogs.contexts";
import { ErrorsContext } from "../../contexts/errors.context";

import putIngredient from "../../services/putIngredient.service.js";

import "./edit-ingredient.styles.scss";

const EditIngredient = () => {
  const { editIngredientObj, setShowEditIngredientDialog } =
    useContext(DialogsContext);
  const { setPutErrors } = useContext(ErrorsContext);
  const [editIngredient, setEditIngredient] = useState(editIngredientObj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditIngredient({ ...editIngredient, [name]: value });
  };

  const handleClick = () => {
    putIngredient(editIngredient)
      .then(() => {
        setShowEditIngredientDialog(false);
      })
      .catch((err) => {
        setPutErrors(err.message);
        setShowEditIngredientDialog(false);
      });
  };
  return (
    <div className="edit-ingredient-container">
      <h2>Edit ingredient</h2>
      <div className="add-ingredient-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={editIngredient.name}
          name="name"
          placeholder="název"
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="textarea"
          name="description"
          value={editIngredient.description}
          placeholder="description"
          onChange={handleChange}
        />
        <label htmlFor="unit">Units</label>
        <input
          type="text"
          value={editIngredient.unit}
          name="unit"
          placeholder="unit"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Edit</button>
      </div>
    </div>
  );
};

export default EditIngredient;
