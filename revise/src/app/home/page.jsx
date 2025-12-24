import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>This is home page okkay</h1>
      <Link href="/about">About</Link> <br />
      <Link href="/contact">Contact</Link> <br />
      <Link href="/web_developer/frontend">FrontEnd</Link> <br />
      <Link href="/web_developer/backend">BackEnd</Link> <br />
      <Link href="/employees">Employees</Link>
      <br />
      <Link href="/blog">Blog</Link> <br />
      <Link href="/clientlist">clientList</Link> <br />
      <Link href="/serverlist">servertList</Link> <br />
      <Link href="/style">style</Link> <br />
      <Link href="/css-modules">css_modules</Link> <br />
    </div>
  );
};

export default Home;
