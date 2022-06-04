import Header from "../components/header/header.component";
import IngredientsManage from "../components/ingredients-manage/ingredients-manage.component";

const Ingredients = () => {
  return (
    <div>
      <Header type="ingredients" />
      <IngredientsManage />
    </div>
  );
};

export default Ingredients;
