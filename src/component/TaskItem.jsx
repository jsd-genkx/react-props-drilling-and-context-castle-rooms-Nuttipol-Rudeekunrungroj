import React, { useState } from 'react';

function TaskItem({ task, deleteTask, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(task.text);

  function handleSave() {
    onEdit(task.id, updatedText);
    setIsEditing(false);
  }

  function handleCancel() {
    setUpdatedText(task.text);
    setIsEditing(false);
  }

  return (
    <li>
      {isEditing ? (
        <input 
          value={updatedText} 
          onChange={(e) => setUpdatedText(e.target.value)} 
        />
      ) : (
        task.text
      )}
      {isEditing ? (
        <>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;

