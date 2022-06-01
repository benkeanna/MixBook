const Prisma = require("prisma");
const { DeleteRecipeError } = require('../errors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()


async function getRecipes() {
    let recipes = await prisma.recipe.findMany();
    for (let i = 0; i < recipes.length; i++) {
        let recipeIngredients = await prisma.recipeIngredient.findMany({
            where: {
                recipeId: recipes[i].id,
            }
        });
        let ingredientList = [];
        let ing;
        for (let j = 0; j < recipeIngredients.length; j++) {
            ing = await prisma.ingredient.findUnique({
                where: {
                    id: recipeIngredients[j].ingredientId,
                }
            });
            ing.amount = recipeIngredients[j].amount;
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
        recipeIngredient: {
            create: 
                updateRecipeIngredient(createdRecipe, recipe)
        },
    });
    // for (let i = 0; i < recipe.ingredients.length; i++) {
    //     await prisma.recipeIngredient.create({
    //         data: {
    //             recipeId: createdRecipe.id,
    //             ingredientId: recipe.ingredients[i].id,
    //             amount: recipe.ingredients[i].amount
    //         },
    //     });
    // }
    return createdRecipe;
}

function updateRecipeIngredient(createdRecipe, recipe) {
    let result = [];
    for (let i = 0; i < recipe.ingredients.length; i++) {
        let object;
            object.recipeId = createdRecipe.id;
            object.ingredientId = recipe.ingredients[i].id;
            object.amount = recipe.ingredients[i].amount;
            result.push(object);
    }
    return result;
}


async function updateRecipe(id, req) {
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
        console.log(e)
        throw e
    }
}


module.exports = { getRecipes, createRecipe, updateRecipe, deleteRecipe };
