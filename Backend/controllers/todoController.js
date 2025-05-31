const Todo = require('../models/Todo');

// Get all todos
exports.getTodos = async (req, res, next) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
};

// Create todo
exports.createTodo = async (req, res, next) => {
  const newTodo = await Todo.create({ text: req.body.text });
  res.status(201).json(newTodo);
};

// Update todo
exports.updateTodo = async (req, res, next) => {
  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    { 
      completed: req.body.completed,
      ...(req.body.text && { text: req.body.text }) // ✅ update text if present
    },
    { new: true }
  );
  res.json(updated);
};


// Delete todo
exports.deleteTodo = async (req, res, next) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.status(204).end();
};