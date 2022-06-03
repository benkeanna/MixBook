import { API_SERVER } from "../utils/server_url.util";

export default function deleteRecipe(id) {
  id = +id;
  return fetch(`${API_SERVER}/api/recipes/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
}
