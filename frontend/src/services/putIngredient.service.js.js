export default function putIngredient(ingredient) {
  return fetch(`http://localhost:3001/ingredients`, {
    method: "PUT",
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
