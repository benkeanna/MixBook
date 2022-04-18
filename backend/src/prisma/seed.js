const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const ingredients = [
    {
            name: "Aperol",
            description: "Great for Spritz!",
            unit: "ml"
    },
    {
            name: "Gin",
            description: "When you feel sad.",
            unit: "ml"
    },
    {
            name: "Vodka",
            description: "Ukrainian, what other?",
            unit: "ml"
    },
    {
        name: "Rum (light)",
        description: "Anybody said coconuts?",
        unit: "ml"
    },
    {
        name: "Rum (dark)",
        description: "Rich and molasses-y",
        unit: "ml"
    },
    {
        name: "Tequila (silver)",
        description: "Pair with lemon.",
        unit: "ml"
    },
    {
        name: "Tequila (gold)",
        description: "Pair with orange.",
        unit: "ml"
    },
    {
        name: "Bourbon",
        description: "Ahh, bourbon, my old friend.",
        unit: "ml"
    },
    {
        name: "Orange juice",
        description: "Goes to the vodka.",
        unit: "ml"
    },
    {
        name: "Tonic",
        description: "Pour it to that Gin!",
        unit: "ml"
    },
    {
        name: "Lemon",
        description: "Good for that silver Tequila.",
        unit: "pc"
    },
    {
        name: "Orange",
        description: "Good for that gold Tequila.",
        unit: "pc"
    }
]

async function main() {
    console.log(`Start seeding ...`)
    for (const i of ingredients) {
        const ing = await prisma.ingredient.create({
            data: i,
        })
        console.log(`Created ingredient: ${ing.name}`)
    }
    console.log(`Seeding finished.`)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })