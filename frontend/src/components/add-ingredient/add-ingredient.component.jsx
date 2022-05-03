import { useContext, useState } from "react";

import { DialogsContext } from "../../contexts/dialogs.contexts";

import "./add-ingredient.styles.scss";

const AddIngredient = () => {
  const [newIngredient, setNewIngredient] = useState({
    name: "",
    description: "",
    unit: "",
  });
  const { setShowAddIngredientDialog } = useContext(DialogsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient({ ...newIngredient, [name]: value });
  };

  return (
    <div className="add-ingredient-container">
      <h1>přidej novou ingredienci, soudruhu</h1>
      <div onClick={() => setShowAddIngredientDialog(false)} className="close">
        &#10005;
      </div>
      <div className="add-ingredient-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={newIngredient.name}
          name="name"
          placeholder="název"
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="textarea"
          name="description"
          value={newIngredient.description}
          placeholder="description"
          onChange={handleChange}
        />
        <label htmlFor="unit">Units</label>
        <input
          type="text"
          value={newIngredient.unit}
          name="unit"
          placeholder="unit"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AddIngredient;
