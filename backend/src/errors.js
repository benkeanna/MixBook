class DeleteIngredientError extends Error {
    constructor(message) {
        super(message);
        this.name = "DeleteIngredientError";
    }
}

class DeleteRecipeError extends Error {
    constructor(message) {
        super(message);
        this.name = "DeleteRecipeError";
    }
}

module.exports = { DeleteIngredientError, DeleteRecipeError }
