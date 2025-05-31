import React, { useEffect, useState } from 'react';
import { fetchTodos, addTodo, toggleTodo, deleteTodo, updateTodo } from './services/api';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => { refresh(); }, []);
  const refresh = async () => {
    const { data } = await fetchTodos();
    setTodos(data);
  };

  const handleAdd = async (text) => { await addTodo(text); refresh(); };
  const handleToggle = async (t) => { await toggleTodo(t._id, !t.completed); refresh(); };
  const handleDelete = async (t) => { await deleteTodo(t._id); refresh(); };

  const handleEdit = async (t, newText) => {
    await updateTodo(t._id, { text: newText }); // ensure updateTodo supports this
    refresh();
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My To-Do List</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit} // ✅ IMPORTANT
      />
    </div>
  );
}

export default App;
