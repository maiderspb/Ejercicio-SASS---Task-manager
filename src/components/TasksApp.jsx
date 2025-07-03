import React, { useState } from "react";

function TaskApp({ isDark }) {

  const [tasks, setTasks] = useState([
    "To study React fundamentals",
    "To study React fundamentals",
    "To study React fundamentals",
    "To study React fundamentals",
  ]);
  const [done, setDone] = useState(["To study React fundamentals"]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const completeTask = (index) => {
    const task = tasks[index];
    setDone([...done, task]);
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const deleteTask = (index, type) => {
    if (type === "todo") {
      setTasks(tasks.filter((_, i) => i !== index));
    } else {
      setDone(done.filter((_, i) => i !== index));
    }
  };

  return (
    <div
      className={`task-app ${isDark ? "dark" : "light"}`}
      style={{ padding: "1rem" }}
    >
      {/* Switch Toggle */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1rem",
        }}
      >
        <label
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <div
            style={{
              width: "50px",
              height: "26px",
              borderRadius: "15px",
              background: isDark ? "#1a1a2e" : "#ccc",
              position: "relative",
              transition: "background 0.3s",
            }}
          >
            <div
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#fff",
                position: "absolute",
                top: "2px",
                left: isDark ? "26px" : "2px",
                transition: "left 0.3s",
              }}
            />
          </div>
          <input
            type="checkbox"
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
            style={{ display: "none" }}
          />
        </label>
      </div>

      {/* Add Task Input */}
      <div
        style={{ display: "flex", marginBottom: "1rem", alignItems: "center" }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          style={{
            flex: 1,
            padding: "0.5rem",
            borderRadius: "8px",
            border: "2px solid black",
          }}
        />
        <button
          onClick={addTask}
          style={{
            marginLeft: "0.5rem",
            width: "2.5rem",
            height: "2.5rem",
            fontSize: "1.4rem",
            borderRadius: "8px",
            backgroundColor: isDark ? "#1a1a2e" : "#6d4aff",
            color: "white",
            border: "none",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          +
        </button>
      </div>

      {/* To Do Section */}
      <h4>Tasks to do - {tasks.length}</h4>
      {tasks.map((task, index) => (
        <div
          className="task-app"
          id={isDark ? "dark" : "light"}
          key={index}
          style={{
            border: "1px solid black",
            borderRadius: "8px",
            padding: "0.8rem",
            marginBottom: "0.8rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{task}</span>
          <div style={{ display: "flex", gap: "0.8rem" }}>
            <span
              onClick={() => completeTask(index)}
              style={{ cursor: "pointer" }}
            >
              ✔️
            </span>
            <span
              onClick={() => deleteTask(index, "todo")}
              style={{ cursor: "pointer" }}
            >
              🗑️
            </span>
          </div>
        </div>
      ))}

      {/* Done Section */}
      <h4>Done - {done.length}</h4>
      {done.map((task, index) => (
        <div
          className="task-box"
          key={index}
          style={{
            backgroundColor: isDark ? "#c49eff" : "#f3e8ff",
            border: "1px solid black",
            borderRadius: "8px",
            padding: "0.8rem",
            marginBottom: "0.8rem",
            textDecoration: "line-through",
            opacity: 0.6,
          }}
        >
          <span>{task}</span>
        </div>
      ))}
    </div>
  );
}

export default TaskApp;

