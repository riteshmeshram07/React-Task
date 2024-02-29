import React from 'react';
import './App.css';
import TaskForm from './components/Form';
import TaskList from './components/List';
import { TaskProvider } from './components/TaskContext'; // Import TaskProvider

const App = () => {
  return (
    <div className="app-container">
      <h1>React Task Tracker</h1>
      <TaskProvider> {/* Wrap your components with TaskProvider */}
        <TaskForm />
        <TaskList />
      </TaskProvider>
    </div>
  );
};

export default App;
