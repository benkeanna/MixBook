const express = require('express');
const router = express.Router();

const queries = require("../prisma/recipes");

/* GET recipes listing. */
router.get('/', async function (req, res, next) {
  const result = await queries.getRecipes();
  res.json(result)
});

module.exports = router;
