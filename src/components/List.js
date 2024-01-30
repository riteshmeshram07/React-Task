import React from 'react';
import '../styles/List.css';

const TaskList = ({ tasks, deleteTask, markAsCompleted, startEditing }) => {
  const sortedTasks = tasks.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

  return (
    <div className="task-list-container">
      {sortedTasks.map((task) => (
        <div
          key={task.id}
          className={`task-item ${task.completed ? 'completed' : ''}`}
        >
          <div className="task-details">
            <div className="task-info">
              <span className="task-label">Task:</span>
              <span className="task-value">{task.name}</span>
            </div>
            <div className="task-info">
              <span className="task-label">Date:</span>
              <span className="task-value date">{task.dateAdded}</span>
            </div>
            {task.completed && <p className="task-completed-msg">Task is completed</p>}
          </div>
          <div className="task-buttons">
            <button onClick={() => startEditing(task.id)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => markAsCompleted(task.id)}>
              {task.completed ? 'Mark Incomplete' : 'Mark Completed'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
