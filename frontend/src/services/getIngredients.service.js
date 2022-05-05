import { API_SERVER } from "../utils/server_url.util";

/**
 *
 * @returns {Promise} Promise of the fetch request to the api of the ingredients
 */
export default function getIngredients() {
  return fetch(`http://localhost:3001/ingredients`)
    .then((res) => {
      return res.json();
    })
    .then((data) => data)
    .catch((err) => {
      throw new Error(err);
    });
}
