const express = require('express');
const router = express.Router();

const queries = require("../prisma/recipes");

/* GET recipes listing. */
router.get('/', async function (req, res, next) {
  try {
    const result = await queries.getRecipes();
    res.json(result)
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send("Error in get recipes.");
  }
});

/* CREATE recipe. */
router.post('/', async function (req, res, next) {
  try {
    const result = await queries.createRecipe(req.body);
    res.status(204);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send("Error in create recipe.");
  }
});


/* DELETE recipe. */
router.delete('/:id', async function (req, res, next) {
  try {
    await queries.deleteRecipe(parseInt(req.params.id));
    res.status(204);
    res.send("Recipe id " + req.params.id + " was deleted.")
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send("Error in delete recipe.");
  }
});

/* UPDATE recipe. */
router.put("/:id", async function (req, res, next) {
  try {
    const result = await queries.updateRecipe(
      parseInt(req.params.id),
      req.body
    );
    res.status(204);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send("Error in update recipe.");
  }
});

module.exports = router;
