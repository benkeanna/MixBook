const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');

const business = require("../business/ingredients");
const { DeleteIngredientError } = require("../errors");

/* GET ingredients listing. */
router.get("/", async function (req, res, next) {
  const result = await business.getIngredients();
  res.json(result);
});

/* POST new ingredient. */
router.post("/", 
body('name').isLength({ min: 1 }),
body('name').isLength({ max: 50 }),
body('description').isLength({ max: 1000 }),
body('description').isLength({ min: 5 }),
body('unit').isLength({ max: 10 }),
body('unit').isLength({ min: 1 }),
async function (req, res, next) {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  const result = await queries.createIngredient(
    req.body.name,
    req.body.description,
    req.body.unit
  );
  res.json(result);
});

/* PUT new ingredient. */
router.put("/:id", 
body('name').isLength({ min: 1 }),
body('name').isLength({ max: 50 }),
body('description').isLength({ max: 1000 }),
body('description').isLength({ min: 5 }),
body('unit').isLength({ max: 10 }),
body('unit').isLength({ min: 1 }),
async function (req, res, next) {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  const result = await queries.updateIngredient(
    parseInt(req.params.id),
    req.body
  );
  res.json(result);
});

/* DELETE ingredient. */
router.delete("/:id", async function (req, res, next) {
  try {
    await business.deleteIngredient(parseInt(req.params.id));
    res.status(204);
    res.send("Ingredient id " + req.params.id + " was deleted.")
  } catch (e) {
    if (e instanceof DeleteIngredientError) {
      res.status(403);
      res.send(e.message);
    } else {
      console.log(e);
      res.status(500);
      res.send("Error in delete ingredient.");
    }
  }
});

module.exports = router;
