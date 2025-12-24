import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>This is home page okkay</h1>
      <Link href="/about">About</Link> <br />
      <Link href="/contact">Contact</Link> <br />
      <Link href="/web_developer/frontend">FrontEnd</Link> <br />
      <Link href="/web_developer/backend">BackEnd</Link>
    </div>
  );
};

export default Home;
