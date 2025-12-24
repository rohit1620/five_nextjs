"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Contact = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is contact page</h1>
      <button onClick={() => router.push("/home")}>Home</button> <br />
      <button onClick={() => router.push("/about")}>About</button>
    </div>
  );
};

export default Contact;
