import React, { useState, useEffect } from "react";
import { createTask, updateTask } from "../service/api";

const TaskForm = ({ selectedTask, onSave }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "PENDING",
    dueDate: "",
  });

  useEffect(() => {
    if (selectedTask) {
      setTask(selectedTask);
    } else {
      setTask({ title: "", description: "", status: "PENDING", dueDate: "" });
    }
  }, [selectedTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.id) {
      await updateTask(task.id, task);
    } else {
      await createTask(task);
    }
    onSave();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "20px",
          color: "#333",
          textAlign: "center",
        }}
      >
        {task.id ? "Edit Task" : "Add Task"}
      </h2>
      <div style={{ marginBottom: "15px",marginRight:"21px" }}>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Title
        </label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Task Title"
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontFamily: "'Arial', sans-serif",
            fontSize: "1rem",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px",marginRight:"21px" }}>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Description
        </label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Task Description"
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            fontFamily: "'Arial', sans-serif",
            resize: "none",
            height: "100px",
          }}
        ></textarea>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Status
        </label>
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            fontFamily: "'Arial', sans-serif",
          }}
        >
          <option value="PENDING">Pending</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>
      </div>
      <div style={{ marginBottom: "20px" ,marginRight:"21px"}}>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Due Date
        </label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontFamily: "'Arial', sans-serif",
            fontSize: "1rem",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          fontSize: "1rem",
          cursor: "pointer",
          fontFamily: "'Arial', sans-serif",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#4caf50")}
      >
        Save
      </button>
    </form>
  );
};

export default TaskForm;
