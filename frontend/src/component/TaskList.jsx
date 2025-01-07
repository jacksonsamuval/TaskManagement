import React, { useState, useEffect } from "react";
import { getAllTasks, deleteTask } from "../service/api";
import Task from "./Task";

const TaskList = ({ onEdit }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getAllTasks();
      console.log(response); // Log the response for debugging
      // Ensure that the data is an array before setting it to the state
      const fetchedTasks = Array.isArray(response.data) ? response.data : [];
      setTasks(fetchedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]); // Set to an empty array in case of error
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks(); // Re-fetch tasks after deleting
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Task List</h2>
      {tasks.length > 0 ? (
        <div style={styles.taskList}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <p style={styles.noTasks}>No tasks available. Add some tasks!</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "1.8rem",
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  taskList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  noTasks: {
    textAlign: "center",
    color: "#777",
    fontSize: "1rem",
  },
};

export default TaskList;
