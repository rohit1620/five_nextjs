"use client";
import React from "react";

const button = ({ userId }) => {
  return (
    <div>
      <button onClick={() => alert(userId)}>alert</button>
    </div>
  );
};

export default button;
