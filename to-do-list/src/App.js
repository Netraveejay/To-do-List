import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="app-wrapper">
      <h1 className="app-title">To-do-List </h1>

      <div className="progress-card shared-box">
        <p className="progress-label">Task Done</p>
        <span className="progress-count">
          {completedCount} / {tasks.length}
        </span>
      </div>

      <div className="input-container shared-box">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Write your next task..."
        />
        <button onClick={addTask}>＋</button>
      </div>

      <div className="task-list shared-box">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onToggle={() => toggleTask(index)}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
