import React, { useState, useEffect } from "react";
import TaskApp from "./components/TasksApp.jsx";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#9270d6" : "white";
  }, [isDark]);

  return (
    <div>
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
        <TaskApp isDark={isDark} setIsDark={setIsDark} />
      </div>
    </div>
  );
}

export default App;




