import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Ingredients from "./pages/ingredients";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<Ingredients />} />
      </Routes>
    </>
  );
}

export default App;
