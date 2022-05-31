const Prisma = require("prisma");
const { DeleteRecipeError } = require('../errors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()


async function getRecipes() {
    let recipes = await prisma.recipe.findMany();
    // console.log("recipes:");
    // console.log(recipes);
    for (let i = 0; i < recipes.length; i++) {
        let recipeIngredients = await prisma.recipeIngredient.findMany({
            where: {
                recipeId: recipes[i].id,
            }
        });
        // console.log("recipeIngredients:");
        // console.log(recipeIngredients);
        let ingredientList = [];
        let ing;
        for (let j = 0; j < recipeIngredients.length; j++) {
            ing = await prisma.ingredient.findUnique({
                where: {
                    id: recipeIngredients[j].ingredientId,
                }
            });
            // console.log("ingredients:");
            // console.log(ing);
            ing.amount = recipeIngredients[j].amount;
            ingredientList.push(ing);
        }
        // console.log("ingredientList:");
        // console.log(ingredientList);
        recipes[i].ingredients = ingredientList;
    }
    console.log("recipes:");
    console.log(recipes);
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
                recipeId: createdRecipe.id,
                ingredientId: recipe.ingredients[i].id,
                amount: recipe.ingredients[i].amount
            },
        });
    }
    return createdRecipe;
}


async function updateRecipe(id, req) {
    try {
        await prisma.recipe.update({
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
                    ingredientId: req.deleteIngredients[i].id,
                },
            });
        }
        for (let j = 0; i < req.addIngredients.length; j++) {
            await prisma.recipeIngredient.create({
                data: {
                    recipeId: id,
                    ingredientId: req.addIngredients[j].id,
                    amount: req.addIngredients[j].amount,
                },
            });
        }
        for (let k = 0; i < req.modIngredients.length; k++) {
            await prisma.recipeIngredient.update({
                where: {
                    recipeId: id,
                    ingredientId: req.modIngredients[k].id,
                },
                data: {
                    amount: req.modIngredients[k].amount,
                },
            });
        }
        return prisma.recipe.findUnique({
            where: {
                id: id,
            },
        });
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
