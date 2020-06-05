const express = require('express');
const router = express.Router();

const TODOS = [
  { title: 'Create API to get this list', isDone: true },
  { title: 'Connect API with Angular', isDone: true },
  { title: 'Connect server with mongo', isDone: false },
  { title: 'Publish app', isDone: false },
];

/* GET /api/todos */
router.get('/', async (req, res) => {
  try {
    res.json(TODOS);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
