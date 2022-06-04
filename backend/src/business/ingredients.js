const ingredients = require("../prisma/ingredients");
const recipes = require("../prisma/recipes");
const errors = require("../errors");


async function createIngredient(req) {
    return ingredients.createIngredient(req)
}


async function getIngredients() {
    return ingredients.getIngredients()
}


async function updateIngredient(id, req) {
    return ingredients.updateIngredient(id, req)
}


async function deleteIngredient(id) {
    const stackIds = []
    const recps = await recipes.getRecipes()
    recps.forEach(element => {
        element.ingredients.forEach(ingredient => {
            if (ingredient.id === id) {
                stackIds.push(ingredient.id)
            }
        })
    })
    if (stackIds.length < 1) {
        return ingredients.deleteIngredient(id)
    } else {
        throw new errors.DeleteIngredientError("Ingredient used in recipe.")
    }
}


module.exports = { createIngredient, getIngredients, updateIngredient, deleteIngredient };
