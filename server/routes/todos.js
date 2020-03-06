var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{ title: 'setup server', isDone: false }]);
});

module.exports = router;
