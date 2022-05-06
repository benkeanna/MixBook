export default function deleteIngredient(id) {
  return fetch(`http://localhost:3001/ingredients/${id}`, {
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
