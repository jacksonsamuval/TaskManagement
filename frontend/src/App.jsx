import React, { useState } from "react";
import Header from "./component/Header";
import TaskList from "./component/TaskList";
import TaskForm from "./component/TaskForm";
import "./App.css";

const App = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEdit = (task) => {
    setSelectedTask(task);
  };

  const handleSave = () => {
    setSelectedTask(null);
  };

  const fetchTasks = async () => {
    // Call the function that fetches tasks after saving
    // This function should be passed to TaskList for re-fetching data
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="form-container">
          <TaskForm selectedTask={selectedTask} onSave={handleSave} fetchTasks={fetchTasks} />
        </div>
        <div className="list-container">
          <TaskList onEdit={handleEdit} fetchTasks={fetchTasks} />
        </div>
      </main>
    </div>
  );
};

export default App;
