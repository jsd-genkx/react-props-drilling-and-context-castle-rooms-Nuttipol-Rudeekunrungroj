import React, { useState,useEffect } from 'react';
import TaskForm from './component/TaskForm';
import './App.css';
import TaskList from './component/TaskList';
import Mgr from './component/mgr';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [approved,setApproved] = useState("waiting for approve")

  

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error("Error parsing tasks from localStorage:", error);
        setTasks([]); // Fallback to an empty array if parsing fails
      }
    }
    setIsInitialLoad(false); // Mark initial load as complete
  }, []);
 

  useEffect(() => {
    if (!isInitialLoad) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, isInitialLoad]);
  

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
      
      
      <Mgr approved={approved} setApproved={setApproved} />
      
      
    </>
  );
}

export default App;
