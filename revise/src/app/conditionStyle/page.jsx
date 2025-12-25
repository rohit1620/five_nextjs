"use client";
import React, { useState } from "react";
import style from "../condtionStyle.module.css";

const ConditionStyle = () => {
  const [color, setColor] = useState("blue");
  return (
    <div>
      <h1 className={style.heading}>Condtional Style</h1>
      <h2 className={color == "green" ? style.green : style.red}>
        Rohit kumar malav ji
      </h2>
      <button onClick={() => setColor("green")}>click</button>
      <h5 id={style.pink}> id wala color</h5>
    </div>
  );
};

export default ConditionStyle;
