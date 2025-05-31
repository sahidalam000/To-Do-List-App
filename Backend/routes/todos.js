const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController');

router
  .route('/')
  .get(controller.getTodos)
  .post(controller.createTodo);

router
  .route('/:id')
  .put(controller.updateTodo)
  .delete(controller.deleteTodo);

module.exports = router;