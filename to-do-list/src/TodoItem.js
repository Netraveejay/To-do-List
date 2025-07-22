import React from "react";
import "./TodoItem.css";

function TodoItem({ task, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <div className="circle" onClick={onToggle}>
        {task.completed ? "✔" : ""}
      </div>
      <span
        className={`todo-text ${task.completed ? "completed" : ""}`}
        onClick={onToggle}
      >
        {task.text}
      </span>
      <button className="delete-btn" onClick={onDelete}>
        🗑
      </button>
    </div>
  );
}

export default TodoItem;
