const { PrismaClient } = require('@prisma/client');
const { DeleteRecipeError } = require('../errors');

const prisma = new PrismaClient()


async function getRecipes() {
    return await prisma.recipe.findMany({
        include: {
            RecipeIngredient: true,
        },
    });
}


async function createRecipe() {
    return null
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
        await prisma.recipeIngredient.updateMany({
            where: {
                recipeId: id,
            },
        })
    } catch (e) {
        throw new DeleteRecipeError('Error in deleting of recipe.')
    }
}


module.exports = { getRecipes, createRecipe, updateRecipe, deleteRecipe };
