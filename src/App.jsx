import React, { useState } from 'react';
import TaskForm from './component/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  return (
    <>
      <h1>Task Tracker</h1>
      <TaskForm onAddTask={addTask} />
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
