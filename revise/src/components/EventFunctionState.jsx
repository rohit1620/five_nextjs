"use client";
import React from "react";

const EventFunctionState = () => {
  const hello = (name) => {
    alert(name);
  };
  return (
    <div>
      <h1>This is EventFuntionState</h1>
      {/* <button onClick={()=>alert("rohit ji")}>alert</button>
      <button onClick={hello}>alert</button> */}
      <button onClick={() => hello("rohit malav ji")}>alert</button>
    </div>
  );
};

export default EventFunctionState;
