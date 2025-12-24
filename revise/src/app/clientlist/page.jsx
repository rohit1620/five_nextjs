"use client";
import React, { useEffect, useState } from "react";

const ClientList = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      setValue(await data.json());
    }
    fetchData();
  }, []);
  return (
    <div>
      {value.map((el) => (
        <div
          style={{ border: "1px solid black", margin: "1rem", padding: "1rem" }}
          key={el.id}
        >
          <h1>{el.title}</h1>
          <h2>{el.body}</h2>
        </div>
      ))}
    </div>
  );
};

export default ClientList;
