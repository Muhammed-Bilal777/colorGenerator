import React from "react";
import { useState } from "react";

function ColorGenerator() {
  const [typeOfColor, SetTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomUtility(256);
    const g = randomUtility(256);
    const b = randomUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => SetTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => SetTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        {" "}
        Generate random color
      </button>
      <p
        style={{
          color: "#fff",
          border: "1px solid #000",
          background: "#333",
          textalign: "center",
        }}
      >
        {typeOfColor}
        {color}
      </p>
    </div>
  );
}

export default ColorGenerator;
