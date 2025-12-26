import React from "react";

const DynamicMetaData = () => {
  return (
    <div>
      {/* <title>dynamic meta data</title> */}
      <h1>Dynamic metadata</h1>
    </div>
  );
};

export default DynamicMetaData;

export function generateMetadata() {
  return {
    title: "my first project",
    description: "this is main project",
  };
}
