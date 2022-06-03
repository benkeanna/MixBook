import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Ingredients from "./pages/ingredients";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </>
  );
}

export default App;
