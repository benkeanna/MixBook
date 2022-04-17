const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function getIngredient(name, description, unit) {
    return await prisma.ingredient.create({
        data: {
            name,
            description,
            unit: unit
        },
    });
}

async function getIngredients() {
    return await prisma.ingredient.findMany();
}

async function createIngredient(name, description, unit) {
    return await prisma.ingredient.create({
        data: {
            name,
            description,
            unit: unit
        },
    });
}

module.exports = { createIngredient, getIngredients };