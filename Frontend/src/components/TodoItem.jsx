import React, { useState } from 'react';

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() !== '') {
      onEdit(editText); // ✅ Call passed onEdit
      setIsEditing(false);
    }
  };

  return (
    <li className="flex justify-between items-center p-2 border-b">
      {isEditing ? (
        <>
          <input
            className="flex-1 p-1 border rounded"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave} className="ml-2 text-green-500">Save</button>
        </>
      ) : (
        <>
          <span
            className={todo.completed ? 'line-through text-gray-500' : ''}
            onClick={onToggle}
          >
            {todo.text}
          </span>
          <div className="flex gap-2">
            <button onClick={() => setIsEditing(true)} className="text-blue-500">Edit</button>
            <button onClick={onDelete} className="text-red-500">Delete</button>
          </div>
        </>
      )}
    </li>
  );
}
