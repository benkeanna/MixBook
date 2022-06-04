const Prisma = require("prisma");
const { DeleteRecipeError } = require('../errors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()


async function getRecipes() {
    let recipes = await prisma.recipe.findMany();
    for (let i = 0; i < recipes.length; i++) {
        let recipeIngredients = await prisma.recipeIngredient.findMany({
            where: {
                recipeId: parseInt(recipes[i].id),
            }
        });
        let ingredientList = [];
        let ing;
        for (let j = 0; j < recipeIngredients.length; j++) {
            ing = await prisma.ingredient.findUnique({
                where: {
                    id: parseInt(recipeIngredients[j].ingredientId),
                }
            });
            ing.amount = parseInt(recipeIngredients[j].amount);
            ingredientList.push(ing);
        }
        recipes[i].ingredients = ingredientList;
    }
    return recipes;
}

async function createRecipe(recipe) {
    let createdRecipe = await prisma.recipe.create({
        data: {
            name: recipe.name,
            description: recipe.description,
            preparation_length: recipe.preparationLength,
            final_amount: recipe.ingredients.length
        },
    });
    for (let i = 0; i < recipe.ingredients.length; i++) {
        await prisma.recipeIngredient.create({
            data: {
                recipeId: parseInt(createdRecipe.id),
                ingredientId: parseInt(recipe.ingredients[i].id),
                amount: parseInt(recipe.ingredients[i].amount)
            },
        });
    }
    return createdRecipe;
}

function updateRecipeIngredient(createdRecipe, recipe) {
    let result = [];
    for (let i = 0; i < recipe.ingredients.length; i++) {
        let object;
            object.recipeId = parseInt(createdRecipe.id);
            object.ingredientId = parseInt(recipe.ingredients[i].id);
            object.amount = parseInt(recipe.ingredients[i].amount);
            result.push(object);
    }
    return result;
}

async function updateRecipe(id, recipe) {
    try {
        let updatedRecipe = await prisma.recipe.update({
            where: {
                id: id,
            },
            data: {
                name: recipe.name,
                description: recipe.description,
                preparation_length: recipe.preparationLength,
                final_amount: recipe.ingredients.length
            }
        });
        await prisma.recipeIngredient.deleteMany({
            where: {
                recipeId: id,
            },
        });
        for (let i = 0; i < recipe.ingredients.length; i++) {
            await prisma.recipeIngredient.create({
                data: {
                    recipeId: parseInt(updatedRecipe.id),
                    ingredientId: parseInt(recipe.ingredients[i].id),
                    amount: parseInt(recipe.ingredients[i].amount)
                },
            });
        }

    } catch (e) {
        throw e;
    }
}


async function updateRecipeTwo(id, req) {
    try {
        let result = await prisma.recipe.update({
            where: {
                id: id,
            },
            data: {
                name: req.name,
                description: req.description,
                preparation_length: req.preparationLength,
                final_amount: final_amount + req.addIngredients.length - req.deleteIngredients.length,
            }
        });
        for (let i = 0; i < req.deleteIngredients.length; i++) {
            await prisma.recipeIngredient.delete({
                where: {
                    recipeId: id,
                    ingredientId: parseInt(req.deleteIngredients[i].id),
                },
            });
        }
        for (let j = 0; i < req.addIngredients.length; j++) {
            await prisma.recipeIngredient.create({
                data: {
                    recipeId: id,
                    ingredientId: parseInt(req.addIngredients[j].id),
                    amount: parseInt(req.addIngredients[j].amount),
                },
            });
        }
        for (let k = 0; i < req.modIngredients.length; k++) {
            await prisma.recipeIngredient.update({
                where: {
                    recipeId: parseInt(id),
                    ingredientId: parseInt(req.modIngredients[k].id),
                },
                data: {
                    amount: parseInt(req.modIngredients[k].amount),
                },
            });
        }
        return result;
    } catch (e) {
        throw e
    }
}


async function deleteRecipe(id) {
    try {
        await prisma.recipeIngredient.deleteMany({
            where: {
                recipeId: id,
            },
        });
        await prisma.recipe.delete({
            where: {
                id: id,
            },
        });
    } catch (e) {
        throw e
    }
}


module.exports = { getRecipes, createRecipe, updateRecipe, deleteRecipe };
