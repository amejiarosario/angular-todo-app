const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const TodoSchema = new Schema({
  title: String,
  isDone: Boolean,
  notes: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = model('Todo', TodoSchema);
