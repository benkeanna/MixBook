import { API_SERVER } from "../utils/server_url.util";

export default function putRecipe(recipe) {
  console.log("here");
  return fetch(`${API_SERVER}/api/recipes/${recipe.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
}
