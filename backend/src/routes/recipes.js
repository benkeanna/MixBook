const express = require('express');
const router = express.Router();

const queries = require("../prisma/recipes");

/* GET recipes listing. */
// todo
router.get('/', async function (req, res, next) {
  const result = await queries.getRecipes();
  res.json(result)
});

/* CREATE recipe. */
router.post('/', async function (req, res, next) {
  try {
    const result = await queries.createRecipe(req.body);
    res.json(result);
  }
  catch (e) {
    res.status(500);
    res.send("Error in create recipe.");
  }
});


/* DELETE recipe. */
router.delete('/:id', async function (req, res, next) {
  try {
      await queries.deleteRecipe(req.params.id);
      res.status(204)
  }
  catch (e) {
    res.status(500);
    res.send("Error in delete recipe.");
  }
});

module.exports = router;
