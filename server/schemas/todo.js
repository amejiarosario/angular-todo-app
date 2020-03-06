const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const TodoSchema = new Schema({
  name: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = model('Todo', TodoSchema);
