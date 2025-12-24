"use client";
import React from "react";

const AllRoutes = ({ params }) => {
  const { allroutes } = React.use(params);
  return (
    <div>
      <h1>This is {allroutes}</h1>
    </div>
  );
};

export default AllRoutes;
