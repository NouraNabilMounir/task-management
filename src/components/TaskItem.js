import React from 'react';

const TaskItem = ({ task, index, tasks, setTasks }) => {
  
  const toggleTasksCompleted = (e) => {
    const updatedTask = { ...task, done: e.target.checked };
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deletingTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.done}
        onChange={toggleTasksCompleted}
      />
      <p className={`task-text ${task.done ? 'done' : ''}`}>
        {task.name}
      </p>
      <button onClick={deletingTasks} className="delete-button">x</button>
    </div>
  );
};

export default TaskItem;
