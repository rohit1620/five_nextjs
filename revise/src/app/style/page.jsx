"use client";
import React, { useState } from "react";

const Style = () => {
  const [color, setColor] = useState({ backgroundColor: "pink" });
  return (
    <div>
      <h3 style={color}>Rohit kumar malav</h3>
      <button onClick={() => setColor({ backgroundColor: "yellow" })}>
        change color
      </button>
    </div>
  );
};

export default Style;
