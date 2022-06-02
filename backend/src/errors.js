class DeleteIngredientError extends Error {
    constructor(message) {
        super(message);
        this.name = "DeleteIngredientError";
    }
}

module.exports = { DeleteIngredientError }
