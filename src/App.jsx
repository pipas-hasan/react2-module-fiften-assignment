
import React, { useState } from 'react';
import "./App.css"

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <p key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Delete</button>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
