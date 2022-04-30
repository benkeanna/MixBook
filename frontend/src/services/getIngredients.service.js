import { API_SERVER } from "../utils/server_url.util";

/**
 *
 * @returns {Promise} Promise of the fetch request to the api of the ingredients
 */
export default function getIngredients() {
  return fetch(`${API_SERVER}/ingredients`)
    .then((res) => res.json())
    .then((data) => data);
}
