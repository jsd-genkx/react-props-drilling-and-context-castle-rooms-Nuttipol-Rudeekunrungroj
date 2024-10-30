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

  function editTask(taskId, updatedText) { 
    setTasks(tasks.map(task => task.id === taskId ? { ...task, text: updatedText } : task ));
  }
  return (
    <>
      <h1>Task Tracker</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} onEdit={editTask} />
    </>
  );
}

export default App;
