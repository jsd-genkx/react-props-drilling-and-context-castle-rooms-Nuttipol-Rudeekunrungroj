import React from 'react';
import TaskItem from './TaskItem.jsx';

function TaskList({ tasks, deleteTask, onEdit }) {
  return (
    <ul>
      {tasks.length === 0 ? (<p>No Task</p>):
      (tasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} onEdit={onEdit} />
      )))}
    </ul>
  );
}

export default TaskList;
