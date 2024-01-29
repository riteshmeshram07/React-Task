import React, { useState, useEffect } from 'react';
import './Form.css';

const TaskForm = ({ addTask, taskToEdit, updateTask, cancelEditing }) => {
  const [task, setTask] = useState(taskToEdit ? taskToEdit.name : '');
  const [date, setDate] = useState(taskToEdit ? taskToEdit.dateAdded : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task && date) {
      const newTask = {
        id: taskToEdit ? taskToEdit.id : new Date().getTime(),
        name: task,
        dateAdded: date,
        completed: taskToEdit ? taskToEdit.completed : false,
      };

      taskToEdit ? updateTask(newTask) : addTask(newTask);

      setTask('');
      setDate('');
    }
  };

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit.name);
      setDate(taskToEdit.dateAdded);
    }
  }, [taskToEdit]);

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
          <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
          {taskToEdit && <button onClick={cancelEditing}>Cancel</button>}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
