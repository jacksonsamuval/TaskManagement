  import React from "react";

  const Task = ({ task, onEdit, onDelete }) => {
    return (
      <div
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          padding: "16px",
          margin: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
          maxWidth: "545px",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.02)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        <h3
          style={{
            marginBottom: "8px",
            fontSize: "1.25rem",
            color: "#333",
          }}
        >
          {task.title}
        </h3>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#555",
            marginBottom: "12px",
          }}
        >
          {task.description}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px",
            fontSize: "0.85rem",
            color: "#777",
          }}
        >
          <span>Status: {task.status}</span>
          <span>Due: {task.dueDate}</span>
        </div>
        <div style={{ textAlign: "right" }}>
          <button
            onClick={() => onEdit(task)}
            style={{
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "8px 12px",
              marginRight: "8px",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(task.id)}
            style={{
              backgroundColor: "#f44336",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "8px 12px",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  export default Task;
