const Prisma = require("prisma");
const { DeleteRecipeError } = require('../errors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()


async function getRecipes() {
    return await prisma.recipe.findMany({
        include: {
            RecipeIngredient: true,
        },
    });
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


async function updateRecipe() {
    return null
}


async function deleteRecipe(id) {
    try {
        await prisma.recipe.delete({
            where: {
                id: id,
            },
        })
        await prisma.recipeIngredient.deleteMany({
            where: {
                recipeId: id,
            },
        })
    } catch (e) {
        throw new DeleteRecipeError('Error in deleting of recipe.')
    }
}


module.exports = { getRecipes, createRecipe, updateRecipe, deleteRecipe };
