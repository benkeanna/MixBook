import { useState } from "react";

const EditIngredient = ({ ingredient }) => {
  const [editIngredient, setEditIngredient] = useState(ingredient);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("hello");
  };

  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div>
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
        <button disabled={disabled} onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default EditIngredient;
