const { PrismaClient } = require('@prisma/client')

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

async function deleteRecipe() {
    return null
}




module.exports = { getRecipes, createRecipe, updateRecipe, deleteRecipe };