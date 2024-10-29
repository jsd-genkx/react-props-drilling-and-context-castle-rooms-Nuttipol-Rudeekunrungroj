import React, { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  const [newtext, setNewtext] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (newtext.trim() === '') return;
    const newTask = { id: Date.now(), text: newtext };
    onAddTask(newTask);
    setNewtext('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newtext}
        onChange={(e) => setNewtext(e.target.value)}
        placeholder="New Task"
      />
      <button type="submit">Add</button>
    </form>
  );
}
