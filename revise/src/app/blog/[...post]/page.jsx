"use client";
import React from "react";

const page = ({ params }) => {
  const { post } = React.use(params);
  return (
    <div>
      <h1>post blog</h1>
      <h3>likes:{post[0]}</h3>
      <h3>comments:{post[1]}</h3>
      <h3>shares:{post[2]}</h3>
    </div>
  );
};

export default page;
