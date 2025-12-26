"use client";
import Loading from "@/components/Loading";
import React, { useState, useEffect } from "react";

async function getData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/todos");
  data = await data.json();
  return data;
}

const LoadingData = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function getUser() {
      let data = await getData();
      setUser(data);
      setLoading(false);
    }
    getUser();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <h1>Loading Data</h1>
      <ul>
        {user.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </>
  );
};

export default LoadingData;
