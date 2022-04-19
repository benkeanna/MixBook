const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const ingredients = [
    {
            name: "Aperol",
            description: "Great for Spritz!",
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
        description: "Rich and molasses-y.",
        unit: "ml"
    },
    {
        name: "Tequila (silver)",
        description: "Pair with lemon.",
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
        name: "Orange",
        description: "Good for that gold Tequila.",
        unit: "pc"
    }
]

const recipes = [
    {
        name: "Gin and Tonic",
        description: "Classics.",
        preparation_length: "2",
        final_amount: 4,
        RecipeIngredient:  {
            create: [
                {
                    amount: 50,
                    ingredient: {
                        create:
                            {
                                name: "Gin",
                                description: "When you feel sad.",
                                unit: "ml"
                            }
                    }
                },
                {
                    amount: 150,
                    ingredient: {
                        create:
                            {
                                name: "Tonic",
                                description: "Pour it to that Gin!",
                                unit: "ml"
                            }
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        create:
                            {
                                name: "Lemon",
                                description: "Good for that silver Tequila.",
                                unit: "pc",
                            }
                    }
                },
            ]
        }
    },
    {
        name: "Golden tequila with orange and cinnamon.",
        description: "Lick the cinnamon, drink a shot and bite the orange.",
        preparation_length: "1",
        final_amount: 4,
        RecipeIngredient: {
            create: [
                {
                    amount: 40,
                    ingredient: {
                        create:
                            {
                                name: "Tequila (gold)",
                                description: "Pair with orange.",
                                unit: "ml"
                            }
                        }
                },
                {
                    amount: 1,
                    ingredient: {
                        create:
                            {
                                name: "Orange",
                                description: "Good for that gold Tequila.",
                                unit: "pc"
                            },
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        create:
                            {
                                name: "Cinnamon",
                                description: "Not only for gingerbread.",
                                unit: "p"
                            }
                    }
                },
            ]
        }
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
    for (const r of recipes) {
        const rec = await prisma.recipe.create({
            data: r,
        })
        console.log(`Created recipe: ${rec.name}`)
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