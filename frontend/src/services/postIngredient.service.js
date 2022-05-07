export default function postIngredient(ingredient) {
  return fetch("http://localhost:3001/api/ingredients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ingredient),
  })
    .them((res) => res.json())
    .them((data) => data)
    .catch((err) => console.log(err));
}
