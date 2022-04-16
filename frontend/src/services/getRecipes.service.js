import { API_SERVER } from "../utils/server_url.util";

export default function getRecipes() {
  return fetch(`${API_SERVER}/recipes`)
    .then((res) => res.json())
    .then((data) => data);
}
