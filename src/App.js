import React, { useState } from "react";
import "./App.css";

function App() {
  const rows = 10, cols = 10;
  const [grid, setGrid] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(false))
  );

  const toggleCell = (r, c) => {
    const newGrid = grid.map((row, i) =>
      row.map((cell, j) => (i === r && j === c ? !cell : cell))
    );
    setGrid(newGrid);
  };

  return (
    <div className="App">
      <h2>Matrix Grid Visualization</h2>
      <div className="grid">
        {grid.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              className={`cell ${cell ? "active" : ""}`}
              onClick={() => toggleCell(r, c)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
