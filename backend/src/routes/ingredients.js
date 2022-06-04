const express = require("express");
const router = express.Router();

const business = require("../business/ingredients");
const { DeleteIngredientError } = require("../errors");

/* GET ingredients listing. */
router.get("/", async function (req, res, next) {
  const result = await business.getIngredients();
  res.json(result);
});

/* POST new ingredient. */
router.post("/", async function (req, res, next) {
  const result = await business.createIngredient(
    req.body.name,
    req.body.description,
    req.body.unit
  );
  res.json(result);
});

/* PUT new ingredient. */
router.put("/:id", async function (req, res, next) {
  const result = await business.updateIngredient(
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
