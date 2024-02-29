import React, { useState, useContext } from 'react';
import './Form.css';
import { TaskContext } from './TaskContext';

const TaskForm = () => {
  const { addTask, editTask, updateTask } = useContext(TaskContext); // We have to Access methods from TaskContext
  const [task, setTask] = useState(editTask ? editTask.name : '');
  const [date, setDate] = useState(editTask ? editTask.dateAdded : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task && date) {
      const newTask = {
        id: editTask ? editTask.id : new Date().getTime(),
        name: task,
        dateAdded: date,
        completed: editTask ? editTask.completed : false,
      };

      editTask ? updateTask(newTask) : addTask(newTask);

      setTask('');
      setDate('');
    }
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <label>
          Date Added:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <div className="form-buttons">
          <button type="submit">{editTask ? 'Update Task' : 'Add Task'}</button>
          {editTask && <button onClick={() => updateTask(null)}>Cancel</button>}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
