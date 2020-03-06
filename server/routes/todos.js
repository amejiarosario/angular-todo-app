const express = require('express');
const router = express.Router();

const Todo = require('../schemas/todo');

/* POST /api/todos */
router.post('/', async (req, res) => {
  try {
    console.log({body: req.body})
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (error) {
    res.json(500, { error });
  }
});

/* GET /api/todos */
router.get('/', async (req, res) => {
  try {
    const list = await Todo.find();
    res.json(list);
  } catch (error) {
    res.json(500, { error });
  }
});

module.exports = router;
