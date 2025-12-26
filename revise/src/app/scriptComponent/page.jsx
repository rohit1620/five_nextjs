"use client";
import React from "react";
import Script from "next/script";

const ScriptComponent = () => {
  return (
    <>
      <h1>This is script components</h1>
      <Script
        src="/feature.js"
        onLoad={() => console.log("function execute")}
      />
    </>
  );
};

export default ScriptComponent;
