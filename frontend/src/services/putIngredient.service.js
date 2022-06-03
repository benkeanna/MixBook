export default function putIngredient(ingredient) {
  return fetch(`http://localhost:3001/api/ingredients/${ingredient.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ingredient),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
}
