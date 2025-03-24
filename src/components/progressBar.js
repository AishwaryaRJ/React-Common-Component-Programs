import React, { useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleIncrement = () => {
    if (progress < 100) setProgress(progress + 10); // Increment progress by 10
  };

  const handleDecrement = () => {
    if (progress > 0) setProgress(progress - 10); // Decrement progress by 10
  };

  return (
    <div style={{ width: "300px", margin: "auto", textAlign: "center" }}>
      <div
        style={{
          height: "30px",
          width: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: "5px",
          overflow: "hidden",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#76c7c0",
            transition: "width 0.3s ease-in-out",
          }}
        ></div>
      </div>
      <p>{progress}%</p>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
    </div>
  );
}

export default ProgressBar;
