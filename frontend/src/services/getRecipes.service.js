import { API_SERVER } from "../utils/server_url.util";

/**
 *
 * @returns {Promise} Promise of the fetch request to the api of the recipes
 */
export default function getRecipes() {
  return fetch(`${API_SERVER}/api/recipes`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}
