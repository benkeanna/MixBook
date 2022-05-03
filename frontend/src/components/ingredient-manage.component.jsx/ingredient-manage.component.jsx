import "./ingredient-manage.styles.scss";

const IngredientManage = ({ ingredient }) => {
  const { name, description, unit } = ingredient;
  return (
    <div className="ingredient-manage-container">
      <span>{name}</span>
      <span>{description}</span>
      <span>{unit}</span>
      <span className="edit"> &#x270E;</span>
      <span className="delete">&#10005;</span>
    </div>
  );
};

export default IngredientManage;
