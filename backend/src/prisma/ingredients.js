const Prisma = require("prisma");
const {DeleteIngredientError} = require("../errors");
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function createIngredient(name, description, unit) {
    return await prisma.ingredient.create({
        data: {
            name,
            description,
            unit
        },
    });
}

async function getIngredients() {
    return await prisma.ingredient.findMany();
}

async function updateIngredient() {
    return null
}


async function deleteIngredient(id) {
    try {
        await prisma.ingredient.delete({
            where: {
                id: id,
            },
        })
    } catch (e) {
            if (e.code === 'P2003') {
                throw new DeleteIngredientError("Ingredient used in recipe.")
        }
        throw e
    }
}


module.exports = { createIngredient, getIngredients, updateIngredient, deleteIngredient };