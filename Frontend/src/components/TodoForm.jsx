import React, { useState } from 'react';
export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('');
  const submit = (e) => { e.preventDefault(); onAdd(text); setText(''); };
  return (
    <form onSubmit={submit} className="flex mb-4">
      <input
        className="flex-1 p-2 border rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task"
      />
      <button className="ml-2 p-2 bg-blue-500 text-white rounded">Add</button>
    </form>
  );
}