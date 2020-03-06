const express = require('express');
const router = express.Router();

const todo = require('../schemas/todo');

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const list = await todo.find();
    res.json(list);
  } catch (error) {
    res.json(500, { error });
  }
});

module.exports = router;
