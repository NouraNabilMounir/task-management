import React from 'react';
import TaskItem from './TaskItem';

const TodoList = ({ tasks, setTasks }) => {
  return (
    <div className='tasks-container'>
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          index={index}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
};

export default TodoList;
