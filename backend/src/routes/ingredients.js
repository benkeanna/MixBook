var express = require('express');
var router = express.Router();

const queries = require("../prisma/queries");

/* GET ingredients listing. */
router.get('/', async function (req, res, next) {
    const result = await queries.getIngredients();
    res.json(result)
});

/* POST new ingredient. */
/* GET zmenit na POST a dat pryc "create" */
router.get('/create', async function (req, res, next) {
    name = "ingredient name"
    let description = "ingredient description";
    let unit = "g";

    const result = await queries.createIngredient(name, description, unit);
    res.json(result)
});

module.exports = router;
