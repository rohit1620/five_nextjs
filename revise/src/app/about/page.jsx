import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <h1>This is about page okkay</h1>
      <Link href="/home">Home</Link> <br />
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default About;
