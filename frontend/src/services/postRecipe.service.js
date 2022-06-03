import { API_SERVER } from "../utils/server_url.util";

export default function postRecipe(ingredient) {
  return fetch(`${API_SERVER}/api/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ingredient),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      throw new Error(err);
    });
}
