import React, { useState } from "react";
import TaskApp from "./components/TasksApp.jsx";

function App() {
  const [isDark, setIsDark] = useState(true);

  React.useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#9270d6" : "white";
  }, [isDark]);

  return (
    <div>
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
          />
          <span className="slider" />
        </label>
      </div>

      <div
        className="container"
        style={{
          maxWidth: "400px",
          margin: "3rem auto",
          padding: "2rem",
          border: "2px solid black",
          borderRadius: "20px",
          backgroundColor: isDark ? "#9270d6" : "#eaeaea",
        }}
      >
        <TaskApp isDark={isDark} />
      </div>
    </div>
  );
}

export default App;



