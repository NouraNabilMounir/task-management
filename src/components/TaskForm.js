import React, { useState } from 'react';
import TodoList from './TodoList';

const TaskForm = () => {
  const [tasks, setTasks] = useState([]);

  const addingTasks = (e) => {
    e.preventDefault();
    const taskName = e.target[0].value.trim();
    if (taskName) {
      const newTask = {
        name: taskName,
        id: Date.now(),
        done: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
    e.target[0].value = '';
  };

  return (
    <form onSubmit={addingTasks} className='todo'>
      <div className='add-task-container'>
        <input placeholder='Type your task' className='form-input' required />
        <button type='submit' className='form-button'>Add Task</button>
      </div>
      <TodoList tasks={tasks} setTasks={setTasks} />
    </form>
  );
};

export default TaskForm;
