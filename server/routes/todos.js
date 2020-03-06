const express = require('express');
const router = express.Router();

const Todo = require('../schemas/todo');

/* GET /api/todos */
router.get('/', async (req, res) => {
  try {
    const list = await Todo.find();
    res.json(list);
  } catch (error) {
    res.json(500, { error });
  }
});

/* POST /api/todos */
router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (error) {
    res.json(500, { error });
  }
});

module.exports = router;
