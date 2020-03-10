const express = require('express');
const router = express.Router();

const Todo = require('../schemas/todo');

/* GET /api/todos */
router.get('/', async (req, res) => {
  try {
    const list = await Todo.find(req.query);
    res.json(list);
  } catch (error) {
    res.status(500).json({ error });
  }
});

/* POST /api/todos */
router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error });
  }
});

/* PUT /api/todos */
router.put('/:id', async (req, res) => {
  try {
    const options = { new: true };
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, options);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error });
  }
});

/* DELETE /api/todos */
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
