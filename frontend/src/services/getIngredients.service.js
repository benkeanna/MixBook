import { API_SERVER } from "../utils/server_url.util";

export default function getIngredients() {
  return fetch(`${API_SERVER}/ingredients`)
    .then((res) => res.json())
    .then((data) => data);
}
