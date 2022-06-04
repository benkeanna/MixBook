const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const queries = require("../prisma/recipes");

/* GET recipes listing. */
router.get('/', async function (req, res, next) {
  try {
    const result = await queries.getRecipes();
    res.json(result)
  } catch (e) {
    res.status(500);
    res.send("Error in get recipes.");
  }
});

/* CREATE recipe. */
router.post('/', 
body('name').isLength({ min: 1 }),
body('name').isLength({ max: 50 }),
body('description').isLength({ max: 1000 }),
body('description').isLength({ min: 5 }),
async function (req, res, next) {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  try {
    const result = await queries.createRecipe(req.body);
    res.json(result);
  } catch (e) {
    res.status(500);
    res.send("Error in create recipe.");
  }
});


/* DELETE recipe. */
router.delete('/:id', 
async function (req, res, next) {
  try {
    await queries.deleteRecipe(parseInt(req.params.id));
    res.status(204);
    res.send("Recipe id " + req.params.id + " was deleted.")
  } catch (e) {
    res.status(500);
    res.send("Error in delete recipe.");
  }
});

/* UPDATE recipe. */
router.put("/:id", 
body('name').isLength({ min: 1 }),
body('name').isLength({ max: 50 }),
body('description').isLength({ max: 1000 }),
body('description').isLength({ min: 5 }),
async function (req, res, next) {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  try {
    const result = await queries.updateRecipe(
      parseInt(req.params.id),
      req.body
    );
    res.json(result);
  } catch (e) {
    res.status(500);
    res.send("Error in update recipe.");
  }
});

module.exports = router;
