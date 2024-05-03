const express = require('express');
const router = express.Router();
const db = require('../models');

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await db.todos.findAll();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a todo
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTodo = await db.todos.create({
      title,
      description
    });
    res.json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a todo
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const todo = await db.todos.findByPk(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    todo.title = title;
    todo.description = description;
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await db.todos.findByPk(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    await todo.destroy();
    res.json({ message: 'Todo deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
