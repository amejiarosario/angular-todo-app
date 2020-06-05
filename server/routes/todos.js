const express = require('express');
const router = express.Router();

const TODOS = [
  { title: 'Install Angular CLI', isDone: true },
  { title: 'Style app', isDone: true },
  { title: 'Finish service functionality', isDone: false },
  { title: 'Setup API', isDone: false },
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
