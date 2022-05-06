const express = require('express');
const router = express.Router();

const queries = require("../prisma/ingredients");
const {DeleteIngredientError} = require("../errors");


/* GET ingredients listing. */
router.get('/', async function (req, res, next) {
    const result = await queries.getIngredients();
    res.json(result)
});


/* POST new ingredient. */
router.post('/', async function (req, res, next) {
    const result = await queries.createIngredient(req.body.name, req.body.description, req.body.unit);
    res.json(result)
});


/* PUT new ingredient. */
router.put('/', async function (req, res, next) {
    const result = await queries.updateIngredient(req.params.id, req.body.name, req.body.description, req.body.unit);
    res.json(result)
});


/* DELETE ingredient. */
router.delete('/', async function (req, res, next) {
    try {
        await queries.deleteIngredient(req.params.id);
        res.json("Ingredient deleted.")
    }
    catch (e) {
        if (e instanceof DeleteIngredientError)  {
            res.status(403)
            res.send(e.message)
        } else {
            res.status(500)
            res.send("Error in delete ingredient.")
        }
    }
});


module.exports = router;
