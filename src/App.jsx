import React, { useState } from 'react';
import TaskForm from './component/TaskForm';
import './App.css';
import TaskList from './component/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(taskId) { 
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <>
      <h1>Task Tracker</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
