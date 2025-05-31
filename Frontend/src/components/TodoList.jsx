import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onDelete, onEdit }) {
  return (
    <ul>
      {todos.map((t) => (
        <TodoItem
          key={t._id}
          todo={t}
          onToggle={() => onToggle(t)}
          onDelete={() => onDelete(t)}
          onEdit={(newText) => onEdit(t, newText)} // ✅ Pass edit correctly
        />
      ))}
    </ul>
  );
}
